import { StyleSheet } from 'react-native';
// import { p2dWidth, p2dHeight } from '@utils/device';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

export default StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  loginBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  centerContainer: {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    marginTop: '50%',
    // backgroundColor: 'pink',
  },
  logoContainer: {
    // width: '100%',
    // height: 'auto',
    justifyContent: 'center',
    flexDirection: 'row',
    // paddingTop: p2dHeight(247),
    // paddingTop: hp(247 / BASE_HEIGHT),
    // backgroundColor: 'pink',
  },
  logo: {
    width: wp(312 / BASE_WIDTH),
    height: hp(175 / BASE_HEIGHT),
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    fontSize: hp(60 / BASE_HEIGHT),
    paddingTop: hp(73 / BASE_HEIGHT),
  },
  logoContent: {
    width: '100%',
    height: hp(226 / BASE_HEIGHT),
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: hp(100 / BASE_HEIGHT),
  },
  userContainer: {
    width: wp(600 / BASE_WIDTH),
    height: hp(88 / BASE_HEIGHT),
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: wp(4 / BASE_WIDTH),
    marginLeft: wp(240 / BASE_WIDTH),
    marginTop: hp(100 / BASE_HEIGHT),
  },
  userIcon: {
    width: wp(40 / BASE_WIDTH),
    height: wp(40 / BASE_WIDTH),
    marginTop: hp(22 / BASE_HEIGHT),
    marginLeft: wp(20 / BASE_WIDTH),
  },
  inputBase: {
    color: '#000',
    fontWeight: '400',
    width: '90%',
    paddingVertical: 0,
    fontSize: hp(30 / BASE_HEIGHT),
    height: hp(88 / BASE_HEIGHT),
    lineHeight: hp((30 * 1.2) / BASE_HEIGHT),
    // backgroundColor: 'pink',
  },
  passwordContainer: {
    width: wp(600 / BASE_WIDTH),
    height: hp(88 / BASE_HEIGHT),
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: wp(4 / BASE_WIDTH),
    marginLeft: wp(240 / BASE_WIDTH),
    marginTop: hp(50 / BASE_HEIGHT),
  },
  loginBtn: {
    paddingVertical: 0,
    backgroundColor: '#1967D9',
    width: wp(600 / BASE_WIDTH),
    height: hp(88 / BASE_HEIGHT),
    borderRadius: wp(4 / BASE_WIDTH),
    marginLeft: wp(240 / BASE_WIDTH),
    marginTop: hp(100 / BASE_HEIGHT),
  },
  loginBtnText: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: hp(40 / BASE_HEIGHT),
  },
  copyRight: {
    position: 'absolute',
    bottom: hp(40 / BASE_HEIGHT),
    left: 0,
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'normal',
    fontSize: hp(30 / BASE_HEIGHT),
  },
});
