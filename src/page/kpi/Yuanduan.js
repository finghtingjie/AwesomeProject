import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';

// import { Toast, Button, PullPicker } from 'teaset';
import { Table, Row, Rows } from 'react-native-table-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ModalIndicator, Toast } from 'teaset';

const backIcon = require('../../assets/backicon.png');
const leftTab = require('../../assets/kpi/lefttab.png');
const rightTab = require('../../assets/kpi/righttab.png');

import { sourceEndMonitor } from '@api/kpi';

import styles from './YuanduanStyle';
import BASE_URL from '../../utils/baseurl';

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

  async componentDidMount() {
    const { params } = this.props.navigation.state;
    // const { activeIndex } = params;
    // console.log(activeIndex);
    this.sourceEndMonitor('电网购电');
  }

  sourceEndMonitor = val => {
    sourceEndMonitor({ type: val }).then(res => {
      if (res && res.status === 200) {
        const resData = res.body;
        let newArr = [];
        resData.map((item, index) => {
          newArr[index] = [
            item.name,
            Number(item.youGong).toFixed(2),
            Number(item.wuGong).toFixed(2),
            Number(item.dianLiu).toFixed(2),
          ];
        });
        this.setState({
          tableData: newArr,
        });
      }
    });
  };

  handleTabChange = val => {
    this.sourceEndMonitor(val);
  };

  renderColStyle = (item, index) => {
    if (index === 0) {
      return styles.nameStyle;
    } else {
      return styles.commonnameStyle;
    }
  };

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
          <TouchableOpacity style={styles.commonBtn} onPress={() => this.handleTabChange('电网购电')}>
            <Image style={styles.leftTab} source={leftTab} resizeMode="contain" />
            <Text style={styles.commonText}>电网购电</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.commonBtn} onPress={() => this.handleTabChange('发电')}>
            <Image style={styles.leftTab} source={rightTab} resizeMode="contain" />
            <Text style={styles.commonText}>发电</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tableContainer}>
          {/* <Table borderStyle={styles.borderStyle}>
            <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
            <Rows data={tableData} style={styles.rows} textStyle={styles.headText} />
          </Table> */}
          <View style={styles.headContainer}>
            {tableHead.map((item, index) => {
              return (
                <View key={item} style={this.renderColStyle(item, index)}>
                  <Text style={styles.commonColText}>{item}</Text>
                </View>
              );
            })}
          </View>
          {tableData.map(item => {
            return (
              <View style={styles.rowContainer} key={item}>
                {item.map((items, index) => {
                  return (
                    <View key={items} style={this.renderColStyle(item, index)}>
                      <Text style={styles.commonColText}>{items}</Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default Yuanduan;
