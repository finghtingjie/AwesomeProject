/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconzhuanyongbiaoqian = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M281.664 174.912v492.352s98.752-119.36 251.008-56.256c59.008 34.304 115.2 80.96 205.76 80.96 90.496 0 153.6-56.256 153.6-56.256V162.624s-134.4 138.496-305.152 20.608c-44.608-32.96-120.064-63.104-183.168-46.72-63.104 16.512-122.048 38.4-122.048 38.4zM172.928 895.296a40.896 40.896 0 0 1-40.896-40.896V169.6a40.896 40.896 0 1 1 81.792 0v684.8a40.896 40.896 0 0 1-40.896 40.896z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconzhuanyongbiaoqian.defaultProps = {
  size: 18,
};

Iconzhuanyongbiaoqian = React.memo ? React.memo(Iconzhuanyongbiaoqian) : Iconzhuanyongbiaoqian;

export default Iconzhuanyongbiaoqian;
