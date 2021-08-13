import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { p2dWidth, p2dHeight } from '@utils/device';

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

  handleMessage = e => {
    this.setState({ webViewData: e.nativeEvent.data }); //从html接收数据
  };

  componentDidUpdate() {
    this._sendMessage();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.option !== this.props.option) {
      this._sendMessage();
    }
  }

  handleMessage = e => {
    console.log('e', e);
    // this.setState({ webViewData: e.nativeEvent.data }); //从html接收数据
  };

  _sendMessage() {
    this.webview.postMessage(JSON.stringify(this.props.option)); //发送数据到html页面
  }

  render() {
    const source = { uri: 'file:///android_asset/index.html' };
    return (
      <View style={styles.text}>
        <WebView
          useWebKit
          source={source}
          javaScriptEnabled
          style={styles.webview}
          ref={ref => (this.webview = ref)}
          mixedContentMode="compatibility"
          onMessage={() => this.handleMessage()}
          originWhitelist={['*']}
          onError={e => console.log(e)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    flex: 1,
    width: p2dWidth(1080),
    height: p2dHeight(1980),
    backgroundColor: 'pink',
  },
});

export default Index;
