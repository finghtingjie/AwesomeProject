import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationBar: {
    width: wp(1080 / BASE_WIDTH),
    height: hp(215 / BASE_HEIGHT),
    backgroundColor: '#3D447B',
  },
  navigationContainer: {
    position: 'absolute',
    width: wp(920 / BASE_WIDTH),
    height: hp(112 / BASE_HEIGHT),
    bottom: 0,
    left: wp(80 / BASE_WIDTH),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    position: 'relative',
    width: 'auto',
    // top: hp(108 / BASE_HEIGHT),
    height: hp(112 / BASE_HEIGHT),
    // left: wp(70 / BASE_WIDTH),
    zIndex: 100,
  },
  backIcon: {
    width: wp(24 / BASE_WIDTH),
    height: hp(40 / BASE_HEIGHT),
    marginTop: hp(36 / BASE_HEIGHT),
  },
  content: {
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    fontSize: hp(48 / BASE_HEIGHT),
    fontWeight: 'bold',
    top: hp(0 / BASE_HEIGHT),
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    // left: wp(70 / BASE_WIDTH),
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
  leftTab: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: wp(480 / BASE_WIDTH),
    height: hp(100 / BASE_HEIGHT),
  },
  commonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    fontWeight: 'normal',
  },
  leftText: {
    color: '#fff',
    width: wp(141 / BASE_WIDTH),
    height: hp(71 / BASE_HEIGHT),
    lineHeight: hp(71 / BASE_HEIGHT),
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  tableContainer: {
    position: 'relative',
    width: wp(960 / BASE_WIDTH),
    height: 'auto',
    backgroundColor: '#fff',
    marginLeft: wp(60 / BASE_WIDTH),
    marginTop: hp(33 / BASE_HEIGHT),
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#3D447B',
    borderTopLeftRadius: wp(20 / BASE_WIDTH),
    borderTopRightRadius: wp(20 / BASE_WIDTH),
  },
  nameStyle: {
    height: hp(100 / BASE_HEIGHT),
    width: wp(240 / BASE_WIDTH),
  },
  commonnameStyle: {
    height: hp(100 / BASE_HEIGHT),
    width: wp(240 / BASE_WIDTH),
  },
  colorWhite: {
    color: '#fff',
  },
  commonColText: {
    color: '#000',
    textAlign: 'center',
    fontSize: hp(24 / BASE_HEIGHT),
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
  rowContainer2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(186, 210, 237, 0.2)',
  },
  bbb: {
    paddingBottom: hp(400 / BASE_HEIGHT),
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: '#BAD2ED',
  },
  head: {
    height: hp(100 / BASE_HEIGHT),
    width: wp(960 / BASE_WIDTH),
    backgroundColor: '#3D447B',
  },
  rows: {
    height: hp(100 / BASE_HEIGHT),
    width: wp(960 / BASE_WIDTH),
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
});
