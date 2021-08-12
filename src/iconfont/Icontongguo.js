/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icontongguo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M303.313 839.094h-119.25c-41.738 0-59.625-26.888-59.625-59.625V183.5c0-52.875 10.237-59.625 59.624-59.625h476.832c46.125 0 60.469 15.469 60.469 59.625v80.044c0 41.625 59.625 46.969 59.625 0v-79.875c0-87.863-28.407-119.194-120.207-119.194H183.894c-58.163 0-118.913 7.144-118.913 116.775V799.1a113.485 113.485 0 0 0 4.95 34.763 93.825 93.825 0 0 0 91.856 65.08c72.957 0.282 102.544 0 141.638 0 39.094 0 36.337-59.793-0.169-59.793z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M244.025 242.844c-42.806 0-44.719 60.412 0 60.412h357.637c40.95 0 47.475-60.356 0-60.412H244.026z m96.019 178.706h-96.019c-42.806 0-44.719 60.412 0 60.412h96.019c40.95 0 47.475-60.356 0-60.412zM660.894 363.219A298.012 298.012 0 1 0 958.962 661.23c0.057-166.837-137.08-298.012-298.068-298.012z m0 536.456a238.444 238.444 0 1 1 238.443-238.444A239.231 239.231 0 0 1 660.894 899.9v-0.225z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M765.237 557l-146.08 146.138-62.607-62.607c-5.963-11.925-29.813-11.925-41.737 0a28.8 28.8 0 0 0 0 41.738l83.53 83.475a28.8 28.8 0 0 0 41.738 0l166.894-166.95a29.531 29.531 0 0 0-41.681-41.738h-0.056z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

Icontongguo.defaultProps = {
  size: 18,
};

Icontongguo = React.memo ? React.memo(Icontongguo) : Icontongguo;

export default Icontongguo;
