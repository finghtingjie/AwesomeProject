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
  centerContainer: {
    position: 'relative',
    width: wp(996 / BASE_WIDTH),
    height: hp(946 / BASE_HEIGHT),
    backgroundColor: '#fff',
    marginLeft: wp(42 / BASE_WIDTH),
    marginTop: hp(33 / BASE_HEIGHT),
    borderRadius: wp(20 / BASE_WIDTH),
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 10,
  },
  inputBox: {
    width: wp(902 / BASE_WIDTH),
    marginLeft: wp(46 / BASE_WIDTH),
    height: hp(7.26),
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: hp(0.12),
    borderBottomColor: '#E4E4E4',
  },
  inputBase: {
    color: '#333',
    width: wp(54),
    fontSize: hp(32 / BASE_HEIGHT),
    paddingLeft: wp(10 / BASE_WIDTH),
    lineHeight: hp((32 * 1.2) / BASE_HEIGHT),
  },
  curPassword: {
    width: wp(24),
    fontSize: hp(32 / BASE_HEIGHT),
    fontWeight: '400',
    color: '#333',
    lineHeight: hp((32 * 1.2) / BASE_HEIGHT),
  },
  backRight: {
    width: wp(18 / BASE_WIDTH),
    height: hp(30 / BASE_HEIGHT),
  },
  tipBox: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginLeft: wp(88 / BASE_WIDTH),
    marginTop: hp(54 / BASE_HEIGHT),
  },
  tipContent: {
    width: wp(902 / BASE_WIDTH),
    fontSize: hp(32 / BASE_HEIGHT),
    fontWeight: '400',
    color: '#999',
    marginLeft: wp(2 / BASE_WIDTH),
    lineHeight: hp((32 * 1.2) / BASE_HEIGHT),
  },
  commonTop: {
    marginTop: hp(12 / BASE_HEIGHT),
  },
  submitBtn: {
    paddingVertical: 0,
    backgroundColor: '#4367FD',
    width: wp(700 / BASE_WIDTH),
    height: hp(128 / BASE_HEIGHT),
    borderRadius: wp(30 / BASE_WIDTH),
    marginLeft: wp(148 / BASE_WIDTH),
    marginTop: hp(100 / BASE_HEIGHT),
  },
  submitBtnText: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'normal',
    fontSize: hp(36 / BASE_HEIGHT),
  },
});
