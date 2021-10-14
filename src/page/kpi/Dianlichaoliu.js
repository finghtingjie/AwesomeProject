import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, StatusBar, Dimensions } from 'react-native';

import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
  SvgXml,
  SvgCssUri,
} from 'react-native-svg';
import { screenWidth, screenHeight, scale } from '../../utils/device';
import { WebView } from 'react-native-webview';

import Orientation from 'react-native-orientation-locker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
// import ViewTransformer from 'react-native-view-transformer';
// import { shougangUpdate, shougang } from '@api/kpi';

const backIcon = require('../../assets/backicon.png');

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

// const source = { uri: 'file:///android_asset/test.html' };
const source = { uri: 'https://w.mousenat.cn/index.html' };

class Index extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      xmlData: null,
      clientId: 0,
    };
  }

  componentDidMount() {
    // this.setState({ clientId: Math.floor(Math.random() * 10000000000000000) }, () => {
    //   shougang({ clientId: this.state.clientId }).then(res => {
    //     this.setState({ xmlData: res });
    //     setInterval(() => {
    //       shougangUpdate({ clientId: this.state.clientId }).then(ress => {
    //         this.setState({ xmlData: ress });
    //       });
    //     }, 3000);
    //   });
    // });
    Orientation.lockToLandscapeLeft();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated
          translucent
          backgroundColor="transparent"
          showHideTransition="fade"
          networkActivityIndicatorVisible
        />
        <View style={styles.navigationBar}>
          <View style={styles.navigationContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.goBack()}>
              <Image style={styles.backIcon} source={backIcon} resizeMode="contain" />
            </TouchableOpacity>
            <Text style={styles.content}>电力潮流图</Text>
          </View>
        </View>
        {/* <ScrollView horizontal> */}

        {/* <View style={styles.webviewContainer}> */}
        {/* <WebView
          useWebKit
          javaScriptEnabled
          originWhitelist={['*']}
          source={source}
          style={styles.webview}
          mixedContentMode="compatibility"
          ref={ref => (this.webView = ref)}
        /> */}
        {/* <SvgXml xml={this.state.xmlData} width="100%" height="56%" /> */}
        {/* </View> */}
        {/* </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webviewContainer: {
    width: 1100,
    height: 480,
    backgroundColor: 'pink',
  },
  webview: {
    // flex: 1,
    width: 1100,
    height: 480,
    position: 'relative',
    // overflow: 'hidden',
  },
  navigationBar: {
    width: '100%',
    height: hp(165 / BASE_HEIGHT),
    backgroundColor: '#3D447B',
  },
  navigationContainer: {
    position: 'absolute',
    width: '100%',
    height: hp(112 / BASE_HEIGHT),
    bottom: 0,
    left: wp(80 / BASE_WIDTH),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    position: 'relative',
    width: '10%',
    height: hp(112 / BASE_HEIGHT),
    marginLeft: -wp(40 / BASE_WIDTH),
    zIndex: 100,
  },
  backIcon: {
    marginLeft: wp(40 / BASE_WIDTH),
    width: wp(24 / BASE_WIDTH),
    height: hp(40 / BASE_HEIGHT),
    marginTop: hp(36 / BASE_HEIGHT),
  },
  content: {
    position: 'absolute',
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    fontSize: hp(48 / BASE_HEIGHT),
    fontWeight: 'bold',
    top: hp(0 / BASE_HEIGHT),
    height: hp(112 / BASE_HEIGHT),
    lineHeight: hp(112 / BASE_HEIGHT),
    left: -wp(80 / BASE_WIDTH),
    zIndex: 99,
  },
});

export default Index;
