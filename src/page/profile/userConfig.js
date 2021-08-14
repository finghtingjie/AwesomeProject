import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, StatusBar, Image } from 'react-native';

import { Toast, Button } from 'teaset';

import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

const orderPic = require('../../assets/profile/order.png');

import styles from './userConfigStyle';

const fakeData = [{ userId: 1, userName: '张珊山/zhangshanshan' }, { userId: 2, userName: '张珊山/zhangshanshan' }];

class WarningConfig extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tabActiveIndex: 1, //tab激活下标
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    const { curPassword, newPassword, verifyPassword } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          animated
          translucent
          backgroundColor="transparent"
          showHideTransition="fade"
          networkActivityIndicatorVisible
        />
        <View style={styles.navigationBar}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.goBack()}>
            <IconFont name="xiayiye" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.content}>用户管理</Text>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="搜索用户"
            style={styles.inputBase}
            placeholderTextColor="#999"
            value={this.state.userName}
            onBlur={() => Keyboard.dismiss()}
            onChangeText={userName => this.setState({ userName })}
          />
        </View>
        {fakeData.map(item => {
          return (
            <View key={item.userId} style={styles.userBtn}>
              <Image style={styles.orderPic} source={orderPic} />
              <Text style={styles.userBtnText}>{item.userName}</Text>
              <Button style={styles.pwdBtn} onPress={this.handleLookPwd}>
                <Text style={styles.pwdBtnText}>查看密码</Text>
              </Button>
              <Button style={styles.editBtn} onPress={this.handleEditUser}>
                <Text style={styles.pwdBtnText}>编辑</Text>
              </Button>
              <Button style={styles.deleteBtn} onPress={this.handleDeleteUser}>
                <Text style={styles.pwdBtnText}>删除</Text>
              </Button>
            </View>
          );
        })}
        <Button style={styles.submitBtn} onPress={this.handleSubmit}>
          <Text style={styles.submitBtnText}>新增用户</Text>
        </Button>
      </View>
    );
  }
}

export default WarningConfig;
