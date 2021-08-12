/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconChecklist = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M508.16 372.224A138.24 138.24 0 1 0 645.888 512a137.728 137.728 0 0 0-137.728-139.776z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M941.312 148.992h-42.496a600.576 600.576 0 0 1-194.56-41.472A864.768 864.768 0 0 1 537.856 18.432L511.744 0l-25.088 18.432a901.632 901.632 0 0 1-166.912 88.064 600.576 600.576 0 0 1-194.56 41.472L82.688 148.992v430.592C82.688 795.648 361.728 1024 512.256 1024s429.056-228.352 429.056-444.416z m-197.632 596.992a41.472 41.472 0 0 1-58.368 0l-73.216-73.216a189.44 189.44 0 0 1-102.4 30.72A194.048 194.048 0 1 1 670.976 614.4l72.704 72.704a41.472 41.472 0 0 1 0 58.88z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconChecklist.defaultProps = {
  size: 18,
};

IconChecklist = React.memo ? React.memo(IconChecklist) : IconChecklist;

export default IconChecklist;
