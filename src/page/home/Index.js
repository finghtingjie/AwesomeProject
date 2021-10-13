import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Dimensions, StatusBar } from 'react-native';

import moment from 'moment';
import { NavigationEvents } from 'react-navigation';
import { WebView } from 'react-native-webview';
import { ECharts } from 'react-native-echarts-wrapper';
import { Toast, ModalIndicator } from 'teaset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Orientation from 'react-native-orientation-locker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { screenWidth, screenHeight, scale } from '../../utils/device';

import { getHeadInfo, selfDowerSupplyRate, totalLoadCurve } from '@api/home';

const BASE_WIDTH = 10.8;

let BASE_HEIGHT = 19.2;
const formatVal = Number(screenHeight).toFixed(0);
if (scale === 2.75 && formatVal === 759) {
  // 1080*2220
  BASE_HEIGHT = 22.2;
} else if (scale === 2.75 && formatVal === 802) {
  // 1080*2340
  BASE_HEIGHT = 23.4;
}

const webViewsource = { uri: 'file:///android_asset/pie.html' };

const yuanduan = require('../../assets/kpi/yuanduan.png');
const wangce = require('../../assets/kpi/wangce.png');
const dianlichaoliu = require('../../assets/kpi/dianli.png');
const dianyaqushi = require('../../assets/kpi/dianyaqushi.png');
const hegelv = require('../../assets/kpi/dianyahege.png');
const fuzailv = require('../../assets/kpi/fadianji.png');
const youwen = require('../../assets/kpi/zhubianyouwen.png');
const zhubianfuzailv = require('../../assets/kpi/zhubian.png');
const zhiliu = require('../../assets/kpi/zhiliu.png');
const commonPic = require('../../assets/home/cardbg.png');
const lightPic = require('../../assets/home/light.png');

class Index extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      percent: 10,
      activeTab: 1,
      chartOption: {
        title: {
          show: false,
          x: 'center',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
          },
        },
        animation: true,
        grid: {
          width: '100%',
          containLabel: true,
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '64%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            startAngle: 150,
            silent: true,
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 0,
                name: '',
                selected: false,
                label: {
                  normal: {
                    show: true,
                    position: 'center',
                    fontSize: 12,
                    color: '#3D447B',
                    formatter: '{d}%',
                  },
                },
                itemStyle: {
                  color: '#3D447B',
                },
              },
              {
                value: 0,
                label: {
                  normal: {
                    show: false,
                  },
                },
                itemStyle: {
                  color: '#b3daee',
                },
              },
            ],
          },
        ],
      },
      option: {
        title: {
          text: '自供电率统计图',
          left: 'center',
          textStyle: {
            fontSize: hp(36 / BASE_HEIGHT),
            fontWeight: 'bold',
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          left: '2%',
          right: '0%',
          bottom: '0%',
          width: '90%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [],
        },
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: false,
            },
            scale: false,
            max: 100,
            min: 40,
            splitNumber: 6,
            // boundaryGap: [0, '100%'],
            // axisPointer: {
            //   snap: true,
            // },
          },
        ],
        // toolbox: {
        //   feature: {
        //     dataZoom: {
        //       yAxisIndex: 'none',
        //       title: {
        //         zoom: '区域缩放',
        //         back: '区域缩放还原',
        //       },
        //     },
        //     restore: {
        //       title: '还原',
        //     },
        //   },
        // },
        series: [
          {
            data: [7, 10, 12, 24, 20.3, 17, 6],
            type: 'line',
            lineStyle: {
              color: '#2B7CF4',
            },
            // itemStyle: {
            //   normal: {
            //     color: '#2B7CF4',
            //   },
            // },
            label: {
              show: false,
              position: 'top',
              color: '#fff',
              // backgroundColor: 'red',
            },
            markPoint: {
              data: [
                {
                  type: 'max',
                  name: '最大值',
                  color: '#fff',
                  symbol: 'roundRect',
                  symbolSize: [40, 30],
                  symbolOffset: [0, '-60%'],
                },
                {
                  type: 'min',
                  name: '最小值',
                  color: '#fff',
                  symbol: 'roundRect',
                  symbolSize: [40, 30],
                  symbolOffset: [0, '-120%'],
                },
                // {
                //   name: '最新值',
                //   value: `最新值${12}`,
                //   color: '#fff',
                //   xAxis: 2,
                //   yAxis: 12,
                //   symbol: 'roundRect',
                //   symbolSize: [60, 30],
                //   symbolOffset: [0, '-60%'],
                // },
              ],
            },
          },
        ],
      },
      fakeData: [
        { id: 1, val: '源端监视', source: yuanduan, routeName: 'Yuanduan' },
        { id: 2, val: '网侧监视', source: wangce, routeName: 'Wangce' },
        { id: 3, val: '电力潮流图', source: dianlichaoliu, routeName: 'Dianlichaoliu' },
        { id: 4, val: '电压趋势图', source: dianyaqushi, routeName: 'Dianyaqushi' },
        { id: 5, val: '电压合格率', source: hegelv, routeName: 'Hegelv' },
        { id: 6, val: '发电机负荷率', source: fuzailv, routeName: 'Fuzailv' },
        { id: 7, val: '主变油温', source: youwen, routeName: 'Zhubianyouwen' },
        { id: 8, val: '主变负荷率', source: zhubianfuzailv, routeName: 'ZhubianFuzailv' },
        { id: 9, val: '直流系统', source: zhiliu, routeName: 'Zhiliu' },
      ],
      fakeData2: [
        { id: 1, val: '总用电', yougong: 61.23, wugong: 26.86, source: yuanduan, routeName: 'Wangce' },
        { id: 2, val: '总发电', yougong: 61.23, wugong: 26.86, source: wangce, routeName: 'Yuanduan' },
        { id: 3, val: '总进线', yougong: 61.23, wugong: 26.86, source: dianlichaoliu, routeName: 'Yuanduan' },
        { id: 4, val: '自供电率', percent: 96, source: dianyaqushi, routeName: 'Dianyaqushi' },
      ],
      newArr: [],
      newArr1: [],
      pieOption: {
        title: {
          text: '总负荷曲线统计图',
          left: 'center',
          textStyle: {
            fontSize: hp(36 / BASE_HEIGHT),
            fontWeight: 'bold',
          },
        },
        grid: {
          left: '2%',
          right: '0%',
          bottom: '0%',
          width: '90%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [],
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 10,
            },
            formatter: function(value) {
              return `${Number(value)}.0`;
            },
          },
          max: 1300,
          min: 950,
          splitNumber: 4,
          // boundaryGap: [0, '100%'],
          axisPointer: {
            snap: true,
          },
        },
        // toolbox: {
        //   feature: {
        //     dataZoom: {
        //       yAxisIndex: 'none',
        //       title: {
        //         zoom: '区域缩放',
        //         back: '区域缩放还原',
        //       },
        //     },
        //     restore: {
        //       title: '还原',
        //     },
        //   },
        // },
        color: ['#BCBCBC', '#00AAFF', '#FFAAFF'],
        legend: {
          data: ['谷', '平', '峰'],
          icon: 'stack',
          right: '10%',
          top: '12%',
        },
        series: [
          {
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            dataZoom: [
              {
                type: 'inside',
                start: 0,
                end: 10,
              },
              {
                start: 0,
                end: 10,
              },
            ],
            itemStyle: {
              color: '#FA0208',
            },
            data: [],
          },
          {
            name: '谷',
            data: [7, 10, 12, 24, 20.3, 17, 6],
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
              width: 0,
              color: 'rgba(0,0,0,0)',
            },
            label: {
              show: true,
              position: 'top',
              color: '#fff',
            },
            markArea: {
              itemStyle: {
                color: '#BCBCBC',
              },
              data: [
                [
                  {
                    // name: '谷',
                    xAxis: '00:00',
                  },
                  {
                    xAxis: '06:00',
                  },
                ],
                [
                  {
                    // name: '谷',
                    xAxis: '22:00',
                  },
                  {
                    xAxis: '24:00',
                  },
                ],
              ],
            },
          },
          {
            name: '平',
            z: 1,
            zlevel: 1,
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
              width: 0,
              color: 'rgba(0,0,0,0)',
            },
            data: [100, 40, 230, 120, 200, 100, 200, 250, 400, 390, 380, 390, 400],
            markArea: {
              itemStyle: {
                color: '#00AAFF',
              },
              data: [
                [
                  {
                    // name: '平',
                    xAxis: '06:00',
                  },
                  {
                    xAxis: '10:00',
                  },
                ],
                [
                  {
                    // name: '平',
                    xAxis: '12:00',
                  },
                  {
                    xAxis: '13:00',
                  },
                ],
                [
                  {
                    // name: '平',
                    xAxis: '19:00',
                  },
                  {
                    xAxis: '22:00',
                  },
                ],
              ],
            },
          },
          {
            name: '峰',
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
              width: 0,
              color: 'rgba(0,0,0,0)',
            },
            data: [100, 40, 230, 120, 200, 100, 200, 250, 400, 390, 380, 390, 400],
            markArea: {
              itemStyle: {
                color: '#FFAAFF',
              },
              data: [
                [
                  {
                    // name: '峰',
                    xAxis: '10:00',
                  },
                  {
                    xAxis: '12:00',
                  },
                ],
                [
                  {
                    // name: '峰',
                    xAxis: '13:00',
                  },
                  {
                    xAxis: '19:00',
                  },
                ],
              ],
            },
          },
          {
            name: '尖',
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
              width: 0,
              color: 'rgba(0,0,0,0)',
            },
            data: [],
            markArea: {
              itemStyle: {
                color: '#EFB6A2',
              },
              data: [
                [
                  {
                    name: '尖',
                    xAxis: '10:00',
                  },
                  {
                    xAxis: '12:00',
                  },
                ],
                [
                  {
                    name: '尖',
                    xAxis: '17:00',
                  },
                  {
                    xAxis: '18:00',
                  },
                ],
              ],
            },
          },
        ],
      },
      headInfo: {
        selfPowerSupplyRate: 30,
        totalElectricityConsumption: {
          name: '',
          wuGong: 0,
          youGong: 0,
        },
        totalElectricityGeneration: {
          name: '',
          wuGong: 0,
          youGong: 0,
        },
        totalIncomingLine: {
          name: '',
          wuGong: 0,
          youGong: 0,
        },
      }, //顶部信息
    };
  }

  componentDidMount() {
    // this.ScrollView.scrollTo({ x: 85, y: 0, animated: true });
  }

  // 总负荷曲线统计图
  totalLoadCurve = () => {
    totalLoadCurve({}).then(res => {
      if (res && res.status === 200) {
        const resData = res.body.all.time;
        let newArr = [];
        resData.map(item => {
          item = moment(item).format('YYYY-MM-DD HH:mm');
          newArr.push(item);
        });
        const val = newArr.map(item => item.slice(11, 16));
        let { pieOption } = this.state;
        this.pieOption.clear();
        pieOption.xAxis.data = val;
        pieOption.series[0].data = res.body.all.value;
        pieOption.yAxis.axisLabel = {
          show: true,
          textStyle: {
            fontSize: 10,
          },
          formatter: function(value) {
            return value && `${Number(value)}.0`;
          },
        };
        const nowTime = moment(new Date()).format('YYYY-MM-DD');
        const nowTimeFormat = `${nowTime} ${val[val.length - 1]}`;
        if (res.body.tip != null) {
          // 尖
          if (moment(nowTimeFormat).isBetween(moment(`${nowTime} 00:00`), moment(`${nowTime} 06:00`), 'minutes')) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[1].markArea.data[0][1].xAxis = val[val.length - 1];
            pieOption.series[2].data = [];
            pieOption.series[2].markArea = {};
            pieOption.series[3].data = [];
            pieOption.series[3].markArea = {};
            pieOption.series[4].data = [];
            pieOption.series[4].markArea = {};
          } else if (
            moment(nowTimeFormat).isBetween(moment(`${nowTime} 22:00`), moment(`${nowTime} 24:00`), 'minutes')
          ) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[1].markArea.data[1][1].xAxis = val[val.length - 1];
          } else if (
            moment(nowTimeFormat).isBetween(moment(`${nowTime} 06:00`), moment(`${nowTime} 10:00`), 'minutes')
          ) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[2].data = res.body.flat.value;
            pieOption.series[2].markArea.data[0][1].xAxis = val[val.length - 1];
            pieOption.series[3].data = [];
            pieOption.series[3].markArea = {};
            pieOption.series[4].data = [];
            pieOption.series[4].markArea = {};
          } else if (
            moment(nowTimeFormat).isBetween(moment(`${nowTime} 12:00`), moment(`${nowTime} 13:00`), 'minutes')
          ) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[2].data = res.body.flat.value;
            pieOption.series[4].data = res.body.tip.value;
            pieOption.series[2].markArea.data[1][1].xAxis = val[val.length - 1];
            pieOption.series[3].data = [];
            pieOption.series[3].markArea = {};
          } else if (
            moment(nowTimeFormat).isBetween(moment(`${nowTime} 19:00`), moment(`${nowTime} 22:00`), 'minutes')
          ) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[2].data = res.body.flat.value;
            pieOption.series[3].data = res.body.peak.value;
            pieOption.series[4].data = res.body.tip.value;
            pieOption.series[2].markArea.data[2][1].xAxis = val[val.length - 1];
            pieOption.series[2].markArea.data[2][1].xAxis = val[val.length - 1];
          } else if (
            moment(nowTimeFormat).isBetween(moment(`${nowTime} 13:00`), moment(`${nowTime} 17:00`), 'minutes')
          ) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[2].data = res.body.flat.value;
            pieOption.series[3].data = res.body.peak.value;
            pieOption.series[4].data = res.body.tip.value;
            pieOption.series[3].markArea.data[0][1].xAxis = val[val.length - 1];
          } else if (
            moment(nowTimeFormat).isBetween(moment(`${nowTime} 18:00`), moment(`${nowTime} 19:00`), 'minutes')
          ) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[2].data = res.body.flat.value;
            pieOption.series[3].data = res.body.peak.value;
            pieOption.series[4].data = res.body.tip.value;
            pieOption.series[3].markArea.data[1][1].xAxis = val[val.length - 1];
          } else if (
            moment(nowTimeFormat).isBetween(moment(`${nowTime} 10:00`), moment(`${nowTime} 12:00`), 'minutes')
          ) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[2].data = res.body.flat.value;
            pieOption.series[4].data = res.body.tip.value;
            pieOption.series[3].markArea.data[0][1].xAxis = val[val.length - 1];
          } else if (
            moment(nowTimeFormat).isBetween(moment(`${nowTime} 17:00`), moment(`${nowTime} 18:00`), 'minutes')
          ) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[2].data = res.body.flat.value;
            pieOption.series[3].data = res.body.peak.value;
            pieOption.series[4].data = res.body.tip.value;
            pieOption.series[3].markArea.data[1][1].xAxis = val[val.length - 1];
          } else {
            pieOption.series[4].data = [];
            pieOption.series[4].markArea = {};
          }
          pieOption.legend.data = ['谷', '平', '峰', '尖'];
        } else {
          if (moment(nowTimeFormat).isBetween(moment(`${nowTime} 00:00`), moment(`${nowTime} 06:00`), 'minutes')) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[1].markArea.data[0][1].xAxis = val[val.length - 1];
            pieOption.series[2].data = [];
            pieOption.series[2].markArea = {};
            pieOption.series[3].data = [];
            pieOption.series[3].markArea = {};
            pieOption.series[4].data = [];
            pieOption.series[4].markArea = {};
          } else if (
            moment(nowTimeFormat).isBetween(moment(`${nowTime} 22:00`), moment(`${nowTime} 24:00`), 'minutes')
          ) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[1].markArea.data[1][1].xAxis = val[val.length - 1];
            pieOption.series[4].data = [];
            pieOption.series[4].markArea = {};
          } else if (
            moment(nowTimeFormat).isBetween(moment(`${nowTime} 06:00`), moment(`${nowTime} 10:00`), 'minutes')
          ) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[2].data = res.body.flat.value;
            pieOption.series[2].markArea.data[0][1].xAxis = val[val.length - 1];
            pieOption.series[3].data = [];
            pieOption.series[3].markArea = {};
            pieOption.series[4].data = [];
            pieOption.series[4].markArea = {};
          } else if (
            moment(nowTimeFormat).isBetween(moment(`${nowTime} 12:00`), moment(`${nowTime} 13:00`), 'minutes')
          ) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[2].data = res.body.flat.value;
            pieOption.series[3].data = res.body.peak.value;
            pieOption.series[2].markArea.data[1][1].xAxis = val[val.length - 1];
            pieOption.series[4].data = [];
            pieOption.series[4].markArea = {};
          } else if (
            moment(nowTimeFormat).isBetween(moment(`${nowTime} 19:00`), moment(`${nowTime} 22:00`), 'minutes')
          ) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[2].data = res.body.flat.value;
            pieOption.series[3].data = res.body.peak.value;
            pieOption.series[2].markArea.data[2][1].xAxis = val[val.length - 1];
            pieOption.series[4].data = [];
            pieOption.series[4].markArea = {};
          } else if (
            moment(nowTimeFormat).isBetween(moment(`${nowTime} 10:00`), moment(`${nowTime} 12:00`), 'minutes')
          ) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[2].data = res.body.flat.value;
            pieOption.series[3].data = res.body.peak.value;
            pieOption.series[3].markArea.data[0][1].xAxis = val[val.length - 1];
            pieOption.series[4].data = [];
            pieOption.series[4].markArea = {};
          } else if (
            moment(nowTimeFormat).isBetween(moment(`${nowTime} 13:00`), moment(`${nowTime} 19:00`), 'minutes')
          ) {
            pieOption.series[1].data = res.body.valley.value;
            pieOption.series[2].data = res.body.flat.value;
            pieOption.series[3].data = res.body.peak.value;
            pieOption.series[3].markArea.data[1][1].xAxis = val[val.length - 1];
            pieOption.series[4].data = [];
            pieOption.series[4].markArea = {};
          } else {
            pieOption.series[4].data = [];
            pieOption.series[4].markArea = {};
          }
        }
        this.pieOption.setOption(pieOption);
      } else {
        Toast.fail(res.msg);
      }
    });
  };

  // 获取月供电率
  selfDowerSupplyRate = () => {
    selfDowerSupplyRate({}).then(res => {
      if (res && res.status === 200) {
        const resData = res.body[0].time;
        let newArr = [];
        resData.map(item => {
          item = moment(item).format('YYYY-MM-DD HH:mm');
          newArr.push(item);
        });
        const val = newArr.map(item => item.slice(11, 16));
        let { option } = this.state;
        option.xAxis.data = val;
        option.series[0].data = res.body[0].value.map(item => Number(item.toFixed(2)));
        this.option.setOption(option);
      }
    });
  };

  // 获取头部信息
  getHeadInfo = () => {
    const params = {};
    getHeadInfo(params).then(res => {
      if (res && res.status === 200) {
        const {
          totalElectricityConsumption,
          totalElectricityGeneration,
          totalIncomingLine,
          selfPowerSupplyRate,
        } = res.body;
        let { chartOption } = this.state;
        chartOption.series[0].data[0].value = Number(Number(selfPowerSupplyRate).toFixed(0));
        chartOption.series[0].data[1].value = 100 - Number(selfPowerSupplyRate).toFixed(0);
        this.setState(
          {
            fakeData2: [
              {
                id: 1,
                val: '总用电',
                yougong: Number(totalElectricityConsumption.youGong).toFixed(2),
                wugong: Number(totalElectricityConsumption.wuGong).toFixed(2),
                source: yuanduan,
                routeName: 'Wangce',
              },
              {
                id: 2,
                val: '总发电',
                yougong: Number(totalElectricityGeneration.youGong).toFixed(2),
                wugong: Number(totalElectricityGeneration.wuGong).toFixed(2),
                source: wangce,
                routeName: 'Yuanduan',
              },
              {
                id: 3,
                val: '总进线',
                yougong: Number(totalIncomingLine.youGong).toFixed(2),
                wugong: Number(totalIncomingLine.wuGong).toFixed(2),
                source: dianlichaoliu,
                routeName: 'Yuanduan',
              },
              {
                id: 4,
                val: '自供电率',
                percent: Number(selfPowerSupplyRate).toFixed(0),
                source: dianyaqushi,
                routeName: 'Dianyaqushi',
              },
            ],
            percent: Number(res.body.selfPowerSupplyRate).toFixed(0),
          },
          () => {
            this.ECharts.setOption(chartOption);
          },
        );
      }
    });
  };

  onLoadEnd = () => {
    this.webView.postMessage('rn啊');
    this.webView.injectJavaScript(`receiveMessage(${this.state.percent});true;`);
  };

  handleClick = item => {
    const { navigation } = this.props;
    navigation.navigate(item.routeName);
    // this.webView.injectJavaScript(`receiveMessage(${this.state.percent});true;`);
  };

  handleClickCard = (item, index) => {
    const { navigation } = this.props;
    if (index === 0) {
      // 总用电（有功功率、无功功率）：点击后跳转至KPI-网侧监视模块中
      navigation.navigate(item.routeName);
    } else if (index === 1) {
      // 总发电（有功功率、无功功率）：点击后跳转至KPI-源端监视-用电tab中。
      navigation.navigate(item.routeName, { activeIndex: 2 });
    } else if (index === 2) {
      // 总进线（有功功率、无功功率）、自供电率：点击后跳转至KPI-源端监视-电网购电tab中。
      navigation.navigate(item.routeName, { activeIndex: 1 });
    }
  };

  handleTabChange = item => {
    if (item === 2) {
      this.ScrollView.scrollTo({ x: 120, y: 0, animated: true });
    } else {
      this.ScrollView.scrollTo({ x: 0, y: 0, animated: true });
    }
  };

  render() {
    const { option, fakeData, fakeData2, pieOption, chartOption, activeTab } = this.state;
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
          onDidFocus={async payload => {
            const user = await AsyncStorage.getItem('user');
            if (user) {
              this.getHeadInfo();
              this.selfDowerSupplyRate();
              this.totalLoadCurve();
              Orientation.lockToPortrait();
            }
          }}
        />
        <View style={styles.topcardContainer} />
        <View style={styles.centerContainer}>
          {fakeData2.map((item, index) => {
            return (
              <View style={styles.card} key={item.id}>
                <Image style={styles.commonPic} source={commonPic} />
                {item.yougong ? (
                  <TouchableOpacity style={styles.commonWrap} onPress={() => this.handleClickCard(item, index)}>
                    <Text style={styles.yougong}>{item.yougong}</Text>
                    <Text style={styles.yougong2}>{item.yougong ? '有功功率(Mw)' : ''}</Text>
                    <View style={styles.lightContainer}>
                      {item.yougong ? <Image source={lightPic} style={styles.lightPic} /> : null}
                    </View>
                    <Text style={styles.wugong}>{item.wugong}</Text>
                    <Text style={styles.yougong2}>{item.wugong ? '无功功率(Mvar)' : ''}</Text>
                  </TouchableOpacity>
                ) : (
                  <View style={styles.lightContainer2}>
                    <ECharts option={chartOption} ref={ref => (this.ECharts = ref)} backgroundColor="transparent" />
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
                )}
                <View style={styles.commonTextbg}>
                  <Text style={styles.commonText}>{item.val}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.chartContainer1}>
          <ECharts
            option={pieOption}
            backgroundColor="#fff"
            ref={ref => (this.pieOption = ref)}
            onData={() => this.totalLoadCurve()}
          />
        </View>
        <View style={styles.chartContainer}>
          <ECharts
            option={option}
            backgroundColor="#fff"
            ref={ref => (this.option = ref)}
            onData={() => this.selfDowerSupplyRate()}
          />
        </View>

        <View style={styles.topContainer}>
          <View style={styles.dotContainer}>
            <TouchableOpacity
              style={activeTab === 1 ? styles.btnActive : styles.commonBtn}
              onPress={() => this.handleTabChange(1)}
            />
            <View style={styles.border} />
            <TouchableOpacity
              style={activeTab === 2 ? styles.btnActive : styles.commonBtn}
              onPress={() => this.handleTabChange(2)}
            />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalContainer}
            contentContainerStyle={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}
            ref={ref => (this.ScrollView = ref)}
            onScroll={event => {
              const val = event.nativeEvent.contentOffset.x;
              if (val >= 60) {
                this.setState({ activeTab: 2 });
              } else {
                this.setState({ activeTab: 1 });
              }
            }}>
            <View style={styles.menuContainer}>
              {fakeData.slice(0, 8).map(item => {
                return (
                  <TouchableOpacity style={styles.tabButton} key={item.id} onPress={() => this.handleClick(item)}>
                    <Image source={item.source} style={styles.image} />
                    <Text style={styles.menuItem}>{item.val}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={styles.menuContainer2}>
              <TouchableOpacity style={styles.tabButton} onPress={() => this.props.navigation.navigate('Zhiliu')}>
                <Image source={fakeData[8].source} style={styles.image} />
                <Text style={styles.menuItem}>{fakeData[8].val}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    position: 'relative',
    overflow: 'hidden',
    // width: wp(152 / BASE_WIDTH),
    // height: wp(152 / BASE_WIDTH),
  },
  topcardContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#3D447B',
    width: '100%',
    height: hp(560 / BASE_HEIGHT),
  },
  centerContainer: {
    position: 'relative',
    width: '92%',
    height: 'auto',
    // backgroundColor: 'pink',
    marginLeft: '4%',
    marginTop: hp(160 / BASE_HEIGHT),
    marginBottom: hp(12 / BASE_HEIGHT),
    // paddingBottom: hp(32 / BASE_HEIGHT),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  card: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: wp(15 / BASE_WIDTH),
  },
  commonPic: {
    width: wp(232 / BASE_WIDTH),
    height: wp(365 / BASE_WIDTH),
  },
  commonWrap: {
    position: 'absolute',
    left: '5%',
    top: hp(32 / BASE_HEIGHT),
    width: '90%',
    height: 'auto',
  },
  yougong: {
    color: '#079BB5',
    width: '100%',
    textAlign: 'center',
    fontSize: hp(36 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  yougong2: {
    color: '#888',
    width: '100%',
    textAlign: 'center',
    // marginTop: hp(6 / BASE_HEIGHT),
    fontSize: hp(20 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  wugong: {
    color: '#7F651E',
    width: '100%',
    textAlign: 'center',
    fontSize: hp(36 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  lightContainer: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightContainer2: {
    position: 'absolute',
    // width: '80%',
    // left: '8%',
    // justifyContent: 'center',
    // alignItems: 'center',
    top: hp(42 / BASE_HEIGHT),
    left: wp(10 / BASE_WIDTH),
    // height: hp(152 / BASE_HEIGHT),
    zIndex: 100,
    width: wp(210 / BASE_WIDTH),
    height: wp(210 / BASE_WIDTH),
  },
  percent: {
    position: 'absolute',
    width: '100%',
    top: hp(42 / BASE_HEIGHT),
    // left: hp(76 / BASE_HEIGHT),
    color: '#00AAFF',
    textAlign: 'center',
    fontSize: hp(36 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  lightPic: {
    width: wp(100 / BASE_WIDTH),
    height: wp(40 / BASE_WIDTH),
  },
  dianlvjindu: {
    width: wp(153 / BASE_WIDTH),
    height: wp(153 / BASE_WIDTH),
    // marginTop: hp(62 / BASE_HEIGHT),
  },
  commonTextbg: {
    position: 'absolute',
    left: '15%',
    bottom: hp(32 / BASE_HEIGHT),
    width: '70%',
    height: hp(50 / BASE_HEIGHT),
    backgroundColor: '#3D447B',
    borderRadius: wp(15 / BASE_WIDTH),
  },
  commonText: {
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    fontSize: hp(28 / BASE_HEIGHT),
    lineHeight: hp(50 / BASE_HEIGHT),
    height: hp(50 / BASE_HEIGHT),
    // marginTop: hp(8 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  horizontalContainer: {
    // flex: 1,
    width: wp(1040 / BASE_WIDTH),
    marginLeft: wp(20 / BASE_WIDTH),
    backgroundColor: '#fff',
    height: hp(430 / BASE_HEIGHT),
    marginTop: hp(24 / BASE_HEIGHT),
    borderRadius: wp(20 / BASE_WIDTH),
  },
  image: {
    width: wp(100 / BASE_WIDTH),
    height: wp(100 / BASE_WIDTH),
  },
  topContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // height: hp(430 / BASE_HEIGHT),
  },
  chartContainer1: {
    // position: 'absolute',
    // right: wp(72 / BASE_WIDTH),
    // top: hp(100 / BASE_HEIGHT),
    width: '92%',
    height: hp(380 / BASE_HEIGHT),
    // marginTop: hp(20 / BASE_HEIGHT),
    marginLeft: '4%',
    borderRadius: wp(20 / BASE_WIDTH),
    overflow: 'hidden',
    // width: wp(152 / BASE_WIDTH),
    // height: wp(152 / BASE_WIDTH),
  },
  chartContainer: {
    width: '92%',
    marginLeft: '4%',
    // width: screenHeight - 40,
    height: hp(380 / BASE_HEIGHT),
    borderRadius: wp(20 / BASE_WIDTH),
    marginTop: hp(20 / BASE_HEIGHT),
    overflow: 'hidden',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // height: 'auto',
    height: hp(230 / BASE_HEIGHT),
    // width: '92%',
    width: wp(1040 / BASE_WIDTH),
    marginLeft: wp(0 / BASE_WIDTH),
    // marginLeft: '4%',
    // width: (scrreenWidth * 1040) / 1080,
    marginTop: hp(24 / BASE_HEIGHT),
    // marginBottom: hp(24 / BASE_HEIGHT),
    // backgroundColor: 'pink',
    flexWrap: 'wrap',
    borderRadius: wp(20 / BASE_WIDTH),
  },
  menuContainer2: {
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: hp(24 / BASE_HEIGHT),
  },
  tabButton: {
    // flex: 1,
    width: wp(1040 / 4 / BASE_WIDTH),
    // width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    // backgroundColor: 'red',
  },
  menuItem: {
    color: '#333',
    fontWeight: '400',
    fontSize: hp(32 / BASE_HEIGHT),
    marginTop: hp(25 / BASE_HEIGHT),
    marginBottom: hp(8 / BASE_HEIGHT),
  },
  dotContainer: {
    position: 'absolute',
    left: '0%',
    bottom: hp(18 / BASE_HEIGHT),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '92%',
    marginLeft: '4%',
    height: 'auto',
    // backgroundColor: 'pink',
    zIndex: 999,
  },
  commonBtn: {
    width: wp(32 / BASE_WIDTH),
    height: wp(32 / BASE_WIDTH),
    borderColor: '#3D447B',
    backgroundColor: '#3D447B',
    paddingVertical: 0,
    borderRadius: wp(16 / BASE_WIDTH),
  },
  border: {
    width: wp(16 / BASE_WIDTH),
    height: wp(32 / BASE_WIDTH),
  },
  btnActive: {
    backgroundColor: '#588CE4',
    borderColor: '#588CE4',
    width: wp(32 / BASE_WIDTH),
    height: wp(32 / BASE_WIDTH),
    paddingVertical: 0,
    borderRadius: wp(16 / BASE_WIDTH),
  },
});

export default Index;
