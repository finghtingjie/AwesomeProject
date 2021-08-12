/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconxuanze = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.54272 957.2608c-242.0736 0-438.30272-196.89984-438.30272-439.79776s196.22912-439.79776 438.30272-439.79776c242.06336 0 438.30272 196.89984 438.30272 439.79776S754.6112 957.2608 512.54272 957.2608zM510.17728 146.06848c-204.30848 0-369.90976 166.17984-369.90976 371.17952 0 204.99456 165.60128 371.17952 369.90976 371.17952 204.27264 0 369.8944-166.19008 369.8944-371.17952C880.07168 312.24832 714.44992 146.06848 510.17728 146.06848z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconxuanze.defaultProps = {
  size: 18,
};

Iconxuanze = React.memo ? React.memo(Iconxuanze) : Iconxuanze;

export default Iconxuanze;
