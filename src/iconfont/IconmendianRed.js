/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconmendianRed = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M509.159814 62.532195c-246.961648 0-447.163319 200.201671-447.163319 447.162296 0 246.960625 200.201671 447.162296 447.163319 447.162296 246.960625 0 447.162296-200.201671 447.162296-447.162296C956.32211 262.733866 756.120438 62.532195 509.159814 62.532195zM783.106046 658.985656l0 42.221614 0 84.453461c0 17.488303-14.151301 31.665187-31.609928 31.665187l-63.218834 0L688.277284 563.984978l-126.439714 0 0 253.340939L266.821463 817.325917c-17.458627 0-31.609928-14.176884-31.609928-31.665187l0-84.453461 0-42.221614 0-95.000678 273.947256-274.453792 273.947256 274.453792L783.106046 658.985656zM814.711881 542.873148c-8.326643 0-15.842827-3.298116-21.484314-8.571213l-0.080841 0.081864L509.960039 250.67011l0-0.013303-0.800225-0.762363 0-0.013303L225.814514 533.765723l-0.021489-0.01535c-5.699816 5.640464-13.546527 9.122775-22.190395 9.122775-17.458627 0-31.610952-14.178931-31.610952-31.665187 0-8.977465 3.735068-17.068747 9.714246-22.829961l304.666908-305.236889c5.753027-5.992481 13.831007-9.731642 22.786982-9.731642l0.013303 0c0.560772 0 1.113357 0.013303 1.661849 0.042979 0.098237 0.008186 0.176009 0.016373 0.26606 0.020466 0.474814 0.034792 0.950651 0.073678 1.417279 0.12075 0.034792 0 0.068562 0.004093 0.095167 0.008186 7.735172 0.843204 14.639418 4.488221 19.667945 9.889231l0.021489-0.01842 124.365472 124.602879 0-29.103852c0-17.491373 14.151301-31.665187 31.610952-31.665187 17.458627 0 31.605835 14.173814 31.605835 31.665187l0 92.444459 117.961622 118.181633-0.067538 0.070608c5.259794 5.655813 8.5487 13.190417 8.5487 21.537526C846.326926 528.694217 832.175625 542.873148 814.711881 542.873148z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M330.037227 563.984978l126.439714 0 0 126.673028-126.439714 0 0-126.673028Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconmendianRed.defaultProps = {
  size: 18,
};

IconmendianRed = React.memo ? React.memo(IconmendianRed) : IconmendianRed;

export default IconmendianRed;
