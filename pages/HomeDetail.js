import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

export default class HomeDetail extends React.Component {
  static navigationOptions = {
    title: '详情页',
    headerTintColor: '#000',
    headerTitleStyle: {
      fontSize: 20,
    },
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.goBack();
        }}>
        <Text>返回</Text>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity>
        <Button title="测试" onPress={() => {}} />
      </TouchableOpacity>
    ),
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.HomeDetail}>
        <Text>详情页</Text>
        <Button title="返回首页" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  HomeDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
