import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Me extends React.Component {
  static navigationOptions = {
    title: '我的',
    headerTintColor: '#000',
    headerTitleStyle: {
      fontSize: 20,
    },
  };
  render() {
    return (
      <View style={styles.Me}>
        <Text>我的</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Me: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
