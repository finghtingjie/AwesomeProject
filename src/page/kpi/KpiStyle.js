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
  iconContainer: {
    position: 'absolute',
    width: 'auto',
    top: hp(130 / BASE_HEIGHT),
    height: hp(215 / BASE_HEIGHT),
    left: wp(70 / BASE_WIDTH),
    zIndex: 100,
  },
  content: {
    position: 'absolute',
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    fontSize: hp(48 / BASE_HEIGHT),
    fontWeight: 'bold',
    top: hp(128 / BASE_HEIGHT),
    // height: hp(215 / BASE_HEIGHT),
    // left: wp(70 / BASE_WIDTH),
  },
  centerContainer: {
    position: 'relative',
    width: wp(912 / BASE_WIDTH),
    height: hp(1130 / BASE_HEIGHT),
    marginLeft: wp(84 / BASE_WIDTH),
    marginRight: wp(84 / BASE_WIDTH),
    marginTop: hp(80 / BASE_HEIGHT),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    alignItems: 'center',
    width: wp(260 / BASE_WIDTH),
    height: hp(350 / BASE_HEIGHT),
    marginHorizontal: 0,
    marginBottom: hp(40 / BASE_HEIGHT),
    // marginRight: wp(66 / BASE_WIDTH),
    backgroundColor: '#fff',
    borderRadius: wp(15 / BASE_WIDTH),
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 10, height: 10 },
    elevation: 1,
  },
  commonPic: {
    marginTop: hp(57 / BASE_HEIGHT),
    width: wp(144 / BASE_WIDTH),
    height: wp(144 / BASE_WIDTH),
    borderRadius: wp(72 / BASE_WIDTH),
  },
  commonText: {
    color: '#333',
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: hp(28 / BASE_HEIGHT),
    lineHeight: hp(46 / BASE_HEIGHT),
    marginTop: hp(40 / BASE_HEIGHT),
  },
});
