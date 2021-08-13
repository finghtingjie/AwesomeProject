import React from 'react';
import { View, TextInput, Text, Keyboard, StatusBar, Image } from 'react-native';

import { Toast, ModalIndicator, Button } from 'teaset';

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

  handleLogin = () => {
    const { navigation } = this.props;
    const { userName, password } = this.state;
    if (!userName) {
      Toast.info('请输入用户名');
    } else if (!password) {
      Toast.info('请输入密码');
    } else {
      ModalIndicator.show();
      const params = { userName, password };
      login(params).then(res => {
        ModalIndicator.hide();
        if (res && res.status === 200) {
          // 登录成功
          navigation.navigate('Home', { activeIndex: 1 });
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
        <Image style={styles.loginBg} source={loginBg} />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
        </View>
        <Text style={styles.title}>首钢京唐智慧电网</Text>
        <View style={styles.userContainer}>
          <Image style={styles.userIcon} source={userIcon} />
          <TextInput
            onBlur={() => Keyboard.dismiss()}
            style={styles.inputBase}
            placeholderTextColor="#999"
            placeholder="用户名"
            value={this.state.userName}
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
      </View>
    );
  }
}

export default Index;
