import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, StatusBar, Image } from 'react-native';

import { Toast, Button, PullPicker } from 'teaset';

const rect = require('../../assets/monitor/rect.png');
const changePic = require('../../assets/monitor/change.png');

// import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

import styles from './MonitorStyle';

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: 'add',
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {}

  render() {
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
      </View>
    );
  }
}

export default Index;
