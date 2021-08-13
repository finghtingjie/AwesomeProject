import { StyleSheet } from 'react-native';
import { p2dWidth, p2dHeight, px2dp } from '@utils/device';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const BASE_WIDTH = 10.8;
// const BASE_HEIGHT = 19.2;

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  loginBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: p2dHeight(247),
    // backgroundColor: 'pink',
  },
  logo: {
    width: p2dWidth(360),
    height: p2dHeight(166),
  },
  title: {
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    paddingTop: p2dHeight(73),
    color: '#fff',
    fontWeight: 'bold',
  },
  logoContent: {
    width: '100%',
    height: p2dHeight(226),
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: p2dHeight(100),
  },
  userContainer: {
    width: p2dWidth(600),
    height: p2dHeight(88),
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 4,
    marginLeft: p2dWidth(240),
    marginTop: p2dHeight(100),
  },
  userIcon: {
    width: p2dWidth(40),
    height: p2dWidth(40),
    marginTop: p2dHeight(22),
    marginLeft: p2dWidth(20),
  },
  inputBase: {
    color: '#333',
    fontSize: 14,
    height: p2dHeight(88),
    lineHeight: p2dHeight(88),
  },
  passwordContainer: {
    width: p2dWidth(600),
    height: p2dHeight(88),
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 4,
    marginLeft: p2dWidth(240),
    marginTop: p2dHeight(50),
  },
  loginBtn: {
    width: p2dWidth(600),
    height: p2dHeight(88),
    borderRadius: 4,
    backgroundColor: '#1967D9',
    paddingVertical: 0,
    marginLeft: p2dWidth(240),
    marginTop: p2dHeight(100),
  },
  loginBtnText: {
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
