import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, TextInput, Keyboard, Image } from 'react-native';

import { Toast, Button, Checkbox } from 'teaset';

// const arrowPic = require('../../assets/profile/xiala.png');
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
      isOpen: false, //子节点是否展开
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
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;
    if (params && params.item && params.type) {
      this.setState({ groupName: params.item.name, type: params.type, groupId: params.item.id });
      getGroupingMenu({ groupId: params.item.id }).then(res => {
        if (res && res.status === 200) {
          this.setState({ fakeData: res.body.menuData.filter(item => item.parentId === 3) });
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
              this.handleSetAll();
              this.setState({ checked: true });
            } else {
              this.setState({ checked: false });
            }
          } else {
            this.handleSetAll();
          }
        }
      });
    }
  }

  handleChecked = (items, val) => {
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

  handleCheck1 = val => {
    this.setState({ checked1: val });
  };

  handleCheck2 = val => {
    this.setState({ checked2: val });
  };

  handleCheckAll = val => {
    if (val) {
      this.handleSetAll();
      this.setState({ checked: true });
    } else {
      this.handleSetAllNot();
      this.setState({ checked: false });
    }
  };

  handleSetAll = () => {
    const fakeData = [...this.state.fakeData];
    fakeData.map(item => {
      item.checked = true;
    });
    this.setState({ fakeData, checked: true });
  };

  handleSetAllNot = () => {
    const fakeData = [...this.state.fakeData];
    fakeData.map(item => {
      item.checked = false;
    });
    this.setState({ fakeData, checked: false });
  };

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  handleSubmit = () => {
    const { navigation } = this.props;
    const { groupName, fakeData, checked1, checked2, checked, type, groupId } = this.state;
    let arr = [];
    let newArr = [];
    if (checked) {
      // kpi 3
      arr = fakeData.map(item => item.id);
      newArr = [...arr, 3];
    }
    if (checked1) {
      // 监控 2
      newArr.push(2);
    }
    if (checked2) {
      // 告警 4
      newArr.push(4);
    }
    const params = {
      menuId: newArr.toString(),
      name: groupName,
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
    const { type, groupName, fakeData, checked1, checked2, checked, isOpen } = this.state;
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
          <Text style={styles.content}>{type === 'add' ? '新增' : '编辑'}分组</Text>
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.curPassword}>分组名</Text>
            <TextInput
              style={styles.inputBase}
              placeholder="请输入分组名"
              placeholderTextColor="#999"
              value={groupName}
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
            <Checkbox size="lg" title="监控" checked={checked1} onChange={val => this.handleCheck1(val)} />
          </View>
          <View style={styles.kpi}>
            <Checkbox size="lg" title="告警" checked={checked2} onChange={val => this.handleCheck2(val)} />
          </View>
          <View style={styles.kpi}>
            <Checkbox size="lg" title="kpi" checked={checked} onChange={val => this.handleCheckAll(val)} />
            <TouchableOpacity onPress={() => this.handleOpen()}>
              {/* <Image style={styles.arrowPic} source={arrowPic} /> */}
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
                  {/* <Text style={styles.userBtnText}>{item.val}</Text> */}
                  <Checkbox
                    size="lg"
                    title={item.name}
                    checked={item.checked}
                    onChange={val => this.handleChecked(item, val)}
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
