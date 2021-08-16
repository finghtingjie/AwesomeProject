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
  userBtn: {
    width: wp(900 / BASE_WIDTH),
    height: hp(105 / BASE_HEIGHT),
    marginLeft: wp(47 / BASE_WIDTH),
    marginTop: hp(30 / BASE_HEIGHT),
    borderColor: 'rgba(186, 210, 237, 0.1)',
    backgroundColor: 'rgba(186, 210, 237, 0.1)',
    borderRadius: wp(20 / BASE_WIDTH),
  },
  userBtnText: {
    width: '100%',
    textAlign: 'left',
    color: '#333',
    fontWeight: 'normal',
    fontSize: hp(32 / BASE_HEIGHT),
  },
  tabContainer: {
    position: 'relative',
    marginLeft: wp(59 / BASE_WIDTH),
    marginTop: hp(45 / BASE_HEIGHT),
    width: wp((239 * 4) / BASE_WIDTH),
    height: hp(100 / BASE_HEIGHT),
    flexDirection: 'row',
  },
  leftBtn: {
    width: wp(239 / BASE_WIDTH),
    height: hp(98 / BASE_HEIGHT),
    borderColor: '#E6E7EB',
    backgroundColor: '#E6E7EB',
    borderWidth: wp(1 / BASE_WIDTH),
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  leftBtnActive: {
    width: wp(239 / BASE_WIDTH),
    height: hp(98 / BASE_HEIGHT),
    borderColor: '#588CE4',
    backgroundColor: '#588CE4',
    borderWidth: wp(1 / BASE_WIDTH),
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  centerLeft: {
    width: wp(239 / BASE_WIDTH),
    height: hp(98 / BASE_HEIGHT),
    borderColor: '#BABABC',
    backgroundColor: '#E6E7EB',
    borderWidth: wp(1 / BASE_WIDTH),
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
  },
  centerLeftActive: {
    width: wp(239 / BASE_WIDTH),
    height: hp(98 / BASE_HEIGHT),
    borderColor: '#588CE4',
    backgroundColor: '#588CE4',
    borderWidth: wp(1 / BASE_WIDTH),
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
  },
  backRight: {
    width: wp(18 / BASE_WIDTH),
    height: hp(30 / BASE_HEIGHT),
  },
  centerRightActive: {
    width: wp(239 / BASE_WIDTH),
    height: hp(98 / BASE_HEIGHT),
    borderColor: '#588CE4',
    backgroundColor: '#588CE4',
    borderWidth: wp(1 / BASE_WIDTH),
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
  },
  centerRight: {
    width: wp(239 / BASE_WIDTH),
    height: hp(98 / BASE_HEIGHT),
    borderColor: '#BABABC',
    backgroundColor: '#E6E7EB',
    borderWidth: wp(1 / BASE_WIDTH),
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
  },
  rightBtn: {
    width: wp(239 / BASE_WIDTH),
    height: hp(98 / BASE_HEIGHT),
    borderColor: '#E6E7EB',
    backgroundColor: '#E6E7EB',
    borderWidth: wp(1 / BASE_WIDTH),
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  rightBtnActive: {
    width: wp(239 / BASE_WIDTH),
    height: hp(98 / BASE_HEIGHT),
    borderColor: '#588CE4',
    backgroundColor: '#588CE4',
    borderWidth: wp(1 / BASE_WIDTH),
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  submitBtn: {
    paddingVertical: 0,
    backgroundColor: '#4367FD',
    width: wp(700 / BASE_WIDTH),
    height: hp(128 / BASE_HEIGHT),
    borderRadius: wp(30 / BASE_WIDTH),
    marginLeft: wp(148 / BASE_WIDTH),
    marginTop: hp(920 / BASE_HEIGHT),
  },
  tabTextActive: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'normal',
    fontSize: hp(32 / BASE_HEIGHT),
  },
  tabText: {
    width: '100%',
    textAlign: 'center',
    color: '#333',
    fontWeight: 'normal',
    fontSize: hp(32 / BASE_HEIGHT),
  },
  submitBtnText: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'normal',
    fontSize: hp(42 / BASE_HEIGHT),
  },
});
