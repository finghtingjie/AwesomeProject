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
            navigation.navigate('Details', {name: 'jaxson', from: 'hennan'});
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
        <Text>name: {JSON.stringify(navigation.getParam('name'))}</Text>
        <Text>from: {JSON.stringify(navigation.getParam('from'))}</Text>
        <Button
          title="展示参数"
          onPress={
            () => alert(`接收到的参数name：${navigation.getParam('name')}`)
            // () => alert(JSON.stringify(navigation.state.params))
          }
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
