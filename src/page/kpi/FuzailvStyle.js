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
    width: wp(1000 / BASE_WIDTH),
    height: 'auto',
    backgroundColor: '#fff',
    marginLeft: wp(40 / BASE_WIDTH),
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
  //   commonColor: {
  //     backgroundColor: '#fff',
  //   },
  borderStyle: {
    borderWidth: 1,
    borderColor: '#BAD2ED',
  },
  head: {
    height: hp(100 / BASE_HEIGHT),
    width: wp(1000 / BASE_WIDTH),
    backgroundColor: '#3D447B',
  },
  rows: {
    height: hp(100 / BASE_HEIGHT),
    width: wp(1000 / BASE_WIDTH),
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
    width: wp(1000 / 4 / BASE_WIDTH),
  },
  commonnameStyle: {
    height: hp(100 / BASE_HEIGHT),
    width: wp(1000 / 4 / BASE_WIDTH),
  },
  itemsStyle: {
    height: 'auto',
    // backgroundColor: 'rgba(186, 210, 237, 0.1)',
    width: wp(1000 / 4 / BASE_WIDTH),
  },
  commonColText: {
    color: '#fff',
    width: wp(1000 / 4 / BASE_WIDTH),
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    fontWeight: 'normal',
  },
  tableDataContainer: {
    paddingBottom: hp(400 / BASE_HEIGHT),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
  },
  rowContainer2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(186, 210, 237, 0.2)',
    marginTop: hp(20 / BASE_HEIGHT),
  },
  darkTextStyle: {
    color: '#333',
    // textAlign: 'left',
    textAlign: 'center',
    // marginLeft: wp(120 / BASE_WIDTH),
    fontSize: hp(28 / BASE_HEIGHT),
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  greenTextStyle: {
    color: '#4A7808',
    // textAlign: 'left',
    textAlign: 'center',
    fontSize: hp(28 / BASE_HEIGHT),
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  redTextStyle: {
    color: '#FA0208',
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  orangeTextStyle: {
    color: '#FBA104',
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  yes: {
    width: wp(40 / BASE_WIDTH),
    height: wp(40 / BASE_WIDTH),
  },
  purpleTextStyle: {
    color: '#424984',
    textAlign: 'center',
    fontSize: hp(32 / BASE_HEIGHT),
    height: hp(100 / BASE_HEIGHT),
    lineHeight: hp(100 / BASE_HEIGHT),
    fontWeight: 'bold',
    // backgroundColor: '#E0EDFB',
  },
});
