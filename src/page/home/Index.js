import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { WebView } from 'react-native-webview';
import { Toast, ModalIndicator, Button } from 'teaset';

import { p2dWidth, p2dHeight } from '@utils/device';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

const source = { uri: 'file:///android_asset/index.html' };

class Index extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      webViewData: this.props.data,
    };
  }

  componentDidMount() {
    // this.sendMessage();
  }

  handleMessage = e => {
    this.setState({ webViewData: e.nativeEvent.data }); //从html接收数据
  };

  componentDidUpdate() {
    this.sendMessage();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.option !== this.props.option) {
      this.sendMessage();
    }
  }

  handleMessage = e => {
    console.log('e', e);
    // this.setState({ webViewData: e.nativeEvent.data }); //从html接收数据
  };

  sendMessage = () => {
    this.webview.postMessage({ id: 1 }); //发送数据到html页面
  };

  handleSend = () => {
    this.webview.postMessage({ id: 1 }); //发送数据到html页面
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <WebView
          useWebKit
          javaScriptEnabled
          source={source}
          originWhitelist={['*']}
          style={styles.webview}
          mixedContentMode="compatibility"
          ref={ref => (this.webView = ref)}
          onError={e => console.log(e)}
          onMessage={() => this.handleMessage()}
          onLoadEnd={() => this.webView.postMessage('RN向H5发送的消息')}
        /> */}

        <Button>
          <Text style={styles.loginBtnText}>首页</Text>
        </Button>
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
    height: 200,
    backgroundColor: 'pink',
  },
});

export default Index;
