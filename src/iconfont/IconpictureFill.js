/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconpictureFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M846.848 198.656H178.176c-24.064 0-43.52 19.456-43.52 43.52v540.16c0 24.064 19.456 43.52 43.52 43.52h668.672c24.064 0 43.52-19.456 43.52-43.52v-540.16c0-24.064-19.456-43.52-43.52-43.52z m-8.704 323.584c0 12.8-15.36 18.944-24.576 10.24L671.744 390.656s-6.144-5.632-13.312-5.632-13.312 5.12-13.312 5.12L471.04 565.248c-5.632 5.632-14.848 5.632-20.48 0l-80.896-81.408s-6.656-5.12-11.776-5.12-11.264 4.608-11.264 4.608L211.456 618.496c-9.216 9.216-24.576 2.56-24.576-10.24V270.848c0-11.264 8.704-19.968 19.968-19.968h611.328c11.264 0 19.968 8.704 19.968 19.968V522.24z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M247.808 357.376a45.568 45.568 0 1 0 91.136 0 45.568 45.568 0 1 0-91.136 0z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconpictureFill.defaultProps = {
  size: 18,
};

IconpictureFill = React.memo ? React.memo(IconpictureFill) : IconpictureFill;

export default IconpictureFill;
