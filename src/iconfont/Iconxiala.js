/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconxiala = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M787.2 380.8c-9.6-9.6-22.4-12.8-35.2-12.8l-480 3.2c-12.8 0-25.6 3.2-35.2 12.8-19.2 19.2-19.2 48 0 67.2l240 240c0 0 0 0 0 0 0 0 0 0 0 0 3.2 3.2 9.6 6.4 12.8 9.6 0 0 3.2 3.2 3.2 3.2 16 6.4 38.4 3.2 51.2-9.6l240-243.2C806.4 428.8 803.2 400 787.2 380.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconxiala.defaultProps = {
  size: 18,
};

Iconxiala = React.memo ? React.memo(Iconxiala) : Iconxiala;

export default Iconxiala;
