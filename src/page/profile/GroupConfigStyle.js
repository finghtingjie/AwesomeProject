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
  orderPic: {
    width: wp(16 / BASE_WIDTH),
    height: wp(16 / BASE_WIDTH),
    marginLeft: wp(60 / BASE_WIDTH),
  },
  userBtn: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 0,
    width: wp(1000 / BASE_WIDTH),
    height: hp(110 / BASE_HEIGHT),
    // marginLeft: wp(40 / BASE_WIDTH),
    marginTop: hp(40 / BASE_HEIGHT),
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: wp(20 / BASE_WIDTH),
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  editBtn: {
    paddingVertical: 0,
    width: wp(142 / BASE_WIDTH),
    height: hp(70 / BASE_HEIGHT),
    // marginLeft: wp(498 / BASE_WIDTH),
    borderColor: '#88af53',
    backgroundColor: '#88af53',
    borderRadius: wp(8 / BASE_WIDTH),
  },
  deleteBtn: {
    paddingVertical: 0,
    width: wp(142 / BASE_WIDTH),
    height: hp(70 / BASE_HEIGHT),
    marginLeft: wp(20 / BASE_WIDTH),
    borderColor: '#F31938',
    backgroundColor: '#F31938',
    borderRadius: wp(8 / BASE_WIDTH),
    marginRight: wp(20 / BASE_WIDTH),
  },
  pwdBtnText: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'normal',
    fontSize: hp(18 / BASE_HEIGHT),
  },
  userBtnText: {
    color: '#333',
    fontWeight: 'normal',
    fontSize: hp(32 / BASE_HEIGHT),
    marginLeft: wp(28 / BASE_WIDTH),
  },
  submitBtn: {
    position: 'absolute',
    paddingVertical: 0,
    backgroundColor: '#4367FD',
    width: wp(700 / BASE_WIDTH),
    height: hp(128 / BASE_HEIGHT),
    borderRadius: wp(30 / BASE_WIDTH),
    marginLeft: wp(190 / BASE_WIDTH),
    // marginTop: hp(132 / BASE_HEIGHT),
    bottom: hp(62 / BASE_HEIGHT),
    left: 0,
  },
  submitBtnText: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'normal',
    fontSize: hp(36 / BASE_HEIGHT),
  },
  flatlist: {
    width: wp(1000 / BASE_WIDTH),
    height: hp(1500 / BASE_HEIGHT),
    marginLeft: wp(40 / BASE_WIDTH),
    marginRight: wp(40 / BASE_WIDTH),
    marginTop: hp(40 / BASE_HEIGHT),
    // backgroundColor: 'pink',
  },
});
