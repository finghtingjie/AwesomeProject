import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, TouchableOpacity, StatusBar, Image, Alert, FlatList } from 'react-native';

import { Toast, Button } from 'teaset';

import IconFont from '@iconfont/index.js';
import { getGrouping, deleteGrouping } from '@api/profile';

const orderPic = require('../../assets/profile/order.png');
const backIcon = require('../../assets/backicon.png');

import styles from './GroupConfigStyle';

class GroupConfig extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fakeData: [],
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      const params = {};
      getGrouping(params).then(res => {
        if (res && res.status === 200) {
          this.setState({ fakeData: res.body });
        }
      });
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

  renderItem = ({ item }) => (
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

  handleDeleteGroup = item => {
    Alert.alert('确定删除此分组吗？', '', [
      {
        text: '取消',
        onPress: () => {},
      },
      { text: '确定', onPress: () => this.handleOk(item) },
      ,
    ]);
  };

  handleOk = item => {
    deleteGrouping({ id: item }).then(res => {
      if (res && res.status === 200) {
        Toast.success('删除成功');
        this.setState({ fakeData: this.state.fakeData.filter(items => items.id !== item) });
      } else {
        Toast.sad(res.msg);
      }
    });
  };

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
          <View style={styles.navigationContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.goBack()}>
              <Image style={styles.backIcon} source={backIcon} />
            </TouchableOpacity>
            <Text style={styles.content}>分组管理</Text>
          </View>
        </View>
        <View style={styles.flatlist}>
          <FlatList
            data={fakeData}
            refreshing={false}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        {/* {fakeData.map(item => {
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
        })} */}
        <Button style={styles.submitBtn} onPress={this.handleAddGroup}>
          <Text style={styles.submitBtnText}>新&nbsp;&nbsp;&nbsp;增</Text>
        </Button>
      </View>
    );
  }
}

export default withNavigation(GroupConfig);
