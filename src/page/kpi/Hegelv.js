import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';

// import { Toast, Button, PullPicker } from 'teaset';
import Orientation from 'react-native-orientation-locker';
import { Table, Row, Rows } from 'react-native-table-component';

const backIcon = require('../../assets/backicon.png');

// import { updateInfo } from '@api/profile';

import styles from './HegelvStyle';

class Hegelv extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        '名称',
        '实测线电压',
        '电压合格上限',
        '电压合格下限',
        '今日合格率',
        '本月合格率',
        '本年合格率',
        '是否带电',
      ],
      tableData: [
        ['220kV铁钢站220kV4#母线', '231.89', '215', '235', '100', '100', '100', '100', '是'],
        ['220kV铁钢站220kV4#母线', '231.89', '215', '235', '100', '100', '100', '100', '是'],
        ['220kV铁钢站220kV4#母线', '231.89', '215', '235', '100', '100', '100', '100', '是'],
        ['220kV铁钢站220kV4#母线', '231.89', '215', '235', '100', '100', '100', '100', '是'],
      ],
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    Orientation.lockToLandscapeLeft();
  }

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
          <Text style={styles.content}>电压合格率</Text>
        </View>
        <View style={styles.tableContainer}>
          <Table borderStyle={styles.borderStyle}>
            <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
            <Rows data={tableData} style={styles.rows} textStyle={styles.rowsText} />
          </Table>
        </View>
      </View>
    );
  }
}

export default Hegelv;
