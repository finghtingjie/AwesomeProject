/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconlianxifangshi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M513.3 65.2c-247.4 0-448 200.6-448 448s200.6 448 448 448 448-200.6 448-448-200.5-448-448-448z m0 836.3C299.2 901.5 125 727.3 125 513.2S299.2 125 513.3 125s388.3 174.2 388.3 388.3-174.2 388.2-388.3 388.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M646.2 583.3c-9.5-11.3-26.5-12.8-37.8-3.5l-20.5 16.8c-18.7 15.4-28.1 37.5-28.2 59.9-35.8 2.5-81.6-20.2-116.8-61.7-32.5-38.4-47.1-82.5-42.1-116 25.1 7.6 53.3 3.1 74.8-14.6l20.5-16.9c11.3-9.3 12.8-26 3.2-37.2l-69.1-81.5c-9.5-11.3-26.5-12.8-37.8-3.5l-20.5 16.8c-22.1 18.2-31.4 45.7-27.5 72-22.9 55-1.3 140.1 60 212.4 58.4 68.8 134.9 105.2 193.1 98 28.8 17.9 66.8 16.9 94.1-5.5l20.5-16.9c11.3-9.3 12.8-26 3.2-37.2l-69.1-81.4z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconlianxifangshi.defaultProps = {
  size: 18,
};

Iconlianxifangshi = React.memo ? React.memo(Iconlianxifangshi) : Iconlianxifangshi;

export default Iconlianxifangshi;
