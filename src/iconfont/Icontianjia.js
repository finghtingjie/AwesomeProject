/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icontianjia = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M797.8 548.5H226.2c-20.1 0-36.5-16.3-36.5-36.5s16.3-36.5 36.5-36.5h571.6c20.1 0 36.5 16.3 36.5 36.5s-16.4 36.5-36.5 36.5z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 834.3c-20.1 0-36.5-16.3-36.5-36.4V226.2c0-20.1 16.3-36.5 36.5-36.5 20.1 0 36.5 16.3 36.5 36.5v571.7c-0.1 20.1-16.4 36.4-36.5 36.4z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Icontianjia.defaultProps = {
  size: 18,
};

Icontianjia = React.memo ? React.memo(Icontianjia) : Icontianjia;

export default Icontianjia;
