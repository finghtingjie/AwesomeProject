import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.text}>
        <Text>首页</Text>
        <Button
          title="去详情页"
          onPress={() => {
            navigation.navigate('Details');
          }}
        />
      </View>
    );
  }
}
class DetailsScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.text}>
        <Text>详情页</Text>
        <Button
          title="回首页"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}
const AppStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});
const AppContainer = createAppContainer(AppStack);
const styles = StyleSheet.create({
  text: {
    flex: 1,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AppContainer;
