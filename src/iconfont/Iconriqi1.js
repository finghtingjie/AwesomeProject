/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconriqi1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M834.4 94.3H701.6v-38c0-20.9-17.1-38-37.9-38-20.9 0-37.9 17.1-37.9 38v38H398.2v-38c0-20.9-17.1-38-37.9-38-20.9 0-37.9 17.1-37.9 38v38H189.6C85.3 94.3 0 179.7 0 284.1v531.6c0 104.4 85.3 189.9 189.6 189.9h644.7c104.3 0 189.6-85.4 189.6-189.9V284.1c0.1-104.4-85.2-189.8-189.5-189.8z m113.8 721.5c0 62.7-51.2 113.9-113.8 113.9H189.6c-62.6 0-113.8-51.3-113.8-113.9V398.1h872.3v417.7z m0-493.7H75.8v-38c0-62.7 51.2-113.9 113.8-113.9h132.8v38c0 20.9 17.1 38 37.9 38 20.9 0 37.9-17.1 37.9-38v-38h227.6v38c0 20.9 17.1 38 37.9 38 20.9 0 37.9-17.1 37.9-38v-38h132.7c62.6 0 113.8 51.3 113.8 113.9v38zM701.6 777.8h75.8c20.9 0 37.9-17.1 37.9-38s-17.1-38-37.9-38h-75.8c-20.9 0-37.9 17.1-37.9 38s17.1 38 37.9 38z m0-189.9h75.8c20.9 0 37.9-17.1 37.9-38s-17.1-38-37.9-38h-75.8c-20.9 0-37.9 17.1-37.9 38 0 21 17.1 38 37.9 38z m-227.5 0h75.8c20.9 0 37.9-17.1 37.9-38s-17.1-38-37.9-38h-75.8c-20.9 0-37.9 17.1-37.9 38-0.1 21 17 38 37.9 38zM246.5 777.8h75.9c20.8 0 37.9-17.1 37.9-38s-17.1-38-37.9-38h-75.9c-20.9 0-37.9 17.1-37.9 38s17.1 38 37.9 38z m227.6 0h75.8c20.9 0 37.9-17.1 37.9-38s-17.1-38-37.9-38h-75.8c-20.9 0-37.9 17.1-37.9 38s17 38 37.9 38zM246.5 587.9h75.9c20.8 0 37.9-17.1 37.9-38s-17.1-38-37.9-38h-75.9c-20.9 0-37.9 17.1-37.9 38 0 21 17.1 38 37.9 38z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconriqi1.defaultProps = {
  size: 18,
};

Iconriqi1 = React.memo ? React.memo(Iconriqi1) : Iconriqi1;

export default Iconriqi1;
