import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';

import { WebView } from 'react-native-webview';

// import Orientation from 'react-native-orientation-locker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const backIcon = require('../../assets/backicon.png');

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

const source = { uri: 'file:///android_asset/zhubianyouwen.html' };

class Index extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Orientation.lockToLandscapeLeft();
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
          <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.goBack()}>
            <Image style={styles.backIcon} source={backIcon} />
          </TouchableOpacity>
          <Text style={styles.content}>主变油温趋势图</Text>
        </View>
        <WebView
          useWebKit
          javaScriptEnabled
          source={source}
          originWhitelist={['*']}
          style={styles.webview}
          mixedContentMode="compatibility"
          ref={ref => (this.webView = ref)}
          onError={e => console.log(e)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webviewContainer: {
    width: wp(100),
    height: 200,
  },
  webview: {
    // flex: 1,
    width: wp(100),
    // height: 200,
    // backgroundColor: 'pink',
  },
  navigationBar: {
    width: '100%',
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
});

export default Index;
