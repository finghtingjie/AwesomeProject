import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, StatusBar, Image } from 'react-native';

import { Toast, Button } from 'teaset';

const backPic = require('../../assets/profile/back.png');
const rank = require('../../assets/profile/xinghao.png');
const backIcon = require('../../assets/backicon.png');

// import IconFont from '@iconfont/index.js';
import { revisePassword } from '@api/profile';

import styles from './ChangePasswordStyle';

class ChangePassword extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      curPassword: '',
      newPassword: '',
      verifyPassword: '',
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  handleSubmit = () => {
    const { navigation } = this.props;
    const { newPassword, verifyPassword, curPassword } = this.state;
    if (!curPassword) {
      Toast.info('请输入旧密码');
    } else if (newPassword !== verifyPassword) {
      Toast.info('两次输入的密码不一样,请重新输入');
      this.setState({ newPassword: '', verifyPassword: '' });
    } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(newPassword)) {
      Toast.info('请输入正确格式的密码');
      this.setState({ newPassword: '', verifyPassword: '' });
    } else {
      revisePassword({ password: curPassword, newPassword }).then(res => {
        if (res && res.status === 200) {
          Toast.success('更新成功！');
          navigation.navigate('Profile');
        }
      });
    }
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
          <View style={styles.navigationContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.goBack()}>
              <Image style={styles.backIcon} source={backIcon} />
            </TouchableOpacity>
            <Text style={styles.content}>修改密码</Text>
          </View>
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.curPassword}>旧密码</Text>
            <TextInput
              style={styles.inputBase}
              placeholder="请输入旧密码"
              placeholderTextColor="#999"
              value={curPassword}
              onBlur={() => Keyboard.dismiss()}
              onChangeText={val => this.setState({ curPassword: val })}
            />
            {/* <Image style={styles.backRight} source={backPic} /> */}
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.curPassword}>新密码</Text>
            <TextInput
              password
              secureTextEntry
              style={styles.inputBase}
              placeholder="请输入新密码"
              placeholderTextColor="#999"
              value={newPassword}
              onBlur={() => Keyboard.dismiss()}
              onChangeText={val => this.setState({ newPassword: val })}
            />
            {/* <Image style={styles.backRight} source={backPic} /> */}
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.curPassword}>确认密码</Text>
            <TextInput
              style={styles.inputBase}
              password
              secureTextEntry
              placeholder="请再次输入新密码"
              placeholderTextColor="#999"
              value={verifyPassword}
              onBlur={() => Keyboard.dismiss()}
              onChangeText={val => this.setState({ verifyPassword: val })}
            />
            {/* <Image style={styles.backRight} source={backPic} /> */}
          </View>
          <View style={styles.tipBox}>
            <Image style={styles.backRight} source={rank} resizeMode="contain" />
            <View>
              <Text style={styles.tipContent}>密码必须至少6个字符，同时包含字母和数字。</Text>
              <Text style={[styles.tipContent, styles.commonTop]}>忘记密码，请联系管理员</Text>
            </View>
          </View>
          <Button style={styles.submitBtn} onPress={this.handleSubmit}>
            <Text style={styles.submitBtnText}>保&nbsp;&nbsp;&nbsp;存</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default ChangePassword;
