/* eslint-disable no-undef */

// 标准模块
import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { BackHandler, YellowBox, AppState, Alert } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// 第三方模块
import { Toast } from 'teaset';
import JPush from 'jpush-react-native';
import { checkNotifications, openSettings } from 'react-native-permissions';
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
    AuthLoading: AuthLoadingScreen,
    Auth: loginStack,
    App: Route,
  }),
  {
    initialRouteName: 'AuthLoading',
  },
);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
    };
  }
  async componentDidMount() {
    await JPush.init();
    //通知连接状态
    this.connectListener = result => {
      console.log('connectListener:' + JSON.stringify(result));
      JPush.getRegistrationID(res => {
        console.log('registerID:' + JSON.stringify(res));
        if (result) {
          console.log(res.registerID);
          AsyncStorage.setItem('registrationId', res.registerID);
        }
      });
    };
    JPush.addConnectEventListener(this.connectListener);
    //通知回调方法
    this.notificationListener = result => {
      console.log('notificationListener:' + JSON.stringify(result));
      AppState.addEventListener('change', this._handleAppStateChange);
    };
    JPush.addNotificationListener(this.notificationListener);
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
    // 检测通知权限是否开启
    checkNotifications().then(({ status, settings }) => {
      if (status !== 'granted') {
        Alert.alert('是否允许开启通知权限？', '', [
          {
            text: '取消',
            onPress: () => {},
          },
          { text: '确定', onPress: () => openSettings().catch(() => console.warn('cannot open settings')) },
          ,
        ]);
      }
      // …
    });
    // requestNotifications(['alert', 'sound']).then(({ status, settings }) => {
    //   console.log(status);
    //   // …
    // });
  }

  // 处理跳转逻辑，app在前台且登录状态才跳转到告警页
  _handleAppStateChange = async nextAppState => {
    const user = await AsyncStorage.getItem('user');
    const menuIdArr = await AsyncStorage.getItem('menuIdArr');
    const newArr = menuIdArr.split(',').map(items => Number(items));
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
    } else if (user && newArr.includes(4)) {
      // 登录态并且开启了告警菜单
      console.log('跳转告警');
      NavigationService.navigate('Warning');
    } else {
      // 登录态未开启告警菜单
      NavigationService.navigate('Home');
    }
  };

  UNSAFE_componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
    // 移除监听事件
    AppState.removeEventListener('change', this._handleAppStateChange);
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
