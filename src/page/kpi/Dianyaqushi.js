import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';

import { Toast, Button, PullPicker } from 'teaset';
import { WebView } from 'react-native-webview';
import { ECharts } from 'react-native-echarts-wrapper';

import Orientation from 'react-native-orientation-locker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const backIcon = require('../../assets/backicon.png');
const arrowPic = require('../../assets/profile/xiala.png');
import IconFont from '@iconfont/index.js';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

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
class Index extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      option: {
        color: ['#3CBE1E', '#1C6DDA'], //图例颜色
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['4#母线', '5#母线'],
          left: '3%',
        },
        grid: {
          left: '3%',
          right: '0%',
          bottom: '0%',
          width: '94%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
            '00:00',
            '00:15',
            '00:30',
            '00:45',
            '01:00',
            '01:15',
            '01:30',
            '01:45',
            '02:00',
            '02:15',
            '02:30',
            '02:45',
          ],
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none',
            },
            restore: {},
          },
        },
        series: [
          {
            name: '4#母线',
            type: 'line',
            lineStyle: {
              color: '#3CBE1E',
            },
            stack: '总量',
            data: [10, 12, 14, 16, 20, 26, 28, 24, 20, 16, 14, 9],
          },
          {
            name: '5#母线',
            type: 'line',
            lineStyle: {
              color: '#1C6DDA',
            },
            stack: '总量',
            data: [10, 12, 14, 16, 20, 26, 28, 24, 20, 16, 14, 9],
            markLine: {
              lineStyle: {
                color: 'red',
              },
              data: [
                {
                  yAxis: 90,
                },
                {
                  yAxis: 40,
                },
              ],
            },
          },
        ],
      },
      activeIndex: 0,
      actionIndex: 0,
      actionIndex2: 0,
      actionsheetShow: false,
      arr2: ['220kV铁钢变电站', '220kV轧钢变电站', '110kV热电变电站', 'CCPP110kV变电站'],
    };
  }

  componentDidMount() {
    Orientation.lockToLandscapeLeft();
  }

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

  handleChange = item => {};

  render() {
    const { option, activeIndex, actionIndex, actionIndex2, actionsheetShow, arr2 } = this.state;
    // 电压趋势图中共3级：
    // 第一级为场站（场站支持切换），
    // 第二级为电压等级（220kV场站有3种电压等级，110kV场站有2种电压等级），
    // 第三级为具体母线电压
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
          <TouchableOpacity style={styles.content} onPress={() => this.setState({ actionsheetShow: !actionsheetShow })}>
            <Text style={styles.contentText}>{`(${arr2[actionIndex2]}) 电压趋势图`}</Text>
            <IconFont name="xiala" size={24} color="#fff" />
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
        <View style={styles.btnContainer}>
          <Button style={styles.commonBtn} onPress={this.handleChange(1)}>
            <Text style={styles.submitBtnText}>220kv</Text>
          </Button>
          <Button style={[styles.commonBtn, styles.commonColor]} onPress={this.handleChange(2)}>
            <Text style={styles.submitBtnText}>110kv</Text>
          </Button>
          <Button style={[[styles.commonBtn, styles.commonColor]]} onPress={this.handleChange(3)}>
            <Text style={styles.submitBtnText}>10kv</Text>
          </Button>
        </View>
        <ECharts option={option} backgroundColor="#fff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: wp(126 / BASE_WIDTH),
  },
  commonBtn: {
    paddingVertical: 0,
    backgroundColor: '#588CE4',
    borderColor: '#588CE4',
    width: hp(140 / BASE_WIDTH),
    height: hp(80 / BASE_HEIGHT),
    borderRadius: wp(20 / BASE_WIDTH),
    marginRight: wp(20 / BASE_WIDTH),
    marginTop: hp(82 / BASE_HEIGHT),
    marginBottom: hp(42 / BASE_HEIGHT),
  },
  submitBtnText: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'normal',
    fontSize: hp(32 / BASE_HEIGHT),
  },
  navigationBar: {
    width: '100%',
    height: hp(215 / BASE_HEIGHT),
    backgroundColor: '#3D447B',
  },
  commonColor: {
    backgroundColor: '#3D447B',
    borderColor: '#3D447B',
  },
  iconContainer: {
    position: 'absolute',
    width: 'auto',
    top: hp(130 / BASE_HEIGHT),
    height: hp(215 / BASE_HEIGHT),
    left: wp(70 / BASE_WIDTH),
    zIndex: 100,
  },
  backIcon: {
    width: wp(24 / BASE_WIDTH),
    height: hp(40 / BASE_HEIGHT),
  },
  content: {
    position: 'absolute',
    width: '60%',
    left: '20%',
    top: hp(128 / BASE_HEIGHT),
    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'center',
    // left: wp(70 / BASE_WIDTH),
  },
  contentText: {
    // width: '100%',
    color: '#fff',
    textAlign: 'center',
    fontSize: hp(48 / BASE_HEIGHT),
    // height: hp(215 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  arrowPic: {
    position: 'relative',
    alignSelf: 'center',
    width: wp((30 * 2) / BASE_WIDTH),
    height: hp((16 * 2) / BASE_HEIGHT),
  },

  actionSheet: {
    position: 'absolute',
    zIndex: 999,
    top: hp(215 / BASE_HEIGHT),
    left: hp(0 / BASE_HEIGHT),
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '100%',
  },
  storeTypeContainer: {
    position: 'relative',
    width: '100%',
    flexWrap: 'wrap',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  leftBtnContainer: {
    width: wp(185 / BASE_WIDTH),
    height: 'auto',
    justifyContent: 'flex-start',
    alignContent: 'center',
    paddingLeft: wp(15 / BASE_WIDTH),
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  ScrollView: {
    position: 'relative',
    width: 'auto',
    height: hp(400 / BASE_HEIGHT),
  },
  leftBtn: {
    width: wp(160 / BASE_WIDTH),
    height: hp(100 / BASE_HEIGHT),
    backgroundColor: '#fff',
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
    padding: 0,
  },
  leftBtnText: {
    color: '#333',
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  typeBottom: {
    height: '100%',
    width: wp(100),
  },
  leftBtnTextActive: {
    color: '#3D447B',
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  rightBtn: {
    width: 'auto',
    height: hp(100 / BASE_HEIGHT),
    backgroundColor: '#fff',
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
  },
});

export default Index;
