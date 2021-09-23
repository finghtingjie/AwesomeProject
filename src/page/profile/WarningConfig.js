import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, StatusBar, Image } from 'react-native';

import { Toast, Button } from 'teaset';

import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

import styles from './WarningStyle';

const backIcon = require('../../assets/backicon.png');

const WarningArr = ['异常信号', '越限监视', '重要信号', '保护动作'];

const fakeData = [{ userId: 1, userName: '张珊山/zhangshanshan' }, { userId: 2, userName: '张珊山/zhangshanshan' }];

class WarningConfig extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tabActiveIndex: 0, //tab激活下标
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {}

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
  handleTabChange = (item, index) => {
    this.setState({ tabActiveIndex: index });
  };

  renderTabStyle = (item, index) => {
    const { tabActiveIndex } = this.state;
    switch (index) {
      case 0:
        if (tabActiveIndex === index) {
          return styles.leftBtnActive;
        } else {
          return styles.leftBtn;
        }
      case 1:
        if (tabActiveIndex === index) {
          return styles.centerLeftActive;
        } else {
          return styles.centerLeft;
        }
      case 2:
        if (tabActiveIndex === index) {
          return styles.centerRightActive;
        } else {
          return styles.centerRight;
        }
      case 3:
        if (tabActiveIndex === index) {
          return styles.rightBtnActive;
        } else {
          return styles.rightBtn;
        }
      default:
        break;
    }
  };

  renderTabTextStyle = (item, index) => {
    const { tabActiveIndex } = this.state;
    if (tabActiveIndex === index) {
      return styles.tabTextActive;
    } else {
      return styles.tabText;
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
          <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.goBack()}>
            <Image style={styles.backIcon} source={backIcon} />
          </TouchableOpacity>
          <Text style={styles.content}>告警配置</Text>
        </View>
        <View style={styles.tabContainer}>
          {WarningArr.map((item, index) => {
            return (
              <Button
                key={item}
                style={this.renderTabStyle(item, index)}
                onPress={() => this.handleTabChange(item, index)}>
                <Text style={this.renderTabTextStyle(item, index)}>{item}</Text>
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
