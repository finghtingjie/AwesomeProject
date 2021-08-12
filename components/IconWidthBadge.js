import Ionicons from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {View} from 'react-native';

export default class IconWithBadge extends React.Component {
  render() {
    const {color, size, icon} = this.props;

    return (
      <View style={{width: 24, height: 24, margin: 5}}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    );
  }
}
