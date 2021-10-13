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
import { NavigationEvents } from 'react-navigation';
import Orientation from 'react-native-orientation-locker';
import { Toast, Button, PullPicker, ModalIndicator } from 'teaset';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

const arrowPic = require('../../assets/profile/xiala.png');
const orderPic = require('../../assets/warning/paixu.png');
const searchIcon = require('../../assets/warning/searchicon1.png');
const hu = require('../../assets/warning/hu.png');
const yue = require('../../assets/warning/yue.png');
const yi = require('../../assets/warning/yi.png');
const shi = require('../../assets/warning/shi.png');

// import IconFont from '@iconfont/index.js';
import { getGiveAnAlarm, getTGiveAnAlarm } from '@api/warning';

// import DatePicker from '@components/DatePicker';
import DashLine from '@components/DashLine';
import DoubleDatePicker from '@components/DoubleDatePicker';

import styles from './WarningStyle';

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex1: 0,
      selectedIndex2: 0,
      selectedIndex3: 0,
      levelName: '全部类型',
      statusName: '全部状态',
      isDatePickerVisible: false,
      // dateStart: moment()
      //   .add(-7, 'days')
      //   .format('YYYY-MM-DD'),
      // dateEnd: moment().format('YYYY-MM-DD'),
      dateStart: null,
      dateEnd: null,
      alarmContent: '',
      fakeData: [
        // {
        //   id: 1,
        //   isConfirm: false,
        //   warningType: '遥测',
        //   contentColor: '#999',
        //   warningPic: yao,
        //   warningTime: '2021-07-21 10:09:03 ',
        //   warningContent: '7=110kV变电站 35kV3115间隔PCS963D过负荷报警',
        // },
        // {
        //   id: 2,
        //   isConfirm: true,
        //   warningPic: yue,
        //   warningType: '越限',
        //   contentColor: '#28920C',
        //   warningTime: '2021-07-21 10:09:03 ',
        //   warningContent: '7=110kV变电站 35kV1母11分段PCS963D3115装置报警',
        // },
        // {
        //   id: 3,
        //   isConfirm: true,
        //   warningPic: yi,
        //   warningType: '异常',
        //   contentColor: '#FCA001',
        //   warningTime: '2021-07-21 10:09:03 ',
        //   warningContent: '7=110kV变电站 35kV1母11分段PCS963D3115负荷报警',
        // },
        // {
        //   id: 4,
        //   isConfirm: false,
        //   warningPic: shi,
        //   contentColor: '#CE0606',
        //   warningType: '事故',
        //   warningTime: '2021-07-21 10:09:03 ',
        //   warningContent: '7=110kV变电站 电气室一PCS9616D3115装置报警',
        // },
      ],
      pageNum: 1,
      pageSize: 10,
      total: 0,
      dataFlag: false,
      sort: 'desc',
      dateModalVisible: false,
      dateArr: [],
      levelArr: [],
      typeId: null,
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {}

  getTGiveAnAlarm = () => {
    getTGiveAnAlarm({}).then(res => {
      if (res && res.status === 200) {
        this.setState({ levelArr: res.body });
      }
    });
  };

  getGiveAnAlarm = () => {
    let { pageNum, pageSize, alarmContent, typeId, sort, dateStart, dateEnd } = this.state;
    const params = {
      sort,
      pageNum,
      pageSize,
      alarmContent,
    };
    if (typeId) {
      params.typeId = typeId;
    }
    if (dateStart) {
      params.startTime = moment(dateStart).valueOf();
    }
    if (dateEnd) {
      params.endTime = moment(`${dateEnd} 23:59:59`).valueOf();
    }
    // ModalIndicator.show();
    getGiveAnAlarm(params).then(res => {
      // ModalIndicator.hide();
      if (res && res.status === 200) {
        this.setState({ total: res.body.totalAmount });
        const renderPic = item => {
          const actions = new Map([
            ['异常信号', yi],
            ['越限监视', yue],
            ['重要信号', shi],
            ['保护动作', hu],
            ['default', ''],
          ]);
          const action = actions.get(item) || actions.get('default');
          return action;
        };
        if (pageNum === 1) {
          const tempArr = res.body.data || [];
          let newArr = [];
          tempArr.map(item => {
            const items = item;
            items.warningPic = renderPic(item.alarmGroup);
            newArr.push(items);
            return items;
          });
          this.setState({
            fakeData: newArr,
          });
        } else {
          let tempArr = this.state.fakeData;
          tempArr = tempArr.concat(res.body.data);
          let newArr = [];
          tempArr.map(item => {
            const items = item;
            items.warningPic = renderPic(item.alarmGroup);
            newArr.push(items);
            return items;
          });
          this.setState({
            fakeData: tempArr,
          });
        }
        //是否可以下拉
        const allLen = res.body.totalAmount;
        const nowLen = pageNum * pageSize;
        if (allLen > nowLen) {
          this.setState({ dataFlag: true });
        } else {
          this.setState({ dataFlag: false });
        }
      } else {
        Toast.fail(res.msg);
      }
    });
  };

  // 切换类型
  handleSelectLevel = () => {
    const { levelArr } = this.state;
    const items = ['全部类型'].concat(levelArr.map(item => item.name));
    if (!levelArr.length) {
      Toast.info('请先配置告警类型');
    } else {
      // const items = ['全部类型', '异常信号', '越限监视', '重要信号', '保护动作'];
      PullPicker.show('请选择告警类型', items, this.state.selectedIndex1, (item, index) => {
        this.setState(
          {
            pageNum: 1,
            pageSize: 10,
            selectedIndex1: index,
            levelName: item,
            typeId: index > 0 ? levelArr.find(i => i.name === item).id : null,
          },
          () => {
            this.getGiveAnAlarm();
          },
        );
      });
    }
  };

  // 选择时间-确定
  handleConfirm = dateArr => {
    this.setState(
      {
        dateArr,
        dateStart: dateArr[0],
        dateEnd: dateArr[1],
        dateModalVisible: false,
      },
      () => {
        const diff = moment(dateArr[0]).diff(moment(dateArr[1]), 'days');
        if (Math.abs(diff) >= 8) {
          Toast.info('只支持查询七天内的数据，请重新选择查询范围');
          this.setState({ dateStart: null, dateEnd: null });
        } else {
          this.setState({ pageNum: 1, pageSize: 10 }, () => {
            this.getGiveAnAlarm();
          });
        }
      },
    );
  };

  // 选择时间-取消
  handleCancel = () => {
    this.setState({ dateModalVisible: false, dateStart: null, dateEnd: null }, () => {
      this.setState({ pageNum: 1, pageSize: 10 }, () => {
        this.getGiveAnAlarm();
      });
    });
  };

  // 切换排序
  handleChangeOrder = () => {
    this.setState({ sort: this.state.sort === 'desc' ? 'asc' : 'desc' }, () => {
      this.getGiveAnAlarm();
    });
  };

  renderLevel = item => {
    const actions = new Map([[2, '异常信号'], [3, '越限监视'], [4, '重要信号'], [5, '保护动作'], ['default', '']]);
    const action = actions.get(item) || actions.get('default');
    return action;
  };

  // 搜索告警内容
  handleSearch = () => {
    Keyboard.dismiss();
    const { dateEnd, dateStart, sort, pageNum, pageSize, alarmContent, typeId } = this.state;
    const params = {
      sort,
      pageNum,
      pageSize,
      alarmContent,
    };
    if (typeId) {
      params.typeId = typeId;
    }
    if (dateStart) {
      params.startTime = moment(dateStart).valueOf();
    }
    if (dateEnd) {
      params.endTime = moment(`${dateEnd} 23:59:59`).valueOf();
    }
    this.getGiveAnAlarm(params);
  };

  renderColor = item => {
    const actions = new Map([
      ['异常信号', '#FCA001'],
      ['越限监视', '#28920C'],
      ['重要信号', '#CE0606'],
      ['保护动作', '#999999'],
      ['default', '#000'],
    ]);
    const action = actions.get(item) || actions.get('default');
    return action;
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
            告警类型：
            <Text style={[styles.contents, { color: this.renderColor(item.alarmGroup) }]}>{item.alarmGroup}</Text>
          </Text>
          <Text style={styles.commonLine}>
            告警时间：
            <Text style={[styles.contents, { color: this.renderColor(item.alarmGroup) }]}>
              {moment(item.actingTime).format('YYYY-MM-DD HH:mm:ss')}
            </Text>
          </Text>
          <Text style={styles.commonLine}>
            告警内容：
            <Text style={[styles.contents, { color: this.renderColor(item.alarmGroup) }]}>{item.alarmContent}</Text>
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
      this.setState({ pageNum }, () => {
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
    const { alarmContent, fakeData, levelName, statusName, dateEnd, total, dateStart } = this.state;
    const renderDate = (item1, item2) => {
      if (item1 && item2) {
        return `${moment(item1)
          .format('YYYY.MM.DD')
          .substr(2)}-${moment(item2)
          .format('YYYY.MM.DD')
          .substr(2)}`;
      } else {
        return '请选择时间';
      }
    };
    const dateShow = renderDate(dateStart, dateEnd);
    return (
      <View style={styles.container}>
        <StatusBar
          animated
          translucent
          backgroundColor="transparent"
          showHideTransition="fade"
          networkActivityIndicatorVisible
        />
        <NavigationEvents
          onDidFocus={() => {
            this.setState({
              dateArr: [dateStart, dateEnd],
            });
            this.getGiveAnAlarm();
            this.getTGiveAnAlarm();
            Orientation.lockToPortrait();
          }}
        />
        <View style={styles.navigationBar}>
          <Text style={styles.content}>告警</Text>
        </View>
        <View style={styles.conditionContainer}>
          <TouchableOpacity style={styles.levelContainer} onPress={() => this.handleSelectLevel()}>
            <Text style={styles.commonText}>{levelName || '告警类型'}</Text>
            <Image style={styles.arrowPic} source={arrowPic} resizeMode="contain" />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.statusContainer} onPress={() => this.handleSelectStatus()}>
            <Text style={styles.commonText}>{statusName || '状态'}</Text>
            <Image style={styles.arrowPic} source={arrowPic} resizeMode="contain" />
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.statusContainer} onPress={() => this.setState({ dateModalVisible: true })}>
            <Text style={styles.commonText}>{dateShow}</Text>
            <Image style={styles.arrowPic} source={arrowPic} resizeMode="contain" />
            <DoubleDatePicker
              visible={this.state.dateModalVisible}
              // defaultValue={this.state.dateArr}
              onConfirm={this.handleConfirm}
              onCancle={() => this.handleCancel()}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderContainer} onPress={() => this.handleChangeOrder()}>
            <Image style={styles.orderPic} source={orderPic} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            value={alarmContent}
            placeholder="搜索告警内容"
            style={styles.inputBase}
            placeholderTextColor="#999"
            onBlur={() => Keyboard.dismiss()}
            onChangeText={val => this.setState({ alarmContent: val })}
          />
          <TouchableOpacity style={styles.searchIcon} onPress={() => this.handleSearch()}>
            {/* <Image style={styles.searchIcon} source={searchIcon} resizeMode="contain" /> */}
            <Text style={styles.searchText}>搜 索</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.warningContent}>
          <Text style={styles.warningText}>
            为您找到
            <Text style={styles.redText}> {total} </Text>
            条告警数据...
          </Text>
          <ScrollView horizontal style={styles.ScrollView}>
            <Text style={styles.warningText}>{`${levelName}/${dateShow}`}</Text>
          </ScrollView>
        </View>
        <DashLine
          len={50}
          backgroundColor="#BABABC"
          width={hp(1282 / BASE_HEIGHT)}
          left={wp(70 / BASE_WIDTH)}
          top={hp(478 / BASE_HEIGHT)}
          dashItem={styles.dashItem}
        />
        <FlatList
          data={fakeData}
          windowSize={300}
          refreshing={false}
          onEndReachedThreshold={0.1}
          onRefresh={this.onRefresh}
          renderItem={this.renderItem}
          onEndReached={() => this.onEndReached()}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default Index;
