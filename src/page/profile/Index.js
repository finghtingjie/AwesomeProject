import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { Toast, ModalIndicator, Button } from 'teaset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TimePicker from '@components/TimePicker';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

const dataList = [
  { id: 1, name: '用户管理' },
  { id: 2, name: '分组管理' },
  { id: 3, name: '告警配置' },
  { id: 4, name: '修改密码' },
];

const userPic = require('../../assets/profile/userpic.png');
const backPic = require('../../assets/profile/back.png');
const yonghuPic = require('../../assets/profile/yonghu.png');
const gaojingPic = require('../../assets/profile/ziyuanxhdpi.png');
const fenzuPic = require('../../assets/profile/guanliyonghufenzu.png');
const passwordPic = require('../../assets/profile/xiugaimima.png');
class Index extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  componentDidMount() {
    this.setState({ userName: '测试用户名' });
  }

  renderSource = id => {
    switch (id) {
      case 1:
        return yonghuPic;
      case 2:
        return fenzuPic;
      case 3:
        return gaojingPic;
      case 4:
        return passwordPic;
      default:
        return yonghuPic;
    }
  };

  handleClick = id => {};

  handleLoginOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    const { userName } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topBg} />
        <View style={styles.userContainer}>
          <Image style={styles.userPic} source={userPic} />
          <View style={styles.userInfo}>
            <Text style={styles.title}>{userName}</Text>
            <Text style={styles.subtitle}>首钢京唐钢铁联合有限责任公司</Text>
          </View>
        </View>
        <View style={styles.centerContainer}>
          {dataList.map(item => {
            return (
              <TouchableOpacity style={styles.commonRow} key={item.id} onPress={this.handleClick(item.id)}>
                <Image style={styles.yonghuPic} source={this.renderSource(item.id)} />
                <View style={styles.commonContent}>
                  <Text style={styles.commonTitle}>{item.name}</Text>
                  <Image style={styles.backRight} source={backPic} />
                </View>
              </TouchableOpacity>
            );
          })}
          <Button style={styles.loginBtn} onPress={this.handleLoginOut}>
            <Text style={styles.loginBtnText}>退出登录</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBg: {
    position: 'relative',
    width: '100%',
    height: hp(477 / BASE_HEIGHT),
    backgroundColor: '#3D447B',
  },
  userContainer: {
    position: 'absolute',
    width: wp(80),
    height: 'auto',
    top: hp(160 / BASE_HEIGHT),
    marginLeft: wp(86 / BASE_WIDTH),
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'column',
  },
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: hp(40 / BASE_HEIGHT),
    lineHeight: hp(48 / BASE_HEIGHT),
    marginLeft: wp(37 / BASE_WIDTH),
  },
  subtitle: {
    color: '#fff',
    fontWeight: '400',
    fontSize: hp(30 / BASE_HEIGHT),
    lineHeight: hp(36 / BASE_HEIGHT),
    marginLeft: wp(37 / BASE_WIDTH),
    marginTop: hp(24 / BASE_HEIGHT),
  },
  userPic: {
    width: wp(186 / BASE_WIDTH),
    height: wp(186 / BASE_WIDTH),
    borderRadius: wp(93 / BASE_WIDTH),
  },
  centerContainer: {
    width: wp(996 / BASE_WIDTH),
    height: wp(808 / BASE_WIDTH),
    backgroundColor: '#fff',
    marginLeft: wp(42 / BASE_WIDTH),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: wp(20 / BASE_WIDTH),
    borderBottomRightRadius: wp(20 / BASE_WIDTH),
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 20, height: 20 },
  },
  commonRow: {
    width: wp(904 / BASE_WIDTH),
    backgroundColor: '#FFF',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: 'rgba(46,144,253,0.1)',
    borderBottomWidth: 1,
    marginLeft: wp(46 / BASE_WIDTH),
    marginRight: wp(46 / BASE_WIDTH),
  },
  yonghuPic: {
    width: wp(40 / BASE_WIDTH),
    height: wp(40 / BASE_WIDTH),
    marginLeft: wp(82 / BASE_WIDTH),
  },
  commonContent: {
    width: wp(696 / BASE_WIDTH),
    height: hp(128 / BASE_HEIGHT),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(66 / BASE_WIDTH),
    // backgroundColor: 'red',
  },
  commonTitle: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: hp(32 / BASE_HEIGHT),
    lineHeight: hp((32 * 1.2) / BASE_HEIGHT),
  },
  backRight: {
    width: wp(18 / BASE_WIDTH),
    height: hp(30 / BASE_HEIGHT),
  },
  loginBtn: {
    paddingVertical: 0,
    backgroundColor: '#4367FD',
    width: wp(700 / BASE_WIDTH),
    height: hp(88 / BASE_HEIGHT),
    borderRadius: wp(30 / BASE_WIDTH),
    marginLeft: wp(148 / BASE_WIDTH),
    marginTop: hp(100 / BASE_HEIGHT),
  },
  loginBtnText: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'normal',
    fontSize: hp(42 / BASE_HEIGHT),
  },
});

export default Index;
