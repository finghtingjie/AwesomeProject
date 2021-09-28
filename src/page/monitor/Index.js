import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';

import { Toast, Button, ModalIndicator } from 'teaset';

const rect = require('../../assets/monitor/rect.png');
const changePic = require('../../assets/monitor/change.png');
const shuPic = require('../../assets/monitor/shu.png');

// import IconFont from '@iconfont/index.js';
import { getMonitor } from '@api/monitor';

import styles from './MonitorStyle';

const arr = [
  '1#110kV站',
  '2#110kV站',
  '3#110kV站',
  '4#110kV站',
  '5#110kV站',
  '6#110kV站',
  '7#110kV站',
  '制氧二期110kV站',
  'CCPP110kV变电站',
  '4#高炉鼓风110kV站',
  'MCCR110kV站',
  '2230冷轧110kV站',
  '高炉鼓风110kV站',
  '制氧110kV站',
  '2250热轧110kV站',
  '1580热轧110kV站',
  '1700冷轧110kV站',
  '1420冷轧110kV站',
];

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      actionIndex: 0,
      actionIndex2: 0,
      actionsheetShow: false,
      tableHead1: ['名称', '有功功率(MW)', '无功功率(MVar)', '电流(A)'],
      tableHead2: ['名称', '电压'],
      tableData1: [
        ['铁扎一线', '61.13', '26.86', '0.91'],
        ['铁扎二线', '61.13', '26.86', '0.91'],
        ['曹铁一线', '61.13', '26.86', '0.91'],
        ['曹铁二线', '61.13', '26.86', '0.91'],
      ],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      dataSource: [
        {
          id: 45,
          name: '铁扎一线',
          yougong: '100',
          wugong: '100',
          dianliu: 56,
        },
        {
          id: 46,
          name: '铁扎二线',
          yougong: '100',
          wugong: '100',
          dianliu: 56,
        },
        {
          id: 47,
          name: '曹铁一线',
          yougong: '100',
          wugong: '100',
          dianliu: 56,
        },
        {
          id: 48,
          name: '曹铁二线',
          yougong: '100',
          wugong: '100',
          dianliu: 56,
        },
      ],
      arr2: ['220kV铁钢站', '220kV轧钢站', '热电110kV站', 'CCPP110kV变电站'],
      tabArr: ['220kV', '110kV', '10kV'],
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    // this.getMonitor();
  }

  getMonitor = () => {
    const { actionIndex, actionIndex2, arr2, tabArr, activeIndex } = this.state;
    const params = {
      genus: actionIndex + 1,
      name: arr2[actionIndex2],
      type: tabArr[activeIndex],
    };
    console.log(params);
    ModalIndicator.show();
    getMonitor(params).then(res => {
      ModalIndicator.hide();
      if (res && res.status === 200) {
        const resData1 = res.body.incomingLineAndTieLine || [];
        const resData2 = res.body.generatrix || [];
        const resData3 = res.body.busCouplerSwitch || [];
        const resData4 = res.body.outgoingLine || [];
        let newArr = [];
        let newArr2 = [];
        let newArr3 = [];
        let newArr4 = [];
        resData1.map((item, index) => {
          newArr[index] = [
            item.name,
            Number(item.youGong).toFixed(2),
            Number(item.wuGong).toFixed(2),
            Number(item.dianLiu).toFixed(2),
          ];
        });
        resData2.map((item, index) => {
          newArr2[index] = [item.name, Number(item.dianLiu).toFixed(2)];
        });
        resData3.map((item, index) => {
          newArr3[index] = [
            item.name,
            Number(item.youGong).toFixed(2),
            Number(item.wuGong).toFixed(2),
            Number(item.dianLiu).toFixed(2),
          ];
        });
        resData4.map((item, index) => {
          newArr4[index] = [
            item.name,
            Number(item.youGong).toFixed(2),
            Number(item.wuGong).toFixed(2),
            Number(item.dianLiu).toFixed(2),
          ];
        });
        this.setState({
          tableData1: newArr,
          tableData2: newArr2,
          tableData3: newArr3,
          tableData4: newArr4,
        });
      } else {
        Toast.fail(res.msg);
      }
    });
  };

  handleTypeChange = (item, index) => {
    // const { actionIndex2, actionIndex } = this.state;
    this.setState({ actionIndex: index, actionIndex2: 0 });
    if (index === 0) {
      this.setState({
        arr2: ['220kV铁钢站', '220kV轧钢站', '热电110kV站', 'CCPP110kV变电站'],
      });
    } else {
      this.setState({ arr2: arr });
    }
  };

  handleTypeChange2 = (item, index) => {
    const { actionIndex } = this.state;
    // 源端
    if (actionIndex === 0 && [0, 1].includes(index)) {
      this.setState({ tabArr: ['220kV', '110kV', '10kV'], activeIndex: 0 });
    } else if (actionIndex === 0 && index >= 2) {
      this.setState({ tabArr: ['110kV'], activeIndex: 0 });
    } else if (actionIndex === 1 && [0, 2, 3, 4].includes(index)) {
      this.setState({ tabArr: ['110kV', '10kV'], activeIndex: 0 });
    } else if (actionIndex === 1 && [1, 5, 6].includes(index)) {
      this.setState({ tabArr: ['110kV', '35kV', '10kV'], activeIndex: 0 });
    } else if (actionIndex === 1 && index > 6) {
      this.setState({ tabArr: ['110kV'], activeIndex: 0 });
    }
    // 点击右侧条件,关闭actionsheet
    this.setState({ actionIndex2: index, actionsheetShow: false }, () => {
      // this.getMonitor();
    });
  };

  handleChangZhan = () => {
    const { navigation } = this.props;
    // 跳转至场站接线图界面
    navigation.navigate('');
  };

  handleTabChange = (item, index) => {
    this.setState({ activeIndex: index }, () => {
      // this.getMonitor();
    });
  };

  render() {
    const {
      tableData1,
      tableData2,
      tableData3,
      tableData4,
      tableHead1,
      tableHead2,
      activeIndex,
      actionIndex,
      actionIndex2,
      actionsheetShow,
      tabArr,
      arr2,
    } = this.state;
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
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => this.setState({ actionsheetShow: !actionsheetShow })}>
              <Image style={styles.rect} source={rect} resizeMode="contain" />
              <Text style={styles.leftText}>{actionIndex === 0 ? '源端' : '网侧'}</Text>
            </TouchableOpacity>
            <Text style={styles.content}>{arr2[actionIndex2]}</Text>
            <TouchableOpacity style={styles.iconContainerRight} onPress={() => this.handleChangZhan()}>
              <Image style={styles.changePic} source={changePic} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
        {/* 筛选条件 */}
        {actionsheetShow && (
          <View style={styles.actionSheet}>
            <View style={styles.storeTypeContainer}>
              <View style={styles.leftBtnContainer}>
                {['源端', '网侧'].map((item, index) => {
                  return (
                    <Button key={item} style={styles.leftBtn} onPress={() => this.handleTypeChange(item, index)}>
                      <Text style={actionIndex === index ? styles.leftBtnTextActive1 : styles.leftBtnText1}>
                        {item}
                      </Text>
                    </Button>
                  );
                })}
              </View>
              <View>
                <ScrollView style={styles.ScrollView}>
                  {arr2.map((item, index) => {
                    return (
                      <Button key={item} style={styles.rightBtn} onPress={() => this.handleTypeChange2(item, index)}>
                        <Text style={actionIndex2 === index ? styles.leftBtnTextActive : styles.leftBtnText}>
                          {item}
                        </Text>
                      </Button>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
            <TouchableOpacity onPress={() => this.setState({ actionsheetShow: false })} style={styles.typeBottom} />
          </View>
        )}
        <View style={styles.tabContainer}>
          {tabArr.map((item, index) => {
            return (
              <TouchableOpacity key={item} style={styles.commonBtn} onPress={() => this.handleTabChange(item, index)}>
                <Text style={styles.commonText}>{item}</Text>
                {index === activeIndex && <View style={styles.commonBorder} />}
              </TouchableOpacity>
            );
          })}
        </View>
        {/* table */}
        <ScrollView>
          <View style={styles.commonTableContainer}>
            {tableData1.length >= 1 && (
              <View style={styles.tabTitleContainer}>
                <Image style={styles.shuPic} source={shuPic} resizeMode="contain" />
                <Text style={styles.tabTitle}>进线/联络线</Text>
              </View>
            )}
            <View style={styles.tableContainer}>
              <View style={styles.headContainer}>
                {tableData1.length >= 1 &&
                  tableHead1.map((item, index) => {
                    return (
                      <View key={item} style={styles.nameStyle}>
                        <Text style={styles.commonColText}>{item}</Text>
                      </View>
                    );
                  })}
              </View>
              {tableData1.map(item => {
                return (
                  <View style={styles.rowContainer}>
                    {item.map((items, index) => {
                      return (
                        <View key={index} style={styles.nameStyle}>
                          <Text style={styles.commonrowText}>{items}</Text>
                        </View>
                      );
                    })}
                  </View>
                );
              })}
            </View>
          </View>
          {/* 母线 */}
          <View style={styles.commonTableContainer}>
            {tableData2.length >= 1 && (
              <View style={styles.tabTitleContainer}>
                <Image style={styles.shuPic} source={shuPic} resizeMode="contain" />
                <Text style={styles.tabTitle}>母线</Text>
              </View>
            )}
            <View style={styles.tableContainer}>
              <View style={styles.headContainer}>
                {tableData2.length >= 1 &&
                  tableHead2.map((item, index) => {
                    return (
                      <View key={item} style={styles.nameStyle}>
                        <Text style={styles.commonColText}>{item}</Text>
                      </View>
                    );
                  })}
              </View>
              {tableData2.map(item => {
                return (
                  <View style={styles.rowContainer}>
                    {item.map((items, index) => {
                      return (
                        <View key={index} style={styles.nameStyle}>
                          <Text style={styles.commonrowText}>{items}</Text>
                        </View>
                      );
                    })}
                  </View>
                );
              })}
            </View>
          </View>
          {/* 母联开关 */}
          <View style={styles.commonTableContainer}>
            {tableData3.length >= 1 && (
              <View style={styles.tabTitleContainer}>
                <Image style={styles.shuPic} source={shuPic} resizeMode="contain" />
                <Text style={styles.tabTitle}>母联开关</Text>
              </View>
            )}
            <View style={styles.tableContainer}>
              <View style={styles.headContainer}>
                {tableData3.length >= 1 &&
                  tableHead1.map((item, index) => {
                    return (
                      <View key={item} style={styles.nameStyle}>
                        <Text style={styles.commonColText}>{item}</Text>
                      </View>
                    );
                  })}
              </View>
              {tableData3.map(item => {
                return (
                  <View style={styles.rowContainer}>
                    {item.map((items, index) => {
                      return (
                        <View key={index} style={styles.nameStyle}>
                          <Text style={styles.commonrowText}>{items}</Text>
                        </View>
                      );
                    })}
                  </View>
                );
              })}
            </View>
          </View>
          {/* 出线 */}
          <View style={styles.commonTableContainer}>
            {tableData4.length >= 1 && (
              <View style={styles.tabTitleContainer}>
                <Image style={styles.shuPic} source={shuPic} resizeMode="contain" />
                <Text style={styles.tabTitle}>出线</Text>
              </View>
            )}
            <View style={styles.tableContainer}>
              <View style={styles.headContainer}>
                {tableData4.length >= 1 &&
                  tableHead1.map((item, index) => {
                    return (
                      <View key={item} style={styles.nameStyle}>
                        <Text style={styles.commonColText}>{item}</Text>
                      </View>
                    );
                  })}
              </View>
              {tableData4.map(item => {
                return (
                  <View style={styles.rowContainer}>
                    {item.map((items, index) => {
                      return (
                        <View key={index} style={styles.nameStyle}>
                          <Text style={styles.commonrowText}>{items}</Text>
                        </View>
                      );
                    })}
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Index;
