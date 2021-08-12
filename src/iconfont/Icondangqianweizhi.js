/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icondangqianweizhi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 519.38651473m-485.95124768 0a485.95124768 485.95124768 0 1 0 971.90249536 0 485.95124768 485.95124768 0 1 0-971.90249536 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M532.58350642 289.14975575l185.14742539 370.32956157a22.97855183 22.97855183 0 0 1-30.78848264 30.8579042l-164.73747299-81.63980958a23.04797347 23.04797347 0 0 0-20.44466318 0l-164.737473 81.63980958a22.97855183 22.97855183 0 0 1-30.78848259-30.8579042l185.14742535-370.32956157a23.04797347 23.04797347 0 0 1 41.20172366 0z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Icondangqianweizhi.defaultProps = {
  size: 18,
};

Icondangqianweizhi = React.memo ? React.memo(Icondangqianweizhi) : Icondangqianweizhi;

export default Icondangqianweizhi;
