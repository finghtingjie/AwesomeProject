import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, StatusBar, Image } from 'react-native';

import moment from 'moment';
import { Toast, Button, PullPicker } from 'teaset';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

const arrowPic = require('../../assets/profile/xiala.png');
const orderPic = require('../../assets/warning/paixu.png');
const searchIcon = require('../../assets/warning/searchicon.png');
const yao = require('../../assets/warning/yao.png');
const yue = require('../../assets/warning/yue.png');
const yi = require('../../assets/warning/yi.png');
const shi = require('../../assets/warning/shi.png');

// import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

import DatePicker from '@components/DatePicker';
import DashLine from '@components/DashLine';

import styles from './WarningStyle';

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex1: null,
      selectedIndex2: null,
      levelName: '',
      statusName: '',
      isDatePickerVisible: false,
      dateFormat: '', //时间
      dateStart: null,
      dateEnd: '请选择日期',
      keyWord: '',
      fakeData: [
        {
          id: 1,
          isConfirm: false,
          warningType: '遥测',
          contentColor: '#999',
          warningPic: yao,
          warningTime: '2021-07-21 10:09:03 ',
          warningContent: '7=110kV变电站 35kV3115间隔PCS963D过负荷报警',
        },
        {
          id: 2,
          isConfirm: true,
          warningPic: yue,
          warningType: '越限',
          contentColor: '#28920C',
          warningTime: '2021-07-21 10:09:03 ',
          warningContent: '7=110kV变电站 35kV1母11分段PCS963D3115装置报警',
        },
        {
          id: 3,
          isConfirm: true,
          warningPic: yi,
          warningType: '异常',
          contentColor: '#FCA001',
          warningTime: '2021-07-21 10:09:03 ',
          warningContent: '7=110kV变电站 35kV1母11分段PCS963D3115负荷报警',
        },
        {
          id: 4,
          isConfirm: false,
          warningPic: shi,
          contentColor: '  #CE0606',
          warningType: '事故',
          warningTime: '2021-07-21 10:09:03 ',
          warningContent: '7=110kV变电站 电气室一PCS9616D3115装置报警',
        },
      ],
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
  }

  handleSubmit = () => {
    const { navigation } = this.props;
    const { fullName, verifyPassword } = this.state;
  };

  handleSelect = () => {
    const items = ['分组1', '分组2', '分组3'];
    PullPicker.show('请选择分组', items, this.state.selectedIndex, (item, index) =>
      this.setState({ selectedIndex: index, groupName: item }, () => console.log(item)),
    );
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  handleConfirm = date => {
    console.log('A date has been picked: ', date);
    const dateFormat = moment(date).format('YYYY-MM-DD HH:mm:ss');
    this.setState({
      date: dateFormat,
      dateEnd: dateFormat,
      isDatePickerVisible: false,
    });
  };

  handleSelectLevel = () => {
    const items = ['全部等级', '遥测', '越限', '异常', '事故'];
    PullPicker.show('请选择等级', items, this.state.selectedIndex, (item, index) =>
      this.setState({ selectedIndex1: index, levelName: item }, () => console.log(item)),
    );
  };

  handleSelectStatus = () => {
    const items = ['状态1', '状态2', '状态3', '状态4'];
    PullPicker.show('请选择状态', items, this.state.selectedIndex, (item, index) =>
      this.setState({ selectedIndex2: index, statusName: item }, () => console.log(item)),
    );
  };

  render() {
    const { keyWord, fakeData, levelName, statusName } = this.state;
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
          <Text style={styles.content}>告警</Text>
        </View>
        <View style={styles.conditionContainer}>
          <TouchableOpacity style={styles.levelContainer} onPress={() => this.handleSelectLevel()}>
            <Text style={styles.commonText}>{levelName || '等级'}</Text>
            <Image style={styles.arrowPic} source={arrowPic} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.statusContainer} onPress={() => this.handleSelectStatus()}>
            <Text style={styles.commonText}>{statusName || '状态'}</Text>
            <Image style={styles.arrowPic} source={arrowPic} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.statusContainer}>
            {/* <Text style={styles.commonText}>时间</Text> */}
            <DatePicker
              mode="datetime"
              defaultValue={this.state.dateStart}
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
              valueTextStyle={styles.commonText}
            />
            <Image style={styles.arrowPic} source={arrowPic} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderContainer}>
            <Image style={styles.orderPic} source={orderPic} />
          </TouchableOpacity>
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
          <Image style={styles.searchIcon} source={searchIcon} />
        </View>
        <View style={styles.warningContent}>
          <Text style={styles.warningText}>
            为您找到
            <Text style={styles.redText}> {12} </Text>
            条告警数据...
          </Text>
        </View>
        <DashLine
          backgroundColor="#BABABC"
          len={10}
          width={hp(1282 / BASE_HEIGHT)}
          left={wp(70 / BASE_WIDTH)}
          top={hp(478 / BASE_HEIGHT)}
        />
        {fakeData.map(item => {
          return (
            <View style={styles.commonContainer}>
              <View style={styles.arrow} />
              <View style={styles.leftPart} key={item.id}>
                <Image style={styles.commonPic} source={item.warningPic} />
              </View>
              <View style={styles.rightPart}>
                <Text style={styles.commonLine}>
                  告警等级：<Text style={[styles.contents, { color: item.contentColor }]}>{item.warningType}</Text>
                </Text>
                <Text style={styles.commonLine}>
                  告警时间：<Text style={[styles.contents, { color: item.contentColor }]}>{item.warningTime}</Text>
                </Text>
                <Text style={styles.commonLine}>
                  告警内容：<Text style={[styles.contents, { color: item.contentColor }]}>{item.warningContent}</Text>
                </Text>
              </View>
              <Button style={item.isConfirm ? styles.isConfirm : styles.confirmBtn} onPress={this.handleSubmit}>
                <Text style={styles.confirmBtnText}>{item.isConfirm ? '已确认' : '确认'}</Text>
              </Button>
            </View>
          );
        })}
      </View>
    );
  }
}

export default Index;
