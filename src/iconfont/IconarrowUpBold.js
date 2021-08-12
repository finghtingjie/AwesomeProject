/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconarrowUpBold = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M904.533333 674.133333l-362.666666-362.666666c-17.066667-17.066667-42.666667-17.066667-59.733334 0l-362.666666 362.666666c-17.066667 17.066667-17.066667 42.666667 0 59.733334 17.066667 17.066667 42.666667 17.066667 59.733333 0L512 401.066667l332.8 332.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconarrowUpBold.defaultProps = {
  size: 18,
};

IconarrowUpBold = React.memo ? React.memo(IconarrowUpBold) : IconarrowUpBold;

export default IconarrowUpBold;
