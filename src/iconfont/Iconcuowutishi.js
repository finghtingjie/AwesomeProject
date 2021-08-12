/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconcuowutishi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M480 1024C214.848 1024 0 809.152 0 544 0 278.912 214.848 64 480 64S960 278.912 960 544C960 809.152 745.152 1024 480 1024zM480 128C250.24 128 64 314.24 64 544S250.24 960 480 960 896 773.76 896 544 709.76 128 480 128zM660.992 770.24 480 589.248l-180.992 180.992-45.248-45.248L434.752 544 253.76 362.944l45.248-45.248L480 498.752l180.992-181.056 45.248 45.248L525.248 544l180.992 180.992L660.992 770.24z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcuowutishi.defaultProps = {
  size: 18,
};

Iconcuowutishi = React.memo ? React.memo(Iconcuowutishi) : Iconcuowutishi;

export default Iconcuowutishi;
