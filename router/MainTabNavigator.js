import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {Image, StyleSheet} from 'react-native';

// import Home from '../pages/Home';
// import Request from '../pages/Request';
import HomeRootStack from './HomeStackNavigator';
import RequestRootStack from './RequestStackNavigator';
import Shop from '../pages/Shop';
import Me from '../pages/Me';

// 底部导航
const TABS = {
  Home: {
    screen: HomeRootStack,
  },
  Request: {
    screen: RequestRootStack,
    navigationOptions: {
      tabBarLabel: '预约',
      tabBarIcon: ({focused}) => {
        if (!focused) {
          return (
            <Image
              source={require('./../assets/tab/icon_tabbar_misc.png')}
              style={styles.bottomTabIconStyle}
            />
          );
        } else {
          return (
            <Image
              source={require('./../assets/tab/icon_tabbar_misc_selected.png')}
              style={styles.bottomTabIconStyle}
            />
          );
        }
      },
    },
  },
  Shop: {
    screen: Shop,
    navigationOptions: {
      tabBarLabel: '门店',
      tabBarIcon: ({focused}) => {
        if (!focused) {
          return (
            <Image
              source={require('./../assets/tab/icon_tabbar_nearby_normal.png')}
              style={styles.bottomTabIconStyle}
            />
          );
        } else {
          return (
            <Image
              source={require('./../assets/tab/icon_tabbar_nearby_selected.png')}
              style={styles.bottomTabIconStyle}
            />
          );
        }
      },
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({focused}) => {
        if (!focused) {
          return (
            <Image
              source={require('./../assets/tab/icon_tabbar_mine.png')}
              style={styles.bottomTabIconStyle}
            />
          );
        } else {
          return (
            <Image
              source={require('./../assets/tab/icon_tabbar_mine_selected.png')}
              style={styles.bottomTabIconStyle}
            />
          );
        }
      },
    },
  },
};

class MainTabNavigator extends Component {
  _tabNavigator() {
    const {Home, Request} = TABS;
    const tabs = {Home, Request, Shop, Me};
    if (!this.tabNavigator) {
      this.tabNavigator = createAppContainer(
        createBottomTabNavigator(tabs, {
          tabBarComponent: props => (
            <BottomTabBar {...props} activeTintColor="rgb(62, 187, 175)" />
          ),
        }),
      );
    }
    return this.tabNavigator;
  }

  render() {
    const TabNavigator = this._tabNavigator();
    return <TabNavigator />;
  }
}

const styles = StyleSheet.create({
  bottomTabIconStyle: {
    width: 30,
    height: 30,
  },
});

export default MainTabNavigator;
