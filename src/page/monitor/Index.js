import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';

// import { Toast, Button, PullPicker } from 'teaset';

const rect = require('../../assets/monitor/rect.png');
const changePic = require('../../assets/monitor/change.png');

// import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

import styles from './MonitorStyle';

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {}

  render() {
    const tableHead = ['220kv', '110kv', '10kv', '主变'];
    const { activeIndex } = this.state;
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
          {tableHead.map((item, index) => {
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
      </View>
    );
  }
}

export default Index;
