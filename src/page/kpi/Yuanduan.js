import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';

const backIcon = require('../../assets/backicon.png');

import { sourceEndMonitor } from '@api/kpi';

import styles from './YuanduanStyle';

class Yuanduan extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['系统', '有功功率(MW)', '无功功率(MVar)', '功率因数'],
      tableData: [['1', '2', '3', '4'], ['a', 'b', 'c', 'd'], ['1', '2', '3', '456'], ['aa', 'b', 'c', 'd']],
      activeTab: 1,
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    // const { params } = this.props.navigation.state;
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
            item.youGong ? Number(item.youGong).toFixed(2) : '--',
            item.wuGong ? Number(item.wuGong).toFixed(2) : '--',
            item.dianLiu ? Number(item.dianLiu).toFixed(2) : '--',
          ];
        });
        this.setState({
          tableData: newArr,
        });
      }
    });
  };

  handleTabChange = item => {
    if (item === '电网购电') {
      this.setState({ activeTab: 1 });
    } else {
      this.setState({ activeTab: 2 });
    }
    this.sourceEndMonitor(item);
  };

  renderColStyle = (item, index) => {
    if (index === 0) {
      return styles.nameStyle;
    } else {
      return styles.commonnameStyle;
    }
  };

  render() {
    const { tableData, tableHead, activeTab } = this.state;
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
            <Image style={styles.backIcon} source={backIcon} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={styles.content}>源端监视</Text>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={activeTab === 1 ? styles.leftBtnActive : styles.commonBtn}
            onPress={() => this.handleTabChange('电网购电')}>
            <Text style={styles.commonText}>电网购电</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={activeTab === 2 ? styles.rightBtnActive : styles.commonBtn2}
            onPress={() => this.handleTabChange('发电')}>
            <Text style={styles.commonText}>发电</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tableContainer}>
          <View style={styles.headContainer}>
            {tableHead.map((item, index) => {
              return (
                <View key={item} style={this.renderColStyle(item, index)}>
                  <Text style={styles.commonColText}>{item}</Text>
                </View>
              );
            })}
          </View>
          <ScrollView>
            <View style={styles.bbb}>
              {tableData.map(item => {
                return (
                  <View style={styles.rowContainer} key={item}>
                    {item.map((items, index) => {
                      return (
                        <View key={items + index} style={this.renderColStyle(item, index)}>
                          <Text style={styles.commonColText}>{items}</Text>
                        </View>
                      );
                    })}
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Yuanduan;
