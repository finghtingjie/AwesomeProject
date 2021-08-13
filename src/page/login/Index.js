import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Keyboard, StatusBar } from 'react-native';

import { Overlay, Toast, ModalIndicator } from 'teaset';

import { queryUpdate, getChooseBizEntity, getChoseBizAccount, login } from '@api/login';

import styles from './LoginStyle';

class Index extends React.PureComponent {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userPhone: '',
      password: '',
      id: null,
      userNameend: false,
      userPhoneend: false,
      passwordend: false,
      tabActiveIndex: 1, //tab切换
    };
  }

  componentDidMount() {}

  _signInAsync = () => {};

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={false}
          showHideTransition="fade"
          networkActivityIndicatorVisible
        />
        <View style={styles.loginContent}>
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.titleRight} onPress={() => this.handleTabChange(1)}>
              {this.state.tabActiveIndex === 2 ? (
                <Text style={[styles.welComeTitle, styles.normalText]}>账号登录</Text>
              ) : (
                <>
                  <Text style={[styles.welComeTitle, styles.activedText]}>账号登录</Text>
                  <View style={[styles.leftTab, styles.commonColor]} />
                </>
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handleTabChange(2)}>
              {this.state.tabActiveIndex === 1 ? (
                <Text style={[styles.welComeTitle, styles.normalText]}>手机号登录</Text>
              ) : (
                <>
                  <Text style={[styles.welComeTitle, styles.activedText]}>手机号登录</Text>
                  <View style={[styles.rightTab, styles.commonColor]} />
                </>
              )}
            </TouchableOpacity>
          </View>
          {this.state.tabActiveIndex === 1 && (
            <>
              <View style={this.state.userName && !this.state.userNameend ? styles.inputBoxActive : styles.inputBox}>
                <TextInput
                  onBlur={() => Keyboard.dismiss()}
                  onEndEditing={() => this.setState({ userNameend: true })}
                  style={styles.inputBase}
                  selectionColor="rgba(225, 6, 0, 0.6)"
                  placeholderTextColor="#999"
                  placeholder="请输入账号"
                  onChangeText={userName => this.setState({ userName, userNameend: false })}
                  value={this.state.userName}
                />
              </View>
              <View style={this.state.password && !this.state.passwordend ? styles.inputBoxActive : styles.inputBox}>
                <TextInput
                  onBlur={() => Keyboard.dismiss()}
                  onEndEditing={() => this.setState({ passwordend: true })}
                  style={this.state.password ? styles.password : styles.inputBase}
                  selectionColor="rgba(225, 6, 0, 0.6)"
                  placeholderTextColor="#999"
                  placeholder="请输入密码"
                  password
                  secureTextEntry
                  onChangeText={password => this.setState({ password, passwordend: false })}
                  value={this.state.password}
                />
              </View>
            </>
          )}

          {this.state.tabActiveIndex === 2 && (
            <>
              <View style={this.state.userName && !this.state.userPhoneend ? styles.inputBoxActive : styles.inputBox}>
                <TextInput
                  onBlur={() => Keyboard.dismiss()}
                  onEndEditing={() => this.setState({ userPhoneend: true })}
                  style={styles.inputBase}
                  maxLength={11}
                  placeholder="请输入手机号"
                  keyboardType="numeric"
                  placeholderTextColor="#999"
                  selectionColor="rgba(225, 6, 0, 0.6)"
                  onChangeText={userPhone => this.setState({ userPhone, userPhoneend: false })}
                  value={this.state.userPhone}
                />
              </View>
              <View style={this.state.password && !this.state.passwordend ? styles.inputBoxActive : styles.inputBox}>
                <TextInput
                  onBlur={() => Keyboard.dismiss()}
                  onEndEditing={() => this.setState({ passwordend: true })}
                  style={this.state.password ? styles.password : styles.inputBase}
                  placeholder="请输入密码"
                  placeholderTextColor="#999"
                  selectionColor="rgba(225, 6, 0, 0.6)"
                  password
                  secureTextEntry
                  onChangeText={password => this.setState({ password, passwordend: false })}
                  value={this.state.password}
                />
              </View>
            </>
          )}

          <View style={styles.loginTop}>
            <TouchableOpacity onPress={this._signInAsync}>
              <View style={this.state.userName || this.state.password ? styles.submitBtnActive : styles.submitBtn}>
                <Text style={this.state.userName || this.state.password ? styles.loginTextActive : styles.loginText}>
                  登录
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.otherBtnBox}>
            <TouchableOpacity style={styles.otherBtn} onPress={this._firstLogin}>
              <Text style={styles.commonTextColor}>初次登录</Text>
            </TouchableOpacity>
            <Text style={styles.commonTextColor}> 丨 </Text>
            <TouchableOpacity style={styles.otherBtn} onPress={this._forgetPassword}>
              <Text style={styles.commonTextColor}>忘记密码</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
