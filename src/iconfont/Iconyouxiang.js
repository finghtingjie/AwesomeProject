/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconyouxiang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M153.236734 163.111422l714.763665 0c48.810633 0 88.718697 38.475467 89.332667 85.853503l-446.458679 242.518237L64.313381 249.169581C64.722694 201.689218 104.323773 163.111422 153.236734 163.111422L153.236734 163.111422zM64.313381 341.981413l-0.409313 429.062856c0 47.787349 40.215049 86.876786 89.332667 86.876786l714.763665 0c49.117618 0 89.332667-39.089437 89.332667-86.876786L957.333067 341.776756 521.311882 573.038873c-6.651344 3.581493-14.735285 3.581493-21.386629 0L64.313381 341.981413 64.313381 341.981413zM64.313381 341.981413"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconyouxiang.defaultProps = {
  size: 18,
};

Iconyouxiang = React.memo ? React.memo(Iconyouxiang) : Iconyouxiang;

export default Iconyouxiang;
