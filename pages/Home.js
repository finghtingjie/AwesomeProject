import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import login from '../api/login';
export default class Home extends React.Component {
  static navigationOptions = {
    title: '首页',
    headerTintColor: '#000',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerLeft: () => <Button title="设置" onPress={() => alert('设置')} />,
    headerRight: () => <Button title="" onPress={() => {}} />,
  };
  componentDidMount() {
    this.getList();
    // fetchRequest('basics/cartypeController/cartypePage', 'POST', params)
    //   .then(res => {
    //     //请求成功
    //     if (res.header.statusCode === 'success') {
    //       //这里设定服务器返回的header中statusCode为success时数据返回成功
    //     } else {
    //       //服务器返回异常，设定服务器返回的异常信息保存在 header.msgArray[0].desc
    //       console.log(res.header.msgArray[0].desc);
    //     }
    //   })
    //   .catch(err => {
    //     //请求失败
    //   });
  }

  async getList() {
    const urlPar = {
      key: '7606e878163d494b376802115f30dd4e',
      v: '1.0',
      month: 10,
      day: 1,
    };

    const todayOnHistoryInfo = await login.History(urlPar);
    alert(JSON.stringify(todayOnHistoryInfo));

    // return fetch(
    //   'https://internalgw-test.mottuum.com/gw/basics/cartypeController/cartypePage',
    // )
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     // return responseJson;
    //     alert(JSON.stringify(responseJson.message));
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }
  render() {
    return (
      <View style={styles.Home}>
        <Text>首页</Text>
        <Button
          title="跳转详情页"
          onPress={() => this.props.navigation.navigate('HomeDetail')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
