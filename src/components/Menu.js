import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import IconFont from '@iconfont/index.js';

const Menu = props => (
  <TouchableOpacity onPress={props.handleOpen}>
    <IconFont style={styles.open} name="zhucaidanzhankai" size={24} color="#333" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  headerTitle: {
    color: '#333',
    fontWeight: '700',
    fontSize: hp(2.33),
    flex: 1,
    display: 'flex',
    textAlign: 'center',
  },
  open: {
    marginLeft: wp(4),
  },
});

export default Menu;
