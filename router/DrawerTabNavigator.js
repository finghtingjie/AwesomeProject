import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {Image, StyleSheet, ScrollView, SafeAreaView, View} from 'react-native';
// import pTd from '../utils/device';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Home from '../pages/Home';
import Request from '../pages/Request';
import HomeRootStack from './HomeStackNavigator';
// import RequestRootStack from './RequestStackNavigator';
import Shop from '../pages/Shop';
import Me from '../pages/Me';

// 底部导航
const TABS = {
  Home: {
    screen: HomeRootStack,
  },
  Request: {
    screen: Request,
  },
  Shop: {
    screen: Shop,
  },
  Me: {
    screen: Me,
  },
};

class MainTabNavigator extends Component {
  componentDidMount() {}
  _DrawerNavigator() {
    const {Home, Request, Shop, Me} = TABS;
    const tabs = {Home, Request, Shop, Me};
    if (!this.DrawerNavigator) {
      this.DrawerNavigator = createAppContainer(
        createDrawerNavigator(tabs, {
          // 默认方式
          // tabBarComponent: props => (
          //   <DrawerItems {...props} activeTintColor="rgb(62, 187, 175)" />
          // ),

          // 自定义方式
          drawerWidth: wp('50%'),
          contentComponent: props => (
            <ScrollView>
              <SafeAreaView
                style={styles.container}
                forceInset={{top: 'always', horizontal: 'never'}}>
                <View style={styles.user}>
                  <Image
                    style={styles.userpic}
                    source={require('../assets/userpic.jpg')}
                  />
                </View>
                <DrawerItems {...props} activeTintColor="rgb(62, 187, 175)" />
              </SafeAreaView>
            </ScrollView>
          ),
        }),
      );
    }
    return this.DrawerNavigator;
  }

  render() {
    const DrawerNavigator = this._DrawerNavigator();
    return <DrawerNavigator />;
  }
}

const styles = StyleSheet.create({
  user: {
    width: wp('50%'),
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  userpic: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp('10%'),
  },
});

export default MainTabNavigator;
