import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';

// import { Toast, Button, PullPicker } from 'teaset';
import Orientation from 'react-native-orientation-locker';
// import { Table, Row, Rows } from 'react-native-table-component';

const backIcon = require('../../assets/backicon.png');
const yes = require('../../assets/kpi/yes.png');
const no = require('../../assets/kpi/no.png');

import { getVoltageQualificationRate } from '@api/kpi';

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
        ['220kV铁钢站220kV4#母线', '231.89', '215', '235', '100', '100', '100', '是'],
        ['220kV铁钢站220kV4#母线', '231.89', '215', '235', '100', '100', '100', '否'],
        ['220kV铁钢站220kV4#母线', '231.89', '215', '235', '100', '100', '100', '否'],
        ['220kV铁钢站220kV4#母线', '231.89', '215', '235', '100', '100', '100', '是'],
      ],
      dataSource: [
        {
          id: 45,
          name: '220kV铁钢站220kV4#母线',
          power: '231.89',
          shangxian: '215',
          xiaxian: '235',
          dayPercent: '100',
          monthPercent: '100',
          yearPercent: '100',
          isLight: false,
        },
        {
          id: 45,
          name: '220kV铁钢站220kV4#母线',
          power: '231.89',
          shangxian: '215',
          xiaxian: '235',
          dayPercent: '100',
          monthPercent: '100',
          yearPercent: '100',
          isLight: false,
        },
        {
          id: 45,
          name: '220kV铁钢站220kV4#母线',
          power: '231.89',
          shangxian: '215',
          xiaxian: '235',
          dayPercent: '100',
          monthPercent: '100',
          yearPercent: '100',
          isLight: false,
        },
        {
          id: 45,
          name: '220kV铁钢站220kV4#母线',
          power: '231.89',
          shangxian: '215',
          xiaxian: '235',
          dayPercent: '100',
          monthPercent: '100',
          yearPercent: '100',
          isLight: false,
        },
      ],
      pageNum: 1,
      pageSize: 10,
      total: 0,
      dataFlag: false,
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    Orientation.lockToLandscapeLeft();
    this.getVoltageQualificationRate();
  }

  getVoltageQualificationRate = () => {
    let { pageNum, pageSize } = this.state;
    const params = {
      pageNum,
      pageSize,
    };
    getVoltageQualificationRate(params).then(res => {
      if (res && res.status === 200) {
        this.setState({ total: res.body.totalAmount });
        const resData = res.body;
        if (pageNum === 1) {
          const tempArr = res.body.data || [];
          let newArr = [];
          tempArr.map((item, index) => {
            newArr[index] = [
              item.name,
              item.ureal,
              item.urateLimitUp,
              item.urateLimitDn,
              item.dayRate,
              item.monthRate,
              item.yearRate,
              item.vqc || false,
            ];
          });
          this.setState({
            tableData: newArr,
          });
        } else {
          let tempArr = this.state.fakeData;
          let newArr = [];
          tempArr.map((item, index) => {
            newArr[index] = [
              item.name,
              item.ureal,
              item.urateLimitUp,
              item.urateLimitDn,
              item.dayRate,
              item.monthRate,
              item.yearRate,
              item.vqc || false,
            ];
          });
          tempArr = tempArr.concat(newArr);
          this.setState({
            fakeData: tempArr,
          });
        }
        //是否可以下拉
        const allLen = res.body.totalAmount;
        const nowLen = pageNum * pageSize;
        if (allLen > nowLen) {
          this.setState({ dataFlag: true });
        } else {
          this.setState({ dataFlag: false });
        }
      }
    });
  };

  renderColStyle = (item, index) => {
    if (index === 0) {
      return styles.nameStyle;
    } else {
      return styles.commonnameStyle;
    }
  };

  renderTextStyle = (item, index) => {
    if (index === 0) {
      return styles.darkTextStyle;
    } else if ([1, 4, 5, 6].includes(index)) {
      return styles.greenTextStyle;
    } else if (index === 2) {
      return styles.redTextStyle;
    } else {
      return styles.orangeTextStyle;
    }
  };

  renderText = (items, index) => {
    if (index === 7) {
      if (items === '是') {
        return <Image style={styles.yes} source={yes} />;
      } else {
        return <Image style={styles.yes} source={no} />;
      }
    } else {
      return items;
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
          <Text style={styles.content}>电压合格率</Text>
        </View>
        {/* <Table borderStyle={styles.borderStyle}>
            <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
            <Rows data={tableData} style={styles.rows} textStyle={styles.rowsText} />
          </Table> */}
        {/* <ScrollView style={styles.container} horizontal>

        </ScrollView> */}
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
            {tableData.map(item => {
              return (
                <View style={styles.rowContainer} key={item[1]}>
                  {item.map((items, index) => {
                    return (
                      <View key={index} style={this.renderColStyle(item, index)}>
                        <Text style={this.renderTextStyle(items, index)}>{this.renderText(items, index)}</Text>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Hegelv;
