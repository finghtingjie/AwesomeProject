/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconshijian1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 81.92a430.08 430.08 0 1 0 430.08 430.08 430.592 430.592 0 0 0-430.08-430.08z m173.66016 463.62112H497.87392a19.41504 19.41504 0 0 1-19.42016-19.41504V254.36672a33.54112 33.54112 0 0 1 67.072 0v218.8032a5.28896 5.28896 0 0 0 5.28384 5.28896h134.83008a33.54112 33.54112 0 1 1 0.01536 67.08224z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshijian1.defaultProps = {
  size: 18,
};

Iconshijian1 = React.memo ? React.memo(Iconshijian1) : Iconshijian1;

export default Iconshijian1;
