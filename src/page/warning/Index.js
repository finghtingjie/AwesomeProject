import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.text}>
        <Text>警告</Text>
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

export default HomeScreen;
