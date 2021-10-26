/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';

import { NavigationEvents } from 'react-navigation';
import Orientation from 'react-native-orientation-locker';
import { Toast, Button, ModalIndicator } from 'teaset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

const rect = require('../../assets/monitor/rect.png');
const changePic = require('../../assets/monitor/change.png');
const shuPic = require('../../assets/monitor/shu.png');

import IconFont from '@iconfont/index.js';
import { getMonitor } from '@api/monitor';

import styles from './MonitorStyle';

const wangceArr = [
  '1#110kV站',
  '2#110kV站',
  '3#110kV站',
  '4#110kV站',
  '5#110kV站',
  '6#110kV站',
  '7#110kV站',
  '制氧二期110kV站',
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
        // ['铁扎一线', '61.13', '26.86', '0.91'],
        // ['铁扎二线', '61.13', '26.86', '0.91'],
        // ['曹铁一线', '61.13', '26.86', '0.91'],
        // ['曹铁二线', '61.13', '26.86', '0.91'],
      ],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      tableData5: [],
      tableData6: [],
      tableData7: [],
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
      tabArr: ['220kV', '110kV', '10kV', '变压器'],
      type1: '',
      type2: '',
      type3: '',
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {}

  getMonitor = () => {
    const { actionIndex, actionIndex2, arr2, tabArr, activeIndex } = this.state;
    const type = tabArr[activeIndex];
    const params = {
      genus: actionIndex + 1,
      name: arr2[actionIndex2],
    };
    // 没有变压器的传type
    if (['220kV', '110kV', '10kV'].includes(type)) {
      params.type = type;
      params.isTransformer = false;
    } else {
      params.isTransformer = true;
    }
    console.log(params);
    const isNumber = val => {
      const regPos = /^\d+(\.\d+)?$/; //非负浮点数
      const regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
      if (regPos.test(val) || regNeg.test(val)) {
        return true;
      } else {
        return false;
      }
    };
    ModalIndicator.show();
    getMonitor(params).then(res => {
      ModalIndicator.hide();
      if (res && res.status === 200) {
        const resData1 = res.body.data[0].incomingLineAndTieLine || []; //进线
        const resData2 = res.body.data[0].generatrix || []; //母线
        const resData3 = res.body.data[0].busCouplerSwitch || []; //母线开关
        const resData4 = res.body.data[0].outgoingLine || []; //出线
        const resData5 = res.body.data[0].transformer || []; //变压器
        const resData6 = (res.body.data[1] && res.body.data[1].transformer) || []; //变压器
        const resData7 = (res.body.data[2] && res.body.data[2].transformer) || []; //变压器
        const type1 = (res.body.data[0] && res.body.data[0].type) || '';
        const type2 = (res.body.data[1] && res.body.data[1].type) || '';
        const type3 = (res.body.data[2] && res.body.data[2].type) || '';
        let newArr = [];
        let newArr2 = [];
        let newArr3 = [];
        let newArr4 = [];
        let newArr5 = [];
        let newArr6 = [];
        let newArr7 = [];
        resData1.map((item, index) => {
          newArr[index] = [
            item.name,
            isNumber(item.youGong) ? Number(item.youGong).toFixed(2) : '--',
            isNumber(item.wuGong) ? Number(item.wuGong).toFixed(2) : '--',
            isNumber(item.dianLiu) ? Number(item.dianLiu).toFixed(2) : '--',
          ];
        });
        resData2.map((item, index) => {
          newArr2[index] = [item.name, Number(item.dianLiu).toFixed(2)];
        });
        resData3.map((item, index) => {
          newArr3[index] = [
            item.name,
            isNumber(item.youGong) ? Number(item.youGong).toFixed(2) : '--',
            isNumber(item.wuGong) ? Number(item.wuGong).toFixed(2) : '--',
            isNumber(item.dianLiu) ? Number(item.dianLiu).toFixed(2) : '--',
          ];
        });
        resData4.map((item, index) => {
          newArr4[index] = [
            item.name,
            isNumber(item.youGong) ? Number(item.youGong).toFixed(2) : '--',
            isNumber(item.wuGong) ? Number(item.wuGong).toFixed(2) : '--',
            isNumber(item.dianLiu) ? Number(item.dianLiu).toFixed(2) : '--',
          ];
        });
        resData5.map((item, index) => {
          newArr5[index] = [
            item.name,
            isNumber(item.youGong) ? Number(item.youGong).toFixed(2) : '--',
            isNumber(item.wuGong) ? Number(item.wuGong).toFixed(2) : '--',
            isNumber(item.dianLiu) ? Number(item.dianLiu).toFixed(2) : '--',
          ];
        });
        resData6.map((item, index) => {
          newArr6[index] = [
            item.name,
            isNumber(item.youGong) ? Number(item.youGong).toFixed(2) : '--',
            isNumber(item.wuGong) ? Number(item.wuGong).toFixed(2) : '--',
            isNumber(item.dianLiu) ? Number(item.dianLiu).toFixed(2) : '--',
          ];
        });
        resData7.map((item, index) => {
          newArr7[index] = [
            item.name,
            isNumber(item.youGong) ? Number(item.youGong).toFixed(2) : '--',
            isNumber(item.wuGong) ? Number(item.wuGong).toFixed(2) : '--',
            isNumber(item.dianLiu) ? Number(item.dianLiu).toFixed(2) : '--',
          ];
        });
        this.setState({
          tableData1: newArr,
          tableData2: newArr2,
          tableData3: newArr3,
          tableData4: newArr4,
          tableData5: newArr5,
          tableData6: newArr6,
          tableData7: newArr7,
          type1,
          type2,
          type3,
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
      this.setState({ arr2: wangceArr });
    }
  };

  handleTypeChange2 = (item, index) => {
    const { actionIndex } = this.state;
    // 源端
    if (actionIndex === 0 && [0, 1].includes(index)) {
      this.setState({ tabArr: ['220kV', '110kV', '10kV', '变压器'], activeIndex: 0 });
    } else if (actionIndex === 0 && index >= 2) {
      this.setState({ tabArr: ['110kV', '变压器'], activeIndex: 0 });
    } else if (actionIndex === 1 && [0, 2, 3, 4].includes(index)) {
      this.setState({ tabArr: ['110kV', '10kV', '变压器'], activeIndex: 0 });
    } else if (actionIndex === 1 && [1, 5, 6].includes(index)) {
      this.setState({ tabArr: ['110kV', '35kV', '10kV', '变压器'], activeIndex: 0 });
    } else if (actionIndex === 1 && [7, 9, 10, 11, 12, 13, 14, 15, 16].includes(index)) {
      this.setState({ tabArr: ['110kV', '变压器'], activeIndex: 0 });
    } else if (actionIndex === 1 && index === 8) {
      this.setState({ tabArr: ['变压器'], activeIndex: 0 });
    }
    // 点击右侧条件,关闭actionsheet
    this.setState({ actionIndex2: index, actionsheetShow: false }, () => {
      this.getMonitor();
    });
  };

  handleChangZhan = async () => {
    const menuIdArr = await AsyncStorage.getItem('menuIdArr');
    const newArr = menuIdArr.split(',').map(item => Number(item));
    const { navigation } = this.props;
    if (newArr.includes(16)) {
      navigation.navigate('Dianlichaoliu');
    } else {
      Toast.info('您没有访问电力潮流图的权限');
    }
  };

  handleTabChange = (item, index) => {
    this.setState({ activeIndex: index }, () => {
      this.getMonitor();
    });
  };

  renderBtnStyle = (item, index) => {
    const { tabArr } = this.state;
    if (tabArr.length === 1) {
      return styles.commonBtn;
    } else if (tabArr.length === 2 && index === 0) {
      return styles.commonBtn2;
    } else if (tabArr.length === 2 && index === 1) {
      return styles.commonBtn;
    } else if (tabArr.length === 3 && index < 2) {
      return styles.commonBtn2;
    } else {
      return styles.commonBtn;
    }
  };

  render() {
    const {
      tableData1,
      tableData2,
      tableData3,
      tableData4,
      tableData5,
      tableData6,
      tableData7,
      tableHead1,
      tableHead2,
      activeIndex,
      actionIndex,
      actionIndex2,
      actionsheetShow,
      tabArr,
      arr2,
      type1,
      type2,
      type3,
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
        <NavigationEvents
          onDidFocus={() => {
            this.getMonitor();
            Orientation.lockToPortrait();
          }}
        />
        <View style={styles.navigationBar}>
          <View style={styles.navigationContainer}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => this.setState({ actionsheetShow: !actionsheetShow })}>
              <Image style={styles.rect} source={rect} resizeMode="contain" />
              <Text style={styles.leftText}>{actionIndex === 0 ? '源端' : '网侧'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.content}
              onPress={() => this.setState({ actionsheetShow: !actionsheetShow })}>
              <Text style={styles.contentText}>{arr2[actionIndex2]}</Text>
              <IconFont name="xiala" size={24} color="#fff" />
            </TouchableOpacity>
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
                <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
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
        <View
          style={{
            position: 'relative',
            marginLeft: wp(40 / BASE_WIDTH),
            marginTop: hp(40 / BASE_HEIGHT),
            maxWidth: wp((250 * 4) / BASE_WIDTH),
            width: wp((250 * tabArr.length) / BASE_WIDTH),
            height: hp(78 / BASE_HEIGHT),
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: wp(20 / BASE_WIDTH),
            shadowColor: 'rgba(0, 0, 0, 0.15)',
            shadowOffset: {
              width: 1,
              height: 1,
            },
            elevation: 10,
            overflow: 'hidden',
            opacity: actionsheetShow ? 0 : 1,
          }}>
          {tabArr.map((item, index) => {
            return (
              <TouchableOpacity
                key={item}
                activeOpacity={1}
                style={this.renderBtnStyle(item, index)}
                onPress={() => this.handleTabChange(item, index)}>
                <Text style={styles.commonText}>{item}</Text>
                {index === activeIndex && <View style={styles.commonBorder} />}
              </TouchableOpacity>
            );
          })}
        </View>
        {/* table */}
        <ScrollView>
          {tableData1.length >= 1 && (
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
                          <View key={items + index} style={styles.nameStyle}>
                            <Text style={styles.commonrowText}>{items}</Text>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          )}
          {/* 母线 */}
          {tableData2.length >= 1 && (
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
                          <View key={items + index} style={styles.nameStyle}>
                            <Text style={styles.commonrowText}>{items}</Text>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          )}
          {/* 母联开关 */}
          {tableData3.length >= 1 && (
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
                          <View key={items + index} style={styles.nameStyle}>
                            <Text style={styles.commonrowText}>{items}</Text>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          )}
          {/* 出线 */}
          {tableData4.length >= 1 && (
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
                          <View key={items + index} style={styles.nameStyle}>
                            <Text style={styles.commonrowText}>{items}</Text>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          )}
          {/* 变压器1 */}
          {tableData5.length >= 1 && (
            <View style={styles.commonTableContainer}>
              {tableData5.length >= 1 && (
                <View style={styles.tabTitleContainer}>
                  <Image style={styles.shuPic} source={shuPic} resizeMode="contain" />
                  <Text style={styles.tabTitle}>{type1}</Text>
                </View>
              )}
              <View style={styles.tableContainer}>
                <View style={styles.headContainer}>
                  {tableData5.length >= 1 &&
                    tableHead1.map((item, index) => {
                      return (
                        <View key={item} style={styles.nameStyle}>
                          <Text style={styles.commonColText}>{item}</Text>
                        </View>
                      );
                    })}
                </View>
                {tableData5.map(item => {
                  return (
                    <View style={styles.rowContainer}>
                      {item.map((items, index) => {
                        return (
                          <View key={items + index} style={styles.nameStyle}>
                            <Text style={styles.commonrowText}>{items}</Text>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          )}
          {/* 变压器2 */}
          {tableData6.length >= 1 && (
            <View style={styles.commonTableContainer}>
              {tableData6.length >= 1 && (
                <View style={styles.tabTitleContainer}>
                  <Image style={styles.shuPic} source={shuPic} resizeMode="contain" />
                  <Text style={styles.tabTitle}>{type2}</Text>
                </View>
              )}
              <View style={styles.tableContainer}>
                <View style={styles.headContainer}>
                  {tableData6.length >= 1 &&
                    tableHead1.map((item, index) => {
                      return (
                        <View key={item} style={styles.nameStyle}>
                          <Text style={styles.commonColText}>{item}</Text>
                        </View>
                      );
                    })}
                </View>
                {tableData6.map(item => {
                  return (
                    <View style={styles.rowContainer}>
                      {item.map((items, index) => {
                        return (
                          <View key={items + index} style={styles.nameStyle}>
                            <Text style={styles.commonrowText}>{items}</Text>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          )}
          {/* 变压器2 */}
          {tableData7.length >= 1 && (
            <View style={styles.commonTableContainer}>
              {tableData7.length >= 1 && (
                <View style={styles.tabTitleContainer}>
                  <Image style={styles.shuPic} source={shuPic} resizeMode="contain" />
                  <Text style={styles.tabTitle}>{type3}</Text>
                </View>
              )}
              <View style={styles.tableContainer}>
                <View style={styles.headContainer}>
                  {tableData7.length >= 1 &&
                    tableHead1.map((item, index) => {
                      return (
                        <View key={item} style={styles.nameStyle}>
                          <Text style={styles.commonColText}>{item}</Text>
                        </View>
                      );
                    })}
                </View>
                {tableData7.map(item => {
                  return (
                    <View style={styles.rowContainer}>
                      {item.map((items, index) => {
                        return (
                          <View key={items + index} style={styles.nameStyle}>
                            <Text style={styles.commonrowText}>{items}</Text>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

export default Index;
