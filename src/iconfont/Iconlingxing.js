/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconlingxing = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M259.981 512.012l252.026-252.021 251.997 251.997-252.021 252.021-252.002-251.997z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M511.997 64L64 511.997 511.997 960 960 511.997 511.997 64z m0 806L154 511.997 511.997 154 870 511.997 511.997 870z m0 0"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconlingxing.defaultProps = {
  size: 18,
};

Iconlingxing = React.memo ? React.memo(Iconlingxing) : Iconlingxing;

export default Iconlingxing;
