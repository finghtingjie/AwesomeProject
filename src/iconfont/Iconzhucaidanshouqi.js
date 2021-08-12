/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconzhucaidanshouqi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M123.184762 830.537143c0.853333-2.072381 1.706667-4.08381 2.56-6.095238a30.47619 30.47619 0 0 1 28.342857-19.870476H857.6a31.878095 31.878095 0 0 1 4.205714 63.573333H164.388571c-20.358095 0-34.681905-6.095238-41.203809-26.026667zM123.184762 212.967619c0.853333-2.072381 1.706667-4.08381 2.56-6.095238a30.47619 30.47619 0 0 1 28.281905-19.626667H857.6a31.878095 31.878095 0 0 1 4.266667 63.512381H164.449524c-20.358095 0-34.681905-6.095238-41.20381-26.026666zM123.184762 518.095238a183.832381 183.832381 0 0 1 14.811428-19.748571Q188.952381 446.293333 241.066667 394.48381c13.348571-13.409524 31.634286-12.921905 42.361904 1.340952a25.782857 25.782857 0 0 1 5.12 14.201905q0.487619 114.651429 0 229.302857a24.380952 24.380952 0 0 1-16.152381 23.100952 24.380952 24.380952 0 0 1-28.891428-4.937143c-12.190476-11.824762-24.380952-24.380952-36.571429-36.571428-23.161905-23.588571-46.689524-46.872381-69.790476-70.765715A156.586667 156.586667 0 0 1 123.184762 530.285714zM683.032381 598.430476h175.664762a31.024762 31.024762 0 0 1 31.024762 24.380953 31.817143 31.817143 0 0 1-17.249524 36.205714 38.4 38.4 0 0 1-15.055238 3.108571H508.099048a31.939048 31.939048 0 0 1-8.777143-62.963809 48.761905 48.761905 0 0 1 10.788571-0.731429zM683.154286 393.508571h175.664762a31.024762 31.024762 0 0 1 30.902857 24.380953 31.75619 31.75619 0 0 1-17.371429 36.144762 36.571429 36.571429 0 0 1-14.384762 3.108571H507.306667A30.47619 30.47619 0 0 1 475.428571 431.908571a31.207619 31.207619 0 0 1 16.88381-35.108571 41.081905 41.081905 0 0 1 16.335238-3.169524c58.209524-0.24381 116.419048-0.121905 174.506667-0.121905z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconzhucaidanshouqi.defaultProps = {
  size: 18,
};

Iconzhucaidanshouqi = React.memo ? React.memo(Iconzhucaidanshouqi) : Iconzhucaidanshouqi;

export default Iconzhucaidanshouqi;
