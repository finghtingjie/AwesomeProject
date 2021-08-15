import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';

import { Toast, Button } from 'teaset';

import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

const orderPic = require('../../assets/profile/order.png');

import styles from './GroupConfigStyle';

const fakeData = [{ groupId: 1, groupName: '分组A' }, { groupId: 2, groupName: '分组B' }];

class GroupConfig extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: null,
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  handleAddGroup = () => {
    const { navigation } = this.props;
    navigation.navigate('AddGroup', { type: 'add' });
  };

  handleEditGroup = item => {
    const { navigation } = this.props;
    navigation.navigate('AddGroup', { type: 'edit', item });
  };

  handleDeleteGroup = item => {};

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
        <View style={styles.navigationBar}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.goBack()}>
            <IconFont name="xiayiye" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.content}>分组管理</Text>
        </View>
        {fakeData.map(item => {
          return (
            <View key={item.userId} style={styles.userBtn}>
              <Image style={styles.orderPic} source={orderPic} />
              <Text style={styles.userBtnText}>{item.groupName}</Text>
              <Button style={styles.editBtn} onPress={() => this.handleEditGroup(item)}>
                <Text style={styles.pwdBtnText}>编辑</Text>
              </Button>
              <Button style={styles.deleteBtn} onPress={() => this.handleDeleteGroup(item.userId)}>
                <Text style={styles.pwdBtnText}>删除</Text>
              </Button>
            </View>
          );
        })}
        <Button style={styles.submitBtn} onPress={this.handleAddGroup}>
          <Text style={styles.submitBtnText}>新&nbsp;&nbsp;&nbsp;增</Text>
        </Button>
      </View>
    );
  }
}

export default GroupConfig;
