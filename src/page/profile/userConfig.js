import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, StatusBar, Image } from 'react-native';

import { Toast, Button, Overlay } from 'teaset';

import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

const orderPic = require('../../assets/profile/order.png');
const backIcon = require('../../assets/backicon.png');

import styles from './UserConfigStyle';
import overlayStyles from '../style/overlayStyle';

const fakeData = [
  { userId: 1, userName: '张珊山/zhangshanshan', password: 'ceshimima' },
  { userId: 2, userName: '张珊山/zhangshanshan', password: 'ceshimima2' },
];

class WarningConfig extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: null,
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  handleLookPwd = item => {
    const overlayView = (
      <Overlay.View style={overlayStyles.overlay} modal overlayOpacity={null} ref={v => (this.overlayView = v)}>
        <View style={overlayStyles.overlayContent}>
          <Text style={overlayStyles.overlayTitle}>{item.password}</Text>
          <View style={overlayStyles.overlayFooter}>
            <TouchableOpacity style={overlayStyles.confirmCenter} onPress={() => this.overlayView.close()}>
              <Text style={overlayStyles.centerText}>关闭</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay.View>
    );
    Overlay.show(overlayView);
  };

  handleAddUser = () => {
    const { navigation } = this.props;
    navigation.navigate('AddUser', { type: 'add' });
  };

  handleEditUser = item => {
    const { navigation } = this.props;
    navigation.navigate('AddUser', { type: 'edit', item });
  };

  handleDeleteUser = item => {};

  render() {
    const { keyWord } = this.state;
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
            <Image style={styles.backIcon} source={backIcon} />
          </TouchableOpacity>
          <Text style={styles.content}>用户管理</Text>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            value={keyWord}
            placeholder="搜索用户"
            style={styles.inputBase}
            placeholderTextColor="#999"
            onBlur={() => Keyboard.dismiss()}
            onChangeText={val => this.setState({ keyWord: val })}
          />
        </View>
        {fakeData.map(item => {
          return (
            <View key={item.userId} style={styles.userBtn}>
              <Image style={styles.orderPic} source={orderPic} />
              <Text style={styles.userBtnText}>{item.userName}</Text>
              <Button style={styles.pwdBtn} onPress={() => this.handleLookPwd(item)}>
                <Text style={styles.pwdBtnText}>查看密码</Text>
              </Button>
              <Button style={styles.editBtn} onPress={() => this.handleEditUser(item)}>
                <Text style={styles.pwdBtnText}>编辑</Text>
              </Button>
              <Button style={styles.deleteBtn} onPress={() => this.handleDeleteUser(item.userId)}>
                <Text style={styles.pwdBtnText}>删除</Text>
              </Button>
            </View>
          );
        })}
        <Button style={styles.submitBtn} onPress={this.handleAddUser}>
          <Text style={styles.submitBtnText}>新增用户</Text>
        </Button>
      </View>
    );
  }
}

export default WarningConfig;
