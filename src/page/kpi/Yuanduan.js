import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';

// import { Toast, Button, PullPicker } from 'teaset';
import { Table, Row, Rows } from 'react-native-table-component';

const backIcon = require('../../assets/backicon.png');
const leftTab = require('../../assets/kpi/lefttab.png');
const rightTab = require('../../assets/kpi/righttab.png');

// import { updateInfo } from '@api/profile';

import styles from './YuanduanStyle';

class Yuanduan extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['系统', '有功功率(MW)', '无功功率(MVar)', '功率因数'],
      tableData: [['1', '2', '3', '4'], ['a', 'b', 'c', 'd'], ['1', '2', '3', '456'], ['a', 'b', 'c', 'd']],
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {}

  handleTabChange = val => {};

  render() {
    const { tableData, tableHead } = this.state;
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
          <Text style={styles.content}>源端监视</Text>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.commonBtn} onPress={this.handleTabChange(1)}>
            <Image style={styles.leftTab} source={leftTab} />
            <Text style={styles.commonText}>电网购电</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.commonBtn} onPress={this.handleTabChange(2)}>
            <Image style={styles.leftTab} source={rightTab} />
            <Text style={styles.commonText}>发电</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tableContainer}>
          <Table borderStyle={styles.borderStyle}>
            <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
            <Rows data={tableData} style={styles.rows} textStyle={styles.headText} />
          </Table>
        </View>
      </View>
    );
  }
}

export default Yuanduan;
