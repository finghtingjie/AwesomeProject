import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Modal } from 'react-native';
import moment from 'moment';
import Picker from 'react-native-picker';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

export default class DatePicker extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dateFormat: null,
      mode: 'date',
      defaultValue: null, //默认时间
      dafaultChanged: false, //默认时间是否已改变
      modalVisible: false,
    };
  }
  componentDidMount() {}

  static getDerivedStateFromProps(nextProps, preState) {
    if (!preState.dafaultChanged && nextProps.defaultValue) {
      return { defaultValue: nextProps.defaultValue, dateFormat: nextProps.defaultValue, dafaultChanged: true };
    }
    return null;
  }

  _createDateData() {
    let date = [];
    for (let i = 1900; i < 2100; i++) {
      let month = [];
      for (let j = 1; j < 13; j++) {
        let day = [];
        if (j === 2) {
          for (let k = 1; k < 29; k++) {
            day.push(k);
          }
          //Leap day for years that are divisible by 4, such as 2000, 2004
          if (i % 4 === 0) {
            day.push(29);
          }
        } else if (j in { 1: 1, 3: 1, 5: 1, 7: 1, 8: 1, 10: 1, 12: 1 }) {
          for (let k = 1; k < 32; k++) {
            day.push(k);
          }
        } else {
          for (let k = 1; k < 31; k++) {
            day.push(k);
          }
        }
        let _month = {};
        _month[j] = day;
        month.push(_month);
      }
      let _date = {};
      _date[i] = month;
      date.push(_date);
    }
    return date;
  }

  _showDatePicker() {
    let { dateFormat } = this.state;
    let selectedValue = [];
    let iosDefaultVal;
    if (Platform.OS === 'android') {
      let date = dateFormat ? moment(dateFormat, 'YYYY-MM-DD') : moment();
      selectedValue = [date.year(), date.month() + 1, date.date()];
    } else if (Platform.OS === 'ios') {
      // 修复ios默认展示时期bug
      iosDefaultVal = moment(this.props.defaultValue).format('YYYY-MM-DD');
      if (this.props.defaultValue) {
        const centerVal = moment(this.props.defaultValue)
          .format('YYYY-MM-DD')
          .slice(5, 7);
        const val = centerVal.includes(0) ? iosDefaultVal.slice(6, 7) : iosDefaultVal.slice(5, 7);
        // 如果有默认值，编辑状态下，直接取默认值
        selectedValue = [iosDefaultVal.slice(0, 4), val, Number(iosDefaultVal.slice(-2))];
      } else {
        // 否则取当天时间
        iosDefaultVal = moment(new Date()).format('YYYY-MM-DD');
        const centerVal = iosDefaultVal.slice(5, 7);
        const val = centerVal.includes(0) ? iosDefaultVal.slice(6, 7) : iosDefaultVal.slice(5, 7);
        selectedValue = [iosDefaultVal.slice(0, 4), val, Number(iosDefaultVal.slice(-2))];
        console.log(selectedValue);
      }

      // console.log(selectedValue, 'selectedValue1');
    }

    Picker.init({
      pickerData: this._createDateData(),
      selectedValue,
      pickerTitleText: '日期',
      pickerCancelBtnText: '取消',
      pickerConfirmBtnText: '完成',
      pickerConfirmBtnColor: [225, 6, 0, 1],
      pickerCancelBtnColor: [153, 153, 153, 1],
      pickerToolBarBg: [255, 255, 255, 1],
      pickerBg: [255, 255, 255, 1],
      onPickerConfirm: (pickedValue, pickedIndex) => {
        let str = pickedValue[0] + '-' + pickedValue[1] + '-' + pickedValue[2];
        let dateStr = moment(str, 'YYYY-MM-DD').format('YYYY-MM-DD');
        this.setState({
          dateFormat: moment(dateStr, 'YYYY-MM-DD').format('YYYY-MM-DD'),
          modalVisible: false,
        });
        dateStr && this.props.onConfirm(dateStr);
      },
      onPickerCancel: (pickedValue, pickedIndex) => {
        this.setState({ modalVisible: false });
      },
      onPickerSelect: (pickedValue, pickedIndex) => {
        console.log('date', pickedValue, pickedIndex);
      },
    });
    Picker.show();
  }

  _showTimePicker() {
    let that = this;
    let { defaultValue } = this.state;
    let { minuteStep } = this.props;
    let years = [],
      months = [],
      days = [],
      hours = [],
      minutes = [];

    for (let i = 1; i < 101; i++) {
      years.push(i + 1980);
    }
    for (let i = 1; i < 25; i++) {
      months.push(i);
      hours.push(i);
    }
    for (let i = 1; i < 32; i++) {
      days.push(i);
    }
    for (let i = 0; i < 60; i++) {
      if (minuteStep) {
        if (i % minuteStep === 0) {
          minutes.push(i);
        }
      } else {
        minutes.push(i);
      }
    }
    let pickerData = [years, months, days, hours, minutes];
    let date = defaultValue ? moment(defaultValue, 'YYYY-MM-DD HH:mm:ss') : moment();
    let selectedValue = [date.year(), date.month() + 1, date.date(), date.hour(), date.minute()];
    Picker.init({
      pickerData,
      selectedValue,
      pickerTitleText: '日期',
      pickerCancelBtnText: '取消',
      pickerConfirmBtnText: '完成',
      pickerConfirmBtnColor: [0, 122, 139, 1],
      pickerCancelBtnColor: [0, 122, 139, 1],
      pickerToolBarBg: [255, 255, 255, 1],
      pickerBg: [255, 255, 255, 1],
      wheelFlex: [1, 1, 1, 1, 1],
      onPickerConfirm: pickedValue => {
        let str =
          pickedValue[0] + '-' + pickedValue[1] + '-' + pickedValue[2] + ' ' + pickedValue[3] + ':' + pickedValue[4];
        let dateStr = moment(str, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm:ss');
        this.props.onConfirm(dateStr);
        that.setState({
          dateFormat: moment(dateStr).format('YYYY-MM-DD'),
          modalVisible: false,
        });
      },
      onPickerCancel: pickedValue => {
        that.setState({ modalVisible: false });
      },
      onPickerSelect: pickedValue => {
        let targetValue = [...pickedValue];
        if (parseInt(targetValue[1]) === 2) {
          if (targetValue[0] % 4 === 0 && targetValue[2] > 29) {
            targetValue[2] = 29;
          } else if (targetValue[0] % 4 !== 0 && targetValue[2] > 28) {
            targetValue[2] = 28;
          }
        } else if (targetValue[1] in { 4: 1, 6: 1, 9: 1, 11: 1 } && targetValue[2] > 30) {
          targetValue[2] = 30;
        }
        // forbidden some value such as some 2.29, 4.31, 6.31...
        if (JSON.stringify(targetValue) !== JSON.stringify(pickedValue)) {
          // android will return String all the time，but we put Number into picker at first
          // so we need to convert them to Number again
          targetValue.map((v, k) => {
            if (k !== 3) {
              targetValue[k] = parseInt(v);
            }
          });
          Picker.select(targetValue);
          pickedValue = targetValue;
        }
      },
    });
    Picker.show();
  }

  hideModal() {
    this.setState({ modalVisible: false });
    Picker.hide();
  }
  showModal() {
    this.setState({ modalVisible: true });
  }

  _toggle() {
    let { mode } = this.props;
    if (mode === 'datetime') {
      this.setState({ modalVisible: true });
      setTimeout(() => {
        this._showTimePicker();
      }, 100);
    } else {
      this.setState({ modalVisible: true });
      setTimeout(() => {
        this._showDatePicker();
      }, 100);
    }
  }

  render() {
    let { dateFormat } = this.state;
    let { valueTextStyle, touchBoxStyle, placeholderStyle } = this.props;
    if (touchBoxStyle) {
      touchBoxStyle = { ...styles.dateboxTouch, ...touchBoxStyle };
    } else {
      touchBoxStyle = styles.dateboxTouch;
    }
    return (
      <View style={styles.dateBox}>
        <TouchableOpacity style={touchBoxStyle} onPress={this._toggle.bind(this)}>
          {dateFormat ? (
            <Text numberOfLines={1} style={valueTextStyle ? valueTextStyle : styles.textValue}>
              {dateFormat}
            </Text>
          ) : (
            <Text numberOfLines={1} style={placeholderStyle ? placeholderStyle : styles.textPlaceholder}>
              时间
            </Text>
          )}
          {this.props.suffix ? this.props.suffix : null}
        </TouchableOpacity>
        <Modal animationType="none" transparent visible={this.state.modalVisible}>
          <TouchableOpacity style={styles.touchModalStyle} onPress={this.hideModal.bind(this)} />
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dateBox: {
    flex: 1,
    justifyContent: 'center',
  },
  dateboxTouch: {
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textValue: {
    color: '#333',
    fontWeight: '400',
    width: wp(120 / BASE_WIDTH),
    fontSize: hp(32 / BASE_HEIGHT),
    lineHeight: hp(40 / BASE_HEIGHT),
  },
  textPlaceholder: {
    color: '#3D447B',
    fontWeight: '400',
    width: wp(120 / BASE_WIDTH),
    marginLeft: wp(40 / BASE_WIDTH),
    fontSize: hp(32 / BASE_HEIGHT),
    lineHeight: hp(40 / BASE_HEIGHT),
  },
  touchModalStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});
