import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';

import moment from 'moment';
import { Toast, Button } from 'teaset';
// import { WebView } from 'react-native-webview';
import { ECharts } from 'react-native-echarts-wrapper';

import Orientation from 'react-native-orientation-locker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const backIcon = require('../../assets/backicon.png');
// const arrowPic = require('../../assets/profile/xiala.png');
import IconFont from '@iconfont/index.js';
import { voltageTrend } from '@api/kpi';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

const commonGrid = {
  left: '3%',
  right: '5%',
  bottom: '0%',
  width: '90%',
  containLabel: true,
};

const commonxAxis = {
  type: 'category',
  boundaryGap: false,
  data: [],
};

const commonyAxis = {
  type: 'value',
  min: 90,
  max: 150,
  // splitNumber: 0.5,
  minInterval: 0.5,
  splitLine: {
    show: false,
  },
  minorSplitLine: {
    show: true,
  },
};

const commonToolbox = {
  feature: {
    dataZoom: {
      yAxisIndex: 'none',
      title: {
        zoom: '区域缩放',
        back: '区域缩放还原',
      },
    },
    restore: {
      title: '还原',
    },
  },
};

const arr = [
  '1#110kV站',
  '2#110kV站',
  '3#110kV站',
  '4#110kV站',
  '5#110kV站',
  '6#110kV站',
  '7#110kV站',
  '制氧二期110kV站',
  'MCCR110kV站',
  '2230冷轧110kV站',
  '制氧110kV站',
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
          textStyle: {
            fontSize: 10,
          },
        },
        legend: {
          data: ['4#母线', '5#母线'],
          left: '3%',
        },
        grid: commonGrid,
        xAxis: commonxAxis,
        yAxis: commonyAxis,
        toolbox: commonToolbox,
        series: [
          {
            name: '4#母线',
            type: 'line',
            lineStyle: {
              color: '#3CBE1E',
            },
            data: [],
          },
          {
            name: '5#母线',
            type: 'line',
            lineStyle: {
              color: '#1C6DDA',
            },
            data: [],
          },
        ],
      },
      activeIndex: 0,
      actionIndex: 0,
      actionIndex2: 0,
      actionsheetShow: false,
      arr2: ['220kV铁钢站', '220kV轧钢站', '热电110kV站', 'CCPP110kV站'],
      tabArr: ['220kV', '110kV', '10kV'],
      newArr: [],
    };
  }

  componentDidMount() {
    Orientation.lockToLandscapeLeft();
    this.voltageTrend();
  }

  setOption1 = (res, val, type) => {
    this.ECharts.clear();
    const resArr = Object.keys(res.body);
    const resData = res.body[resArr[0]];
    let newArr = [];
    resData[0].time.map(item => {
      item = moment(item).format('YYYY-MM-DD HH:mm');
      newArr.push(item);
    });
    const formatVal = newArr.map(item => item.slice(11, 16));
    const option = {
      color: ['#3CBE1E'], //图例颜色
      tooltip: {
        trigger: 'axis',
        textStyle: {
          fontSize: 10,
        },
      },
      legend: {
        data: [val],
        left: '3%',
      },
      grid: commonGrid,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: formatVal,
      },
      yAxis: {
        type: 'value',
        min: type === '35kV' ? 20 : 90,
        max: type === '35kV' ? 50 : 150,
        minInterval: 0.5,
        splitLine: {
          show: false,
        },
        minorSplitLine: {
          show: true,
        },
      },
      toolbox: commonToolbox,
      series: [
        {
          name: val,
          type: 'line',
          lineStyle: {
            color: '#3CBE1E',
          },
          data: resData[0].value,
        },
      ],
    };
    this.ECharts.setOption(option);
  };

  setOption2 = (res, type) => {
    this.ECharts.clear();
    const resArr = Object.keys(res.body);
    const resData = res.body[resArr[0]];
    const resData2 = res.body[resArr[1]];
    let newArr = [];
    resData[0].time.map(item => {
      item = moment(item).format('YYYY-MM-DD HH:mm');
      newArr.push(item);
    });
    const formatVal = newArr.map(item => item.slice(11, 16));
    const option = {
      color: ['#3CBE1E', '#1C6DDA'], //图例颜色
      tooltip: {
        trigger: 'axis',
        textStyle: {
          fontSize: 10,
        },
      },
      legend: {
        data: ['4#母线', '5#母线'],
        left: '3%',
      },
      grid: commonGrid,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: formatVal,
      },
      yAxis: {
        type: 'value',
        min: type === '220kV' ? 209 : 90,
        max: type === '220kV' ? 231 : 150,
        minInterval: 0.5,
        splitLine: {
          show: false,
        },
        minorSplitLine: {
          show: true,
        },
      },
      toolbox: commonToolbox,
      series: [
        {
          name: '4#母线',
          type: 'line',
          lineStyle: {
            color: '#3CBE1E',
          },
          data: resData[0].value,
        },
        {
          name: '5#母线',
          type: 'line',
          lineStyle: {
            color: '#1C6DDA',
          },
          data: resData2[0].value,
        },
      ],
    };
    this.ECharts.setOption(option);
  };

  setOption3 = res => {
    this.ECharts.clear();
    const resArr = Object.keys(res.body);
    const resData = res.body[resArr[0]];
    const resData2 = res.body[resArr[1]];
    const resData3 = res.body[resArr[3]];
    let newArr = [];
    resData[0].time.map(item => {
      item = moment(item).format('YYYY-MM-DD HH:mm');
      newArr.push(item);
    });
    const formatVal = newArr.map(item => item.slice(11, 16));
    const option = {
      color: ['#3CBE1E', '#1C6DDA'], //图例颜色
      tooltip: {
        trigger: 'axis',
        textStyle: {
          fontSize: 10,
        },
      },
      legend: {
        data: ['Ⅰ段母线', 'Ⅱ段母线', 'Ⅱ段母线2', 'Ⅲ段母线'],
        left: '3%',
      },
      grid: commonGrid,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: formatVal,
      },
      yAxis: {
        type: 'value',
        min: 5,
        max: 15,
        minInterval: 0.5,
        splitLine: {
          show: false,
        },
        minorSplitLine: {
          show: true,
        },
      },
      toolbox: commonGrid,
      series: [
        {
          name: 'Ⅰ段母线',
          type: 'line',
          lineStyle: {
            color: '#3CBE1E',
          },
          data: resData[0].value,
        },
        {
          name: 'Ⅱ段母线',
          type: 'line',
          data: resData2[0].value,
        },
        {
          name: 'Ⅱ段母线2',
          type: 'line',
          data: [],
        },
        {
          name: 'Ⅲ段母线',
          type: 'line',
          data: resData3[0].value,
        },
      ],
    };
    this.ECharts.setOption(option);
  };

  setOption33 = (res, type) => {
    this.ECharts.clear();
    const resArr = Object.keys(res.body);
    const resData = res.body[resArr[0]];
    const resData2 = res.body[resArr[1]];
    const resData3 = res.body[resArr[2]];
    let newArr = [];
    resData[0].time.map(item => {
      item = moment(item).format('YYYY-MM-DD HH:mm');
      newArr.push(item);
    });
    const formatVal = newArr.map(item => item.slice(11, 16));
    const option = {
      color: ['#3CBE1E', '#1C6DDA'], //图例颜色
      tooltip: {
        trigger: 'axis',
        textStyle: {
          fontSize: 10,
        },
      },
      legend: {
        data: ['Ⅰ段母线', 'Ⅱ段母线', 'Ⅲ段母线'],
        left: '3%',
      },
      grid: commonGrid,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: formatVal,
      },
      yAxis: {
        type: 'value',
        min: type === '10kV' ? 5 : 20,
        max: type === '10kV' ? 15 : 50,
        minInterval: 0.5,
        splitLine: {
          show: false,
        },
        minorSplitLine: {
          show: true,
        },
      },
      toolbox: commonToolbox,
      series: [
        {
          name: 'Ⅰ段母线',
          type: 'line',
          lineStyle: {
            color: '#3CBE1E',
          },
          data: resData[0].value,
        },
        {
          name: 'Ⅱ段母线',
          type: 'line',
          lineStyle: {
            color: '#1C6DDA',
          },
          data: resData2[0].value,
        },
        {
          name: 'Ⅲ段母线',
          type: 'line',
          data: resData3[0].value,
        },
      ],
    };
    this.ECharts.setOption(option);
  };

  setOption4 = res => {
    this.ECharts.clear();
    const resArr = Object.keys(res.body);
    const resData = res.body[resArr[0]];
    const resData2 = res.body[resArr[1]];
    const resData3 = res.body[resArr[2]];
    const resData4 = res.body[resArr[3]];
    let newArr = [];
    resData[0].time.map(item => {
      item = moment(item).format('YYYY-MM-DD HH:mm');
      newArr.push(item);
    });
    const formatVal = newArr.map(item => item.slice(11, 16));
    const option = {
      color: ['#3CBE1E', '#1C6DDA'], //图例颜色
      tooltip: {
        trigger: 'axis',
        textStyle: {
          fontSize: 10,
        },
      },
      legend: {
        data: ['4乙母线', '4甲母线', '5乙母线', '5甲母线'],
        left: '3%',
      },
      grid: commonGrid,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: formatVal,
      },
      yAxis: {
        type: 'value',
        min: 90,
        max: 150,
        minInterval: 0.5,
        splitLine: {
          show: false,
        },
        minorSplitLine: {
          show: true,
        },
      },
      toolbox: commonToolbox,
      series: [
        {
          name: '4乙母线',
          type: 'line',
          lineStyle: {
            color: '#3CBE1E',
          },
          data: resData[0].value,
        },
        {
          name: '4甲母线',
          type: 'line',
          lineStyle: {
            color: '#1C6DDA',
          },
          data: resData2[0].value,
        },
        {
          name: '5乙母线',
          type: 'line',
          data: resData3[0].value,
        },
        {
          name: '5甲母线',
          type: 'line',
          data: resData4[0].value,
        },
      ],
    };
    console.log(option);
    this.ECharts.setOption(option);
  };

  setOption5 = res => {
    const resArr = Object.keys(res.body);
    const resData = res.body[resArr[0]];
    const resData2 = res.body[resArr[1]];
    const resData3 = res.body[resArr[2]];
    const resData4 = res.body[resArr[3]];
    const resData5 = res.body[resArr[4]];
    let newArr = [];
    resData[0].time.map(item => {
      item = moment(item).format('YYYY-MM-DD HH:mm');
      newArr.push(item);
    });
    const formatVal = newArr.map(item => item.slice(11, 16));
    const option = {
      color: ['#3CBE1E', '#1C6DDA'], //图例颜色
      tooltip: {
        trigger: 'axis',
        textStyle: {
          fontSize: 8,
        },
      },
      legend: {
        data: ['Ⅰ段母线', 'Ⅱ段A母线', 'Ⅱ段B母线', 'Ⅱ段母线', 'Ⅲ段母线'],
        left: '3%',
      },
      grid: commonGrid,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: formatVal,
      },
      yAxis: {
        type: 'value',
        min: 5,
        max: 15,
        minInterval: 0.5,
        splitLine: {
          show: false,
        },
        minorSplitLine: {
          show: true,
        },
      },
      toolbox: commonToolbox,
      series: [
        {
          name: 'Ⅰ段母线',
          type: 'line',
          lineStyle: {
            color: '#3CBE1E',
          },
          data: resData[0].value,
        },
        {
          name: 'Ⅱ段A母线',
          type: 'line',
          lineStyle: {
            color: '#1C6DDA',
          },
          data: resData2[0].value,
        },
        {
          name: 'Ⅱ段B母线',
          type: 'line',
          data: resData3[0].value,
        },
        {
          name: 'Ⅱ段母线',
          type: 'line',
          data: resData4[0].value,
        },
        {
          name: 'Ⅲ段母线',
          type: 'line',
          data: resData5[0].value,
        },
      ],
    };
    this.ECharts.setOption(option);
  };

  voltageTrend = () => {
    const { tabArr, activeIndex, actionIndex2, arr2 } = this.state;
    const params = {
      station: arr2[actionIndex2],
      voltage: tabArr[activeIndex],
    };
    voltageTrend(params).then(res => {
      const station = arr2[actionIndex2];
      const voltage = tabArr[activeIndex];
      if (res && res.status === 200) {
        switch (station) {
          case '220kV铁钢站':
            if (voltage === '220kV') {
              const resData = res.body['220kV4#母线'];
              const resData2 = res.body['220kV5#母线'];
              let newArr = [];
              resData[0].time.map(item => {
                item = moment(item).format('YYYY-MM-DD HH:mm');
                newArr.push(item);
              });
              const formatVal = newArr.map(item => item.slice(11, 16));
              let { option } = this.state;
              option.xAxis.data = formatVal;
              option.yAxis.min = 209;
              option.yAxis.max = 231;
              option.yAxis.minInterval = 2;
              option.series[0].name = '4#母线';
              option.series[1].name = '5#母线';
              option.legend.data = ['4#母线', '5#母线'];
              option.series[0].data = resData[0].value;
              option.series[1].data = resData2[0].value;
              if (option.series.length >= 3) {
                option.series[option.series.length - 1].data = [];
              }
              this.setState({ option, newArr }, () => {
                this.ECharts.setOption(this.state.option);
              });
            } else if (voltage.includes('110')) {
              this.setOption4(res);
            } else if (voltage === '10kV') {
              const resData = res.body['10kVⅠ段母线'];
              let newArr = [];
              resData[0].time.map(item => {
                item = moment(item).format('hh:mm');
                newArr.push(item);
              });
              const resData2 = res.body['10kVⅡ段母线'];
              const resData3 = res.body['10kVⅢ段母线'];
              let { option } = this.state;
              option.series.push({});
              option.series[0].name = 'Ⅰ段母线';
              option.series[1].name = 'Ⅱ段母线';
              option.series[2].name = 'Ⅲ段母线';
              option.yAxis.min = 5;
              option.yAxis.max = 15;
              option.series[2].type = option.series[1].type;
              option.series[2].lineStyle = option.series[1].lineStyle;
              option.legend.data = ['Ⅰ段母线', 'Ⅱ段母线', 'Ⅲ段母线'];
              option.series[0].data = resData[0].value;
              option.series[1].data = resData2[0].value;
              option.series[2].data = resData3[0].value;
              this.ECharts.clear();
              if (option.series.length >= 4) {
                option.series[option.series.length - 1].data = [];
              }
              this.setState({ option, newArr }, () => {
                this.ECharts.setOption(option);
              });
            }
            break;
          case '220kV轧钢站':
            if (voltage === '220kV') {
              this.setOption2(res, '220kV');
            } else if (voltage === '110kV') {
              this.setOption4(res);
            } else if (voltage === '10kV') {
              this.setOption3(res, '10kV');
            }
            break;
          case '热电110kV站':
            this.setOption4(res);
            break;
          case 'CCPP110kV站':
          case '制氧二期110kV站':
          case 'MCCR110kV站':
          case '2230冷轧110kV站':
          case '制氧110kV站':
          case '1420冷轧110kV站':
            this.setOption1(res, 'Ⅰ段母线', '110kV');
            break;
          case '1#110kV站':
          case '3#110kV站':
          case '4#110kV站':
          case '5#110kV站':
            if (voltage === '110kV') {
              this.setOption2(res, '110kV');
            } else if (voltage === '10kV') {
              this.setOption33(res, '10kV');
            }
            break;
          case '2#110kV站':
            if (voltage === '110kV') {
              this.setOption2(res, '110kV');
            } else if (voltage === '35kV') {
              this.setOption1(res, 'Ⅰ段母线', '35kV');
            } else if (voltage === '10kV') {
              this.setOption33(res, '10kV');
            }
            break;
          case '6#110kV站':
            if (voltage === '110kV') {
              this.setOption4(res);
            } else if (voltage === '35kV') {
              this.setOption33(res, '35kV');
            } else if (voltage === '10kV') {
              this.setOption5(res);
            }
            break;
          case '7#110kV站':
            if (voltage === '110kV') {
              this.setOption2(res, '110kV');
            } else if (voltage === '35kV') {
              this.setOption33(res, '35kV');
            } else if (voltage === '10kV') {
              this.setOption33(res, '10kV');
            }
            break;

          default:
            return '';
        }
      }
    });
  };

  handleTypeChange = (item, index) => {
    // const { actionIndex2, actionIndex } = this.state;
    this.setState({ actionIndex: index, actionIndex2: 0 });
    if (index === 0) {
      this.setState({
        arr2: ['220kV铁钢站', '220kV轧钢站', '热电110kV站', 'CCPP110kV站'],
      });
    } else {
      this.setState({ arr2: arr });
    }
  };

  handleTypeChange2 = (item, index) => {
    const { actionIndex } = this.state;
    // 源端场站
    // 220kV铁钢站  220 110 10
    // 220kV轧钢站  220 110 10
    // 热电110kV站  110
    // CCPP110kV站  110
    if (actionIndex === 0 && [0, 1].includes(index)) {
      this.setState({ tabArr: ['220kV', '110kV', '10kV'], activeIndex: 0 });
    } else if (actionIndex === 0 && index >= 2) {
      this.setState({ tabArr: ['110kV'], activeIndex: 0 });
      // 网侧
      // 1#110kV站 110 10
      // 2#110kV站  110 35 10
      // 3#110kV站  110 10
      // 4#110kV站  110 10
      // 5#110kV站  110 10
      // 6#110kV站  110 35 10
      // 7#110kV站 110 35 10
      // 制氧二期110kV站  110
      // MCCR110kV站  110
      // 2230冷轧110kV站  110
      // 制氧110kV站 110
      // 1420冷轧110kV站  110
    } else if (actionIndex === 1 && [0, 2, 3, 4].includes(index)) {
      this.setState({ tabArr: ['110kV', '10kV'], activeIndex: 0 });
    } else if (actionIndex === 1 && [1, 5, 6].includes(index)) {
      this.setState({ tabArr: ['110kV', '35kV', '10kV'], activeIndex: 0 });
    } else if (actionIndex === 1 && index > 6) {
      this.setState({ tabArr: ['110kV'], activeIndex: 0 });
    }
    // 点击右侧条件,关闭actionsheet
    this.setState({ actionIndex2: index, actionsheetShow: false }, () => {
      this.voltageTrend();
    });
  };

  handleTabChange = (item, index) => {
    this.setState({ activeIndex: index }, () => {
      this.voltageTrend();
    });
  };

  render() {
    const { option, activeIndex, actionIndex, actionIndex2, actionsheetShow, arr2, tabArr, newArr } = this.state;
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
              <Image style={styles.backIcon} source={backIcon} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.content}
              onPress={() => this.setState({ actionsheetShow: !actionsheetShow })}>
              <Text style={styles.contentText}>{`${arr2[actionIndex2]} 电压趋势图`}</Text>
              <IconFont name="xiala" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        {/* 筛选条件 */}
        {actionsheetShow && (
          <View style={styles.actionSheet}>
            <View style={styles.storeTypeContainer}>
              <View style={styles.leftBtnContainer}>
                {['源端', '网侧'].map((item, index) => {
                  return (
                    <Button key={item} style={styles.leftBtn} onPress={() => this.handleTypeChange(1, index)}>
                      <Text style={actionIndex === index ? styles.leftBtnTextActive1 : styles.leftBtnText1}>
                        {item}
                      </Text>
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
          {tabArr.map((item, index) => {
            return (
              <Button
                key={item}
                style={index === activeIndex ? styles.commonBtn : styles.commonColor}
                onPress={() => this.handleTabChange(item, index)}>
                <Text style={styles.submitBtnText}>{item}</Text>
              </Button>
            );
          })}
        </View>
        <View style={styles.EChartsContainer}>
          {newArr.length >= 10 && (
            <ECharts
              option={option}
              backgroundColor="#fff"
              ref={ref => (this.ECharts = ref)}
              onData={() => this.voltageTrend()}
            />
          )}
        </View>
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
  EChartsContainer: {
    width: '100%',
    height: hp(500 / BASE_HEIGHT),
    // backgroundColor: 'pink',
    // marginBottom: hp(102 / BASE_HEIGHT),
  },
  commonBtn: {
    paddingVertical: 0,
    backgroundColor: '#588CE4',
    borderColor: '#588CE4',
    width: hp(140 / BASE_WIDTH),
    height: hp(80 / BASE_HEIGHT),
    borderRadius: wp(20 / BASE_WIDTH),
    marginRight: wp(20 / BASE_WIDTH),
    marginTop: hp(32 / BASE_HEIGHT),
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
  navigationContainer: {
    position: 'absolute',
    width: '100%',
    height: hp(112 / BASE_HEIGHT),
    bottom: 0,
    left: wp(80 / BASE_WIDTH),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    position: 'relative',
    width: '10%',
    marginLeft: -wp(80 / BASE_WIDTH),
    // top: hp(108 / BASE_HEIGHT),
    height: hp(112 / BASE_HEIGHT),
    // left: wp(70 / BASE_WIDTH),
    // zIndex: 100,
  },
  backIcon: {
    marginLeft: wp(80 / BASE_WIDTH),
    width: wp(24 / BASE_WIDTH),
    height: hp(40 / BASE_HEIGHT),
    marginTop: hp(36 / BASE_HEIGHT),
  },
  content: {
    position: 'absolute',
    width: '60%',
    textAlign: 'center',
    fontSize: hp(48 / BASE_HEIGHT),
    fontWeight: 'bold',
    top: hp(0 / BASE_HEIGHT),
    height: hp(112 / BASE_HEIGHT),
    left: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    // width: '100%',
    color: '#fff',
    textAlign: 'center',
    fontSize: hp(48 / BASE_HEIGHT),
    height: hp(112 / BASE_HEIGHT),
    lineHeight: hp(112 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  commonColor: {
    backgroundColor: '#3D447B',
    borderColor: '#3D447B',
    paddingVertical: 0,
    width: hp(140 / BASE_WIDTH),
    height: hp(80 / BASE_HEIGHT),
    borderRadius: wp(20 / BASE_WIDTH),
    marginRight: wp(20 / BASE_WIDTH),
    marginTop: hp(32 / BASE_HEIGHT),
    marginBottom: hp(42 / BASE_HEIGHT),
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
  typeBottom: {
    height: '100%',
    width: wp(100),
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
    marginLeft: wp(20 / BASE_WIDTH),
    width: wp(300 / BASE_WIDTH),
    color: '#333',
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    textAlign: 'left',
    fontSize: hp(32 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  leftBtnTextActive: {
    marginLeft: wp(20 / BASE_WIDTH),
    width: wp(300 / BASE_WIDTH),
    color: '#3D447B',
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    textAlign: 'left',
    fontSize: hp(32 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  leftBtnTextActive1: {
    width: wp(160 / BASE_WIDTH),
    color: '#3D447B',
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  leftBtnText1: {
    width: wp(160 / BASE_WIDTH),
    color: '#333',
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  rightBtn: {
    width: wp(1540 / BASE_WIDTH),
    height: hp(100 / BASE_HEIGHT),
    backgroundColor: '#fff',
    borderColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 0,
  },
});

export default Index;
