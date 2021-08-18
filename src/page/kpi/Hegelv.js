import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';

// import { Toast, Button, PullPicker } from 'teaset';
import Orientation from 'react-native-orientation-locker';
// import { Table, Row, Rows } from 'react-native-table-component';

const backIcon = require('../../assets/backicon.png');
const yes = require('../../assets/kpi/yes.png');
const no = require('../../assets/kpi/no.png');

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
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    Orientation.lockToLandscapeLeft();
  }

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
    const { tableData, tableHead, dataSource } = this.state;
    // let newArr = [];
    // dataSource.map((item, index) => {
    //   newArr[index] = [
    //     item.name,
    //     item.power,
    //     item.shangxian,
    //     item.xiaxian,
    //     item.dayPercent,
    //     item.monthPercent,
    //     item.yearPercent,
    //     item.isLight,
    //   ];
    // });
    // console.log(newArr);
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
          {tableData.map(item => {
            return (
              <View style={styles.rowContainer}>
                {item.map((items, index) => {
                  return (
                    <View key={items} style={this.renderColStyle(item, index)}>
                      <Text style={this.renderTextStyle(items, index)}>{this.renderText(items, index)}</Text>
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

export default Hegelv;
