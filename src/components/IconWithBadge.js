/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';

import IconFont from '@iconfont/index';

export default props => (
  <View style={{ width: 24, height: 24, margin: 5 }}>
    <IconFont name={props.icon} size={props.size} color={props.color} />
  </View>
);
