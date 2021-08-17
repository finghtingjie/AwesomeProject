import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Dimensions, StatusBar } from 'react-native';

import { WebView } from 'react-native-webview';
import { ECharts } from 'react-native-echarts-wrapper';
import { Toast, ModalIndicator, Button } from 'teaset';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const scale = Dimensions.get('screen').scale;

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
const dianlvjindu = require('../../assets/home/dianlvjindu.png');

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
      fakeData2: [
        { id: 1, val: '总用电', yougong: 61.23, wugong: 26.86, source: yuanduan, routeName: 'Yuanduan' },
        { id: 2, val: '总发电', yougong: 61.23, wugong: 26.86, source: wangce, routeName: 'Wangce' },
        { id: 3, val: '总进线', yougong: 61.23, wugong: 26.86, source: dianlichaoliu, routeName: 'Dianlichaoliu' },
        { id: 4, val: '自供电率', percent: 96, source: dianyaqushi, routeName: 'Dianyaqushi' },
      ],
    };
  }

  componentDidMount() {
    console.log(screenWidth, screenHeight, scale);
  }

  handleClick = item => {
    const { navigation } = this.props;
    navigation.navigate(item.routeName);
  };

  render() {
    const { option, fakeData, fakeData2 } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          animated
          translucent
          backgroundColor="transparent"
          showHideTransition="fade"
          networkActivityIndicatorVisible
        />
        <View style={styles.topcardContainer} />
        <View style={styles.centerContainer}>
          {fakeData2.map(item => {
            return (
              <View style={styles.card} key={item.id}>
                <Image style={styles.commonPic} source={commonPic} />
                {item.yougong ? (
                  <View style={styles.commonWrap}>
                    <Text style={styles.yougong}>{item.yougong}</Text>
                    <Text style={styles.yougong2}>{item.yougong ? '有功功率(Mw)' : ''}</Text>
                    <View style={styles.lightContainer}>
                      {item.yougong ? <Image source={lightPic} style={styles.lightPic} /> : null}
                    </View>
                    <Text style={styles.wugong}>{item.wugong}</Text>
                    <Text style={styles.yougong2}>{item.yougong ? '无功功率(Mvar)' : ''}</Text>
                  </View>
                ) : (
                  <View style={styles.commonWrap}>
                    <View style={styles.lightContainer}>
                      <Image source={dianlvjindu} style={styles.dianlvjindu} />
                      <Text style={styles.percent}>89%</Text>
                    </View>
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
          <ECharts option={option} backgroundColor="#fff" />
        </View>
        <View style={styles.chartContainer}>
          <ECharts option={option} backgroundColor="#fff" />
        </View>
        <ScrollView horizontal style={styles.horizontalContainer}>
          <View style={styles.topContainer}>
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
              <TouchableOpacity style={styles.tabButton} onPress={() => this.handleClick()}>
                <Image source={fakeData[8].source} style={styles.image} />
                <Text style={styles.menuItem}>{fakeData[8].val}</Text>
              </TouchableOpacity>
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
    marginTop: hp(80 / BASE_HEIGHT),
    // marginBottom: hp(32 / BASE_HEIGHT),
    paddingBottom: hp(32 / BASE_HEIGHT),
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
    left: '10%',
    top: hp(32 / BASE_HEIGHT),
    width: '80%',
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
    marginTop: hp(10 / BASE_HEIGHT),
    fontSize: hp(24 / BASE_HEIGHT),
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
  percent: {
    position: 'absolute',
    width: '100%',
    top: hp(110 / BASE_HEIGHT),
    // left: hp(76 / BASE_HEIGHT),
    color: '#1575F6',
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
    marginTop: hp(62 / BASE_HEIGHT),
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
    fontSize: hp(36 / BASE_HEIGHT),
    // lineHeight: hp(50 / BASE_HEIGHT),
    // height: hp(50 / BASE_HEIGHT),
    // marginTop: hp(8 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  horizontalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: hp(24 / BASE_HEIGHT),
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
  chartContainer1: {
    // width: screenHeight - 40,
    width: '92%',
    height: hp(430 / BASE_HEIGHT),
    marginTop: hp(20 / BASE_HEIGHT),
    marginLeft: '4%',
    borderRadius: wp(20 / BASE_WIDTH),
    overflow: 'hidden',
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
    height: hp(430 / BASE_HEIGHT),
    // width: '92%',
    width: wp(1040 / BASE_WIDTH),
    marginLeft: wp(20 / BASE_WIDTH),
    // marginLeft: '4%',
    // width: (scrreenWidth * 1040) / 1080,
    marginTop: hp(24 / BASE_HEIGHT),
    backgroundColor: '#fff',
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
