import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';

import { Toast, Button } from 'teaset';

import IconFont from '@iconfont/index.js';
import { getGrouping } from '@api/profile';

const orderPic = require('../../assets/profile/order.png');
const backIcon = require('../../assets/backicon.png');

import styles from './GroupConfigStyle';

class GroupConfig extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: null,
      fakeData: [],
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    const params = {};
    getGrouping(params).then(res => {
      if (res && res.status === 200) {
        this.setState({ fakeData: res.body });
      }
    });
  }

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
    const { fakeData } = this.state;
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
          <Text style={styles.content}>分组管理</Text>
        </View>
        {fakeData.map(item => {
          return (
            <View key={item.id} style={styles.userBtn}>
              <View style={styles.leftContainer}>
                <Image style={styles.orderPic} source={orderPic} resizeMode="contain" />
                <Text style={styles.userBtnText}>{item.name}</Text>
              </View>
              <View style={styles.btnContainer}>
                <Button style={styles.editBtn} onPress={() => this.handleEditGroup(item)}>
                  <Text style={styles.pwdBtnText}>编辑</Text>
                </Button>
                <Button style={styles.deleteBtn} onPress={() => this.handleDeleteGroup(item.id)}>
                  <Text style={styles.pwdBtnText}>删除</Text>
                </Button>
              </View>
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
