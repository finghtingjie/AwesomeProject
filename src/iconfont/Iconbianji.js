/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconbianji = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M280.9 764.1h419.9c23.2 0 42-18.8 42-42s-18.8-42-42-42H280.9c-23.2 0-42 18.8-42 42s18.8 42 42 42zM940.7 76.3c-16.4-16.4-43-16.4-59.4 0L544.9 412.8c-16.4 16.4-16.4 43 0 59.4s43 16.4 59.4 0l336.5-336.5c16.3-16.4 16.3-43-0.1-59.4zM280.9 596.1h140c23.2 0 42-18.8 42-42s-18.8-42-42-42h-140c-23.2 0-42 18.8-42 42s18.8 42 42 42z m615.8-84c-18.3 0-33.6 11.7-39.4 28h-2.6V820c0 30.9-25.1 56-56 56H211c-30.9 0-56-25.1-56-56V232.2c0-30.9 25.1-56 56-56h279.9v-2.6c16.3-5.8 28-21.2 28-39.4 0-18.3-11.7-33.6-28-39.4v-2.6H183c-61.8 0-112 50.1-112 112V848c0 61.8 50.1 112 112 112h643.8c61.8 0 112-50.1 112-112V540.1h-2.6c-5.8-16.2-21.2-28-39.5-28z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconbianji.defaultProps = {
  size: 18,
};

Iconbianji = React.memo ? React.memo(Iconbianji) : Iconbianji;

export default Iconbianji;
