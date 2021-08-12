/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icongengduo1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M67.584 512c0 46.592 37.376 83.968 83.968 83.968S235.52 558.592 235.52 512c0-46.592-37.888-83.968-83.968-83.968S67.584 465.408 67.584 512zM428.032 512c0 46.592 37.376 83.968 83.968 83.968 46.592 0 83.968-37.376 83.968-83.968 0-46.592-37.888-83.968-83.968-83.968S428.032 465.408 428.032 512zM787.968 512c0 46.592 37.888 83.968 83.968 83.968 46.592 0 83.968-37.888 83.968-83.968s-37.888-83.968-83.968-83.968c-46.08 0-83.968 37.376-83.968 83.968z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icongengduo1.defaultProps = {
  size: 18,
};

Icongengduo1 = React.memo ? React.memo(Icongengduo1) : Icongengduo1;

export default Icongengduo1;
