import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, StatusBar, Image } from 'react-native';

import { Toast, Button, PullPicker } from 'teaset';

const rect = require('../../assets/monitor/rect.png');
const changePic = require('../../assets/monitor/change.png');

import IconFont from '@iconfont/index.js';
// import { updateInfo } from '@api/profile';

import styles from './MonitorStyle';

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
