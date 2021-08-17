import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';

import { Toast, Button, PullPicker } from 'teaset';
import { WebView } from 'react-native-webview';
import { ECharts } from 'react-native-echarts-wrapper';

import Orientation from 'react-native-orientation-locker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const backIcon = require('../../assets/backicon.png');

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

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
        series: [
          {
            name: '油温1',
            type: 'line',
            lineStyle: {
              color: '#3CBE1E',
            },
            stack: '总量',
            data: [10, 12, 14, 16, 20, 26, 28, 24, 20, 16, 14, 9],
          },
          {
            name: '油温2',
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
    };
  }

  componentDidMount() {
    Orientation.lockToLandscapeLeft();
  }

  handleChange = item => {};

  render() {
    const { option } = this.state;
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
          <Text style={styles.content}>电压趋势图</Text>
        </View>
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
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    fontSize: hp(48 / BASE_HEIGHT),
    fontWeight: 'bold',
    top: hp(128 / BASE_HEIGHT),
    height: hp(215 / BASE_HEIGHT),
    // left: wp(70 / BASE_WIDTH),
  },
});

export default Index;
