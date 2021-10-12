import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, TextInput, Keyboard, Image } from 'react-native';

import { Toast, Button, Checkbox } from 'teaset';
import AsyncStorage from '@react-native-async-storage/async-storage';

const backIcon = require('../../assets/backicon.png');

import IconFont from '@iconfont/index.js';

import { getGroupingMenu, addGrouping, updateGrouping } from '@api/profile';

import styles from './AddGroupStyle';

class AddGroup extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: 'add', //操作类型
      groupName: '',
      groupId: null,
      checked: true, //父节点是否选中
      checked1: true, //父节点是否选中
      checked2: true, //父节点是否选中
      checked3: true, //父节点是否选中
      isOpen: false, //子节点是否展开
      isOpen2: false, //子节点是否展开
      fakeData: [
        { id: 8, val: '源端监视', checked: false },
        { id: 9, val: '网侧监视', checked: false },
        { id: 10, val: '电力潮流图', checked: false },
        { id: 11, val: '电压趋势图', checked: false },
        { id: 12, val: '电压合格率', checked: false },
        { id: 13, val: '发电机负载率', checked: false },
        { id: 14, val: '主变油温', checked: false },
        { id: 15, val: '主变负载率', checked: false },
        { id: 16, val: '直流系统', checked: false },
      ],
      fakeData2: [
        { id: 17, val: '用户管理', checked: false },
        { id: 18, val: '分组管理', checked: false },
        { id: 19, val: '告警配置', checked: false },
        { id: 20, val: '修改密码', checked: false },
      ],
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  async componentDidMount() {
    const { params } = this.props.navigation.state;
    if (params && params.item && params.type) {
      this.setState({ groupName: params.item.name, type: params.type, groupId: params.item.id });
      getGroupingMenu({ groupId: params.item.id }).then(res => {
        if (res && res.status === 200) {
          const arr = res.body.menuData.filter(item => item.parentId === 3);
          arr.map(item => {
            if (item.select === 1) {
              item.checked = true;
            }
          });
          const arr2 = res.body.menuData.filter(item => item.parentId === 5);
          arr2.map(item => {
            if (item.select === 1) {
              item.checked = true;
            }
          });
          this.setState({ fakeData: arr, fakeData2: arr2 });
          if (params.type === 'edit') {
            this.setState({ type: params.type });
            // 处理回显逻辑
            // 监控
            if (res.body.menuData.find(item => item.id === 2).select === 1) {
              this.setState({ checked1: true });
            } else {
              this.setState({ checked1: false });
            }
            if (res.body.menuData.find(item => item.id === 4).select === 1) {
              this.setState({ checked2: true });
            } else {
              this.setState({ checked2: false });
            }
            if (res.body.menuData.find(item => item.id === 3).select === 1) {
              // this.handleSetAll();
              this.setState({ checked: true });
            } else {
              this.setState({ checked: false });
            }
            if (res.body.menuData.find(item => item.id === 5).select === 1) {
              // this.handleSetAll();
              this.setState({ checked3: true });
            } else {
              this.setState({ checked3: false });
            }
          }
        }
      });
    } else {
      const groupArr = await AsyncStorage.getItem('groupArr');
      const groupArr2 = await AsyncStorage.getItem('groupArr');
      const newArr = JSON.parse(groupArr);
      const newArr2 = JSON.parse(groupArr2);
      newArr.map(item => {
        item.checked = true;
      });
      newArr2.map(item => {
        item.checked = true;
      });
      this.setState({ fakeData: newArr, fakeData2: newArr2 });
    }
  }

  handleKpiItem = (items, val) => {
    const fakeData = [...this.state.fakeData];
    fakeData.map(item => {
      if (items.id === item.id) {
        item.checked = val;
      }
    });
    this.setState({ fakeData });
    if (!fakeData.every(item => item.checked)) {
      this.setState({ checked: false });
    } else {
      this.setState({ checked: true });
    }
  };

  handleProfileItem = (items, val) => {
    const fakeData2 = [...this.state.fakeData2];
    fakeData2.map(item => {
      if (items.id === item.id) {
        item.checked = val;
      }
    });
    this.setState({ fakeData2 });
    if (!fakeData2.every(item => item.checked)) {
      this.setState({ checked3: false });
    } else {
      this.setState({ checked3: true });
    }
  };

  handleCheckMonitor = val => {
    this.setState({ checked1: val });
  };

  handleCheckWarn = val => {
    this.setState({ checked2: val });
  };

  handleCheckKpi = val => {
    if (val) {
      const fakeData = [...this.state.fakeData];
      fakeData.map(item => {
        item.checked = true;
      });
      this.setState({ fakeData, checked: true });
    } else {
      const fakeData = [...this.state.fakeData];
      fakeData.map(item => {
        item.checked = false;
      });
      this.setState({ fakeData, checked: false });
    }
  };

  handleCheckProfile = val => {
    const fakeData2 = [...this.state.fakeData2];
    if (val) {
      fakeData2.map(item => {
        item.checked = true;
      });
      this.setState({ fakeData2, checked3: true });
    } else {
      fakeData2.map(item => {
        item.checked = false;
      });
      this.setState({ fakeData2, checked3: false });
    }
  };

  handleOpenKpi = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  handleOpenProfile = () => {
    const { isOpen2 } = this.state;
    this.setState({ isOpen2: !isOpen2 });
  };

  handleSetAll = () => {
    const fakeData = [...this.state.fakeData];
    const fakeData2 = [...this.state.fakeData2];
    fakeData.map(item => {
      item.checked = true;
    });
    fakeData2.map(item => {
      item.checked = true;
    });
    this.setState({ fakeData, checked: true, checked1: true, checked2: true, checked3: true });
  };

  handleSetAllNot = () => {
    const fakeData = [...this.state.fakeData];
    const fakeData2 = [...this.state.fakeData2];
    fakeData.map(item => {
      item.checked = false;
    });
    fakeData2.map(item => {
      item.checked = false;
    });
    this.setState({ fakeData, checked: false, checked1: false, checked2: false, checked3: false });
  };

  handleSubmit = () => {
    const { navigation } = this.props;
    const { groupName, fakeData, fakeData2, checked1, checked2, checked3, checked, type, groupId } = this.state;
    let arr = [];
    let newArr = [];
    let arr2 = [];
    if (checked) {
      // kpi 3
      newArr.push(3, 8, 9, 10, 11, 12, 13, 14, 15, 16);
    } else {
      // 半选
      arr = fakeData.filter(item => item.checked).map(item => item.id);
      newArr.push(...arr);
    }
    if (checked1) {
      // 监控 2
      newArr.push(2);
    }
    if (checked2) {
      // 告警 4
      newArr.push(4);
    }
    if (checked3) {
      // 我的 5
      newArr.push(5, 17, 18, 19, 20);
    } else {
      // 半选
      arr2 = fakeData2.filter(item => item.checked).map(item => item.id);
      newArr.push(...arr2);
    }
    console.log(newArr);
    const params = {
      name: groupName,
      menuId: newArr.toString(),
    };
    if (!groupName) {
      Toast.info('请输入分组名');
    } else if (!newArr.length) {
      Toast.info('请配置分组');
    } else {
      if (type === 'edit') {
        params.id = groupId;
        updateGrouping(params).then(res => {
          if (res && res.status === 200) {
            Toast.success('修改成功');
            navigation.goBack();
          } else {
            Toast.sad(res.msg);
          }
        });
      } else {
        addGrouping(params).then(res => {
          if (res && res.status === 200) {
            Toast.success('新增成功');
            navigation.goBack();
          } else {
            Toast.sad(res.msg);
          }
        });
      }
    }
  };

  render() {
    const { type, groupName, fakeData, checked1, checked2, checked3, checked, isOpen, isOpen2, fakeData2 } = this.state;
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
            <Text style={styles.content}>{type === 'add' ? '新增' : '编辑'}分组</Text>
          </View>
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.curPassword}>分组名</Text>
            <TextInput
              value={groupName}
              style={styles.inputBase}
              placeholder="请输入分组名"
              placeholderTextColor="#999"
              onBlur={() => Keyboard.dismiss()}
              onChangeText={val => this.setState({ groupName: val })}
            />
            <View style={styles.arrowPic} />
          </View>
          <View style={styles.inputBox2}>
            <Text style={styles.curPassword}>分组权限</Text>
            <View style={styles.inputBase}>
              <Text style={styles.placeholderText}>请配置分组权限</Text>
            </View>
            <View style={styles.arrowPic} />
          </View>
          {/* 监控 */}
          <View style={styles.kpi}>
            <Checkbox
              size="md"
              title="监控"
              checked={checked1}
              titleStyle={styles.titleStyle}
              onChange={val => this.handleCheckMonitor(val)}
            />
          </View>
          <View style={styles.kpi}>
            <Checkbox
              size="md"
              title="告警"
              checked={checked2}
              titleStyle={styles.titleStyle}
              onChange={val => this.handleCheckWarn(val)}
            />
          </View>
          <View style={styles.kpi}>
            <Checkbox
              size="md"
              title="KPI"
              checked={checked}
              titleStyle={styles.titleStyle}
              onChange={val => this.handleCheckKpi(val)}
            />
            <TouchableOpacity onPress={() => this.handleOpenKpi()}>
              {isOpen ? (
                <IconFont name="shouqiicon" size={20} style={styles.arrowPic} color="#999" />
              ) : (
                <IconFont name="zhankaiiocn" size={20} style={styles.arrowPic} color="#999" />
              )}
            </TouchableOpacity>
          </View>
          {isOpen &&
            fakeData.map(item => {
              return (
                <View key={item.id} style={styles.checkboxGroup}>
                  <Checkbox
                    size="md"
                    checked={item.checked}
                    title={item.name || item.val}
                    onChange={val => this.handleKpiItem(item, val)}
                  />
                </View>
              );
            })}
          <View style={styles.kpi}>
            <Checkbox
              size="md"
              title="我的"
              checked={checked3}
              titleStyle={styles.titleStyle}
              onChange={val => this.handleCheckProfile(val)}
            />
            <TouchableOpacity onPress={() => this.handleOpenProfile()}>
              {isOpen2 ? (
                <IconFont name="shouqiicon" size={20} style={styles.arrowPic} color="#999" />
              ) : (
                <IconFont name="zhankaiiocn" size={20} style={styles.arrowPic} color="#999" />
              )}
            </TouchableOpacity>
          </View>
          {isOpen2 &&
            fakeData2.map(item => {
              return (
                <View key={item.id} style={styles.checkboxGroup}>
                  <Checkbox
                    size="md"
                    checked={item.checked}
                    title={item.name || item.val}
                    onChange={val => this.handleProfileItem(item, val)}
                  />
                </View>
              );
            })}
          <View style={styles.btnGroup}>
            <Button style={styles.checkAll} onPress={this.handleSetAll}>
              <Text style={styles.checkText}>全选</Text>
            </Button>
            <Button style={styles.checkAll} onPress={this.handleSetAllNot}>
              <Text style={styles.checkText}>全不选</Text>
            </Button>
          </View>
          <Button style={styles.submitBtn} onPress={this.handleSubmit}>
            <Text style={styles.submitBtnText}>保&nbsp;&nbsp;&nbsp;存</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default AddGroup;
