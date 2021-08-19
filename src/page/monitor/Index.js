import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';

// import { Toast, Button, PullPicker } from 'teaset';

const rect = require('../../assets/monitor/rect.png');
const changePic = require('../../assets/monitor/change.png');
const shuPic = require('../../assets/monitor/shu.png');

// import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

import styles from './MonitorStyle';

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      tableHead: ['名称', '有功功率(MW)', '无功功率(MVar)', '电流(A)'],
      tableData: [
        ['铁扎一线', '61.13', '26.86', '0.91'],
        ['铁扎二线', '61.13', '26.86', '0.91'],
        ['曹铁一线', '61.13', '26.86', '0.91'],
        ['曹铁二线', '61.13', '26.86', '0.91'],
      ],
      dataSource: [
        {
          id: 45,
          name: '铁扎一线',
          yougong: '100',
          wugong: '100',
          dianliu: 56,
        },
        {
          id: 46,
          name: '铁扎二线',
          yougong: '100',
          wugong: '100',
          dianliu: 56,
        },
        {
          id: 47,
          name: '曹铁一线',
          yougong: '100',
          wugong: '100',
          dianliu: 56,
        },
        {
          id: 48,
          name: '曹铁二线',
          yougong: '100',
          wugong: '100',
          dianliu: 56,
        },
      ],
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {}

  render() {
    const tabArr = ['220kv', '110kv', '10kv', '主变'];
    const { tableData, tableHead, activeIndex } = this.state;
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
          <TouchableOpacity style={styles.iconContainer}>
            <Image style={styles.rect} source={rect} />
            <Text style={styles.leftText}>源 端</Text>
          </TouchableOpacity>
          <Text style={styles.content}>监控</Text>
          <TouchableOpacity style={styles.iconContainerRight}>
            <Image style={styles.changePic} source={changePic} />
          </TouchableOpacity>
        </View>
        <View style={styles.tabContainer}>
          {tabArr.map((item, index) => {
            return (
              <TouchableOpacity
                key={item}
                style={styles.commonBtn}
                onPress={() => this.setState({ activeIndex: index })}>
                <Text style={styles.commonText}>{item}</Text>
                {index === activeIndex && <View style={styles.commonBorder} />}
              </TouchableOpacity>
            );
          })}
        </View>
        {/* table */}
        <View style={styles.commonTableContainer}>
          <View style={styles.tabTitleContainer}>
            <Image style={styles.shuPic} source={shuPic} />
            <Text style={styles.tabTitle}>进线/联络线</Text>
          </View>
          <View style={styles.tableContainer}>
            <View style={styles.headContainer}>
              {tableHead.map((item, index) => {
                return (
                  <View key={item} style={styles.nameStyle}>
                    <Text style={styles.commonColText}>{item}</Text>
                  </View>
                );
              })}
            </View>
            {tableData.map(item => {
              return (
                <View style={styles.rowContainer}>
                  {item.map(items => {
                    return (
                      <View key={items} style={styles.nameStyle}>
                        <Text style={styles.commonrowText}>{items}</Text>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
