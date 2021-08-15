import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

export default StyleSheet.create({
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayContent: {
    width: wp(72),
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: wp(20 / BASE_WIDTH),
  },
  overlayTitle: {
    color: '#999',
    fontSize: hp(60 / BASE_HEIGHT),
    lineHeight: hp(72 / BASE_HEIGHT),
    marginTop: hp(80 / BASE_HEIGHT),
    textAlign: 'center',
    width: '100%',
  },
  overlayFooter: {
    marginTop: hp(80 / BASE_HEIGHT),
    borderTopColor: '#DDD',
    borderTopWidth: wp(2 / BASE_WIDTH),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    width: '100%',
    color: '#000',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: hp(60 / BASE_HEIGHT),
    lineHeight: hp(72 / BASE_HEIGHT),
    height: hp(72 / BASE_HEIGHT),
    marginTop: hp(24 / BASE_HEIGHT),
    marginBottom: hp(24 / BASE_HEIGHT),
  },
});
