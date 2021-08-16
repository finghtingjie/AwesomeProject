import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';

const arrowPic = require('../../assets/profile/xiala.png');

import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

import styles from './YuanduanStyle';

class Yuanduan extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {}

  render() {
    // const { userName, fullName, verifyPassword, type, groupName } = this.state;
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
            <IconFont name="xiayiye" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.content}>源端监视</Text>
        </View>
        <View style={styles.centerContainer}>
          {/* <Button style={styles.submitBtn} onPress={this.handleSubmit}>
            <Text style={styles.submitBtnText}>保&nbsp;&nbsp;&nbsp;存</Text>
          </Button> */}
        </View>
      </View>
    );
  }
}

export default Yuanduan;
