import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, StatusBar, Image } from 'react-native';

import { Toast, Button, PullPicker } from 'teaset';

const arrowPic = require('../../assets/profile/xiala.png');
const backIcon = require('../../assets/backicon.png');

import { addUser, reviseUser } from '@api/profile';

import styles from './AddUserStyle';

class AddUser extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      realName: '',
      password: '',
      type: 'add',
      groupingId: null,
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
    if (params && params.item) {
      const { userName, realName, password, groupingId } = params.item;
      this.setState({ userName, realName, password, groupingId });
    }
  }

  handleSubmit = () => {
    const { userName, realName, password, groupingId } = this.state;
    const { params } = this.props.navigation.state;
    if (!userName) {
      Toast.info('请输入用户名');
    } else if (!realName) {
      Toast.info('请输入真实姓名');
    } else if (!password) {
      Toast.info('请输入密码');
    } else if (!groupingId) {
      Toast.info('请选择分组');
    } else {
      const param = {
        userName,
        realName,
        password,
        groupingId,
        userId: params && params.item.userId,
      };
      if (params && params.type === 'add') {
        addUser(param).then(res => {
          if (res && res.status === 0) {
            Toast.success('保存成功');
            const { navigation } = this.props;
            navigation.navigate('UserConfig');
          }
        });
      } else {
        reviseUser(param).then(res => {
          if (res && res.status === 0) {
            Toast.success('保存成功');
            const { navigation } = this.props;
            navigation.navigate('UserConfig');
          }
        });
      }
    }
  };

  handleSelect = () => {
    const items = ['分组1', '分组2', '分组3'];
    PullPicker.show('请选择分组', items, this.state.groupingId, (item, index) =>
      this.setState({ groupingId: index, groupName: item }, () => console.log(index)),
    );
  };

  render() {
    const { userName, realName, password, type, groupName } = this.state;
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
              value={realName}
              onBlur={() => Keyboard.dismiss()}
              onChangeText={val => this.setState({ realName: val })}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.curPassword}>密码</Text>
            <TextInput
              style={styles.inputBase}
              placeholder="至少6个字符，包含字母和数字"
              placeholderTextColor="#999"
              value={password}
              onBlur={() => Keyboard.dismiss()}
              onChangeText={val => this.setState({ password: val })}
            />
          </View>
          <TouchableOpacity style={styles.inputBox} onPress={() => this.handleSelect()}>
            <Text style={styles.curPassword}>分组</Text>
            <View style={styles.inputBase}>
              <Text style={styles.placeholderText}>{groupName || '请选择分组'}</Text>
            </View>
            <Image style={styles.arrowPic} source={arrowPic} resizeMode="contain" />
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
