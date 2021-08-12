/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconxiangmu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M985.6 313.6L518.4 44.8 44.8 313.6 512 582.4l473.6-268.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M44.8 448v64L512 780.8 979.2 512V448L512 716.8 44.8 448z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M44.8 652.8v64L512 985.6l467.2-268.8v-64L512 921.6 44.8 652.8z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

Iconxiangmu.defaultProps = {
  size: 18,
};

Iconxiangmu = React.memo ? React.memo(Iconxiangmu) : Iconxiangmu;

export default Iconxiangmu;
