/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icondianhua = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M 749.848 981.584 c -73.172 45.232 -281.117 -64.984 -448.467 -337.596 c -167.337 -272.666 -171.76 -508.499 -98.66 -553.732 c 63.49 -39.15 147.166 -114.235 213.728 26.111 c 66.627 140.413 12.739 162.026 -52.64 202.476 c -45.805 28.239 9.657 141.272 71.653 242.286 c 62.078 100.986 137.672 201.475 183.452 173.339 c 65.461 -40.44 108.966 -78.939 203.892 43.932 c 94.907 122.887 -9.504 164.005 -72.958 203.183 Z M 749.848 981.584 Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icondianhua.defaultProps = {
  size: 18,
};

Icondianhua = React.memo ? React.memo(Icondianhua) : Icondianhua;

export default Icondianhua;
