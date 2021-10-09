/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { getActiveChildNavigationOptions } from 'react-navigation';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Home from '@page/home/Index';

import monitor from '@page/monitor/Index';

import Kpi from '@page/kpi/Index';
import Yuanduan from '@page/kpi/Yuanduan';
import Wangce from '@page/kpi/Wangce';
import Dianlichaoliu from '@page/kpi/Dianlichaoliu';
import Hegelv from '@page/kpi/Hegelv';
import Fuzailv from '@page/kpi/Fuzailv';
import ZhubianFuzailv from '@page/kpi/ZhubianFuzailv';
import Zhubianyouwen from '@page/kpi/Zhubianyouwen';
import Dianyaqushi from '@page/kpi/Dianyaqushi';
import Zhiliu from '@page/kpi/Zhiliu';

import Warning from '@page/warning/Index';

import Profile from '@page/profile/Index';
import ChangePassword from '@page/profile/ChangePassword';
import WarningConfig from '@page/profile/WarningConfig';
import UserConfig from '@page/profile/UserConfigs';
import AddUser from '@page/profile/AddUser';
import GroupConfig from '@page/profile/GroupConfig';
import AddGroup from '@page/profile/AddGroup';

import { getMenuData } from '@api/login';

import IconWithBadge from '../components/IconWithBadge';
import NavigationService from '../../NavigationService';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

// 底部一级导航器
const HomeStack = createStackNavigator({ Home });

const MonitorStack = createStackNavigator({ monitor });

const KpiStack = createStackNavigator({
  Kpi,
  Yuanduan,
  Wangce,
  Dianlichaoliu,
  Hegelv,
  Fuzailv,
  ZhubianFuzailv,
  Zhubianyouwen,
  Dianyaqushi,
  Zhiliu,
});

const WarningStack = createStackNavigator({ Warning });

const ProfileStack = createStackNavigator({
  Profile,
  ChangePassword,
  WarningConfig,
  UserConfig,
  AddUser,
  GroupConfig,
  AddGroup,
});

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
    icon: require('@assets/home/tabbar/homeicon2.png'),
    iconActive: require('@assets/home/tabbar/homeicon.png'),
  },
  监控: {
    icon: require('@assets/home/tabbar/jiankongicon2.png'),
    iconActive: require('@assets/home/tabbar/jiankongicon.png'),
  },
  kpi: {
    icon: require('@assets/home/tabbar/kpiicon2.png'),
    iconActive: require('@assets/home/tabbar/kpiicon.png'),
  },
  告警: {
    icon: require('@assets/home/tabbar/gaojingicon2.png'),
    iconActive: require('@assets/home/tabbar/gaojingicon.png'),
  },
  我的: {
    icon: require('@assets/home/tabbar/wodeicon2.png'),
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
    getMenuData({}).then(res => {
      if (res && res.status === 200) {
        const groupArr = res.body.find(item => item.id === 3).menuData.filter(item => item.parentId === 3);
        // console.log(groupArr);
        AsyncStorage.setItem('groupArr', JSON.stringify(groupArr));
        const arr = [];
        arr.push(...res.body.map(item => item.name));
        this.setState({ menuData: arr });
      }
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
      case '告警':
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
            <TouchableOpacity key={item} style={styles.tabButton} onPress={() => this.handleClick(item, routeIndex)}>
              {this.renderImage(item, activeColor)}
              <Text style={{ fontSize: hp(30 / BASE_HEIGHT), fontWeight: '400', color: activeColor }}>
                {item === 'kpi' ? 'KPI' : item}
              </Text>
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
        tabBarLabel: 'KPI',
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
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    elevation: 30,
    backgroundColor: '#fff',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(160 / BASE_HEIGHT),
  },
  userPic: {
    width: wp(60 / BASE_WIDTH),
    height: wp(60 / BASE_WIDTH),
  },
});

export default MainNavigator;
