import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';

import { NavigationEvents } from 'react-navigation';
import Orientation from 'react-native-orientation-locker';

const backIcon = require('../../assets/backicon.png');

import { sourceEndMonitor } from '@api/kpi';

import styles from './YuanduanStyle';

const isNumber = val => {
  const regPos = /^\d+(\.\d+)?$/; //非负浮点数
  const regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
  if (regPos.test(val) || regNeg.test(val)) {
    return true;
  } else {
    return false;
  }
};
class Yuanduan extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['系统', '有功功率(MW)', '无功功率(MVar)', '功率因数'],
      tableData: [
        // ['1', '2', '3', '4'],
        // ['a', 'b', 'c', 'd'],
        // ['1', '2', '3', '456'],
        // ['aa', 'b', 'c', 'd']
      ],
      activeTab: 1,
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;
    if (params && params.activeIndex) {
      this.setState({ activeTab: params.activeIndex }, () => {
        this.sourceEndMonitor(this.state.activeTab === 1 ? '电网购电' : '发电');
      });
    } else {
      this.sourceEndMonitor(this.state.activeTab === 1 ? '电网购电' : '发电');
    }
  }

  sourceEndMonitor = val => {
    sourceEndMonitor({ type: val }).then(res => {
      if (res && res.status === 200) {
        const resData = res.body;
        let newArr = [];

        resData.map((item, index) => {
          if (val === '电网购电') {
            newArr[index] = [
              item.name,
              isNumber(item.youGong) ? Number(item.youGong).toFixed(2) : '--',
              isNumber(item.wuGong) ? Number(item.wuGong).toFixed(2) : '--',
              isNumber(item.dianLiu) ? Number(item.dianLiu).toFixed(2) : '--',
            ];
          } else {
            newArr[index] = [
              item.name,
              isNumber(item.youGong) ? Number(item.youGong > 0 ? -item.youGong : item.youGong).toFixed(2) : '--',
              isNumber(item.wuGong) ? Number(item.wuGong > 0 ? -item.wuGong : item.wuGong).toFixed(2) : '--',
              isNumber(item.dianLiu) ? Number(item.dianLiu).toFixed(2) : '--',
            ];
          }
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

  handleClick = (item, index) => {
    const { navigation } = this.props;
    let source =
      'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=%E7%94%B5%E5%8A%9B%E6%BD%AE%E6%B5%81%E5%9B%BE';
    switch (item) {
      case '曹轧一线':
      case '曹轧二线':
      case '轧钢系统发电':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=220kV%E8%BD%A7%E9%92%A2%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '曹铁一线':
      case '曹铁二线':
      case '铁轧一线':
      case '铁轧二线':
      case '铁钢系统发电':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=220kV%E9%93%81%E9%92%A2%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '1#300MW':
      case '2#300MW':
      case '热电110kV站':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=1%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case 'CCPP110kV变电站':
      case 'CCPP燃机':
      case 'CCPP汽机':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=CCPP110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '1#110kV':
      case '1#CDQ':
      case '2#CDQ':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=1%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '2#110kV':
      case '1#TRT':
      case '2#TRT':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=2%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '3#110kV':
      case '3#25MW':
      case '4#25MW':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=3%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '3#110kV':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=4%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '4#110kV':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=4%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '5#110kV':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=5%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '6#110kV':
      case '3#TRT':
      case '3#CDQ':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=6%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '7#110kV':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=7%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '2250热轧':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=2250%E7%83%AD%E8%BD%A7110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '1580热轧':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=1580%E7%83%AD%E8%BD%A7110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '1700热轧':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=1700%E5%86%B7%E8%BD%A7110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '2230冷轧':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=2230%E5%86%B7%E8%BD%A7110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '1420冷轧':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=1420%E5%86%B7%E8%BD%A7110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '高炉鼓风':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=%E9%AB%98%E7%82%89%E9%BC%93%E9%A3%8E110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '4#鼓风':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=4%23%E9%AB%98%E7%82%89%E9%BC%93%E9%A3%8E110kV%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case 'MCCR':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=MCCR110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '制氧':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=%E5%88%B6%E6%B0%A7110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      case '制氧二期':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=2%23%E5%88%B6%E6%B0%A7110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('KpiJieXian', { source });
        break;
      default:
        navigation.navigate('KpiJieXian', { source });
        break;
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
        <NavigationEvents onDidFocus={() => Orientation.lockToPortrait()} />
        <View style={styles.navigationBar}>
          <View style={styles.navigationContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.goBack()}>
              <Image style={styles.backIcon} source={backIcon} resizeMode="contain" />
            </TouchableOpacity>
            <Text style={styles.content}>源端监视</Text>
          </View>
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
          <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.bbb}>
              {tableData.map((item, i) => {
                return (
                  <View style={i % 2 === 0 ? styles.rowContainer : styles.rowContainer2} key={item}>
                    {item.map((items, index) => {
                      return (
                        <TouchableOpacity
                          key={items + index}
                          activeOpacity={index === 0 ? 0.2 : 1}
                          style={this.renderColStyle(item, index)}
                          onPress={() => this.handleClick(items, index)}>
                          <Text style={styles.commonColText}>{items}</Text>
                        </TouchableOpacity>
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
