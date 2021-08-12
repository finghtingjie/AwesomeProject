import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';

export default class Request extends React.Component {
  static navigationOptions = {
    title: '预约',
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
    return (
      <View style={styles.Request}>
        <Text>预约</Text>
        <Button
          title="跳转预约详情页"
          onPress={() => this.props.navigation.navigate('RequestDetail')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Request: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
