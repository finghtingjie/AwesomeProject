/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconshijian = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.146667 204.970667a307.626667 307.626667 0 1 0 0.170666 615.253333 307.626667 307.626667 0 0 0-0.170666-615.253333z m224.085333 363.861333H510.634667a28.245333 28.245333 0 0 1-28.16-28.16V286.208a28.074667 28.074667 0 0 1 56.149333 0v226.474667h196.437333a28.16 28.16 0 0 1 19.968 47.957333 27.989333 27.989333 0 0 1-19.797333 8.192z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M511.146667 80.554667a432.042667 432.042667 0 1 0 0.170666 864.170666A432.042667 432.042667 0 0 0 511.146667 80.554667z m0 802.56a370.517333 370.517333 0 1 1 0-741.12 370.517333 370.517333 0 0 1 0 741.12z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconshijian.defaultProps = {
  size: 18,
};

Iconshijian = React.memo ? React.memo(Iconshijian) : Iconshijian;

export default Iconshijian;
