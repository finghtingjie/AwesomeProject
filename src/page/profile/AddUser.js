import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, StatusBar, Image } from 'react-native';

import { Toast, Button, PullPicker } from 'teaset';

const arrowPic = require('../../assets/profile/xiala.png');

import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

import styles from './AddUserStyle';

class AddUser extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      fullName: '',
      verifyPassword: '',
      type: 'add',
      selectedIndex: null,
      groupName: '',
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;
    if (params && params.type) {
      this.setState({ type: params.type });
    }
  }

  handleSubmit = () => {
    const { navigation } = this.props;
    const { fullName, verifyPassword } = this.state;
  };

  handleSelect = () => {
    const items = ['分组1', '分组2', '分组3'];
    PullPicker.show('请选择分组', items, this.state.selectedIndex, (item, index) =>
      this.setState({ selectedIndex: index, groupName: item }, () => console.log(item)),
    );
  };

  render() {
    const { userName, fullName, verifyPassword, type, groupName } = this.state;
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
          <Text style={styles.content}>{type === 'add' ? '新增' : '编辑'}用户</Text>
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.curPassword}>用户名</Text>
            <TextInput
              style={styles.inputBase}
              placeholder="请输入用户名"
              placeholderTextColor="#999"
              value={userName}
              onBlur={() => Keyboard.dismiss()}
              onChangeText={val => this.setState({ userName: val })}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.curPassword}>真实姓名</Text>
            <TextInput
              style={styles.inputBase}
              placeholder="请输入真实姓名"
              placeholderTextColor="#999"
              value={fullName}
              onBlur={() => Keyboard.dismiss()}
              onChangeText={val => this.setState({ fullName: val })}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.curPassword}>密码</Text>
            <TextInput
              style={styles.inputBase}
              placeholder="至少6个字符，包含字母和数字"
              placeholderTextColor="#999"
              value={verifyPassword}
              onBlur={() => Keyboard.dismiss()}
              onChangeText={val => this.setState({ verifyPassword: val })}
            />
          </View>
          <TouchableOpacity style={styles.inputBox} onPress={() => this.handleSelect()}>
            <Text style={styles.curPassword}>分组</Text>
            <View style={styles.inputBase}>
              <Text style={styles.placeholderText}>{groupName || '请选择分组'}</Text>
            </View>
            <Image style={styles.arrowPic} source={arrowPic} />
          </TouchableOpacity>
          <Button style={styles.submitBtn} onPress={this.handleSubmit}>
            <Text style={styles.submitBtnText}>保&nbsp;&nbsp;&nbsp;存</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default AddUser;
