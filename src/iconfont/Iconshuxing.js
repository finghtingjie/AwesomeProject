/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconshuxing = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 999.905882C240.941176 999.905882 24.094118 783.058824 24.094118 512S240.941176 24.094118 512 24.094118s487.905882 216.847059 487.905882 487.905882-216.847059 487.905882-487.905882 487.905882z m0-903.529411c-228.894118 0-415.623529 186.729412-415.623529 415.623529s186.729412 415.623529 415.623529 415.623529 415.623529-186.729412 415.623529-415.623529-186.729412-415.623529-415.623529-415.623529z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M331.294118 638.494118c-18.070588 0-30.117647 12.047059-30.117647 30.117647s12.047059 30.117647 30.117647 30.117647 30.117647-12.047059 30.117647-30.117647-18.070588-30.117647-30.117647-30.117647z m0-337.317647c-18.070588 0-30.117647 12.047059-30.117647 30.117647s12.047059 30.117647 30.117647 30.117647 30.117647-12.047059 30.117647-30.117647-18.070588-30.117647-30.117647-30.117647z m0 168.658823c-18.070588 0-30.117647 12.047059-30.117647 30.117647s12.047059 30.117647 30.117647 30.117647 30.117647-12.047059 30.117647-30.117647-18.070588-30.117647-30.117647-30.117647zM668.611765 301.176471H439.717647c-12.047059 0-24.094118 12.047059-24.094118 30.117647s12.047059 30.117647 30.117647 30.117647h228.894118c18.070588 0 30.117647-12.047059 30.117647-30.117647s-18.070588-30.117647-36.141176-30.117647z m0 168.658823H439.717647c-12.047059 0-24.094118 12.047059-24.094118 30.117647s12.047059 30.117647 30.117647 30.117647h228.894118c18.070588 0 30.117647-12.047059 30.117647-30.117647s-18.070588-30.117647-36.141176-30.117647z m0 168.658824H439.717647c-18.070588 0-30.117647 12.047059-30.117647 30.117647s12.047059 30.117647 30.117647 30.117647h228.894118c18.070588 0 30.117647-12.047059 30.117647-30.117647s-12.047059-30.117647-30.117647-30.117647z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconshuxing.defaultProps = {
  size: 18,
};

Iconshuxing = React.memo ? React.memo(Iconshuxing) : Iconshuxing;

export default Iconshuxing;
