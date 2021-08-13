/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, View, Text, DeviceEventEmitter, ScrollView, TouchableOpacity } from 'react-native';

// import { Toast } from 'teaset';
import { getActiveChildNavigationOptions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Info from '@page/info/Index';
import Term from '@page/term/Index';
import CheckList from '@page/checkList/Index'; //检查单
import Vehicle from '@page/vehicle/Index';
import VehicleOrderList from '@page/vehicle/VehicleOrderList';
import VehicleRequestList from '@page/vehicle/VehicleRequestList';
//跳转问题，加栈
import RequestQuotationDetail from '@page/request/RequestQuotationDetail'; //预约询价详情
import RequestDetail from '@page/request/RequestDetail'; //预约详情
import OrderDetail from '@page/soreport/OrderDetail'; //工单详情
//车辆管理
import VehicleList from '@page/vehicleManagement/VehicleList';
import VehicleAdd from '@page/vehicleManagement/VehicleAdd';
import VehicleGeneral from '@page/vehicleManagement/VehicleGeneral';
import VehicleEdit from '@page/vehicleManagement/VehicleEdit';
import VehicleExtension from '@page/vehicleManagement/VehicleExtension';
import VehicleMaintenance from '@page/vehicleManagement/VehicleMaintenance';
import Maintenance from '@page/vehicleManagement/Maintenance';

import CheckListReply from '@page/checkList/CheckListReply'; //执行检查单
import NewCheckList from '@page/checkList/NewCheckList';
import SelectVehicleCheck from '@page/checkList/SelectVehicleCheck';
import MainNavigator from './bottomNav';
import Icon from '@iconfont/index.js';
import NavigationService from '../../NavigationService';
import { setUserInfo } from '@store/modules/userinfo';

import { getCurrentUser } from '@api/home';
import { queryMenu, savePointRecord } from '@api/login';

import styles from './Style';

const BASE_WIDTH = 3.75;
const BASE_HEIGHT = 8.12;

const OtherStack = createStackNavigator({
  Info,
});

const OtherStack2 = createStackNavigator({
  Term,
});

const CheckListStack = createStackNavigator({
  CheckList,
  CheckListReply,
  NewCheckList,
  SelectVehicleCheck,
  // CheckListDetail,
});
const VehicleStack = createStackNavigator({
  Vehicle,
  VehicleOrderList,
  VehicleRequestList,
  RequestQuotationDetail,
  RequestDetail,
  OrderDetail,
});
const VehicleManagementStack = createStackNavigator({
  VehicleList,
  VehicleAdd,
  VehicleGeneral,
  VehicleEdit,
  VehicleExtension,
  VehicleMaintenance,
  Maintenance,
});
class SideMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      curColor: 1,
      userInfo: {},
      bizName: '',
      fullName: '',
      userPic: '',
      menuData: [],
    };
  }
  async componentDidMount() {
    //修改左侧窗列表目前显示值
    DeviceEventEmitter.addListener('refreshCurColor', msg => {
      const routeName = NavigationService.getCurrentRouteName();
      this.setState({ curColor: drawerObj[routeName] });
    });
    this.listener = DeviceEventEmitter.addListener('refreshUserPic', msg => {
      this.setState({ userPic: msg });
    });
    const user = await AsyncStorage.getItem('user');
    if (user) {
      // 获取当前用户信息
      this.setState({ userInfo: JSON.parse(user).user }, () => {
        getCurrentUser({ userid: JSON.parse(user).user.id }).then(res => {
          if (res && res.status === 200) {
            if (res.body.userPic) {
              this.setState({
                userPic: res.body.userPic,
              });
              AsyncStorage.setItem('userPic', res.body.userPic);
            }
          }
        });
      });
    }

    // 查询菜单数据
    queryMenu({}).then(res => {
      if (res && res.status === 200) {
        let arr = [];
        arr.push(...res.body.map(item => item.name));
        this.setState({ menuData: arr });
        //AsyncStorage.setItem('mengInfo', res.body);
      }
    });
  }

  //埋点
  census = async (menuCode, menuUrl, menuId) => {
    console.log(123123);
    const user = await AsyncStorage.getItem('user');
    savePointRecord({
      userId: JSON.parse(user).user.id || null,
      menuCode: menuCode,
      menuUrl: menuUrl,
      menuId: menuId,
      clickTime: moment(),
      type: '1', //默认给1
      loginType: 6,
    });
  };

  render() {
    const { menuData } = this.state;
    return (
      <>
        <ScrollView>
          <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.user}>
              {this.state.userPic ? (
                <Image
                  style={styles.userPic}
                  source={{
                    uri: this.state.userPic,
                  }}
                />
              ) : (
                <Image style={styles.userPic} source={require('@assets/client.png')} />
              )}
              <View style={styles.userInfo}>
                <Text style={styles.title} numberOfLines={1}>
                  {this.state.userInfo ? this.state.userInfo.bizName : ''}
                </Text>
                <Text style={styles.subtitle}>{this.state.userInfo ? this.state.userInfo.fullName : ''}</Text>
              </View>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => {
                  this.props.navigation.closeDrawer();
                }}>
                <Icon name="zhucaidanshouqi" size={24} style={{ marginTop: hp(1.2) }} color="#333" />
              </TouchableOpacity>
            </View>
            <View style={styles.topBorder} />
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
              <View
                style={{
                  flexDirection: 'column',
                  marginTop: hp(3.44),
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={styles.drawerIconWrap}
                  onPress={async () => {
                    const shouldAccept = await AsyncStorage.getItem('shouldAccept');
                    if (shouldAccept === 'false') {
                      NavigationService.navigate('Term');
                    } else {
                      NavigationService.navigate('Home');
                      this.setState({ curColor: 1 });
                    }
                    this.props.navigation.closeDrawer();
                  }}>
                  <Icon
                    name="qiche"
                    size={22}
                    style={styles.drawericon}
                    color={this.state.curColor === 1 ? '#E10600' : '#888'}
                  />
                  <Text
                    style={{
                      color: this.state.curColor === 1 ? '#E10600' : '#666',
                      fontSize: hp(2.21),
                      lineHeight: hp(22 / BASE_HEIGHT),
                    }}>
                    首页
                  </Text>
                </TouchableOpacity>

                {menuData.includes('预约') ? (
                  <TouchableOpacity
                    style={styles.drawerIconWrap}
                    onPress={async () => {
                      // 左侧预约跳转预约列表
                      const shouldAccept = await AsyncStorage.getItem('shouldAccept');
                      if (shouldAccept === 'false') {
                        NavigationService.navigate('Term');
                      } else {
                        this.census('fleet02', 'Request', 267);
                        NavigationService.navigate('Request');
                        this.setState({ curColor: 2 });
                      }
                      this.props.navigation.closeDrawer();
                    }}>
                    <Icon
                      name="wodeyuyue"
                      size={22}
                      style={styles.drawericon}
                      color={this.state.curColor === 2 ? '#E10600' : '#888'}
                    />
                    <Text
                      style={{
                        color: this.state.curColor === 2 ? '#E10600' : '#666',
                        fontSize: hp(2.21),
                        lineHeight: hp(22 / BASE_HEIGHT),
                      }}>
                      预约管理
                    </Text>
                  </TouchableOpacity>
                ) : null}
                <TouchableOpacity
                  style={styles.drawerIconWrap}
                  onPress={async () => {
                    const shouldAccept = await AsyncStorage.getItem('shouldAccept');
                    if (shouldAccept === 'false') {
                      NavigationService.navigate('Term');
                    } else {
                      this.census('fleet0702', 'CheckList', 702);
                      NavigationService.navigate('CheckList');
                      this.setState({ curColor: 4 });
                    }
                    this.props.navigation.closeDrawer();
                  }}>
                  <Icon
                    name="niandushixiangjianchabiao"
                    size={22}
                    style={styles.drawericon}
                    color={this.state.curColor === 4 ? '#E10600' : '#888'}
                  />
                  <Text
                    style={{
                      color: this.state.curColor === 4 ? '#E10600' : '#666',
                      fontSize: hp(2.21),
                      lineHeight: hp(22 / BASE_HEIGHT),
                    }}>
                    车辆检查
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.drawerIconWrap}
                  onPress={async () => {
                    NavigationService.navigate('Term', { key: 'sideMenu' });
                    this.props.navigation.closeDrawer();
                    this.setState({ curColor: 3 });
                  }}>
                  <Icon
                    name="bangzhushouce"
                    size={22}
                    style={styles.drawericon}
                    color={this.state.curColor === 3 ? '#E10600' : '#888'}
                  />
                  <Text
                    style={{
                      color: this.state.curColor === 3 ? '#E10600' : '#666',
                      fontSize: hp(2.21),
                      lineHeight: hp(22 / BASE_HEIGHT),
                    }}>
                    用户协议
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.drawerIconWrap}
                  onPress={async () => {
                    NavigationService.navigate('Vehicle', { key: 'sideMenu' });
                    this.props.navigation.closeDrawer();
                    this.setState({ curColor: 3 });
                  }}>
                  <Icon
                    name="usability"
                    size={22}
                    style={styles.drawericon}
                    color={this.state.curColor === 3 ? '#E10600' : '#888'}
                  />
                  <Text
                    style={{
                      color: this.state.curColor === 3 ? '#E10600' : '#666',
                      fontSize: hp(2.21),
                      lineHeight: hp(22 / BASE_HEIGHT),
                    }}>
                    车辆可用性
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.drawerIconWrap}
                  onPress={async () => {
                    NavigationService.navigate('VehicleList', { key: 'sideMenu' });
                    this.props.navigation.closeDrawer();
                    this.setState({ curColor: 6 });
                  }}>
                  <Icon
                    name="gongdan"
                    size={22}
                    style={styles.drawericon}
                    color={this.state.curColor === 6 ? '#E10600' : '#888'}
                  />
                  <Text
                    style={{
                      color: this.state.curColor === 6 ? '#E10600' : '#666',
                      fontSize: hp(2.21),
                      lineHeight: hp(22 / BASE_HEIGHT),
                    }}>
                    车辆管理
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
        <View style={styles.bottomBorder} />
        <TouchableOpacity
          onPress={() => {
            this.handleClick();
          }}>
          <TouchableOpacity
            style={styles.botContainer}
            onPress={async () => {
              const shouldAccept = await AsyncStorage.getItem('shouldAccept');
              if (shouldAccept === 'false') {
                NavigationService.navigate('Term');
                this.props.navigation.closeDrawer();
              } else {
                NavigationService.navigate('ChangeAccount', {
                  id: this.state.userInfo && this.state.userInfo.id,
                  key: 'home',
                });
              }
            }}>
            <Icon name="qiehuanzhanghao" size={14} color="#c1c0c0" style={{ marginLeft: wp(4) }} />
            <Text style={styles.changeAccountTitle}>切换车队账户</Text>
            <Icon name="xiayiye" size={14} color="#c1c0c0" />
          </TouchableOpacity>
        </TouchableOpacity>
      </>
    );
  }
}

const drawerObj = {
  Home: 1,
  // 预约路由
  Request: 2,
  // RequestItem: 2,
  // ConfirmMr: 2,
  // RequestDetail: 2,
  // 车辆登记路由
  Term: 3,
  CheckIn: 3,
  Vehicle: 3,
  ManualPlate: 3,
  CompleteCheckIn: 3,
  DriverInfo: 3,
  // 工单路由
  SoReport: 4,
  OrderDetail: 4,
  SoDetail: 4,
  ServiceDetail: 4,
  SubmitOrder: 4,
  OrderStart: 4,
  OrderEnd: 4,
  OrderClose: 4,
  // 个人中心
  Profile: 5,
  ChangePassword: 5,
  ViewUserPic: 5,
  ChangeEmail: 5,
  ChangeWeChat: 5,
  //车辆管理
  VehicleList: 6,
  VehicleGeneral: 6,
  VehicleEdit: 6,
  VehicleExtension: 6,
  VehicleMaintenance: 6,
  Maintenance: 6,
};

const drawers = createDrawerNavigator(
  {
    TabRouter: MainNavigator,
    OtherStack,
    OtherStack2,
    CheckListStack,
    VehicleStack,
    VehicleManagementStack,
  },
  {
    navigationOptions: ({ navigation, screenProps }) => {
      // you can put fallback values before here, eg: a default tabBarLabel
      return { ...getActiveChildNavigationOptions(navigation, screenProps) };

      // put other navigationOptions that you don't want the active child to
      // be able to override here!
    },
    initialRouteName: 'TabRouter',
    headerMode: 'none',
    backBehavior: 'initialRoute',
    drawerWidth: wp(84),
    contentComponent: SideMenu,
  },
);

const mapStateToProps = state => {
  return { userinfo: state.userinfo.userinfo };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: userinfo => {
      return dispatch(setUserInfo(userinfo));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(drawers);
