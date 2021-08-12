import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from 'react-navigation-tabs';

import {Image, StyleSheet} from 'react-native';

import Home from '../pages/Home';
import Request from '../pages/Request';
import Shop from '../pages/Shop';
import Me from '../pages/Me';

// 底部导航
const TABS = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({focused}) => {
        if (!focused) {
          return (
            <Image
              source={require('./../assets/tab/icon_tabbar_homepage.png')}
              style={styles.bottomTabIconStyle}
            />
          );
        } else {
          return (
            <Image
              source={require('./../assets/tab/icon_tabbar_homepage_selected.png')}
              style={styles.bottomTabIconStyle}
            />
          );
        }
      },
    },
  },
  Request: {
    screen: Request,
    navigationOptions: {
      tabBarLabel: '发现',
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
    // const {Home, Request, Shop, Me} = TABS;
    const tabs = {Home, Request, Shop, Me};
    if (!this.tabNavigator) {
      this.tabNavigator = createAppContainer(
        createMaterialTopTabNavigator(tabs, {
          tabBarComponent: props => (
            <MaterialTopTabBar
              {...props}
              style={{backgroundColor: 'rgb(231, 133, 54)'}}
              // showIcon={true}
              activeTintColor="rgb(62, 187, 175)"
            />
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
