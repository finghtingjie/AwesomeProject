/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconzhankaiiocn = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1536 1024" width={size} height={size} {...rest}>
      <Path
        d="M1204.84425969 694.16652098L822.40913577 275.98551371a60.18751301 60.18751301 0 0 0-90.43402968 0L349.53998218 694.16652098a70.88072598 70.88072598 0 0 0 45.21701486 119.38208481h764.56472743a70.7279658 70.7279658 0 0 0 60.26389308-45.36977505 70.7279658 70.7279658 0 0 0-14.74135786-74.01230977z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconzhankaiiocn.defaultProps = {
  size: 18,
};

Iconzhankaiiocn = React.memo ? React.memo(Iconzhankaiiocn) : Iconzhankaiiocn;

export default Iconzhankaiiocn;
