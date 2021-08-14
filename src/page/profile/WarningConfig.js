import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, StatusBar, Image } from 'react-native';

import { Toast, Button } from 'teaset';

import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

import styles from './WarningStyle';

const WarningArr = [1, 2, 3, 4];

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

  handleSubmit = () => {
    const { navigation } = this.props;
    // updateInfo({ password: newPassword }).then(res => {
    //   if (res && res.status === 200) {
    //     Toast.success('更新成功！');
    //     navigation.navigate('Profile');
    //   }
    // });
  };

  // 处理tab切换
  handleTabChange = index => {
    this.setState({ tabActiveIndex: index });
  };

  renderTabStyle = item => {
    const { tabActiveIndex } = this.state;
    switch (item) {
      case 1:
        if (tabActiveIndex === item) {
          return styles.leftBtnActive;
        } else {
          return styles.leftBtn;
        }
      case 2:
        if (tabActiveIndex === item) {
          return styles.centerLeftActive;
        } else {
          return styles.centerLeft;
        }
      case 3:
        if (tabActiveIndex === item) {
          return styles.centerRightActive;
        } else {
          return styles.centerRight;
        }
      case 4:
        if (tabActiveIndex === item) {
          return styles.rightBtnActive;
        } else {
          return styles.rightBtn;
        }
      default:
        break;
    }
  };

  renderTabTextStyle = item => {
    const { tabActiveIndex } = this.state;
    if (tabActiveIndex === item) {
      return styles.tabTextActive;
    } else {
      return styles.tabText;
    }
  };

  //  删除通知人员
  handleDelete = item => {};

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
          <Text style={styles.content}>告警配置</Text>
        </View>
        <View style={styles.tabContainer}>
          {WarningArr.map(item => {
            return (
              <Button key={item} style={this.renderTabStyle(item)} onPress={() => this.handleTabChange(item)}>
                <Text style={this.renderTabTextStyle(item)}>告警类型{item}</Text>
              </Button>
            );
          })}
        </View>
        <View style={styles.centerContainer}>
          {fakeData.map(item => {
            return (
              <Button key={item.userId} style={styles.userBtn} onPress={() => this.handleDelete(item)}>
                <Text style={styles.userBtnText}>{item.userName}</Text>
                <IconFont name="cuowutishi" size={18} color="#333" />
              </Button>
            );
          })}
        </View>
        <Button style={styles.submitBtn} onPress={this.handleSubmit}>
          <Text style={styles.submitBtnText}>新增通知人员</Text>
        </Button>
      </View>
    );
  }
}

export default WarningConfig;
