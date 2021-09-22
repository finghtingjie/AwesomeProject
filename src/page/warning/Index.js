import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

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
import { getGiveAnAlarm } from '@api/warning';

import DatePicker from '@components/DatePicker';
import DashLine from '@components/DashLine';

import styles from './WarningStyle';

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex1: 0,
      selectedIndex2: 0,
      levelName: '全部等级',
      statusName: '全部状态',
      isDatePickerVisible: false,
      dateFormat: '', //时间
      dateStart: null,
      dateEnd: '请选择日期',
      alarmContent: '',
      order: 0,
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
      pageNum: 1,
      pageSize: 10,
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    this.getGiveAnAlarm();
    const { params } = this.props.navigation.state;
    if (params && params.type) {
      this.setState({ type: params.type });
    }
    // 排序：最新告警（默认）、最早告警、状态（待确认优先）。
  }

  getGiveAnAlarm = () => {
    let { pageNum, pageSize } = this.state;
    const params = {
      pageNum,
      pageSize,
    };
    getGiveAnAlarm(params).then(res => {
      if (res && res.status === 200) {
        // this.setState({ total: res.body.count });
        const renderPic = item => {
          const actions = new Map([[1, yao], [2, yue], [3, yi], [4, shi], ['default', yao]]);
          const action = actions.get(item) || actions.get('default');
          return action;
        };
        if (pageNum === 1) {
          const tempArr = res.body;
          let newArr = [];
          tempArr.map(item => {
            const items = item;
            items.warningPic = renderPic(item.eventLevel);
            newArr.push(items);
            return items;
          });
          this.setState({
            fakeData: newArr,
          });
        } else {
          let tempArr = this.state.fakeData;
          tempArr = tempArr.concat(res.body);
          this.setState({
            orderList: tempArr,
          });
        }
        //是否可以下拉
        const allLen = res.body.count || 20;
        const nowLen = pageNum * pageSize;
        if (allLen > nowLen) {
          this.setState({ dataFlag: true });
        } else {
          this.setState({ dataFlag: false });
        }
      }
    });
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
    PullPicker.show('请选择等级', items, this.state.selectedIndex1, (item, index) =>
      this.setState({ selectedIndex1: index, levelName: item }, () => console.log(item)),
    );
  };

  handleSelectStatus = () => {
    const items = ['全部状态', '未确认', '已确认'];
    PullPicker.show('请选择状态', items, this.state.selectedIndex2, (item, index) =>
      this.setState({ selectedIndex2: index, statusName: item }, () => console.log(item)),
    );
  };

  handleChangeOrder = () => {
    const { order } = this.state;
  };

  handleSearch = val => {
    const { levelName, dateEnd } = this.state;
    this.setState({ alarmContent: val }, () => {
      const params = { alarmContent: val, endTime: dateEnd, eventLevel: levelName };
      this.getGiveAnAlarm(params);
    });
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.commonContainer}>
        <View style={styles.arrow} />
        <View style={styles.leftPart} key={item.actingTime + item.actingDesc}>
          <Image style={styles.commonPic} source={item.warningPic} resizeMode="contain" />
        </View>
        <View style={styles.rightPart}>
          <Text style={styles.commonLine}>
            告警等级：<Text style={[styles.contents, { color: item.contentColor }]}>{item.eventLevel}</Text>
          </Text>
          <Text style={styles.commonLine}>
            告警时间：
            <Text style={[styles.contents, { color: item.contentColor }]}>
              {moment(item.actingTime).format('YYYY-MM-DD HH:mm:ss')}
            </Text>
          </Text>
          <Text style={styles.commonLine}>
            告警内容：<Text style={[styles.contents, { color: item.contentColor }]}>{item.alarmContent}</Text>
          </Text>
        </View>
        <Button style={item.isConfirm ? styles.isConfirm : styles.confirmBtn}>
          <Text style={styles.confirmBtnText}>{item.actingDesc}</Text>
        </Button>
      </View>
    );
  };

  renderFooter = () => {
    if (this.state.dataFlag && this.state.fakeData.length) {
      return (
        <View style={styles.loadMoreView}>
          <Text style={styles.loadMoreText}>加载中...</Text>
        </View>
      );
    } else if (!this.state.dataFlag && this.state.fakeData.length && this.state.total > 10) {
      return (
        <View style={styles.loadMoreView}>
          <Text style={styles.emptyText}>我是有底线的~</Text>
        </View>
      );
    } else {
      return null;
    }
  };

  renderEmpty = () => {
    return (
      <View style={styles.noDataView}>
        <Text style={styles.noRelust}>暂无数据</Text>
      </View>
    );
  };

  onEndReached = () => {
    let { pageNum } = this.state;
    if (this.state.dataFlag) {
      pageNum += 1;
      this.setState({ pageNum: pageNum }, () => {
        this.getGiveAnAlarm();
      });
    }
  };

  onRefresh = () => {
    this.setState({ pageNum: 1 }, () => {
      this.getGiveAnAlarm();
    });
  };

  render() {
    const { alarmContent, fakeData, levelName, statusName, dateEnd } = this.state;
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
            <Image style={styles.arrowPic} source={arrowPic} resizeMode="contain" />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.statusContainer} onPress={() => this.handleSelectStatus()}>
            <Text style={styles.commonText}>{statusName || '状态'}</Text>
            <Image style={styles.arrowPic} source={arrowPic} resizeMode="contain" />
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.statusContainer}>
            {/* <Text style={styles.commonText}>时间</Text> */}
            <DatePicker
              mode="datetime"
              defaultValue={this.state.dateStart}
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
              valueTextStyle={styles.commonText2}
            />
            <Image style={styles.arrowPic} source={arrowPic} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderContainer} onPress={() => this.handleChangeOrder()}>
            <Image style={styles.orderPic} source={orderPic} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            value={alarmContent}
            placeholder="搜索用户"
            style={styles.inputBase}
            placeholderTextColor="#999"
            onBlur={() => Keyboard.dismiss()}
            onChangeText={val => this.handleSearch(val)}
          />
          <Image style={styles.searchIcon} source={searchIcon} resizeMode="contain" />
        </View>
        <View style={styles.warningContent}>
          <Text style={styles.warningText}>
            为您找到
            <Text style={styles.redText}> {12} </Text>
            条告警数据...
          </Text>
          <ScrollView horizontal style={styles.ScrollView}>
            <Text style={styles.warningText}>{`${levelName}/${statusName}/${
              dateEnd.includes('请') ? '' : dateEnd
            }`}</Text>
          </ScrollView>
        </View>
        <DashLine
          backgroundColor="#BABABC"
          len={5}
          width={hp(1282 / BASE_HEIGHT)}
          left={wp(70 / BASE_WIDTH)}
          top={hp(478 / BASE_HEIGHT)}
        />
        <FlatList
          data={fakeData}
          windowSize={300}
          refreshing={false}
          style={styles.lists}
          onEndReachedThreshold={0.1}
          onRefresh={this.onRefresh}
          renderItem={this.renderItem}
          onEndReached={this.onEndReached}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default Index;
