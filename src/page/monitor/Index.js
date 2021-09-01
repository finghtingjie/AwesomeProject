import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';

import { Toast, Button, PullPicker } from 'teaset';

const rect = require('../../assets/monitor/rect.png');
const changePic = require('../../assets/monitor/change.png');
const shuPic = require('../../assets/monitor/shu.png');

// import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

import styles from './MonitorStyle';

const arr = [
  '1#110kV站',
  '2#110kV站',
  '3#110kV站',
  '4#110kV站',
  '5#110kV站',
  '6#110kV站',
  '7#110kV站',
  '制氧二期110kV站',
  '4#高炉鼓风110kV站',
  'MCCR110kV站',
  '2230冷轧110kV站',
  '高炉鼓风110kV站',
  '制氧110kV站',
  '2250热轧110kV站',
  '1580热轧110kV站',
  '1700冷轧110kV站',
  '1420冷轧110kV站',
];

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      actionIndex: 0,
      actionIndex2: 0,
      actionsheetShow: false,
      tableHead: ['名称', '有功功率(MW)', '无功功率(MVar)', '电流(A)'],
      tableData: [
        ['铁扎一线', '61.13', '26.86', '0.91'],
        ['铁扎二线', '61.13', '26.86', '0.91'],
        ['曹铁一线', '61.13', '26.86', '0.91'],
        ['曹铁二线', '61.13', '26.86', '0.91'],
      ],
      dataSource: [
        {
          id: 45,
          name: '铁扎一线',
          yougong: '100',
          wugong: '100',
          dianliu: 56,
        },
        {
          id: 46,
          name: '铁扎二线',
          yougong: '100',
          wugong: '100',
          dianliu: 56,
        },
        {
          id: 47,
          name: '曹铁一线',
          yougong: '100',
          wugong: '100',
          dianliu: 56,
        },
        {
          id: 48,
          name: '曹铁二线',
          yougong: '100',
          wugong: '100',
          dianliu: 56,
        },
      ],
      arr2: ['220kV铁钢变电站', '220kV轧钢变电站', '110kV热电变电站', 'CCPP110kV变电站'],
      tabArr: ['220kv', '110kv', '10kv', '主变'],
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {}

  handleTypeChange = (item, index) => {
    // const { actionIndex2, actionIndex } = this.state;
    this.setState({ actionIndex: index, actionIndex2: 0 });
    if (index === 0) {
      this.setState({ arr2: ['220kV铁钢变电站', '220kV轧钢变电站', '110kV热电变电站', 'CCPP110kV变电站'] });
    } else {
      this.setState({ arr2: arr });
    }
  };

  handleTypeChange2 = (item, index) => {
    // const { actionIndex2, actionIndex } = this.state;
    // 点击右侧条件,关闭actionsheet
    this.setState({ actionIndex2: index, actionsheetShow: false });
    if ([0, 1].includes(index)) {
      // 220kv场站，有四个tab
      console.log('eg1');
      this.setState({ tabArr: ['220kv', '110kv', '10kv', '主变'] });
    } else if (index === 2) {
      // 110kv场站，有三个tab，无220kv tab
      console.log('eg2');
      this.setState({ tabArr: ['110kv', '10kv', '主变'] });
    }
  };

  handleChangZhan = () => {
    const { navigation } = this.props;
    // 跳转至场站接线图界面
    navigation.navigate('');
  };

  render() {
    const { tableData, tableHead, activeIndex, actionIndex, actionIndex2, actionsheetShow, tabArr, arr2 } = this.state;
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
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => this.setState({ actionsheetShow: !actionsheetShow })}>
            <Image style={styles.rect} source={rect} />
            <Text style={styles.leftText}>源 端</Text>
          </TouchableOpacity>
          <Text style={styles.content}>{''}</Text>
          <TouchableOpacity style={styles.iconContainerRight} onPress={() => this.handleChangZhan()}>
            <Image style={styles.changePic} source={changePic} />
          </TouchableOpacity>
        </View>
        {/* 筛选条件 */}
        {actionsheetShow && (
          <View style={styles.actionSheet}>
            <View style={styles.storeTypeContainer}>
              <View style={styles.leftBtnContainer}>
                {['源端', '网侧'].map((item, index) => {
                  return (
                    <Button key={item} style={styles.leftBtn} onPress={() => this.handleTypeChange(1, index)}>
                      <Text style={actionIndex === index ? styles.leftBtnTextActive : styles.leftBtnText}>{item}</Text>
                    </Button>
                  );
                })}
              </View>
              <View>
                <ScrollView style={styles.ScrollView}>
                  {arr2.map((item, index) => {
                    return (
                      <Button key={item} style={styles.rightBtn} onPress={() => this.handleTypeChange2(2, index)}>
                        <Text style={actionIndex2 === index ? styles.leftBtnTextActive : styles.leftBtnText}>
                          {item}
                        </Text>
                      </Button>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
            <TouchableOpacity onPress={() => this.setState({ actionsheetShow: false })} style={styles.typeBottom} />
          </View>
        )}

        <View style={styles.tabContainer}>
          {tabArr.map((item, index) => {
            return (
              <TouchableOpacity
                key={item}
                style={styles.commonBtn}
                onPress={() => this.setState({ activeIndex: index })}>
                <Text style={styles.commonText}>{item}</Text>
                {index === activeIndex && <View style={styles.commonBorder} />}
              </TouchableOpacity>
            );
          })}
        </View>
        {/* table */}
        <View style={styles.commonTableContainer}>
          <View style={styles.tabTitleContainer}>
            <Image style={styles.shuPic} source={shuPic} />
            <Text style={styles.tabTitle}>进线/联络线</Text>
          </View>
          <View style={styles.tableContainer}>
            <View style={styles.headContainer}>
              {tableHead.map((item, index) => {
                return (
                  <View key={item} style={styles.nameStyle}>
                    <Text style={styles.commonColText}>{item}</Text>
                  </View>
                );
              })}
            </View>
            {tableData.map(item => {
              return (
                <View style={styles.rowContainer}>
                  {item.map(items => {
                    return (
                      <View key={items} style={styles.nameStyle}>
                        <Text style={styles.commonrowText}>{items}</Text>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
