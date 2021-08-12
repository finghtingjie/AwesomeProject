/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconattribute = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M323.333 653.333c-16.8 0-30 13.2-30 30s13.2 30 30 30c16.8 0 30-13.2 30-30 0-16.8-13.2-30-30-30zM323.333 293.333c-16.8 0-30 13.2-30 30s13.2 30 30 30c16.8 0 30-13.2 30-30 0-16.8-13.2-30-30-30zM323.333 473.333c-16.8 0-30 13.2-30 30s13.2 30 30 30c16.8 0 30-13.2 30-30 0-16.8-13.2-30-30-30zM773.333 113.333h-540c-66 0-120 54-120 120v540c0 66 54 120 120 120h540c66 0 120-54 120-120v-540c0-66-54-120-120-120zM833.333 773.333c0 33-27 60-60 60h-540c-33 0-60-27-60-60v-540c0-33 27-60 60-60h540c33 0 60 27 60 60v540zM683.333 293.333h-240c-16.8 0-30 13.2-30 30s13.2 30 30 30h240c16.8 0 30-13.2 30-30s-13.2-30-30-30zM683.333 473.333h-240c-16.8 0-30 13.2-30 30s13.2 30 30 30h240c16.8 0 30-13.2 30-30s-13.2-30-30-30zM683.333 653.333h-240c-16.8 0-30 13.2-30 30s13.2 30 30 30h240c16.8 0 30-13.2 30-30s-13.2-30-30-30z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconattribute.defaultProps = {
  size: 18,
};

Iconattribute = React.memo ? React.memo(Iconattribute) : Iconattribute;

export default Iconattribute;
