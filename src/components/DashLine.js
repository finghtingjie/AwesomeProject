import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

/*水平方向的虚线
 * len 虚线个数
 * width 总长度
 * backgroundColor 背景颜色
 * */
export default class DashSecondLine extends Component {
  render() {
    var len = this.props.len;
    var arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    return (
      <View style={[styles.dashLine, { height: this.props.width, marginLeft: this.props.left, top: this.props.top }]}>
        {arr.map((item, index) => {
          return (
            <Text style={[styles.dashItem, { backgroundColor: this.props.backgroundColor }]} key={'dash' + index} />
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dashLine: {
    flexDirection: 'column',
    position: 'absolute',
    zIndex: -1,
  },
  dashItem: {
    height: 2,
    width: 1,
    marginTop: 2,
    flex: 1,
  },
});
