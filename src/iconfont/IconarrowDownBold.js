/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconarrowDownBold = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M904.533333 311.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 644.266667 179.2 311.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333l362.666666 362.666667c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866667-12.8l362.666666-362.666667c17.066667-17.066667 17.066667-42.666667 0-59.733333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconarrowDownBold.defaultProps = {
  size: 18,
};

IconarrowDownBold = React.memo ? React.memo(IconarrowDownBold) : IconarrowDownBold;

export default IconarrowDownBold;
