/* eslint-disable no-undef */

// 标准模块
import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { BackHandler, YellowBox } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// 第三方模块
import { Toast } from 'teaset';

import AsyncStorage from '@react-native-async-storage/async-storage';

// 自己代码导入模块
import useStore from './src/store/index';
import Route from './src/route/bottomNav';
import Login from '@page/login/Index';
import AuthLoadingScreen from '@page/auth/Index';

export const store = createStore(useStore, applyMiddleware(thunk));

import NavigationService from './NavigationService';

//debugger模式下查看接口
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
// 忽略控制台黄色警告
console.disableYellowBox = true;

YellowBox.ignoreWarnings = [
  'Warning: componentWillMount',
  'Warning: componentWillReceiveProps',
  'Warning: componentWillUpdate',
];

const loginStack = createStackNavigator({ Login });

const AppContainer = createAppContainer(
  createSwitchNavigator({
    // App: Route,
    // AuthLoading: AuthLoadingScreen,
    // Auth: loginStack,
    App: Route,
  }),
  {
    initialRouteName: 'AuthLoading',
  },
);
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  UNSAFE_componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  // 安卓后退键统一处理
  onBackAndroid = async () => {
    const routeData = ['Profile', 'Kpi', 'Monitor', 'Warning', 'Home'];
    const routeName = NavigationService.getCurrentRouteName();
    //处理一级菜单和login页面
    const routeDataMap = ['Login', 'Home', 'AuthLoading'];
    if (routeDataMap.includes(routeName)) {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //最近2秒内按过back键，可以退出应用。
        BackHandler.exitApp(); //直接退出APP
      } else {
        this.lastBackPressed = Date.now();
        //提示
        Toast.info('再按一次退出应用');
        return true;
      }
    } else if (routeData.includes(routeName)) {
      //回到首页
      NavigationService.navigate('Home');
    } else {
      // 其他页面(一级之外的)为默认后退行为
      NavigationService.goBack();
    }
  };

  render() {
    return (
      <Provider store={store}>
        <AppContainer theme="light" ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)} />
      </Provider>
    );
  }
}

export default App;
