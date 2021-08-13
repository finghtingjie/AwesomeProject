import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BASE_WIDTH = 3.75;
const BASE_HEIGHT = 8.12;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    width: wp(68),
    height: hp(9.8),
    marginTop: wp(6.5),
    marginLeft: wp(8),
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'column',
    width: '65%',
  },
  title: {
    fontSize: hp(2.21),
    fontWeight: '700',
    lineHeight: hp(3.07),
    color: '#333',
    marginLeft: wp(2.1),
  },
  subtitle: {
    fontSize: hp(1.72),
    fontWeight: '400',
    lineHeight: hp(2.46),
    color: '#888',
    marginLeft: wp(2.1),
  },
  openDrawer: {
    flexDirection: 'row',
    width: wp(4.5),
  },
  topBorder: {
    width: wp(68),
    height: 1,
    backgroundColor: '#E4E4E4',
    marginLeft: wp(8),
  },
  bottomBorder: {
    width: wp(68),
    height: 1,
    backgroundColor: '#E4E4E4',
    marginLeft: wp(8),
  },
  userPic: {
    width: wp(13.33),
    height: wp(13.33),
    borderRadius: wp(6.665),
    borderWidth: 1,
    borderColor: '#E3E3E3',
  },
  iconContainer: {
    width: wp(20),
    height: wp(12),
    paddingLeft: wp(2.53),
  },
  drawerIconWrap: {
    width: wp(68),
    height: hp(8),
    marginLeft: wp(8),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  drawericon: {
    width: wp(4.53),
    height: hp(2),
    marginRight: wp(4.8),
  },
  botContainer: {
    width: wp(68),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: hp(62 / BASE_HEIGHT),
    marginBottom: hp(33 / BASE_HEIGHT),
    marginLeft: wp(4),
    backgroundColor: '#FFF',
  },

  changeAccountTitle: {
    fontSize: hp(1.97),
    lineHeight: hp(2.7),
    fontWeight: '400',
    color: '#666',
    marginLeft: wp(3.73),
    marginRight: wp(32),
  },
});
