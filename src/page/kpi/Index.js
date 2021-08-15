import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, StatusBar, Image } from 'react-native';

import { Toast, Button, PullPicker } from 'teaset';

const yuanduan = require('../../assets/kpi/yuanduan.png');
const wangce = require('../../assets/kpi/wangce.png');
const dianlichaoliu = require('../../assets/kpi/dianli.png');
const dianyaqushi = require('../../assets/kpi/dianyaqushi.png');
const hegelv = require('../../assets/kpi/dianyahege.png');
const fuzailv = require('../../assets/kpi/fadianji.png');
const youwen = require('../../assets/kpi/zhubianyouwen.png');
const zhubianfuzailv = require('../../assets/kpi/zhubian.png');
const zhiliu = require('../../assets/kpi/zhiliu.png');

import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

import styles from './KpiStyle';

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fakeData: [
        { id: 1, val: '源端监视', source: yuanduan },
        { id: 2, val: '网侧监视', source: wangce },
        { id: 3, val: '电力潮流图', source: dianlichaoliu },
        { id: 4, val: '电压趋势图', source: dianyaqushi },
        { id: 5, val: '电压合格率', source: hegelv },
        { id: 6, val: '发电机负载率', source: fuzailv },
        { id: 7, val: '主变油温', source: youwen },
        { id: 8, val: '主变负载率', source: zhubianfuzailv },
        { id: 9, val: '直流系统', source: zhiliu },
      ],
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {}

  handleSelect = () => {
    const items = ['分组1', '分组2', '分组3'];
    PullPicker.show('请选择分组', items, this.state.selectedIndex, (item, index) =>
      this.setState({ selectedIndex: index, groupName: item }, () => console.log(item)),
    );
  };

  render() {
    const { fakeData } = this.state;
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
          <Text style={styles.content}>kpi</Text>
        </View>
        <View style={styles.centerContainer}>
          {fakeData.map(item => {
            return (
              <TouchableOpacity style={styles.card} key={item.id} onPress={() => this.props.navigation.goBack()}>
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
