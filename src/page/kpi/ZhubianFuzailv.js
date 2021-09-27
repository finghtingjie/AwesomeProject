import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';

// import { Toast, Button, PullPicker } from 'teaset';

const backIcon = require('../../assets/backicon.png');

import { loadRateOfMainTransformer } from '@api/kpi';

import styles from './FuzailvStyle';
import Toast from 'teaset/components/Toast/Toast';

class Hegelv extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['场站', '主变', '负载率(%)'],
      tableData: [
        ['220kV铁钢站', ['1#主变', '2#主变', '3#主变'], ['29.73', '30.27', '27.06']],
        ['220kV轧钢站', ['1#主变', '2#主变', '3#主变'], ['1.70', '2.06', '1.88']],
        ['1#110kV站', ['1#主变', '2#主变', '3#主变'], ['25.09', '4.84', '14.11']],
        ['2#110kV站', ['1#主变', '2#主变', '3#主变', '4#主变'], ['19.78', '0.00', '5.67', '39.88']],
      ],
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    this.loadRateOfMainTransformer();
  }

  loadRateOfMainTransformer = () => {
    loadRateOfMainTransformer({}).then(res => {
      if (res && res.status === 200) {
        console.log(res, '主变负荷率');
        const resData = res.body;
        let newArr = [];
        resData.map((item, index) => {
          newArr[index] = [
            item.name,
            item.data !== undefined && Object.keys(item.data),
            item.data !== undefined && Object.values(item.data).map(items => Number(items).toFixed(2)),
          ];
        });
        console.log(newArr, '主变负荷率');
        this.setState({
          tableData: newArr,
        });
      } else {
        Toast.fail(res.msg);
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
        <View style={styles.itemsStyle}>
          <Text style={this.renderTextColor(item, index)}>{item}</Text>
        </View>
      );
    });
  };

  renderTextColor = (item, index) => {
    if (Number(item) < 10) {
      return styles.redTextStyle;
    } else {
      if (index === 2) {
        return styles.greenTextStyle;
      } else {
        return styles.darkTextStyle;
      }
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
          <Text style={styles.content}>主变负荷率</Text>
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
          <ScrollView>
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
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Hegelv;
