import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Shop extends React.Component {
  static navigationOptions = {
    title: '门店',
    headerTintColor: '#000',
    headerTitleStyle: {
      fontSize: 20,
    },
  };
  render() {
    return (
      <View style={styles.Shop}>
        <Text>门店</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Shop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
