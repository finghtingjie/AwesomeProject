import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';

// import { Toast, Button, PullPicker } from 'teaset';
import { Table, Row, Rows } from 'react-native-table-component';

const backIcon = require('../../assets/backicon.png');

import { netSideMonitor } from '@api/kpi';

import styles from './WangceStyle';

class Yuanduan extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['系统', '有功功率(MW)', '无功功率(MVar)', '功率因数'],
      tableData: [
        ['铁钢系统', '61.13', '26.86', '0.91'],
        ['轧钢系统', '61.13', '26.86', '0.91'],
        ['1#100kv', '61.13', '26.86', '0.91'],
        ['2#100kv', '61.13', '26.86', '0.91'],
        ['3#100kv', '61.13', '26.86', '0.91'],
        ['4#100kv', '61.13', '26.86', '0.91'],
        ['5#100kv', '61.13', '26.86', '0.91'],
        ['6#100kv', '61.13', '26.86', '0.91'],
        ['7#100kv', '61.13', '26.86', '0.91'],
        ['2250热轧', '61.13', '26.86', '0.91'],
        ['1580热轧', '61.13', '26.86', '0.91'],
        ['1700冷轧', '61.13', '26.86', '0.91'],
        ['高炉鼓风', '61.13', '26.86', '0.91'],
      ],
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    this.netSideMonitor();
  }

  netSideMonitor = () => {
    netSideMonitor({}).then(res => {
      if (res && res.status === 200) {
        const resData = res.body;
        let newArr = [];
        resData.map((item, index) => {
          newArr[index] = [item.name, item.youGong, item.wuGong, item.dianLiu];
        });
        this.setState({
          tableData: newArr,
        });
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
          <Text style={styles.content}>网侧监视</Text>
        </View>
        <View style={styles.tableContainer}>
          {/* <Table borderStyle={styles.borderStyle}>
            <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
            <Rows data={tableData} style={styles.rows} textStyle={styles.rowsText} />
          </Table> */}
          <View style={styles.headContainer}>
            {tableHead.map((item, index) => {
              return (
                <View key={item} style={this.renderColStyle(item, index)}>
                  <Text style={[styles.commonColText, styles.colorWhite]}>{item}</Text>
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
                      <View key={items} style={this.renderColStyle(item, index)}>
                        <Text style={styles.commonColText}>{items}</Text>
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

export default Yuanduan;
