/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconshouqi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M153.582 423.334l320.45 350.42a50.429 50.429 0 0 0 37.88 17.139c14.502 0 28.3-6.24 37.881-17.14l320.45-350.419c15.644-16.523 20.478-40.605 12.392-61.875s-27.598-36.123-50.274-38.145H191.727c-22.764 1.934-42.364 16.7-50.45 38.057-8.173 21.358-3.34 45.44 12.305 61.963z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshouqi.defaultProps = {
  size: 18,
};

Iconshouqi = React.memo ? React.memo(Iconshouqi) : Iconshouqi;

export default Iconshouqi;
