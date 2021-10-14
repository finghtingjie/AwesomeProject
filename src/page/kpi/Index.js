import React from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';

import { Toast } from 'teaset';
import Orientation from 'react-native-orientation-locker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const yuanduan = require('../../assets/kpi/yuanduan.png');
const wangce = require('../../assets/kpi/wangce.png');
const dianlichaoliu = require('../../assets/kpi/dianli.png');
const dianyaqushi = require('../../assets/kpi/dianyaqushi.png');
const hegelv = require('../../assets/kpi/dianyahege.png');
const fuzailv = require('../../assets/kpi/fadianji.png');
const youwen = require('../../assets/kpi/zhubianyouwen.png');
const zhubianfuzailv = require('../../assets/kpi/zhubian.png');
const zhiliu = require('../../assets/kpi/zhiliu.png');

import styles from './KpiStyle';

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {}

  handleClick = async item => {
    const { navigation } = this.props;
    const menuIdArr = await AsyncStorage.getItem('menuIdArr');
    const newArr = menuIdArr.split(',').map(items => Number(items));
    if (newArr.includes(item.id)) {
      navigation.navigate(item.routeName);
    } else {
      Toast.info(`您没有访问${item.val}的权限`);
    }
  };

  render() {
    const { fakeData } = this.state;
    return (
      <View style={styles.container}>
        <NavigationEvents onDidFocus={() => Orientation.lockToPortrait()} />
        <StatusBar
          animated
          translucent
          backgroundColor="transparent"
          showHideTransition="fade"
          networkActivityIndicatorVisible
        />
        <View style={styles.navigationBar}>
          <Text style={styles.content}>KPI</Text>
        </View>
        <View style={styles.centerContainer}>
          {fakeData.map(item => {
            return (
              <TouchableOpacity style={styles.card} key={item.id} onPress={() => this.handleClick(item)}>
                <Image style={styles.commonPic} source={item.source} />
                <Text style={styles.commonText}>{item.val}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

export default Index;
