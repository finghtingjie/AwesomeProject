import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Index extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <View style={styles.text}>
        <Text>首页</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Index;
