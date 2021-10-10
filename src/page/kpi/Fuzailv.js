import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';

// import { Toast, Button, PullPicker } from 'teaset';

const backIcon = require('../../assets/backicon.png');

import { generatorLoadRate } from '@api/kpi';

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
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    this.generatorLoadRate();
  }

  generatorLoadRate = () => {
    generatorLoadRate({}).then(res => {
      if (res && res.status === 200) {
        const resData = res.body;
        let newArr = [];
        resData.map((item, index) => {
          newArr[index] = [
            item.name,
            Object.keys(item.data),
            Object.values(item.data).map(items => Number(items).toFixed(2)),
          ];
        });
        console.log(newArr);
        this.setState({
          tableData: newArr,
        });
      }
    });
  };

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
        <View style={styles.itemsStyle} key={item}>
          <Text style={index === 2 ? styles.greenTextStyle : styles.darkTextStyle}>{item}</Text>
        </View>
      );
    });
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
          <View style={styles.navigationContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.goBack()}>
              <Image style={styles.backIcon} source={backIcon} resizeMode="contain" />
            </TouchableOpacity>
            <Text style={styles.content}>发电机负荷率</Text>
          </View>
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
          {tableData.map((item, i) => {
            return (
              <View style={styles.rowContainer2} key={item}>
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
