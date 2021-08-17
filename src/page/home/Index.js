import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import { WebView } from 'react-native-webview';
import { ECharts } from 'react-native-echarts-wrapper';
import { Toast, ModalIndicator, Button } from 'teaset';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

const yuanduan = require('../../assets/kpi/yuanduan.png');
const wangce = require('../../assets/kpi/wangce.png');
const dianlichaoliu = require('../../assets/kpi/dianli.png');
const dianyaqushi = require('../../assets/kpi/dianyaqushi.png');
const hegelv = require('../../assets/kpi/dianyahege.png');
const fuzailv = require('../../assets/kpi/fadianji.png');
const youwen = require('../../assets/kpi/zhubianyouwen.png');
const zhubianfuzailv = require('../../assets/kpi/zhubian.png');
const zhiliu = require('../../assets/kpi/zhiliu.png');

class Index extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      option: {
        title: {
          text: '自供电率统计图',
          left: 'center',
          textStyle: {
            fontSize: hp(36 / BASE_HEIGHT),
            fontWeight: 'bold',
          },
        },
        grid: {
          left: '2%',
          right: '10%',
          bottom: '0%',
          width: '80%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['00:00', '04:00', '08:00', '12:00', '16:00', '18:00', '24:00'],
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [7, 10, 12, 24, 20.3, 17, 6],
            type: 'line',
            lineStyle: {
              color: '#2B7CF4',
            },
            label: {
              show: true,
              position: 'top',
              color: '#fff',
              // backgroundColor: 'red',
            },
            markLine: {
              symbol: ['none', 'none'], //去掉箭头
              lineStyle: {
                // color: 'red',
              },
              data: [
                {
                  yAxis: 12,
                  label: {
                    normal: {
                      formatter: '最新值{c}',
                    },
                  },
                },
              ],
            },
            markPoint: {
              data: [
                { type: 'max', name: '最大值', color: '#fff' },
                { type: 'min', name: '最小值', color: '#fff' },
                // { name: '最新值', value: 12, xAxis: 2, yAxis: 12 },
              ],
              label: {
                // formatter: '{c}',
                formatter: function(params) {
                  if (params === 12) {
                    return '最新{c}';
                  }
                },
              },
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
        { id: 6, val: '发电机负载率', source: fuzailv, routeName: 'Fuzailv' },
        { id: 7, val: '主变油温', source: youwen, routeName: 'Zhubianyouwen' },
        { id: 8, val: '主变负载率', source: zhubianfuzailv, routeName: 'ZhubianFuzailv' },
        { id: 9, val: '直流系统', source: zhiliu, routeName: 'Zhiliu' },
      ],
    };
  }

  componentDidMount() {}

  handleClick = item => {
    const { navigation } = this.props;
    navigation.navigate(item.routeName);
  };

  render() {
    const { option, fakeData } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.chartContainer}>
          <ECharts option={option} backgroundColor="#fff" />
        </View>
        <ScrollView horizontal style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.menuContainer}>
              {fakeData.map(item => {
                return (
                  <TouchableOpacity style={styles.tabButton} key={item.id} onPress={() => this.handleClick(item)}>
                    <Image source={item.source} style={styles.image} />
                    <Text style={styles.menuItem}>{item.val}</Text>
                  </TouchableOpacity>
                );
              })}
              {/* <TouchableOpacity style={styles.tabButton} onPress={() => this.handleClick()}>
                <Image source={fakeData[8].source} style={styles.image} />
                <Text style={styles.menuItem}>{fakeData[8].val}</Text>
              </TouchableOpacity> */}
            </View>
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
  image: {
    width: wp(100 / BASE_WIDTH),
    height: wp(100 / BASE_WIDTH),
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  chartContainer: {
    width: wp(1040 / BASE_WIDTH),
    height: hp(380 / BASE_HEIGHT),
    marginTop: hp(80 / BASE_HEIGHT),
    marginLeft: wp(40 / BASE_WIDTH),
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'auto',
    width: wp(1040 / BASE_WIDTH),
    marginTop: hp(20 / BASE_HEIGHT),
    marginLeft: wp(40 / BASE_WIDTH),
    backgroundColor: '#fff',
    flexWrap: 'wrap',
  },
  tabButton: {
    // flex: 1,
    width: wp(1040 / 4 / BASE_WIDTH),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(185 / BASE_HEIGHT),
  },
  menuItem: {
    fontSize: hp(32 / BASE_HEIGHT),
    fontWeight: '400',
    color: '#333',
    marginTop: hp(25 / BASE_HEIGHT),
  },
});

export default Index;
