/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconyonghu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M514 114.3c-219.9 0-398.8 178.9-398.8 398.8 0 220 178.9 398.9 398.8 398.9s398.8-178.9 398.8-398.9c0-219.8-178.9-398.8-398.8-398.8z m247.8 572.5c-29.9-54.7-77.4-98.3-134.9-123.5-31.5 23.5-70.6 37.4-112.9 37.4-42.3 0-81.4-13.9-112.9-37.4-57.5 25.1-105 68.8-134.9 123.5-34.5-49.2-54.9-109.1-54.9-173.6 0-166.9 135.8-302.7 302.7-302.7s302.7 135.8 302.7 302.7c0 64.5-20.3 124.4-54.9 173.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M514 411.7m-155.2 0a155.2 155.2 0 1 0 310.4 0 155.2 155.2 0 1 0-310.4 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconyonghu.defaultProps = {
  size: 18,
};

Iconyonghu = React.memo ? React.memo(Iconyonghu) : Iconyonghu;

export default Iconyonghu;
