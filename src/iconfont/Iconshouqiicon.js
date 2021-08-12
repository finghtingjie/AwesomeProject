/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconshouqiicon = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1536 1024" width={size} height={size} {...rest}>
      <Path
        d="M343.69833311 329.83347902L726.13345701 748.01448629a60.18751301 60.18751301 0 0 0 90.43402971 0l382.43512389-418.18100727a70.88072598 70.88072598 0 0 0-45.21701485-119.38208481H389.22086833a70.7279658 70.7279658 0 0 0-60.2638931 45.36977505 70.7279658 70.7279658 0 0 0 14.74135788 74.01230976z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshouqiicon.defaultProps = {
  size: 18,
};

Iconshouqiicon = React.memo ? React.memo(Iconshouqiicon) : Iconshouqiicon;

export default Iconshouqiicon;
