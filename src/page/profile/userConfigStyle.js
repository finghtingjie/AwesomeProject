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
    height: wp(215 / BASE_WIDTH),
    backgroundColor: '#3D447B',
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
  inputBox: {
    width: wp(866 / BASE_WIDTH),
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 1, height: 1 },
    borderColor: '#fff',
    borderWidth: 1,
    shadowOpacity: 0.9,
    height: hp(80 / BASE_HEIGHT),
    borderRadius: wp(40 / BASE_WIDTH),
    marginLeft: wp(92 / BASE_WIDTH),
    marginTop: hp(42 / BASE_HEIGHT),
  },
  inputBase: {
    width: wp(866 / BASE_WIDTH),
    color: '#1967D9',
    fontWeight: 'normal',
    paddingVertical: 0,
    fontSize: hp(24 / BASE_HEIGHT),
    // lineHeight: hp(88 / BASE_HEIGHT),
    // backgroundColor: 'red',
    textAlign: 'center',
  },
  centerContainer: {
    position: 'relative',
    width: wp(1000 / BASE_WIDTH),
    height: hp(362 / BASE_HEIGHT),
    backgroundColor: '#fff',
    marginLeft: wp(39 / BASE_WIDTH),
    marginTop: hp(28 / BASE_HEIGHT),
    paddingTop: hp(30 / BASE_HEIGHT),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: wp(20 / BASE_WIDTH),
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 20, height: 20 },
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
    justifyContent: 'flex-start',
    paddingVertical: 0,
    width: wp(1000 / BASE_WIDTH),
    height: hp(110 / BASE_HEIGHT),
    marginLeft: wp(40 / BASE_WIDTH),
    marginTop: hp(33 / BASE_HEIGHT),
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: wp(20 / BASE_WIDTH),
  },
  pwdBtn: {
    paddingVertical: 0,
    width: wp(142 / BASE_WIDTH),
    height: hp(70 / BASE_HEIGHT),
    marginLeft: wp(82 / BASE_WIDTH),
    borderColor: '#588CE4',
    backgroundColor: '#588CE4',
    borderRadius: wp(8 / BASE_WIDTH),
  },
  editBtn: {
    paddingVertical: 0,
    width: wp(142 / BASE_WIDTH),
    height: hp(70 / BASE_HEIGHT),
    marginLeft: wp(20 / BASE_WIDTH),
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
    paddingVertical: 0,
    backgroundColor: '#4367FD',
    width: wp(700 / BASE_WIDTH),
    height: hp(128 / BASE_HEIGHT),
    borderRadius: wp(30 / BASE_WIDTH),
    marginLeft: wp(190 / BASE_WIDTH),
    marginTop: hp(132 / BASE_HEIGHT),
  },
  submitBtnText: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'normal',
    fontSize: hp(42 / BASE_HEIGHT),
  },
});
