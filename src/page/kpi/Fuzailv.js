import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';

// import { Toast, Button, PullPicker } from 'teaset';

const backIcon = require('../../assets/backicon.png');
const yes = require('../../assets/kpi/yes.png');
const no = require('../../assets/kpi/no.png');

// import { updateInfo } from '@api/profile';

import styles from './FuzailvStyle';

class Hegelv extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['机组', '发电机', '负载率'],
      tableData: [
        ['220kV铁钢站220kV4#母线', ['231.89', '232'], '215'],
        ['220kV铁钢站220kV4#母线', '231.89', '215'],
        ['220kV铁钢站220kV4#母线', '231.89', '215'],
      ],
      dataSource: [
        {
          id: 45,
          name: '热电110kV站',
          fadian: ['3#25MW机组', '4#25MW机组'],
          fvzailv: ['100.23', '100.04'],
        },
        {
          id: 46,
          name: '热电110kV站',
          fadian: ['3#25MW机组', '4#25MW机组'],
          fvzailv: ['100.23', '100.04'],
        },
        {
          id: 47,
          name: '热电110kV站',
          fadian: ['3#25MW机组', '4#25MW机组'],
          fvzailv: ['100.23', '100.04'],
        },
      ],
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {}

  renderColStyle = (item, items, index) => {
    if (index === 0) {
      return styles.nameStyle;
    } else if (index === 1 && Array.isArray(items)) {
      return styles.itemsStyle;
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
    } else if (Array.isArray(items)) {
      console.log(items);
      return (
        <Text>
          {items[0]}
          <Text>{items[1]}</Text>
        </Text>
      );
    } else {
      return items;
    }
  };

  renderArrayText = items => {
    return items.map(item => {
      return (
        <View>
          <Text>{item}</Text>
        </View>
      );
    });
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
          <Text style={styles.content}>发电机负载率</Text>
        </View>
        <View style={styles.tableContainer}>
          <View style={styles.headContainer}>
            {tableHead.map((item, index) => {
              return (
                <View key={item} style={this.renderColStyle(item, null, index)}>
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
                    <View key={items} style={this.renderColStyle(item, items, index)}>
                      {Array.isArray(items) ? (
                        this.renderArrayText(items)
                      ) : (
                        <Text style={this.renderTextStyle(items, index)}>{this.renderText(items, index)}</Text>
                      )}
                      )}
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
