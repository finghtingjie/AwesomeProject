import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

import Picker from 'react-native-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

export default class DatePicker extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      pickedValue: null,
      modalVisible: false,
      dateArr: [],
    };
  }
  componentDidMount() {
    if (this.props.defaultValue) {
      this.setState({ pickedValue: this.props.defaultValue });
    }
    if (this.props.pickerData) {
      this.setState({ dateArr: [1, 2, 3] });
    }
  }

  _showDatePicker() {
    let selectedValue = [];
    if (this.props.defaultValue) {
      selectedValue = this.props.defaultValue;
    }
    Picker.init({
      pickerData: this.state.dateArr,
      selectedValue,
      pickerTitleText: '时间段',
      pickerCancelBtnText: '取消',
      pickerConfirmBtnText: '完成',
      pickerConfirmBtnColor: [225, 6, 0, 1],
      pickerCancelBtnColor: [153, 153, 153, 1],
      pickerToolBarBg: [255, 255, 255, 1],
      pickerBg: [255, 255, 255, 1],
      onPickerConfirm: (pickedValue, pickedIndex) => {
        this.setState({
          pickedValue,
          modalVisible: false,
        });
        this.props.onConfirm(pickedValue, this.props.type);
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

  hideModal = () => {
    this.setState({ modalVisible: false });
    Picker.hide();
  };

  _toggle = () => {
    this.setState({ modalVisible: true });
    setTimeout(() => this._showDatePicker(), 100);
  };

  render() {
    const { pickedValue } = this.state;
    let { valueTextStyle, touchBoxStyle } = this.props;
    if (touchBoxStyle) {
      touchBoxStyle = { ...styles.dateboxTouch, ...touchBoxStyle };
    } else {
      touchBoxStyle = styles.dateboxTouch;
    }
    return (
      <View style={styles.dateBox}>
        <TouchableOpacity style={touchBoxStyle} onPress={this._toggle}>
          {pickedValue ? (
            <Text style={valueTextStyle ? valueTextStyle : styles.textValue}>{pickedValue}</Text>
          ) : (
            <Text style={styles.textPlaceholder}>
              {this.props.placeholderText ? this.props.placeholderText : '请选择时间段'}
            </Text>
          )}
          {this.props.suffix ? this.props.suffix : null}
        </TouchableOpacity>
        <Modal animationType="none" transparent={true} visible={this.state.modalVisible}>
          <TouchableOpacity style={styles.touchModalStyle} onPress={this.hideModal} />
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
    fontSize: hp(40 / BASE_HEIGHT),
    lineHeight: hp(48 / BASE_HEIGHT),
  },
  textPlaceholder: {
    color: '#999',
    fontWeight: '400',
    fontSize: hp(40 / BASE_HEIGHT),
    lineHeight: hp(48 / BASE_HEIGHT),
  },
  touchModalStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});
