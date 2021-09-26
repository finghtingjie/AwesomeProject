import { StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { screenWidth, screenHeight, scale } from '../../utils/device';

const BASE_WIDTH = 10.8;
let BASE_HEIGHT = 19.2;
if (scale === 2.75 && Number(screenHeight).toFixed(0) === 759) {
  // 1080*2220
  BASE_HEIGHT = 22.2;
} else if (scale === 2.75 && Number(screenHeight).toFixed(0) === 802) {
  // 1080*2340
  BASE_HEIGHT = 23.4;
}

const currentHeight = StatusBar.currentHeight;

// console.log(screenWidth, screenHeight, scale, 111);
// console.log(screenWidth / screenHeight, 222);
// console.log(currentHeight);

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationBar: {
    width: '100%',
    height: hp(215 / BASE_HEIGHT),
    backgroundColor: '#3D447B',
  },
  tabContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(40 / BASE_HEIGHT),
  },
  commonBtn: {
    width: wp(480 / BASE_WIDTH),
    height: wp(100 / BASE_WIDTH),
    borderColor: '#fff',
  },
  iconContainer: {
    position: 'absolute',
    width: 'auto',
    top: hp(130 / BASE_HEIGHT),
    height: hp(215 / BASE_HEIGHT),
    left: wp(70 / BASE_WIDTH),
    zIndex: 100,
  },
  backIcon: {
    width: wp(24 / BASE_WIDTH),
    height: hp(40 / BASE_HEIGHT),
  },
  content: {
    position: 'absolute',
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    fontSize: hp(48 / BASE_HEIGHT),
    fontWeight: 'bold',
    top: hp(128 / BASE_HEIGHT),
    height: hp(215 / BASE_HEIGHT),
    // left: wp(70 / BASE_WIDTH),
  },
  commonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    fontWeight: 'normal',
  },
  tableContainer: {
    position: 'relative',
    width: screenHeight + currentHeight,
    height: hp(600 / BASE_HEIGHT),
    // marginLeft: wp(92 / BASE_WIDTH),
    marginTop: hp(20 / BASE_HEIGHT),
    overflow: 'hidden',
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#6972CC',
  },
  //   commonColor: {
  //     backgroundColor: '#fff',
  //   },
  borderStyle: {
    borderWidth: 1,
    borderColor: '#BAD2ED',
  },
  head: {
    height: hp(100 / BASE_HEIGHT),
    width: wp(1830 / BASE_WIDTH),
    backgroundColor: '#3D447B',
  },
  rows: {
    height: hp(100 / BASE_HEIGHT),
    width: wp(1830 / BASE_WIDTH),
  },
  headText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    fontWeight: 'normal',
  },
  rowsText: {
    color: '#333',
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    fontWeight: 'normal',
  },
  nameStyle: {
    height: hp(100 / BASE_HEIGHT),
    width: screenHeight * 0.3,
  },
  commonnameStyle: {
    height: hp(100 / BASE_HEIGHT),
    width: screenHeight * 0.1,
  },
  commonColText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    fontWeight: 'normal',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  darkTextStyle: {
    color: '#333',
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    fontWeight: 'normal',
  },
  greenTextStyle: {
    color: '#4A7808',
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    fontWeight: 'normal',
  },
  redTextStyle: {
    color: '#FA0208',
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    fontWeight: 'normal',
  },
  orangeTextStyle: {
    color: '#FBA104',
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    fontWeight: 'normal',
  },
  yes: {
    width: wp(40 / BASE_WIDTH),
    height: wp(40 / BASE_WIDTH),
  },
  loadMoreView: {
    alignItems: 'center',
    paddingTop: hp(2),
    paddingBottom: hp(2),
  },
  loadMoreText: {
    color: '#333',
    fontSize: hp(24 / BASE_HEIGHT),
    lineHeight: hp(36 / BASE_HEIGHT),
  },
  emptyText: {
    color: '#333',
    fontSize: hp(24 / BASE_HEIGHT),
    lineHeight: hp(36 / BASE_HEIGHT),
  },
  noDataView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hp(2),
    paddingBottom: hp(2),
    justifyContent: 'center',
  },
  noRelust: {
    color: '#333',
    fontSize: hp(24 / BASE_HEIGHT),
    lineHeight: hp(36 / BASE_HEIGHT),
  },
});
