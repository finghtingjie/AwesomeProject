/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconxiayiye = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M326.6 928.3c-10.8 0-21.7-4.1-29.9-12.4-16.5-16.5-16.5-43.4 0-59.9l342.8-342.8-342.8-342.7c-16.5-16.5-16.5-43.4 0-59.9s43.4-16.5 59.9 0l372.7 372.7c7.9 7.9 12.4 18.7 12.4 29.9s-4.5 22-12.4 29.9L356.6 915.9c-8.3 8.3-19.1 12.4-30 12.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconxiayiye.defaultProps = {
  size: 18,
};

Iconxiayiye = React.memo ? React.memo(Iconxiayiye) : Iconxiayiye;

export default Iconxiayiye;
