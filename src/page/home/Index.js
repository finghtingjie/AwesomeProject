import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Dimensions, StatusBar } from 'react-native';

import moment from 'moment';
import { NavigationEvents } from 'react-navigation';
import { WebView } from 'react-native-webview';
import Orientation from 'react-native-orientation-locker';
import { ECharts } from 'react-native-echarts-wrapper';
import { Toast, ModalIndicator } from 'teaset';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const newArr = [
  '2021-10-21 00:00:00',
  '2021-10-21 00:05:00',
  '2021-10-21 00:10:00',
  '2021-10-21 00:15:00',
  '2021-10-21 00:20:00',
  '2021-10-21 00:25:00',
  '2021-10-21 00:30:00',
  '2021-10-21 00:35:00',
  '2021-10-21 00:40:00',
  '2021-10-21 00:45:00',
  '2021-10-21 00:50:00',
  '2021-10-21 00:55:00',
  '2021-10-21 01:00:00',
  '2021-10-21 01:05:00',
  '2021-10-21 01:10:00',
  '2021-10-21 01:15:00',
  '2021-10-21 01:20:00',
  '2021-10-21 01:25:00',
  '2021-10-21 01:30:00',
  '2021-10-21 01:35:00',
  '2021-10-21 01:40:00',
  '2021-10-21 01:45:00',
  '2021-10-21 01:50:00',
  '2021-10-21 01:55:00',
  '2021-10-21 02:00:00',
  '2021-10-21 02:05:00',
  '2021-10-21 02:10:00',
  '2021-10-21 02:15:00',
  '2021-10-21 02:20:00',
  '2021-10-21 02:25:00',
  '2021-10-21 02:30:00',
  '2021-10-21 02:35:00',
  '2021-10-21 02:40:00',
  '2021-10-21 02:45:00',
  '2021-10-21 02:50:00',
  '2021-10-21 02:55:00',
  '2021-10-21 03:00:00',
  '2021-10-21 03:05:00',
  '2021-10-21 03:10:00',
  '2021-10-21 03:15:00',
  '2021-10-21 03:20:00',
  '2021-10-21 03:25:00',
  '2021-10-21 03:30:00',
  '2021-10-21 03:35:00',
  '2021-10-21 03:40:00',
  '2021-10-21 03:45:00',
  '2021-10-21 03:50:00',
  '2021-10-21 03:55:00',
  '2021-10-21 04:00:00',
  '2021-10-21 04:05:00',
  '2021-10-21 04:10:00',
  '2021-10-21 04:15:00',
  '2021-10-21 04:20:00',
  '2021-10-21 04:25:00',
  '2021-10-21 04:30:00',
  '2021-10-21 04:35:00',
  '2021-10-21 04:40:00',
  '2021-10-21 04:45:00',
  '2021-10-21 04:50:00',
  '2021-10-21 04:55:00',
  '2021-10-21 05:00:00',
  '2021-10-21 05:05:00',
  '2021-10-21 05:10:00',
  '2021-10-21 05:15:00',
  '2021-10-21 05:20:00',
  '2021-10-21 05:25:00',
  '2021-10-21 05:30:00',
  '2021-10-21 05:35:00',
  '2021-10-21 05:40:00',
  '2021-10-21 05:45:00',
  '2021-10-21 05:50:00',
  '2021-10-21 05:55:00',
  '2021-10-21 06:00:00',
  '2021-10-21 06:05:00',
  '2021-10-21 06:10:00',
  '2021-10-21 06:15:00',
  '2021-10-21 06:20:00',
  '2021-10-21 06:25:00',
  '2021-10-21 06:30:00',
  '2021-10-21 06:35:00',
  '2021-10-21 06:40:00',
  '2021-10-21 06:45:00',
  '2021-10-21 06:50:00',
  '2021-10-21 06:55:00',
  '2021-10-21 07:00:00',
  '2021-10-21 07:05:00',
  '2021-10-21 07:10:00',
  '2021-10-21 07:15:00',
  '2021-10-21 07:20:00',
  '2021-10-21 07:25:00',
  '2021-10-21 07:30:00',
  '2021-10-21 07:35:00',
  '2021-10-21 07:40:00',
  '2021-10-21 07:45:00',
  '2021-10-21 07:50:00',
  '2021-10-21 07:55:00',
  '2021-10-21 08:00:00',
  '2021-10-21 08:05:00',
  '2021-10-21 08:10:00',
  '2021-10-21 08:15:00',
  '2021-10-21 08:20:00',
  '2021-10-21 08:25:00',
  '2021-10-21 08:30:00',
  '2021-10-21 08:35:00',
  '2021-10-21 08:40:00',
  '2021-10-21 08:45:00',
  '2021-10-21 08:50:00',
  '2021-10-21 08:55:00',
  '2021-10-21 09:00:00',
  '2021-10-21 09:05:00',
  '2021-10-21 09:10:00',
  '2021-10-21 09:15:00',
  '2021-10-21 09:20:00',
  '2021-10-21 09:25:00',
  '2021-10-21 09:30:00',
  '2021-10-21 09:35:00',
  '2021-10-21 09:40:00',
  '2021-10-21 09:45:00',
  '2021-10-21 09:50:00',
  '2021-10-21 09:55:00',
  '2021-10-21 10:00:00',
  '2021-10-21 10:05:00',
  '2021-10-21 10:10:00',
  '2021-10-21 10:15:00',
  '2021-10-21 10:20:00',
  '2021-10-21 10:25:00',
  '2021-10-21 10:30:00',
  '2021-10-21 10:35:00',
  '2021-10-21 10:40:00',
  '2021-10-21 10:45:00',
  '2021-10-21 10:50:00',
  '2021-10-21 10:55:00',
  '2021-10-21 11:00:00',
  '2021-10-21 11:05:00',
  '2021-10-21 11:10:00',
  '2021-10-21 11:15:00',
  '2021-10-21 11:20:00',
  '2021-10-21 11:25:00',
  '2021-10-21 11:30:00',
  '2021-10-21 11:35:00',
  '2021-10-21 11:40:00',
  '2021-10-21 11:45:00',
  '2021-10-21 11:50:00',
  '2021-10-21 11:55:00',
  '2021-10-21 12:00:00',
  '2021-10-21 12:05:00',
  '2021-10-21 12:10:00',
  '2021-10-21 12:15:00',
  '2021-10-21 12:20:00',
  '2021-10-21 12:25:00',
  '2021-10-21 12:30:00',
  '2021-10-21 12:35:00',
  '2021-10-21 12:40:00',
  '2021-10-21 12:45:00',
  '2021-10-21 12:50:00',
  '2021-10-21 12:55:00',
  '2021-10-21 13:00:00',
  '2021-10-21 13:05:00',
  '2021-10-21 13:10:00',
  '2021-10-21 13:15:00',
  '2021-10-21 13:20:00',
  '2021-10-21 13:25:00',
  '2021-10-21 13:30:00',
  '2021-10-21 13:35:00',
  '2021-10-21 13:40:00',
  '2021-10-21 13:45:00',
  '2021-10-21 13:50:00',
  '2021-10-21 13:55:00',
  '2021-10-21 14:00:00',
  '2021-10-21 14:05:00',
  '2021-10-21 14:10:00',
  '2021-10-21 14:15:00',
  '2021-10-21 14:20:00',
  '2021-10-21 14:25:00',
  '2021-10-21 14:30:00',
  '2021-10-21 14:35:00',
  '2021-10-21 14:40:00',
  '2021-10-21 14:45:00',
  '2021-10-21 14:50:00',
  '2021-10-21 14:55:00',
  '2021-10-21 15:00:00',
  '2021-10-21 15:05:00',
  '2021-10-21 15:10:00',
  '2021-10-21 15:15:00',
  '2021-10-21 15:20:00',
  '2021-10-21 15:25:00',
  '2021-10-21 15:30:00',
  '2021-10-21 15:35:00',
  '2021-10-21 15:40:00',
  '2021-10-21 15:45:00',
  '2021-10-21 15:50:00',
  '2021-10-21 15:55:00',
  '2021-10-21 16:00:00',
  '2021-10-21 16:05:00',
  '2021-10-21 16:10:00',
  '2021-10-21 16:15:00',
  '2021-10-21 16:20:00',
  '2021-10-21 16:25:00',
  '2021-10-21 16:30:00',
  '2021-10-21 16:35:00',
  '2021-10-21 16:40:00',
  '2021-10-21 16:45:00',
  '2021-10-21 16:50:00',
  '2021-10-21 16:55:00',
  '2021-10-21 17:00:00',
  '2021-10-21 17:05:00',
  '2021-10-21 17:10:00',
  '2021-10-21 17:15:00',
  '2021-10-21 17:20:00',
  '2021-10-21 17:25:00',
  '2021-10-21 17:30:00',
  '2021-10-21 17:35:00',
  '2021-10-21 17:40:00',
  '2021-10-21 17:45:00',
  '2021-10-21 17:50:00',
  '2021-10-21 17:55:00',
  '2021-10-21 18:00:00',
  '2021-10-21 18:05:00',
  '2021-10-21 18:10:00',
  '2021-10-21 18:15:00',
  '2021-10-21 18:20:00',
  '2021-10-21 18:25:00',
  '2021-10-21 18:30:00',
  '2021-10-21 18:35:00',
  '2021-10-21 18:40:00',
  '2021-10-21 18:45:00',
  '2021-10-21 18:50:00',
  '2021-10-21 18:55:00',
  '2021-10-21 19:00:00',
  '2021-10-21 19:05:00',
  '2021-10-21 19:10:00',
  '2021-10-21 19:15:00',
  '2021-10-21 19:20:00',
  '2021-10-21 19:25:00',
  '2021-10-21 19:30:00',
  '2021-10-21 19:35:00',
  '2021-10-21 19:40:00',
  '2021-10-21 19:45:00',
  '2021-10-21 19:50:00',
  '2021-10-21 19:55:00',
  '2021-10-21 20:00:00',
  '2021-10-21 20:05:00',
  '2021-10-21 20:10:00',
  '2021-10-21 20:15:00',
  '2021-10-21 20:20:00',
  '2021-10-21 20:25:00',
  '2021-10-21 20:30:00',
  '2021-10-21 20:35:00',
  '2021-10-21 20:40:00',
  '2021-10-21 20:45:00',
  '2021-10-21 20:50:00',
  '2021-10-21 20:55:00',
  '2021-10-21 21:00:00',
  '2021-10-21 21:05:00',
  '2021-10-21 21:10:00',
  '2021-10-21 21:15:00',
  '2021-10-21 21:20:00',
  '2021-10-21 21:25:00',
  '2021-10-21 21:30:00',
  '2021-10-21 21:35:00',
  '2021-10-21 21:40:00',
  '2021-10-21 21:45:00',
  '2021-10-21 21:50:00',
  '2021-10-21 21:55:00',
  '2021-10-21 22:00:00',
  '2021-10-21 22:05:00',
  '2021-10-21 22:10:00',
  '2021-10-21 22:15:00',
  '2021-10-21 22:20:00',
  '2021-10-21 22:25:00',
  '2021-10-21 22:30:00',
  '2021-10-21 22:35:00',
  '2021-10-21 22:40:00',
  '2021-10-21 22:45:00',
  '2021-10-21 22:50:00',
  '2021-10-21 22:55:00',
  '2021-10-21 23:00:00',
  '2021-10-21 23:05:00',
  '2021-10-21 23:10:00',
  '2021-10-21 23:15:00',
  '2021-10-21 23:20:00',
  '2021-10-21 23:25:00',
  '2021-10-21 23:30:00',
  '2021-10-21 23:35:00',
  '2021-10-21 23:40:00',
  '2021-10-21 23:45:00',
  '2021-10-21 23:50:00',
  '2021-10-21 23:55:00',
  '2021-10-21 24:00:00',
];

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
          data: [],
          axisLabel: {
            showMaxLabel: true,
          },
        },
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: false,
            },
            scale: false,
            max: 'dataMax',
            min: 'dataMin',
            // splitNumber: 6,
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
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100,
          },
          {
            start: 0,
            end: 100,
          },
        ],
        series: [
          {
            data: [7, 10, 12, 24, 20.3, 17, 6],
            type: 'line',
            sampling: 'lttb',
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
            markLine: {
              data: [{ type: 'average', name: '平均值' }],
              // symbol: ['none', 'none'], //去掉箭头
              label: {
                show: true,
                color: 'red',
                fontSize: 8,
              },
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
              ],
            },
          },
        ],
      },
      fakeData: [
        { id: 8, val: '源端监视', source: yuanduan, routeName: 'Yuanduan' },
        { id: 9, val: '网侧监视', source: wangce, routeName: 'Wangce' },
        { id: 10, val: '电力潮流图', source: dianlichaoliu, routeName: 'Dianlichaoliu' },
        { id: 11, val: '电压趋势图', source: dianyaqushi, routeName: 'Dianyaqushi' },
        { id: 12, val: '电压合格率', source: hegelv, routeName: 'Hegelv' },
        { id: 13, val: '发电机负荷率', source: fuzailv, routeName: 'Fuzailv' },
        { id: 14, val: '主变油温', source: youwen, routeName: 'Zhubianyouwen' },
        { id: 15, val: '主变负荷率', source: zhubianfuzailv, routeName: 'ZhubianFuzailv' },
        { id: 16, val: '直流系统', source: zhiliu, routeName: 'Zhiliu' },
      ],
      fakeData2: [
        { id: 1, val: '总用电', yougong: 61.23, wugong: 26.86, source: yuanduan, routeName: 'Wangce' },
        { id: 2, val: '总发电', yougong: 61.23, wugong: 26.86, source: wangce, routeName: 'Yuanduan' },
        { id: 3, val: '总进线', yougong: 61.23, wugong: 26.86, source: dianlichaoliu, routeName: 'Yuanduan' },
        { id: 4, val: '自供电率', percent: 96, source: dianyaqushi, routeName: 'Dianyaqushi' },
      ],
      newArr: [],
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
          right: '4%',
          bottom: '0%',
          width: '88%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            showMaxLabel: true,
          },
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
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100,
          },
          {
            start: 0,
            end: 100,
          },
        ],
        color: ['#BCBCBC', '#00AAFF', '#FFAAFF'],
        legend: {
          data: ['谷', '平', '峰'],
          icon: 'stack',
          itemHeight: 10, //修改icon图形大小
          textStyle: {
            fontSize: hp(24 / BASE_HEIGHT),
            color: '#000',
          },
          left: '10%',
          top: '12%',
        },
        label: {
          show: false,
          position: 'top',
          color: '#fff',
          // backgroundColor: 'red',
        },
        tooltip: {
          trigger: 'axis',
          confine: true,
          padding: [
            5, // 上
            5, // 右
            5, // 下
            5, // 左
          ],
          textStyle: {
            fontSize: 12,
            fontWeight: 'normal',
          },
        },
        series: [
          {
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            label: {
              show: false,
              position: 'top',
              color: '#fff',
              // backgroundColor: 'red',
            },
            itemStyle: {
              color: '#FA0208',
            },
            data: [],
            markLine: {
              data: [{ type: 'average', name: '平均值' }],
              // symbol: ['none', 'none'], //去掉箭头
              label: {
                show: true,
                color: 'red',
                fontSize: 8,
              },
            },
            markPoint: {
              data: [
                {
                  type: 'max',
                  name: '最大值',
                  color: '#fff',
                  symbol: 'roundRect',
                  symbolSize: [50, 30],
                  symbolOffset: [0, '-30%'],
                },
                {
                  type: 'min',
                  name: '最小值',
                  color: '#fff',
                  symbol: 'roundRect',
                  symbolSize: [50, 30],
                  symbolOffset: [0, '-120%'],
                },
              ],
            },
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
              show: false,
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
                    // name: '尖',
                    xAxis: '10:00',
                  },
                  {
                    xAxis: '12:00',
                  },
                ],
                [
                  {
                    // name: '尖',
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
        // resData.map(item => {
        //   item = moment(item).format('YYYY-MM-DD HH:mm');
        //   newArr.push(item);
        // });
        const val = newArr.map(item => item.slice(11, 16));
        let { pieOption } = this.state;
        this.pieOption.clear();
        pieOption.xAxis.data = val;
        pieOption.series[0].data = res.body.all.value.map(item => Number(item.toFixed(2)));
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
            pieOption.series[2].data = res.body.flat.value;
            pieOption.series[3].data = res.body.peak.value;
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
        pieOption.yAxis.axisLabel = {
          show: true,
          textStyle: {
            fontSize: 8,
          },
          formatter: function(value) {
            return value && `${Number(value)}.0`;
          },
        };
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
        // let newArr = [];
        // resData.map(item => {
        //   item = moment(item).format('YYYY-MM-DD HH:mm');
        //   newArr.push(item);
        // });
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
                yougong: Number(totalIncomingLine.youGong).toFixed(2),
                wugong: Number(totalIncomingLine.wuGong).toFixed(2),
                source: wangce,
                routeName: 'Yuanduan',
              },
              {
                id: 3,
                val: '总进线',
                yougong: Number(totalElectricityGeneration.youGong).toFixed(2),
                wugong: Number(totalElectricityGeneration.wuGong).toFixed(2),
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

  handleClick = async item => {
    const menuIdArr = await AsyncStorage.getItem('menuIdArr');
    const newArr = menuIdArr.split(',').map(items => Number(items));
    const { navigation } = this.props;
    if (newArr.includes(item.id)) {
      navigation.navigate(item.routeName);
    } else {
      Toast.info(`您没有访问${item.val}的权限`);
    }
    // this.webView.injectJavaScript(`receiveMessage(${this.state.percent});true;`);
  };

  handleClickZhi = async () => {
    const menuIdArr = await AsyncStorage.getItem('menuIdArr');
    const newArr = menuIdArr.split(',').map(items => Number(items));
    const { navigation } = this.props;
    if (newArr.includes(16)) {
      navigation.navigate('Zhiliu');
    } else {
      Toast.info('您没有访问直流系统的权限');
    }
  };

  handleClickCard = async (item, index) => {
    const menuIdArr = await AsyncStorage.getItem('menuIdArr');
    const newArr = menuIdArr.split(',').map(items => Number(items));
    const { navigation } = this.props;

    if (index === 0 && newArr.includes(9)) {
      // 总用电（有功功率、无功功率）：点击后跳转至KPI-网侧监视模块中
      navigation.navigate('Wangce');
    } else if (index === 0 && !newArr.includes(9)) {
      Toast.info('您没有访问网侧监视的权限');
    }
    if (newArr.includes(8)) {
      if (index === 1) {
        // 总发电（有功功率、无功功率）：点击后跳转至KPI-源端监视-用电tab中。
        navigation.navigate(item.routeName, { activeIndex: 2 });
      } else if (index === 2) {
        // 总进线（有功功率、无功功率）、自供电率：点击后跳转至KPI-源端监视-电网购电tab中。
        navigation.navigate(item.routeName, { activeIndex: 1 });
      }
    } else {
      Toast.info('您没有访问源端监视的权限');
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
            Orientation.lockToPortrait();
            const user = await AsyncStorage.getItem('user');
            if (user) {
              this.getHeadInfo();
              this.selfDowerSupplyRate();
              this.totalLoadCurve();
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
        <ScrollView>
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
              style={styles.horizontalContainer}
              showsHorizontalScrollIndicator={false}
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
                <TouchableOpacity style={styles.tabButton} onPress={() => this.handleClickZhi()}>
                  <Image source={fakeData[8].source} style={styles.image} />
                  <Text style={styles.menuItem}>{fakeData[8].val}</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
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
    height: hp((420 * 1.5) / BASE_HEIGHT),
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
    height: hp((380 * 1.5) / BASE_HEIGHT),
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
