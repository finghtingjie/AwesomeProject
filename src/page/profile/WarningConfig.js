import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, Alert, FlatList } from 'react-native';

import { Toast, Button, PullPicker, ModalIndicator } from 'teaset';

import IconFont from '@iconfont/index.js';
import { addTGiveAnAlarmUser, getTGiveAnAlarmUser, getAllUserInfo, deleteTGiveAnAlarmr } from '@api/profile';

import styles from './WarningStyle';

const backIcon = require('../../assets/backicon.png');

const WarningArr = ['异常信号', '越限监视', '重要信号', '保护动作'];

class WarningConfig extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tabActiveIndex: 0, //tab激活下标
      fakeData: [],
      userList: [],
      selectedIndex: null,
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    this.getTGiveAnAlarmUser();
    this.getAllUserInfo();
  }

  // 获取用户信息
  getAllUserInfo = () => {
    ModalIndicator.show();
    getAllUserInfo({}).then(res => {
      ModalIndicator.hide();
      if (res && res.status === 200) {
        this.setState({ userList: res.body });
      } else {
        Toast.fail(res.msg);
      }
    });
  };

  getTGiveAnAlarmUser = () => {
    const params = { tGiveAnAlarmId: this.state.tabActiveIndex + 2 };
    // console.log(params);
    getTGiveAnAlarmUser(params).then(res => {
      if (res && res.status === 200) {
        this.setState({ fakeData: res.body });
      }
    });
  };

  // 处理tab切换
  handleTabChange = (item, index) => {
    this.setState({ tabActiveIndex: index }, () => {
      this.getTGiveAnAlarmUser();
    });
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

  handleAdd = () => {
    const userArr = this.state.userList.map(item => item.userName);
    const items = ['全选'].concat(userArr);
    let params = {};
    PullPicker.show('请选择用户', items, this.state.selectedIndex, (item, index) => {
      this.setState({ selectedIndex: index }, () => {
        if (index === 0) {
          // 全选
          params = {
            tGiveAnAlarmId: this.state.tabActiveIndex + 2,
            userIdArray: this.state.userList.map(d => d.userId).toString(),
          };
          console.log(params);
          addTGiveAnAlarmUser(params).then(res => {
            if (res && res.status === 200) {
              Toast.success('新增成功');
              this.getTGiveAnAlarmUser();
            } else {
              Toast.fail(res.msg);
            }
          });
        } else {
          this.setState({ userId: this.state.userList.find(i => i.userName === item).userId }, () => {
            params = {
              tGiveAnAlarmId: this.state.tabActiveIndex + 2,
              userIdArray: [this.state.userId].toString(),
            };
            console.log(params);
            addTGiveAnAlarmUser(params).then(res => {
              if (res && res.status === 200) {
                Toast.success('新增成功');
                this.getTGiveAnAlarmUser();
              } else {
                Toast.fail(res.msg);
              }
            });
          });
        }
      });
    });
  };

  handleDelete = item => {
    Alert.alert('确定删除此用户吗？', '', [
      {
        text: '取消',
        onPress: () => {},
      },
      { text: '确定', onPress: () => this.handleOk(item) },
      ,
    ]);
  };

  handleOk = item => {
    const params = { tGiveAnAlarmId: this.state.tabActiveIndex + 2, userId: item.userId };
    deleteTGiveAnAlarmr(params).then(res => {
      if (res && res.status === 200) {
        Toast.success('删除成功');
        this.setState({ fakeData: this.state.fakeData.filter(items => items.userId !== item.userId) });
        this.getTGiveAnAlarmUser();
      } else {
        Toast.sad(res.msg);
      }
    });
  };

  renderItem = ({ item }) => (
    <Button key={item.userId} style={styles.userBtn} onPress={() => this.handleDelete(item)}>
      <Text style={styles.userBtnText}>{item.userName}</Text>
      <IconFont name="cuowutishi" size={18} color="#333" />
    </Button>
  );

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
            <Text style={styles.content}>告警配置</Text>
          </View>
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
          <View style={styles.flatlist}>
            <FlatList
              data={fakeData}
              refreshing={false}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
        <Button style={styles.submitBtn} onPress={this.handleAdd}>
          <Text style={styles.submitBtnText}>新增通知人员</Text>
        </Button>
      </View>
    );
  }
}

export default WarningConfig;
