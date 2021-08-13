import { StyleSheet, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BASE_WIDTH = 3.75;
const BASE_HEIGHT = 8.12;

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  loginContent: {
    width: wp(84),
    marginLeft: wp(8),
    marginRight: wp(8),
    // backgroundColor: 'pink',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // backgroundColor: 'red',
    // height: hp(7.38),
    marginTop: hp(13.17),
    marginBottom: hp(6.15),
  },
  titleRight: {
    marginRight: wp(13.33),
  },
  commonColor: {
    backgroundColor: '#E10600',
  },
  leftTab: {
    height: hp(0.246),
    width: wp(25.06),
  },
  rightTab: {
    height: hp(0.246),
    width: wp(32),
  },
  welComeTitle: {
    lineHeight: hp(5.41),
    fontWeight: 'bold',
    color: '#333',
  },
  normalText: {
    color: '#888',
    fontSize: hp(24 / BASE_HEIGHT),
    lineHeight: hp(44 / BASE_HEIGHT),
    fontWeight: Platform.OS === 'android' ? '700' : '500',
  },
  activedText: {
    textAlign: 'center',
    color: '#333',
    fontSize: hp(2.95),
    fontWeight: Platform.OS === 'android' ? '700' : '500',
  },
  inputBox: {
    height: hp(7.38),
    borderBottomColor: 'rgba(228,228,228,1)',
    borderBottomWidth: wp(0.266),
  },
  inputBoxActive: {
    height: hp(7.38),
    borderBottomWidth: wp(0.266),
    borderBottomColor: '#E10600',
  },
  inputBase: {
    color: '#333',
    height: hp(7.38),
    fontSize: hp(1.97),
    fontWeight: '400',
  },
  password: {
    color: '#333',
    height: hp(7.38),
    fontSize: hp(2.46),
    letterSpacing: 2,
    fontWeight: '400',
  },
  submitBtn: {
    backgroundColor: 'rgba(225, 6, 0, 0.6)',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp(2.66),
    height: hp(6.15),
    color: '#FFF',
    borderRadius: wp(1.6),
  },
  submitBtnActive: {
    backgroundColor: '#E10600',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp(2.66),
    height: hp(6.15),
    color: '#FFF',
    borderRadius: wp(1.6),
  },
  loginTop: {
    paddingTop: hp(6.15),
  },
  otherBtnBox: {
    marginTop: hp(2.46),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  otherBtn: {
    fontSize: hp(1.6),
    color: 'rgba(153,153,153,1)',
    height: hp(4.38),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: hp(2.09),
    fontWeight: 'normal',
    lineHeight: hp(2.95),
  },
  loginTextActive: {
    color: '#fff',
    fontSize: hp(2.09),
    fontWeight: 'bold',
    lineHeight: hp(2.95),
  },
  commonTextColor: {
    color: '#999',
    lineHeight: hp(20 / BASE_HEIGHT),
  },
});
