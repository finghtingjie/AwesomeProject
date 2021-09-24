/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

import moment from 'moment';
import { Wheel, Theme } from 'teaset';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const year = [];
for (let i = 1970; i <= 2100; ++i) {
  year.push(i);
}

//使用例子 eg:

// <DoubleDatePicker
// visible={this.state.dateModalVisible}
// defaultValue={this.state.dateArr}
// onCancle={()=>{this.setState({dateModalVisible: false})}}
// onConfirm={this.onConfirm.bind(this)}
// />

export default class DoubleDatePicker extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      years: year,
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      daysCount: [[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]],
      date: new Date(),
      modalVisible: false,
      active: 1,
      dateStart: moment()
        .day(-7)
        .format('YYYY-MM-DD'),
      dateEnd: moment().format('YYYY-MM-DD'),
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    let { visible } = this.props;
    let { modalVisible } = this.state;
    if (visible != modalVisible) {
      if (visible) {
        this.show();
      } else {
        this.setState({ modalVisible: false });
      }
    }
  }

  isLeapYear(year) {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
  }

  onDateChange(year, month, day) {
    let { date, active } = this.state;
    date.setFullYear(year);
    let daysCount = this.state.daysCount[this.isLeapYear(year) ? 1 : 0][month];
    if (day > daysCount) {
      day = daysCount;
      date.setDate(day);
      date.setMonth(month);
    } else {
      date.setMonth(month);
      date.setDate(day);
    }
    this.setState({ date }, () => {
      if (active == 1) {
        this.setState({ dateStart: moment(date).format('YYYY-MM-DD') });
      } else {
        this.setState({ dateEnd: moment(date).format('YYYY-MM-DD') });
      }
    });
  }

  handleDate = type => {
    let { dateStart, dateEnd } = this.state;
    if (type == 'start') {
      let newDate = new Date(dateStart);
      this.setState({ date: newDate, active: 1 });
    } else {
      let newDate = new Date(dateEnd);
      this.setState({ date: newDate, active: 2 });
    }
  };

  handleCancel = () => {
    this.props.onCancle();
  };

  handleSubmit = async () => {
    let { dateStart, dateEnd } = this.state;
    let valueArr = [dateStart, dateEnd];
    this.props.onConfirm(valueArr);
  };

  show = async () => {
    let date, dateStart, dateEnd;
    let { defaultValue } = this.props;
    if (defaultValue && defaultValue.length > 0) {
      dateStart = defaultValue[0];
      dateEnd = defaultValue[1];
      date = new Date(dateStart);
    } else {
      dateStart = moment()
        .day(-7)
        .format('YYYY-MM-DD');
      dateEnd = moment().format('YYYY-MM-DD');
      date = new Date(dateStart);
    }
    this.setState({
      date: date,
      dateStart: dateStart,
      dateEnd: dateEnd,
      modalVisible: true,
    });
  };

  renderDrawer() {
    let { date } = this.state;
    let year = date.getFullYear(),
      month = date.getMonth(),
      day = date.getDate();
    let daysCount = this.state.daysCount[this.isLeapYear(year) ? 1 : 0][month];
    let days = [];
    for (let i = 1; i <= daysCount; ++i) {
      days.push(i);
    }

    let { active } = this.state;

    return (
      <View style={{ height: 260, justifyContent: 'flex-start' }}>
        <View style={{ backgroundColor: '#FFFFFF', height: 260 }}>
          <View style={styles.drawerTitle}>
            <TouchableOpacity onPress={this.handleCancel.bind(this)}>
              <Text style={styles.cancelBtn}>取消</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.titleText}>请选择日期</Text>
            </View>
            <TouchableOpacity onPress={this.handleSubmit.bind(this)}>
              <Text style={styles.submitBtn}>完成</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawerContent}>
            <View style={styles.resultBox}>
              <TouchableOpacity
                style={active == 1 ? styles.resultBoxborderActive : styles.resultBoxborder}
                onPress={this.handleDate.bind(this, 'start')}>
                <Text style={styles.resultText}>{this.state.dateStart}</Text>
              </TouchableOpacity>
              <View style={styles.lineBox}>
                <Text style={{ color: '#979797' }}>一</Text>
              </View>
              <TouchableOpacity
                style={active == 2 ? styles.resultBoxborderActive : styles.resultBoxborder}
                onPress={this.handleDate.bind(this, 'end')}>
                <Text style={styles.resultText}>{this.state.dateEnd}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: Theme.defaultColor,
                padding: 20,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Wheel
                style={{ height: 200, flex: 1 }}
                itemStyle={{ textAlign: 'center' }}
                items={this.state.years}
                index={this.state.years.indexOf(year)}
                onChange={index => this.onDateChange(this.state.years[index], month, day)}
              />
              <Wheel
                style={{ height: 200, flex: 1 }}
                itemStyle={{ textAlign: 'center' }}
                items={this.state.months}
                index={this.state.months.indexOf(month + 1)}
                onChange={index => this.onDateChange(year, this.state.months[index] - 1, day)}
              />
              <Wheel
                style={{ height: 200, flex: 1 }}
                itemStyle={{ textAlign: 'center' }}
                items={days}
                index={days.indexOf(day)}
                onChange={index => this.onDateChange(year, month, days[index])}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <Modal visible={this.state.modalVisible} transparent={true}>
        <TouchableOpacity style={styles.touchModalStyle} onPress={this.handleCancel.bind(this)} />
        {this.state.modalVisible ? this.renderDrawer() : null}
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  dateBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'relative',
  },
  dateboxTouch: {
    padding: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textValue: {
    color: '#666666',
  },
  textPlaceholder: {
    color: '#999999',
  },
  touchModalStyle: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  //grawer样式
  cancelBtn: {
    color: '#999999',
    fontSize: 16,
  },
  submitBtn: {
    color: '#E10600',
    fontSize: 16,
  },
  titleText: {
    color: '#000000',
    fontSize: 16,
  },
  drawerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    marginBottom: 16,
  },
  drawerContent: {},
  sameModal: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  //
  resultBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultBoxborder: {
    padding: 6,
    paddingLeft: 30,
    paddingRight: 30,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 17,
  },
  resultBoxborderActive: {
    padding: 6,
    paddingLeft: 30,
    paddingRight: 30,
    borderWidth: 1,
    borderColor: '#E10600',
    borderRadius: 17,
  },
  resultText: {
    color: '#333333',
    fontSize: 15,
  },
  lineBox: {
    marginLeft: 16,
    marginRight: 16,
  },
});
