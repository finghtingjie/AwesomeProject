import React from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, Text, TextInput, TouchableOpacity, Keyboard, StatusBar, Image, Alert, FlatList } from 'react-native';

import { Toast, Button, Overlay, ModalIndicator } from 'teaset';

// import IconFont from '@iconfont/index.js';
import { getAllUserInfo, userSearch, deleteUser } from '@api/profile';

const orderPic = require('../../assets/profile/order.png');
const backIcon = require('../../assets/backicon.png');

import styles from './UserConfigStyles';
import overlayStyles from '../style/overlayStyle';

class UserConfig extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: null,
      fakeData: [
        // { userId: 1, userName: '张珊山/zhangshanshan', password: 'ceshimima' },
        // { userId: 2, userName: '张珊山/zhangshanshan', password: 'ceshimima2' },
      ],
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  // 获取用户信息
  getAllUserInfo = () => {
    ModalIndicator.show();
    getAllUserInfo({}).then(res => {
      ModalIndicator.hide();
      if (res && res.status === 200) {
        console.log('用户信息', res.body);
        this.setState({ fakeData: res.body });
      } else {
        Toast.fail(res.msg);
      }
    });
  };

  // 搜索用户
  handleSearch = () => {
    Keyboard.dismiss();
    ModalIndicator.show();
    const params = { name: this.state.keyWord };
    userSearch(params).then(res => {
      ModalIndicator.hide();
      if (res && res.status === 200) {
        this.setState({ fakeData: res.body });
      } else {
        Toast.fail(res.msg);
      }
    });
  };

  // 查看密码
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

  // 新增用户
  handleAddUser = () => {
    const { navigation } = this.props;
    navigation.navigate('AddUser', { type: 'add' });
  };

  // 编辑用户
  handleEditUser = item => {
    const { navigation } = this.props;
    navigation.navigate('AddUser', { type: 'edit', item });
  };

  renderItem = ({ item }) => (
    <View key={item.userId} style={styles.userBtn}>
      <View style={styles.leftContainer}>
        <Image style={styles.orderPic} source={orderPic} />
        <Text style={styles.userBtnText}>{item.userName}</Text>
      </View>
      <View style={styles.btnContainer}>
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
    </View>
  );

  // 删除用户
  handleDeleteUser = item => {
    Alert.alert('确定删除此用户吗？', '', [
      {
        text: '取消',
        onPress: () => {},
      },
      { text: '确定', onPress: () => this.handleOk(item) },
      ,
    ]);
  };

  handleOk = async item => {
    deleteUser({ userId: item }).then(res => {
      if (res && res.status === 200) {
        Toast.success('删除成功');
        this.getAllUserInfo();
      } else {
        Toast.fail(res.msg);
      }
    });
  };

  render() {
    const { keyWord, fakeData } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          animated
          translucent
          backgroundColor="transparent"
          showHideTransition="fade"
          networkActivityIndicatorVisible
        />
        <NavigationEvents onDidFocus={() => this.getAllUserInfo()} />
        <View style={styles.navigationBar}>
          <View style={styles.navigationContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.goBack()}>
              <Image style={styles.backIcon} source={backIcon} />
            </TouchableOpacity>
            <Text style={styles.content}>用户管理</Text>
          </View>
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
          <TouchableOpacity style={styles.searchIcon} onPress={() => this.handleSearch()}>
            <Text style={styles.searchText}>搜 索</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatlist}>
          <FlatList
            data={fakeData}
            refreshing={false}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <Button style={styles.submitBtn} onPress={this.handleAddUser}>
          <Text style={styles.submitBtnText}>新增用户</Text>
        </Button>
      </View>
    );
  }
}

export default UserConfig;
