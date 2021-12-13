import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';

import Orientation from 'react-native-orientation-locker';
import { NavigationEvents } from 'react-navigation';
// import { Toast, Button, PullPicker } from 'teaset';

const backIcon = require('../../assets/backicon.png');

import { netSideMonitor } from '@api/kpi';

import styles from './WangceStyle';

class Wangce extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['系统', '有功功率(MW)', '无功功率(MVar)', '功率因数'],
      tableData: [
        // ['铁钢系统', '61.13', '26.86', '0.91'],
        // ['轧钢系统', '61.13', '26.86', '0.91'],
        // ['1#100kv', '61.13', '26.86', '0.91'],
        // ['2#100kv', '61.13', '26.86', '0.91'],
        // ['3#100kv', '61.13', '26.86', '0.91'],
        // ['4#100kv', '61.13', '26.86', '0.91'],
        // ['5#100kv', '61.13', '26.86', '0.91'],
        // ['6#100kv', '61.13', '26.86', '0.91'],
        // ['7#100kv', '61.13', '26.86', '0.91'],
        // ['2250热轧', '61.13', '26.86', '0.91'],
        // ['1580热轧', '61.13', '26.86', '0.91'],
        // ['1700冷轧', '61.13', '26.86', '0.91'],
        // ['高炉鼓风', '61.13', '26.86', '0.91'],
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
        // console.log(resData);
        let newArr = [];
        resData.map((item, index) => {
          newArr[index] = [
            item.name,
            Number(item.youGong).toFixed(2),
            Number(item.wuGong).toFixed(2),
            Number(item.dianLiu).toFixed(2),
          ];
        });
        this.setState({ tableData: newArr });
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

  handleClick = (item, index) => {
    const { navigation } = this.props;
    let source =
      'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=%E7%94%B5%E5%8A%9B%E6%BD%AE%E6%B5%81%E5%9B%BE';
    switch (item) {
      case '轧钢系统':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=220kV%E8%BD%A7%E9%92%A2%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '铁钢系统':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=220kV%E9%93%81%E9%92%A2%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '1#110kV':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=1%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '2#110kV':
      case '2#站LF炉':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=2%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '3#110kV':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=3%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '3#110kV':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=4%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '4#110kV':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=4%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '5#110kV':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=5%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '6#110kV':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=6%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '7#110kV':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=7%23110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '2250热轧':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=2250%E7%83%AD%E8%BD%A7110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '1580热轧':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=1580%E7%83%AD%E8%BD%A7110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '1700热轧':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=1700%E5%86%B7%E8%BD%A7110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '2230冷轧':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=2230%E5%86%B7%E8%BD%A7110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '1420冷轧':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=1420%E5%86%B7%E8%BD%A7110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '高炉鼓风':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=%E9%AB%98%E7%82%89%E9%BC%93%E9%A3%8E110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '4#鼓风':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=4%23%E9%AB%98%E7%82%89%E9%BC%93%E9%A3%8E110kV%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case 'MCCR':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=MCCR110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '制氧':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=%E5%88%B6%E6%B0%A7110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      case '制氧二期':
        source =
          'http://10.99.230.103:8080/pcs9000/online/embed_graph.jsp?username=lucy&password=1&app=common&pic=2%23%E5%88%B6%E6%B0%A7110kV%E5%8F%98%E7%94%B5%E7%AB%99';
        navigation.navigate('Dianlichaoliu', { source });
        break;
      default:
        navigation.navigate('Dianlichaoliu', { source });
        break;
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
        <NavigationEvents onDidFocus={() => Orientation.lockToPortrait()} />
        <View style={styles.navigationBar}>
          <View style={styles.navigationContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.goBack()}>
              <Image style={styles.backIcon} source={backIcon} resizeMode="contain" />
            </TouchableOpacity>
            <Text style={styles.content}>网侧监视</Text>
          </View>
        </View>
        <View style={styles.tableContainer}>
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
            <View style={styles.bbb}>
              {tableData.map((item, i) => {
                return (
                  <View style={i % 2 === 0 ? styles.rowContainer : styles.rowContainer2}>
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

export default Wangce;
