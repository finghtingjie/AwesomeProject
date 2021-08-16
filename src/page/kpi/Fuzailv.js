import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';

// import { Toast, Button, PullPicker } from 'teaset';

const backIcon = require('../../assets/backicon.png');

// import { updateInfo } from '@api/profile';

import styles from './FuzailvStyle';

class Hegelv extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['机组', '发电机', '负载率'],
      tableData: [
        ['热电110kV站', ['1#发电机', '2#发电机'], ['100.34', '100.19']],
        ['25MW机组', ['3#25MW机组', '4#25MW机组'], ['100.34', '100.19']],
        ['TRT机组', ['1#TRT', '2#TRT', '3#TRT'], ['80.82', '84.34', '78.16']],
        ['CDQ机组', ['1#CDQ ', '2#CDQ ', '3#CDQ '], ['100.34', '100.19', '0']],
        ['CCPP机组', ['CPP燃机', 'CCPP汽机'], ['100.34', '100.19']],
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
    } else {
      return styles.itemsStyle;
    }
  };

  renderRowStyle = (item, index) => {
    return styles.itemsStyle;
  };

  renderTextStyle = (item, index) => {
    if (index === 0) {
      return styles.purpleTextStyle;
    } else if (index === 1) {
      return styles.greenTextStyle;
    } else if (index === 2) {
      return styles.redTextStyle;
    }
  };

  renderArrayText = (items, index) => {
    return items.map(item => {
      return (
        <View style={styles.itemsStyle}>
          <Text style={index === 2 ? styles.greenTextStyle : styles.darkTextStyle}>{item}</Text>
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
                    <View key={items} style={this.renderRowStyle(item, index)}>
                      {Array.isArray(items) ? (
                        this.renderArrayText(items, index)
                      ) : (
                        <Text style={this.renderTextStyle(items, index)}>{items}</Text>
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
