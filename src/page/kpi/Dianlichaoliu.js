import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, StatusBar } from 'react-native';

import { WebView } from 'react-native-webview';

import Orientation from 'react-native-orientation-locker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ModalIndicator, Toast } from 'teaset';

// const backIcon = require('../../assets/backicon.png');

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

// const source = { uri: 'file:///android_asset/test.html' };
const source = { uri: 'http://10.99.230.103:8080/pcs9000/navi/index.jsp' };

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
    Orientation.lockToLandscapeLeft();
    ModalIndicator.show();
  }

  handleError = e => {
    const { navigation } = this.props;
    const errMsg = e.nativeEvent.description;
    if (errMsg.includes('net')) {
      Toast.info('网页加载失败，请连接vpn后查看！');
      setTimeout(() => {
        navigation.goBack();
      }, 2000);
    }
  };

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
        {/* <View style={styles.navigationBar}>
          <View style={styles.navigationContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.goBack()}>
              <Image style={styles.backIcon} source={backIcon} resizeMode="contain" />
            </TouchableOpacity>
            <Text style={styles.content}>电力潮流图</Text>
          </View>
        </View> */}
        <View style={styles.webviewContainer}>
          <WebView
            useWebKit
            javaScriptEnabled
            source={source}
            originWhitelist={['*']}
            style={styles.webview}
            mixedContentMode="compatibility"
            ref={ref => (this.webView = ref)}
            onError={e => this.handleError(e)}
            onLoadEnd={() => ModalIndicator.hide()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webviewContainer: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'pink',
  },
  webview: {
    // flex: 1,
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
