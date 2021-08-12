/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconxuanzeXuanzhong = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 950.857143a438.857143 438.857143 0 1 1 438.857143-438.857143 438.857143 438.857143 0 0 1-438.857143 438.857143z m-20.48-256l258.56-258.56a36.571429 36.571429 0 0 0-51.565714-51.931429l-232.96 232.96-103.497143-103.131428a36.571429 36.571429 0 0 0-51.565714 0 36.571429 36.571429 0 0 0 0 51.931428L438.857143 694.857143a36.571429 36.571429 0 0 0 25.965714 10.605714 36.571429 36.571429 0 0 0 26.697143-10.605714z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconxuanzeXuanzhong.defaultProps = {
  size: 18,
};

IconxuanzeXuanzhong = React.memo ? React.memo(IconxuanzeXuanzhong) : IconxuanzeXuanzhong;

export default IconxuanzeXuanzhong;
