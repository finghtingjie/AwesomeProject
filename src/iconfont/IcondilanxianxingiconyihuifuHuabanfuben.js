/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IcondilanxianxingiconyihuifuHuabanfuben = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M245.421 709.579c34.612 34.613 74.928 61.792 119.824 80.781C411.744 810.028 461.119 820 512 820s100.256-9.972 146.755-29.64c44.896-18.99 85.212-46.168 119.824-80.781 34.612-34.612 61.792-74.927 80.781-119.824C879.028 543.256 889 493.881 889 443c0-50.88-9.972-100.256-29.64-146.755-18.989-44.897-46.169-85.212-80.781-119.824-34.612-34.613-74.928-61.792-119.824-80.781C612.256 75.972 562.881 66 512 66s-100.256 9.972-146.755 29.64c-44.896 18.99-85.212 46.168-119.824 80.781-34.612 34.612-61.792 74.927-80.781 119.824C144.972 342.744 135 392.12 135 443c0 50.881 9.972 100.256 29.64 146.755 18.989 44.897 46.169 85.212 80.781 119.824z m45.255-487.903C349.794 162.558 428.395 130 512 130s162.206 32.558 221.324 91.676C792.442 280.793 825 359.395 825 443s-32.558 162.207-91.676 221.324C674.206 723.442 595.605 756 512 756s-162.206-32.558-221.324-91.676C231.558 605.207 199 526.605 199 443s32.558-162.207 91.676-221.324z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M384 360m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M640 360m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M927 896H97c-17.6 0-32 14.4-32 32s14.4 32 32 32h830c17.6 0 32-14.4 32-32s-14.4-32-32-32z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

IcondilanxianxingiconyihuifuHuabanfuben.defaultProps = {
  size: 18,
};

IcondilanxianxingiconyihuifuHuabanfuben = React.memo ? React.memo(IcondilanxianxingiconyihuifuHuabanfuben) : IcondilanxianxingiconyihuifuHuabanfuben;

export default IcondilanxianxingiconyihuifuHuabanfuben;
