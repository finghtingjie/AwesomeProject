import React from 'react';
import { View, TextInput, Text, Keyboard, StatusBar, Image } from 'react-native';

import { NavigationEvents } from 'react-navigation';
import Orientation from 'react-native-orientation-locker';
import { Toast, ModalIndicator, Button } from 'teaset';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { login } from '@api/login';

import styles from './LoginStyle';

const loginBg = require('../../assets/login/bg.png');
const logo = require('../../assets/login/logo.png');
const userIcon = require('../../assets/login/usericon.png');
const passwordIcon = require('../../assets/login/passwordicon.png');

class Index extends React.PureComponent {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  componentDidMount() {}

  // 登录
  handleLogin = async () => {
    const registrationId = await AsyncStorage.getItem('registrationId');
    Keyboard.dismiss();
    const { navigation } = this.props;
    const { userName, password } = this.state;
    if (!userName) {
      Toast.info('请输入用户名');
    } else if (!password) {
      Toast.info('请输入密码');
    } else {
      ModalIndicator.show();
      const params = { userName, password, registrationId };
      login(params).then(res => {
        ModalIndicator.hide();
        if (res && res.status === 200) {
          AsyncStorage.setItem('user', JSON.stringify(res.body));
          AsyncStorage.setItem('Authorization', res.body.token);
          // 登录成功
          navigation.navigate('Home');
        } else {
          Toast.fail(res.msg);
        }
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated
          translucent
          backgroundColor="transparent"
          showHideTransition="fade"
          networkActivityIndicatorVisible
        />
        <NavigationEvents onDidFocus={() => Orientation.lockToPortrait()} />
        <Image style={styles.loginBg} source={loginBg} />
        <View style={styles.centerContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} resizeMode="contain" source={logo} />
          </View>
          <Text style={styles.title}>首钢京唐智慧电网</Text>
          <View style={styles.userContainer}>
            <Image style={styles.userIcon} source={userIcon} />
            <TextInput
              style={styles.inputBase}
              placeholderTextColor="#999"
              placeholder="用户名"
              value={this.state.userName}
              onBlur={() => Keyboard.dismiss()}
              onChangeText={userName => this.setState({ userName })}
            />
          </View>
          <View style={styles.passwordContainer}>
            <Image style={styles.userIcon} source={passwordIcon} />
            <TextInput
              password
              placeholder="密码"
              secureTextEntry
              style={styles.inputBase}
              placeholderTextColor="#999"
              value={this.state.password}
              onBlur={() => Keyboard.dismiss()}
              onChangeText={password => this.setState({ password })}
            />
          </View>
          <Button style={styles.loginBtn} onPress={this.handleLogin}>
            <Text style={styles.loginBtnText}>登&nbsp;&nbsp;&nbsp;录</Text>
          </Button>
          <Text style={styles.copyRight}>天合云能源互联网技术（杭州）有限公司提供技术支持v1.0.1</Text>
        </View>
      </View>
    );
  }
}

export default Index;
