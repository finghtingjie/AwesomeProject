/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icontuxiang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M870.4 176 153.6 176C104.128 176 64 216.128 64 265.6l0 492.736c0 49.472 40.128 89.6 89.6 89.6L870.4 847.936c49.472 0 89.6-40.128 89.6-89.6L960 265.6C960 216.128 919.872 176 870.4 176zM870.4 668.8 825.6 668.8c0 0-29.696-65.792-89.6-89.6s-134.4 89.6-134.4 89.6S535.04 596.992 467.2 444.8C399.36 292.608 153.6 624 153.6 624l0-358.4L870.4 265.6 870.4 668.8zM668.8 489.6c37.056 0 67.2-30.144 67.2-67.264 0-37.056-30.144-67.2-67.2-67.2C631.68 355.2 601.6 385.344 601.6 422.4 601.6 459.52 631.68 489.6 668.8 489.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontuxiang.defaultProps = {
  size: 18,
};

Icontuxiang = React.memo ? React.memo(Icontuxiang) : Icontuxiang;

export default Icontuxiang;
