import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, StatusBar, Image } from 'react-native';

import { Toast, Button, PullPicker } from 'teaset';

const arrowPic = require('../../assets/profile/xiala.png');

import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

import styles from './WarningStyle';

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      fullName: '',
      verifyPassword: '',
      type: 'add',
      selectedIndex: null,
      groupName: '',
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;
    if (params && params.type) {
      this.setState({ type: params.type });
    }
  }

  handleSubmit = () => {
    const { navigation } = this.props;
    const { fullName, verifyPassword } = this.state;
  };

  handleSelect = () => {
    const items = ['分组1', '分组2', '分组3'];
    PullPicker.show('请选择分组', items, this.state.selectedIndex, (item, index) =>
      this.setState({ selectedIndex: index, groupName: item }, () => console.log(item)),
    );
  };

  render() {
    const { userName, fullName, verifyPassword, type, groupName } = this.state;
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
          <Text style={styles.content}>告警</Text>
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles.content}>告警</Text>
        </View>
      </View>
    );
  }
}

export default Index;
