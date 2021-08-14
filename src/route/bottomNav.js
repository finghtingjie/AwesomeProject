/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { getActiveChildNavigationOptions } from 'react-navigation';

// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import IconWithBadge from '../components/IconWithBadge';
import NavigationService from '../../NavigationService';

import Home from '@page/home/Index';

import monitor from '@page/monitor/Index';

import Kpi from '@page/kpi/Index';

import Warning from '@page/warning/Index';

import Profile from '@page/profile/Index';
import ChangePassword from '@page/profile/ChangePassword';

import { queryMenu } from '@api/login';

import { p2dWidth, p2dHeight } from '../utils/device';

// 底部一级导航器
const HomeStack = createStackNavigator({ Home });

const MonitorStack = createStackNavigator({ monitor });

const KpiStack = createStackNavigator({ Kpi });

const WarningStack = createStackNavigator({ Warning });

const ProfileStack = createStackNavigator({ Profile, ChangePassword });

// 动态隐藏底部导航
HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index === 0,
  };
};

MonitorStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index === 0,
  };
};

KpiStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index === 0,
  };
};

WarningStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index === 0,
  };
};

ProfileStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index === 0,
  };
};

// 渲染icon
const iconMap = {
  首页: {
    // icon: 'qiche',
    icon: require('@assets/home/tabbar/homeicon.png'),
    iconActive: require('@assets/home/tabbar/homeicon.png'),
  },
  监控: {
    // icon: 'yuyue',
    icon: require('@assets/home/tabbar/monitoricon.png'),
    iconActive: require('@assets/home/tabbar/monitoricon.png'),
  },
  kpi: {
    icon: require('@assets/home/tabbar/kpiicon.png'),
    iconActive: require('@assets/home/tabbar/kpiicon.png'),
  },
  警告: {
    icon: require('@assets/home/tabbar/gaojingicon.png'),
    iconActive: require('@assets/home/tabbar/gaojingicon.png'),
  },
  我的: {
    icon: require('@assets/home/tabbar/wodeicon.png'),
    iconActive: require('@assets/home/tabbar/wodeicon.png'),
  },
};

// 自定义底部导航以实现权限管理功能
class customTabBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuData: [], //底部菜单数据
    };
  }

  componentDidMount() {
    // queryMenu({}).then(res => {
    //   if (res && res.status === 200) {
    //     let arr = [];
    //     arr.push(...res.body.map(item => item.name));
    //     this.setState({ menuData: arr });
    //   }
    // });
    this.setState({
      menuData: ['首页', '监控', 'kpi', '警告', '我的'],
    });
  }

  // 根据接口返回渲染icon
  renderIcon = item => {
    const arr = this.state.menuData;
    const actions = new Map([
      [arr[0], 'qiche'],
      [arr[1], 'yuyue'],
      [arr[2], 'mendian'],
      [arr[3], 'gongdan'],
      [arr[4], 'wode'],
      ['default', 'dev'],
    ]);
    const action = actions.get(item) || actions.get('default');
    return action;
  };

  renderImage = (item, activeColor) => {
    if (activeColor === '#4367FD') {
      return <Image style={styles.userPic} source={iconMap[item].iconActive} />;
    } else {
      return <Image style={styles.userPic} source={iconMap[item].icon} />;
    }
  };

  // 自定义一级导航器跳转
  handleClick = async (item, routeIndex) => {
    // console.log(routeIndex, 'routeIndex');
    switch (item) {
      case '首页':
        NavigationService.navigate('Home');
        break;
      case '监控':
        NavigationService.navigate('Monitor');
        break;
      case 'kpi':
        NavigationService.navigate('Kpi');
        break;
      case '警告':
        NavigationService.navigate('Warning');
        break;
      case '我的':
        NavigationService.navigate('Profile');
        break;
      default:
        NavigationService.navigate('Home');
        break;
    }
  };

  render() {
    const navigation = this.props.navigation;
    const { index } = navigation.state;
    // const {routes } = navigation.state;
    // const menu = ['首页', '预约', '门店', '工单', '我的'];
    return (
      <View style={styles.container}>
        {this.state.menuData.map((item, routeIndex) => {
          let activeIndex = routeIndex;
          if (routeIndex === 1 && item === 'kpi') {
            activeIndex = 2;
          } else if (routeIndex === 1 && item === '警告') {
            activeIndex = 3;
          } else if (routeIndex === 1 && item === '我的') {
            activeIndex = 4;
          } else if (routeIndex === 2 && item === '我的') {
            activeIndex = 4;
          } else if (routeIndex === 2 && item === '警告') {
            activeIndex = 3;
          } else if (routeIndex === 3 && item === '我的') {
            activeIndex = 4;
          }
          const activeColor = index === activeIndex ? '#4367FD' : '#999DB2'; //菜单激活颜色
          return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.tabButton}
              key={routeIndex}
              onPress={() => this.handleClick(item, routeIndex)}>
              {this.renderImage(item, activeColor)}
              {/* <Image style={styles.userPic} source={iconMap[item].icon} /> */}
              {/* <IconWithBadge icon={iconMap[item].icon} name={item} size={22} color={activeColor} /> */}
              <Text style={{ fontSize: p2dHeight(30), fontWeight: '400', color: activeColor }}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: '首页',
      },
    },
    Monitor: {
      screen: MonitorStack,
      navigationOptions: {
        tabBarLabel: '监控',
      },
    },
    Kpi: {
      screen: KpiStack,
      navigationOptions: {
        tabBarLabel: '门店',
      },
    },
    Warning: {
      screen: WarningStack,
      navigationOptions: {
        tabBarLabel: '告警',
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: '我的',
      },
    },
  },
  {
    // resetOnBlur: true, //Reset the state of any nested navigators when switching away from a screen. Defaults to false.
    backBehavior: 'initialRoute',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        // You can return any component that you like here!
        return <IconWithBadge icon={iconMap[routeName].icon} name={routeName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: customTabBar,
    navigationOptions: ({ navigation, screenProps }) => {
      // you can put fallback values before here, eg: a default tabBarLabel
      return { ...getActiveChildNavigationOptions(navigation, screenProps) };
      // put other navigationOptions that you don't want the active child to
      // be able to override here!
    },
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: p2dHeight(1),
    borderColor: '#EEE',
    shadowOffset: { width: p2dWidth(5), height: p2dHeight(10) },
    backgroundColor: '#fff',
    shadowOpacity: 0.75,
    elevation: 1,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: p2dHeight(160),
  },
  userPic: {
    width: p2dWidth(60),
    height: p2dWidth(60),
  },
});

export default MainNavigator;
