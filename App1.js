/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
// // import HomeScreen from './navigator/HomeScreen2';
// import MainTabNavigator from './router/MainTabNavigator';
import DrawerTabNavigator from './router/DrawerTabNavigator';

const App1: () => React$Node = () => {
  return (
    <>
      {/* <HomeScreen /> */}
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.SafeAreaView}>
        {/* <MainTopTabNavigator /> */}
        {/* <MainTabNavigator /> */}
        <DrawerTabNavigator />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  SafeAreaView: {
    flex: 1,
  },
});

export default App1;
