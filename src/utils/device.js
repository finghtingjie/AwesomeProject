// import { Dimensions } from 'react-native';

// // 设备宽度，单位 dp
// const deviceWidthDp = Dimensions.get('window').width;

// // 设计稿宽度（这里为750px），单位 px
// const uiWidthPx = 1080;

// // px 转 dp（设计稿中的 px 转 rn 中的 dp）
// export const pTd = uiElePx => {
//   return (uiElePx * deviceWidthDp) / uiWidthPx;
// };

import { Dimensions, PixelRatio } from 'react-native';
const designWidth = 1080;
const designHeight = 1920;
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const scale = Dimensions.get('screen').scale;

export const p2dWidth = px => {
  return px * (screenWidth / designWidth);
};
export const p2dHeight = px => {
  return px * (screenHeight / designHeight);
};
export const px2dp = px => PixelRatio.roundToNearestPixel(px);
export const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp);
