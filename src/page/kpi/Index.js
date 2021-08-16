import React from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';

import Orientation from 'react-native-orientation-locker';
// import { Toast, Button, PullPicker } from 'teaset';

const yuanduan = require('../../assets/kpi/yuanduan.png');
const wangce = require('../../assets/kpi/wangce.png');
const dianlichaoliu = require('../../assets/kpi/dianli.png');
const dianyaqushi = require('../../assets/kpi/dianyaqushi.png');
const hegelv = require('../../assets/kpi/dianyahege.png');
const fuzailv = require('../../assets/kpi/fadianji.png');
const youwen = require('../../assets/kpi/zhubianyouwen.png');
const zhubianfuzailv = require('../../assets/kpi/zhubian.png');
const zhiliu = require('../../assets/kpi/zhiliu.png');

// import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

import styles from './KpiStyle';

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fakeData: [
        { id: 1, val: '源端监视', source: yuanduan, routeName: 'Yuanduan' },
        { id: 2, val: '网侧监视', source: wangce, routeName: 'Wangce' },
        { id: 3, val: '电力潮流图', source: dianlichaoliu, routeName: 'Dianlichaoliu' },
        { id: 4, val: '电压趋势图', source: dianyaqushi, routeName: 'dianyaqushi' },
        { id: 5, val: '电压合格率', source: hegelv, routeName: 'hegelv' },
        { id: 6, val: '发电机负载率', source: fuzailv, routeName: 'fuzailv' },
        { id: 7, val: '主变油温', source: youwen, routeName: 'youwen' },
        { id: 8, val: '主变负载率', source: zhubianfuzailv, routeName: 'zhubianfuzailv' },
        { id: 9, val: '直流系统', source: zhiliu, routeName: 'zhiliu' },
      ],
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {}

  handleClick = item => {
    const { navigation } = this.props;
    navigation.navigate(item.routeName);
  };

  render() {
    const { fakeData } = this.state;
    return (
      <View style={styles.container}>
        <NavigationEvents
          onDidFocus={() => {
            Orientation.lockToPortrait();
          }}
        />
        <StatusBar
          animated
          translucent
          backgroundColor="transparent"
          showHideTransition="fade"
          networkActivityIndicatorVisible
        />
        <View style={styles.navigationBar}>
          <Text style={styles.content}>kpi</Text>
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
