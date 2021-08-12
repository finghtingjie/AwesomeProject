/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconweixuankuang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M808.8 63.4h-596c-82.6 0-150 67.1-150 150v596.1c0 82.6 67.1 150 150 150h596.1c82.6 0 150-67.1 150-150V213.4c-0.1-82.6-67.2-150-150.1-150z m86 703.5c0 71-57.7 128.5-128.5 128.5h-511c-71 0-128.5-57.7-128.5-128.5V256c0-71 57.7-128.5 128.5-128.5h510.9c71 0 128.5 57.7 128.5 128.5v510.9z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconweixuankuang.defaultProps = {
  size: 18,
};

Iconweixuankuang = React.memo ? React.memo(Iconweixuankuang) : Iconweixuankuang;

export default Iconweixuankuang;
