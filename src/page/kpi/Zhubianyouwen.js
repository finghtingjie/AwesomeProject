import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';

import moment from 'moment';
import { Toast, Button } from 'teaset';
// import { WebView } from 'react-native-webview';
import { ECharts } from 'react-native-echarts-wrapper';

import Orientation from 'react-native-orientation-locker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const backIcon = require('../../assets/backicon.png');
import IconFont from '@iconfont/index.js';
import { getOilTemperatureOfMainTransformer } from '@api/kpi';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

const webViewsource = { uri: 'file:///android_asset/zhubianyouwen.html' };

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
  data: ['00:00', '00:15', '00:30', '00:45', '01:00', '01:15', '01:30', '01:45', '02:00', '02:15', '02:30', '02:45'],
};

const commonyAxis = {
  type: 'value',
  min: -20,
  max: 85,
  splitNumber: 4,
  minInterval: 4,
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
        },
        legend: {
          data: ['油温1', '油温2'],
          left: '3%',
        },
        grid: commonGrid,
        xAxis: commonxAxis,
        yAxis: commonyAxis,
        toolbox: commonToolbox,
        series: [
          {
            name: '油温1',
            type: 'line',
            lineStyle: {
              color: '#3CBE1E',
            },
            data: [],
          },
          {
            name: '油温2',
            type: 'line',
            lineStyle: {
              color: '#1C6DDA',
            },
            data: [],
            // markLine: {
            //   symbol: ['none', 'none'], //去掉箭头
            //   itemStyle: {
            //     normal: {
            //       lineStyle: {
            //         color: 'red',
            //       },
            //       label: {
            //         formatter: function(item) {
            //           if (item.value === 30) {
            //             return `上限:${item.value}°C`;
            //           } else {
            //             return `下限:${item.value}°C`;
            //           }
            //         },
            //       },
            //     },
            //   },
            //   data: [
            //     {
            //       yAxis: 30,
            //     },
            //     {
            //       yAxis: 10,
            //     },
            //   ],
            // },
          },
          {
            name: '油温3',
            type: 'line',
            lineStyle: {
              color: '#3CBE1E',
            },
            data: [],
          },
        ],
      },
      activeIndex: 0,
      actionIndex: 0,
      actionIndex2: 0,
      actionsheetShow: false,
      arr2: ['220kV铁钢站', '220kV轧钢站', '110kV热电站'],
      tabArr: ['1#主变', '2#主变', '3#主变'],
      newArr: [],
    };
  }

  componentDidMount() {
    Orientation.lockToLandscapeLeft();
    this.getOilTemperatureOfMainTransformer();
  }

  setOption2 = (res, val) => {
    this.ECharts.clear();
    if (!res.body.length) {
      this.ECharts.setOption({});
    } else {
      const resData = res.body[0][`${val}#主变110YW1`];
      const resData2 = res.body[1][`${val}#主变110YW2`];
      const option = {
        color: ['#3CBE1E', '#1C6DDA'], //图例颜色
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['油温1', '油温2'],
          left: '3%',
        },
        grid: commonGrid,
        xAxis: commonxAxis,
        yAxis: commonyAxis,
        toolbox: commonToolbox,
        series: [
          {
            name: '油温1',
            type: 'line',
            lineStyle: {
              color: '#3CBE1E',
            },
            stack: '总量',
            data: resData[0] ? resData[0].value : [],
          },
          {
            name: '油温2',
            type: 'line',
            lineStyle: {
              color: '#1C6DDA',
            },
            stack: '总量',
            data: resData2[0] ? resData2[0].value : [],
          },
        ],
      };
      this.ECharts.setOption(option);
    }
  };

  setOption33 = (res, val, voltage) => {
    this.ECharts.clear();
    const resData = res.body[0][`${val}#主变${voltage}YW1`];
    const resData2 = res.body[1][`${val}#主变${voltage}YW2`];
    const resData3 = res.body[2][`${val}#主变${voltage}YW3`];
    const option = {
      color: ['#3CBE1E', '#1C6DDA'], //图例颜色
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['油温1', '油温2', '油温3'],
        left: '3%',
      },
      grid: commonGrid,
      xAxis: commonxAxis,
      yAxis: commonyAxis,
      toolbox: commonToolbox,
      series: [
        {
          name: '油温1',
          type: 'line',
          lineStyle: {
            color: '#3CBE1E',
          },
          data: resData[0].value,
        },
        {
          name: '油温2',
          type: 'line',
          lineStyle: {
            color: '#1C6DDA',
          },
          data: resData2[0] ? resData2[0].value : [],
        },
        {
          name: '油温3',
          type: 'line',
          data: resData3[0] ? resData3[0].value : [],
        },
      ],
    };
    this.ECharts.setOption(option);
  };

  getOilTemperatureOfMainTransformer = () => {
    const { tabArr, activeIndex, actionIndex2, arr2 } = this.state;
    const params = {
      station: arr2[actionIndex2],
      voltage: tabArr[activeIndex],
    };
    console.log(params);
    getOilTemperatureOfMainTransformer(params).then(res => {
      const station = arr2[actionIndex2];
      const voltage = tabArr[activeIndex];
      if (res && res.status === 200) {
        switch (station) {
          case '220kV铁钢站':
          case '220kV轧钢站':
            if (voltage === '1#主变') {
              // const resData = res.body[0]['1#主变220YW1'];
              // const resData2 = res.body[1]['1#主变220YW2'];
              // const resData3 = res.body[2]['1#主变220YW3'];
              // let { option } = this.state;
              // option.series[0].name = '油温1';
              // option.series[1].name = '油温2';
              // option.series[2].name = '油温3';
              // option.legend.data = ['油温1', '油温2', '油温3'];
              // option.series[0].data = resData[0].value;
              // option.series[1].data = resData2[0].value;
              // option.series[2].data = resData3[0].value;
              // this.setState({ option }, () => {
              //   this.ECharts.setOption(this.state.option);
              // });
              this.setOption33(res, '1', '220');
            } else if (voltage === '2#主变') {
              this.setOption33(res, '2', '220');
            } else if (voltage === '3#主变') {
              this.setOption33(res, '3', '220');
            }
            break;
          case '热电110kV站':
            if (voltage === '1#主变') {
              // this.setOption33(res, '2');
            } else if (voltage === '2#主变') {
              // this.setOption33(res, '3');
            } else if (voltage === '起备变') {
              // this.setOption33(res, '3');
            } else if (voltage === '1#厂用变') {
              // this.setOption33(res, '3');
            }
            break;
          case 'MCCR110kV站':
            if (voltage === '1#主变') {
              this.setOption33(res, '1', '110');
            } else if (voltage === '2#主变') {
              this.setOption33(res, '2', '110');
            } else if (voltage === '3#主变') {
              this.setOption33(res, '3', '110');
            }
            break;
          case '2230冷轧110kV站':
            if (voltage === '1#主变') {
              this.setOption33(res, '1', '110');
            } else if (voltage === '2#主变') {
              this.setOption2(res, '2');
            } else if (voltage === '3#主变') {
              this.setOption33(res, '3', '110');
            } else if (voltage === '4#主变') {
              this.setOption2(res, '4');
            }
            break;
          case '1#110kV站':
          case '3#110kV站':
          case '4#110kV站':
          case '5#110kV站':
          case '制氧110kV站':
          case '1420冷轧110kV站':
            if (voltage === '1#主变') {
              this.setOption2(res, '1');
            } else if (voltage === '2#主变') {
              this.setOption2(res, '2');
            } else if (voltage === '3#主变') {
              this.setOption2(res, '3');
            }
            break;
          case '2#110kV站':
            if (voltage === '1#主变') {
              this.setOption2(res, '1');
            } else if (voltage === '2#主变') {
              this.setOption2(res, '2');
            } else if (voltage === '3#主变') {
              this.setOption2(res, '3');
            } else if (voltage === '4#主变') {
              this.setOption2(res, '4');
            }
            break;
          case '6#110kV站':
            if (voltage === '1#主变') {
              this.setOption2(res, '1');
            } else if (voltage === '2#主变') {
              this.setOption2(res, '2');
            } else if (voltage === '3#主变') {
              this.setOption2(res, '3');
            } else if (voltage === '4#主变') {
              this.setOption2(res, '4');
            } else if (voltage === '5#主变') {
              this.setOption2(res, '5');
            } else if (voltage === '6#主变') {
              this.setOption2(res, '6');
            }
            break;
          case '7#110kV站':
            if (voltage === '1#主变') {
              this.setOption33(res, '1', '110');
            } else if (voltage === '2#主变') {
              this.setOption2(res, '2');
            } else if (voltage === '3#主变') {
              this.setOption2(res, '3');
            }
            break;
          default:
            return '';
        }
      }
    });
  };

  onLoadEnd = () => {
    this.webView.postMessage('rn啊');
    // this.webView.injectJavaScript(`receiveMessage(${this.state.percent});true;`);
  };
  handleTypeChange = (item, index) => {
    // const { actionIndex2, actionIndex } = this.state;
    this.setState({ actionIndex: index, actionIndex2: 0 });
    if (index === 0) {
      this.setState({
        arr2: ['220kV铁钢站', '220kV轧钢站', '热电110kV站'],
      });
    } else {
      this.setState({ arr2: arr });
    }
  };

  handleTypeChange2 = (item, index) => {
    const { actionIndex } = this.state;
    // 源端场站
    // 220kV铁钢站  1 2 3
    // 220kV轧钢站  1 2 3
    // 热电110kV站  1 2 1#厂用变
    // CCPP110kV站  1 2
    if (actionIndex === 0 && [0, 1].includes(index)) {
      this.setState({ tabArr: ['1#主变', '2#主变', '3#主变'], activeIndex: 0 });
    } else if (actionIndex === 0 && index === 2) {
      this.setState({ tabArr: ['1#主变', '2#主变', '起备变', '1#厂用变'], activeIndex: 0 });
    } else if (actionIndex === 0 && index === 3) {
      this.setState({ tabArr: ['1#主变', '2#主变'], activeIndex: 0 });
      // 网侧
      // 1#110kV站 1 2 3
      // 2#110kV站  1 2 3 4
      // 3#110kV站 1 2 3
      // 4#110kV站  1 2 3
      // 5#110kV站  1 2 3
      // 6#110kV站  1 2 3 4 5 6
      // 7#110kV站  1 2 3
      // MCCR110kV站  1 2 3 4
      // 2230冷轧110kV站 1 2 3
      // 制氧110kV站 1 2 3 4 5
      // 1420冷轧110kV站  1 2 3
    } else if (actionIndex === 1 && [0, 2, 3, 4, 6, 9, 11].includes(index)) {
      this.setState({ tabArr: ['1#主变', '2#主变', '3#主变'], activeIndex: 0 });
    } else if (actionIndex === 1 && [1, 8].includes(index)) {
      this.setState({ tabArr: ['1#主变', '2#主变', '3#主变', '4#主变'], activeIndex: 0 });
    } else if (actionIndex === 1 && index === 5) {
      this.setState({
        tabArr: ['1#主变', '2#主变', '3#主变', '4#主变', '5#主变', '6#主变'],
        activeIndex: 0,
      });
    }
    // 点击右侧条件,关闭actionsheet
    this.setState({ actionIndex2: index, actionsheetShow: false }, () => {
      this.getOilTemperatureOfMainTransformer();
    });
  };

  handleTabChange = (item, index) => {
    this.setState({ activeIndex: index }, () => {
      this.getOilTemperatureOfMainTransformer();
    });
  };

  render() {
    const { option, activeIndex, actionIndex, actionIndex2, actionsheetShow, arr2, tabArr } = this.state;
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
              <Text style={styles.contentText}>{`${arr2[actionIndex2]} 主变油温趋势图`}</Text>
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
          <ECharts ref={ref => (this.ECharts = ref)} option={option} backgroundColor="#fff" />
        </View>
        {/* <WebView
          useWebKit
          scrollEnabled={false}
          javaScriptEnabled
          source={webViewsource}
          originWhitelist={['*']}
          style={styles.webview}
          mixedContentMode="compatibility"
          ref={ref => (this.webView = ref)}
          onError={e => console.log(e)}
          onMessage={event => console.log(event.nativeEvent.data)}
          onLoadEnd={this.onLoadEnd}
        /> */}
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
    width: hp(120 / BASE_WIDTH),
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
  webviewContainer: {
    width: wp(100),
    height: 200,
  },
  webview: {
    // flex: 1,
    width: wp(100),
    // height: 200,
    // backgroundColor: 'pink',
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
    width: 'auto',
    marginLeft: -wp(80 / BASE_WIDTH),
    // top: hp(108 / BASE_HEIGHT),
    height: hp(112 / BASE_HEIGHT),
    // left: wp(70 / BASE_WIDTH),
    zIndex: 100,
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
    width: hp(120 / BASE_WIDTH),
    height: hp(80 / BASE_HEIGHT),
    borderRadius: wp(20 / BASE_WIDTH),
    marginRight: wp(20 / BASE_WIDTH),
    marginTop: hp(32 / BASE_HEIGHT),
    marginBottom: hp(42 / BASE_HEIGHT),
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
    height: hp(300 / BASE_HEIGHT),
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
    width: wp(1540 / BASE_WIDTH),
    height: hp(100 / BASE_HEIGHT),
    backgroundColor: '#fff',
    borderColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 0,
  },
  EChartsContainer: {
    width: '100%',
    height: hp(500 / BASE_HEIGHT),
    // height: hp(580 / BASE_HEIGHT),
    // backgroundColor: 'pink',
    // marginBottom: hp(32 / BASE_HEIGHT),
  },
});

export default Index;
