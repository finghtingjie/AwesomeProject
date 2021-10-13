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

const backIcon = require('../../assets/backicon.png');

const BASE_WIDTH = 10.8;
const BASE_HEIGHT = 19.2;

const source = { uri: 'file:///android_asset/test.html' };
// const source = { uri: 'https://w.mousenat.cn/index.html' };

class Index extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Orientation.lockToLandscapeLeft();
  }

  componentDidUpdate() {
    this.sendMessage();
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
        <View style={styles.webviewContainer}>
          <WebView
            useWebKit
            scrollEnabled={false}
            javaScriptEnabled
            originWhitelist={['*']}
            source={source}
            style={styles.webview}
            mixedContentMode="compatibility"
            ref={ref => (this.webView = ref)}
            onError={e => console.log(e)}
            onMessage={event => console.log(event.nativeEvent.data)}
            onLoadEnd={this.onLoadEnd}
          />
          {/* <SvgXml
            xml={` <svg xmlns="http://www.w3.org/2000/svg" onload="try{init1(evt);}catch(e){}"
            xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
            xmlns:cge="http://iec.ch/TC57/2005/SVG-schema#" width="100%" height="100%" viewBox="0 0 1920 1440"
            id='main'>
            <defs>
                <style type="text/css"></style>
            </defs>
            <script type="text/javascript">g_adobeviewer = this;</script>
            <g  bottomlatitude="0" rightlongitude="0" leftlongitude="0" width="100%" height="100%"
                dbname="scadamdl" id="ROOT" share="1" graphtypeid="7" transform="translate(560,522.5)" toplatitude="0">
                <graphplanes></graphplanes>
                <rect width="20000" x="-10000" y="-10000" fill="#000000" onmousedown="try{OnBGClick(evt)}catch(e){}"
                    height="20000" id="ID_BACKGROUND"></rect>
                <image width="100%" x="-956" y="-522.5" preserveAspectRatio="none" onmousedown="OnBGClick(evt)"
                    height="100%" xlink:href="../../resource/jingtang/blackgroud3.jpg"></image>
                <g fill="none" stroke="#412e1b" stroke-linejoin="bevel" id="33146448" stroke-linecap="round"
                    name="Rectangle_44_226" transform="translate(-745.417,-480.625)">
                    <clipPath id="33146448_img_cp">
                        <rect width="270.833" x="-135.417" y="-28.125" height="56.25"></rect>
                    </clipPath>
                    <image width="154" x="-135.417" y="-28.125" preserveAspectRatio="none" height="56"
                        xlink:href="../../resource/jingtang/logojingtang.png" clip-path="url(#33146448_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="38622960" stroke-linecap="square"
                    name="Line_1_1984" stroke-width="4" transform="translate(183.248,-217.842)">
                    <line y1="61.721" x1="0" y2="-61.721" x2="0"></line>
                    <polyline points="-3.42,51.118 0,41.721 3.42,51.118" stroke="#ff55ff"></polyline>
                    <polyline points="-3.42,-8.882 0,-18.279 3.42,-8.882" stroke="#ff55ff"></polyline>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31889952" stroke-linecap="round"
                    name="Rectangle_44_6399" transform="translate(-90.731,-130.029)">
                    <clipPath id="31889952_img_cp">
                        <rect width="121.025" x="-60.513" y="-38.654" height="77.309"></rect>
                    </clipPath>
                    <image width="121.025" x="-60.513" y="-38.654" preserveAspectRatio="none" height="77.309"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#31889952_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34641808" stroke-linecap="square"
                    name="Polyline_3_20685" stroke-width="4" transform="translate(538,136.25)">
                    <polyline points="-5,222.5 -5,-222.5 5,-222.5"></polyline>
                    <line stroke="#ff55ff" y1="222.5" x1="-5" y2="212.5" x2="-5"></line>
                    <line stroke="#ff55ff" y1="192.5" x1="-5" y2="182.5" x2="-5"></line>
                    <line stroke="#ff55ff" y1="162.5" x1="-5" y2="152.5" x2="-5"></line>
                    <line stroke="#ff55ff" y1="132.5" x1="-5" y2="122.5" x2="-5"></line>
                    <line stroke="#ff55ff" y1="102.5" x1="-5" y2="92.5" x2="-5"></line>
                    <line stroke="#ff55ff" y1="72.5" x1="-5" y2="62.5" x2="-5"></line>
                    <line stroke="#ff55ff" y1="42.5" x1="-5" y2="32.5" x2="-5"></line>
                    <line stroke="#ff55ff" y1="12.5" x1="-5" y2="2.5" x2="-5"></line>
                    <line stroke="#ff55ff" y1="-17.5" x1="-5" y2="-27.5" x2="-5"></line>
                    <line stroke="#ff55ff" y1="-47.500" x1="-5" y2="-57.5" x2="-5"></line>
                    <line stroke="#ff55ff" y1="-77.5" x1="-5" y2="-87.500" x2="-5"></line>
                    <line stroke="#ff55ff" y1="-107.5" x1="-5" y2="-117.5" x2="-5"></line>
                    <line stroke="#ff55ff" y1="-137.5" x1="-5" y2="-147.5" x2="-5"></line>
                    <line stroke="#ff55ff" y1="-167.500" x1="-5" y2="-177.5" x2="-5"></line>
                    <line stroke="#ff55ff" y1="-197.5" x1="-5" y2="-207.500" x2="-5"></line>
                    <line stroke="#ff55ff" y1="-222.5" x1="-5" y2="-222.5" x2="5"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34656640" stroke-linecap="square"
                    name="Polyline_3_20683" stroke-width="4" transform="translate(663.5,193.875)">
                    <polyline points="-98.5,210.125 -98.5,-210.125 98.5,-210.125"></polyline>
                    <polyline points="-101.92,199.522 -98.5,190.125 -95.080,199.522" stroke="#ff55ff"></polyline>
                    <polyline points="-101.92,139.522 -98.5,130.125 -95.080,139.522" stroke="#ff55ff"></polyline>
                    <polyline points="-101.92,79.522 -98.5,70.125 -95.080,79.522" stroke="#ff55ff"></polyline>
                    <polyline points="-101.92,19.522 -98.5,10.125 -95.080,19.522" stroke="#ff55ff"></polyline>
                    <polyline points="-101.92,-40.478 -98.5,-49.875 -95.080,-40.478" stroke="#ff55ff"></polyline>
                    <polyline points="-101.92,-100.478 -98.5,-109.875 -95.080,-100.478" stroke="#ff55ff"></polyline>
                    <polyline points="-101.92,-160.478 -98.5,-169.875 -95.080,-160.478" stroke="#ff55ff"></polyline>
                    <polyline points="-87.897,-213.545 -78.5,-210.125 -87.897,-206.705" stroke="#ff55ff"></polyline>
                    <polyline points="-27.897,-213.545 -18.5,-210.125 -27.897,-206.705" stroke="#ff55ff"></polyline>
                    <polyline points="32.103,-213.545 41.5,-210.125 32.103,-206.705" stroke="#ff55ff"></polyline>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34579168" stroke-linecap="round"
                    name="Polyline_3_20202" stroke-width="4" transform="translate(679,298.375)">
                    <polyline points="-92,86.625 -66,70.625 -65.25,-86.625 92,-86.625"></polyline>
                    <line stroke="#ff55ff" y1="86.625" x1="-92" y2="81.384" x2="-83.483"></line>
                    <line stroke="#ff55ff" y1="70.625" x1="-66" y2="60.625" x2="-65.952"></line>
                    <line stroke="#ff55ff" y1="40.625" x1="-65.857" y2="30.625" x2="-65.809"></line>
                    <line stroke="#ff55ff" y1="10.626" x1="-65.714" y2="0.626" x2="-65.666"></line>
                    <line stroke="#ff55ff" y1="-19.374" x1="-65.57" y2="-29.374" x2="-65.523"></line>
                    <line stroke="#ff55ff" y1="-49.374" x1="-65.428" y2="-59.374" x2="-65.380"></line>
                    <line stroke="#ff55ff" y1="-86.625" x1="-65.25" y2="-86.625" x2="-55.25"></line>
                    <line stroke="#ff55ff" y1="-86.625" x1="-35.25" y2="-86.625" x2="-25.25"></line>
                    <line stroke="#ff55ff" y1="-86.625" x1="-5.25" y2="-86.625" x2="4.750"></line>
                    <line stroke="#ff55ff" y1="-86.625" x1="24.75" y2="-86.625" x2="34.75"></line>
                    <line stroke="#ff55ff" y1="-86.625" x1="54.750" y2="-86.625" x2="64.75"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34580128" stroke-linecap="square"
                    name="Polyline_3_20198" stroke-width="4" transform="translate(708.625,337.5)">
                    <polyline points="-62.375,107.5 -62.375,-107.5 62.375,-107.5"></polyline>
                    <line stroke="#ff55ff" y1="107.5" x1="-62.375" y2="97.5" x2="-62.375"></line>
                    <line stroke="#ff55ff" y1="77.5" x1="-62.375" y2="67.5" x2="-62.375"></line>
                    <line stroke="#ff55ff" y1="47.5" x1="-62.375" y2="37.5" x2="-62.375"></line>
                    <line stroke="#ff55ff" y1="17.5" x1="-62.375" y2="7.5" x2="-62.375"></line>
                    <line stroke="#ff55ff" y1="-12.5" x1="-62.375" y2="-22.5" x2="-62.375"></line>
                    <line stroke="#ff55ff" y1="-42.5" x1="-62.375" y2="-52.5" x2="-62.375"></line>
                    <line stroke="#ff55ff" y1="-72.500" x1="-62.375" y2="-82.5" x2="-62.375"></line>
                    <line stroke="#ff55ff" y1="-107.5" x1="-62.375" y2="-107.5" x2="-52.375"></line>
                    <line stroke="#ff55ff" y1="-107.5" x1="-32.375" y2="-107.5" x2="-22.375"></line>
                    <line stroke="#ff55ff" y1="-107.5" x1="-2.375" y2="-107.5" x2="7.625"></line>
                    <line stroke="#ff55ff" y1="-107.5" x1="27.625" y2="-107.5" x2="37.625"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34615968" stroke-linecap="square"
                    name="Polyline_3_19234" stroke-width="4" transform="translate(-126.25,400.375)">
                    <polyline points="655,29.625 655,68.375 -655,68.375 -655,-68.375"></polyline>
                    <line stroke="#ff55ff" y1="68.375" x1="655" y2="58.375" x2="655"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-655" y2="68.375" x2="-645"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-625" y2="68.375" x2="-615"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-595" y2="68.375" x2="-585"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-565" y2="68.375" x2="-555"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-535" y2="68.375" x2="-525"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-505" y2="68.375" x2="-495"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-475" y2="68.375" x2="-465"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-445" y2="68.375" x2="-435"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-415" y2="68.375" x2="-405"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-385" y2="68.375" x2="-375"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-355" y2="68.375" x2="-345"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-325" y2="68.375" x2="-315"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-295" y2="68.375" x2="-285"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-265" y2="68.375" x2="-255"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-235" y2="68.375" x2="-225"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-205" y2="68.375" x2="-195"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-175" y2="68.375" x2="-165"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-145" y2="68.375" x2="-135"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-115" y2="68.375" x2="-105"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-85" y2="68.375" x2="-75"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-55" y2="68.375" x2="-45"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="-25" y2="68.375" x2="-15"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="5.000" y2="68.375" x2="15"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="35" y2="68.375" x2="45"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="65" y2="68.375" x2="75.000"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="95.000" y2="68.375" x2="105"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="125" y2="68.375" x2="135"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="155" y2="68.375" x2="165.000"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="185" y2="68.375" x2="195"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="215" y2="68.375" x2="225"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="245.000" y2="68.375" x2="255.000"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="275" y2="68.375" x2="285"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="305" y2="68.375" x2="315"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="335.000" y2="68.375" x2="345.000"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="365" y2="68.375" x2="375"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="395" y2="68.375" x2="405"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="425" y2="68.375" x2="435"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="455" y2="68.375" x2="465"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="485" y2="68.375" x2="495"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="515" y2="68.375" x2="525"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="545" y2="68.375" x2="555"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="575" y2="68.375" x2="585.000"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="605" y2="68.375" x2="615"></line>
                    <line stroke="#ff55ff" y1="68.375" x1="635" y2="68.375" x2="645"></line>
                    <line stroke="#ff55ff" y1="-68.375" x1="-655" y2="-58.375" x2="-655"></line>
                    <line stroke="#ff55ff" y1="-38.375" x1="-655" y2="-28.375" x2="-655"></line>
                    <line stroke="#ff55ff" y1="-8.375" x1="-655" y2="1.625" x2="-655"></line>
                    <line stroke="#ff55ff" y1="21.625" x1="-655" y2="31.625" x2="-655"></line>
                    <line stroke="#ff55ff" y1="51.625" x1="-655" y2="61.625" x2="-655"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34593520" stroke-linecap="square"
                    name="Polyline_3_18258" stroke-width="4" transform="translate(160,192.5)">
                    <polyline points="-526.25,-257.5 -526.25,257.5 526.25,257.5"></polyline>
                    <line stroke="#ff55ff" y1="-247.5" x1="-526.25" y2="-237.5" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="-217.5" x1="-526.25" y2="-207.5" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="-187.5" x1="-526.25" y2="-177.5" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="-157.5" x1="-526.25" y2="-147.5" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="-127.5" x1="-526.25" y2="-117.5" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="-97.5" x1="-526.25" y2="-87.5" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="-67.5" x1="-526.25" y2="-57.5" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="-37.5" x1="-526.25" y2="-27.5" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="-7.5" x1="-526.25" y2="2.5" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="22.5" x1="-526.25" y2="32.5" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="52.5" x1="-526.25" y2="62.5" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="82.500" x1="-526.25" y2="92.500" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="112.500" x1="-526.25" y2="122.500" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="142.500" x1="-526.25" y2="152.5" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="172.5" x1="-526.25" y2="182.5" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="202.500" x1="-526.25" y2="212.500" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="232.500" x1="-526.25" y2="242.500" x2="-526.25"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-516.25" y2="257.5" x2="-506.25"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-486.25" y2="257.5" x2="-476.25"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-456.25" y2="257.5" x2="-446.25"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-426.25" y2="257.5" x2="-416.25"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-396.25" y2="257.5" x2="-386.25"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-366.25" y2="257.5" x2="-356.25"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-336.25" y2="257.5" x2="-326.25"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-306.25" y2="257.5" x2="-296.25"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-276.25" y2="257.5" x2="-266.25"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-246.25" y2="257.5" x2="-236.250"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-216.250" y2="257.5" x2="-206.25"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-186.25" y2="257.5" x2="-176.25"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-156.25" y2="257.5" x2="-146.250"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-126.250" y2="257.5" x2="-116.25"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-96.250" y2="257.5" x2="-86.25"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-66.25" y2="257.5" x2="-56.250"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-36.25" y2="257.5" x2="-26.250"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="-6.25" y2="257.5" x2="3.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="23.75" y2="257.5" x2="33.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="53.75" y2="257.5" x2="63.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="83.75" y2="257.5" x2="93.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="113.75" y2="257.5" x2="123.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="143.75" y2="257.5" x2="153.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="173.75" y2="257.5" x2="183.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="203.75" y2="257.5" x2="213.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="233.75" y2="257.5" x2="243.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="263.75" y2="257.5" x2="273.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="293.75" y2="257.5" x2="303.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="323.75" y2="257.5" x2="333.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="353.75" y2="257.5" x2="363.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="383.75" y2="257.5" x2="393.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="413.75" y2="257.5" x2="423.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="443.75" y2="257.5" x2="453.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="473.75" y2="257.5" x2="483.75"></line>
                    <line stroke="#ff55ff" y1="257.5" x1="503.75" y2="257.5" x2="513.75"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34618832" stroke-linecap="square"
                    name="Polyline_3_14812" stroke-width="4" transform="translate(52.125,172.625)">
                    <polyline points="339.875,236.375 -339.875,236.375 -339.875,-236.375"></polyline>
                    <polyline points="329.272,239.795 319.875,236.375 329.272,232.955" stroke="#ff55ff"></polyline>
                    <polyline points="269.272,239.795 259.875,236.375 269.272,232.955" stroke="#ff55ff"></polyline>
                    <polyline points="209.272,239.795 199.875,236.375 209.272,232.955" stroke="#ff55ff"></polyline>
                    <polyline points="149.272,239.795 139.875,236.375 149.272,232.955" stroke="#ff55ff"></polyline>
                    <polyline points="89.272,239.795 79.875,236.375 89.272,232.955" stroke="#ff55ff"></polyline>
                    <polyline points="29.272,239.795 19.875,236.375 29.272,232.955" stroke="#ff55ff"></polyline>
                    <polyline points="-30.728,239.795 -40.125,236.375 -30.728,232.955" stroke="#ff55ff"></polyline>
                    <polyline points="-90.728,239.795 -100.125,236.375 -90.728,232.955" stroke="#ff55ff"></polyline>
                    <polyline points="-150.728,239.795 -160.125,236.375 -150.728,232.955" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-210.728,239.795 -220.125,236.375 -210.728,232.955" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-270.728,239.795 -280.125,236.375 -270.728,232.955" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-343.295,225.772 -339.875,216.375 -336.455,225.772" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-343.295,165.772 -339.875,156.375 -336.455,165.772" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-343.295,105.772 -339.875,96.375 -336.455,105.772" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-343.295,45.772 -339.875,36.375 -336.455,45.772" stroke="#ff55ff"></polyline>
                    <polyline points="-343.295,-14.228 -339.875,-23.625 -336.455,-14.228" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-343.295,-74.228 -339.875,-83.625 -336.455,-74.228" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-343.295,-134.228 -339.875,-143.625 -336.455,-134.228" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-343.295,-194.228 -339.875,-203.625 -336.455,-194.228" stroke="#ff55ff">
                    </polyline>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="39793904" stroke-linecap="square"
                    name="Polyline_3_14310" stroke-width="4" transform="translate(54.625,181.875)">
                    <polyline points="380.375,248.125 -380.375,248.125 -380.375,-248.125"></polyline>
                    <polyline points="369.772,251.545 360.375,248.125 369.772,244.705" stroke="#ff55ff"></polyline>
                    <polyline points="309.772,251.545 300.375,248.125 309.772,244.705" stroke="#ff55ff"></polyline>
                    <polyline points="249.772,251.545 240.375,248.125 249.772,244.705" stroke="#ff55ff"></polyline>
                    <polyline points="189.772,251.545 180.375,248.125 189.772,244.705" stroke="#ff55ff"></polyline>
                    <polyline points="129.772,251.545 120.375,248.125 129.772,244.705" stroke="#ff55ff"></polyline>
                    <polyline points="69.772,251.545 60.375,248.125 69.772,244.705" stroke="#ff55ff"></polyline>
                    <polyline points="9.772,251.545 0.375,248.125 9.772,244.705" stroke="#ff55ff"></polyline>
                    <polyline points="-50.228,251.545 -59.625,248.125 -50.228,244.705" stroke="#ff55ff"></polyline>
                    <polyline points="-110.228,251.545 -119.625,248.125 -110.228,244.705" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-170.228,251.545 -179.625,248.125 -170.228,244.705" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-230.228,251.545 -239.625,248.125 -230.228,244.705" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-290.228,251.545 -299.625,248.125 -290.228,244.705" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-350.228,251.545 -359.625,248.125 -350.228,244.705" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-383.795,237.522 -380.375,228.125 -376.955,237.522" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-383.795,177.522 -380.375,168.125 -376.955,177.522" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-383.795,117.522 -380.375,108.125 -376.955,117.522" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-383.795,57.522 -380.375,48.125 -376.955,57.522" stroke="#ff55ff"></polyline>
                    <polyline points="-383.795,-2.478 -380.375,-11.875 -376.955,-2.478" stroke="#ff55ff"></polyline>
                    <polyline points="-383.795,-62.478 -380.375,-71.875 -376.955,-62.478" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-383.795,-122.478 -380.375,-131.875 -376.955,-122.478" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-383.795,-182.478 -380.375,-191.875 -376.955,-182.478" stroke="#ff55ff">
                    </polyline>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="31411920" stroke-linecap="square"
                    name="Polyline_3_7785" stroke-width="4" transform="translate(83.75,104.75)">
                    <polyline points="43.75,-172.75 43.75,172.75 -43.75,172.75"></polyline>
                    <line stroke="#ff55ff" y1="-172.75" x1="43.75" y2="-162.75" x2="43.75"></line>
                    <line stroke="#ff55ff" y1="-142.75" x1="43.75" y2="-132.75" x2="43.75"></line>
                    <line stroke="#ff55ff" y1="-112.75" x1="43.75" y2="-102.75" x2="43.75"></line>
                    <line stroke="#ff55ff" y1="-82.75" x1="43.75" y2="-72.75" x2="43.75"></line>
                    <line stroke="#ff55ff" y1="-52.75" x1="43.75" y2="-42.75" x2="43.75"></line>
                    <line stroke="#ff55ff" y1="-22.75" x1="43.75" y2="-12.75" x2="43.75"></line>
                    <line stroke="#ff55ff" y1="7.25" x1="43.75" y2="17.25" x2="43.75"></line>
                    <line stroke="#ff55ff" y1="37.25" x1="43.75" y2="47.25" x2="43.75"></line>
                    <line stroke="#ff55ff" y1="67.25" x1="43.75" y2="77.25" x2="43.75"></line>
                    <line stroke="#ff55ff" y1="97.25" x1="43.75" y2="107.25" x2="43.75"></line>
                    <line stroke="#ff55ff" y1="127.25" x1="43.75" y2="137.25" x2="43.75"></line>
                    <line stroke="#ff55ff" y1="157.25" x1="43.75" y2="167.25" x2="43.75"></line>
                    <line stroke="#ff55ff" y1="172.75" x1="43.75" y2="172.75" x2="33.75"></line>
                    <line stroke="#ff55ff" y1="172.75" x1="13.75" y2="172.75" x2="3.75"></line>
                    <line stroke="#ff55ff" y1="172.75" x1="-16.25" y2="172.75" x2="-26.25"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34607216" stroke-linecap="round"
                    name="Rectangle_44_9920" transform="translate(-870.714,-357.054)">
                    <rect width="154.286" x="-77.143" opacity="0.8100000000000001" y="-58.304" fill="#00172f"
                        height="116.607" stroke="none"></rect>
                    <rect width="154.286" x="-77.143" y="-58.304" fill="none" height="116.607" stroke="#ffffff">
                    </rect>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34427392" stroke-linecap="round"
                    name="Line_1_796" stroke-width="8" transform="translate(-916.204,-353.657)">
                    <line y1="0" x1="-16.459" y2="0" x2="16.459"></line>
                </g>
                <g fill="none" stroke="#5555ff" stroke-linejoin="bevel" id="33606880" stroke-linecap="round"
                    name="Line_1_801" stroke-width="8" transform="translate(-916.204,-387.479)">
                    <line y1="0" x1="-16.459" y2="0" x2="16.459"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31916816" stroke-linecap="round"
                    name="Text_45_807" transform="translate(-844.709,-355.348)">
                    <text x="-44" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        110kV线路
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34307664" stroke-linecap="round"
                    name="Text_45_43790" transform="translate(-289.213,-365.579)">
                    <text x="-38" y="6.5" fill="#000000" stroke="none" font-size="19px">
                        原水处理
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="39773120" stroke-linecap="round"
                    name="Text_45_45145" transform="translate(-844.709,-386.271)">
                    <text x="-44" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        220kV线路
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31962128" stroke-linecap="round"
                    name="Rectangle_44_6251" transform="translate(-359.519,-119.882)">
                    <clipPath id="31962128_img_cp">
                        <rect width="221.538" x="-110.769" y="-48.801" height="97.602"></rect>
                    </clipPath>
                    <image width="221.538" x="-110.769" y="-48.801" preserveAspectRatio="none" height="97.602"
                        xlink:href="../../resource/images/SanWeiIcon/A10.png" clip-path="url(#31962128_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34404848" stroke-linecap="round"
                    name="Rectangle_44_6363" transform="translate(477.603,383.59)">
                    <clipPath id="34404848_img_cp">
                        <rect width="217.846" x="-108.923" y="-62.33" height="124.66"></rect>
                    </clipPath>
                    <image width="217.846" x="-108.923" y="-62.33" preserveAspectRatio="none" height="124.66"
                        xlink:href="../../resource/images/SanWeiIcon/%E7%83%AD%E7%94%B5.png"
                        clip-path="url(#34404848_img_cp)"></image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31575728" stroke-linecap="round"
                    name="Rectangle_44_6367" transform="translate(827.746,360.398)">
                    <clipPath id="31575728_img_cp">
                        <rect width="136.517" x="-68.258" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="136.517" x="-68.258" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#31575728_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31419760" stroke-linecap="round"
                    name="Rectangle_44_6371" transform="translate(827.746,236.285)">
                    <clipPath id="31419760_img_cp">
                        <rect width="136.517" x="-68.258" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="136.517" x="-68.258" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#31419760_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34425936" stroke-linecap="round"
                    name="Rectangle_44_6373" transform="translate(827.746,-26.145)">
                    <clipPath id="34425936_img_cp">
                        <rect width="136.517" x="-68.258" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="136.517" x="-68.258" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#34425936_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34462304" stroke-linecap="round"
                    name="Rectangle_44_6375" transform="translate(564.742,-103.454)">
                    <clipPath id="34462304_img_cp">
                        <rect width="136.517" x="-68.258" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="136.517" x="-68.258" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#34462304_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34536304" stroke-linecap="round"
                    name="Rectangle_44_6377" transform="translate(313.009,61.836)">
                    <clipPath id="34536304_img_cp">
                        <rect width="136.517" x="-68.258" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="136.517" x="-68.258" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#34536304_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34531104" stroke-linecap="round"
                    name="Rectangle_44_6379" transform="translate(-25.862,302.416) scale(-1,1)">
                    <clipPath id="34531104_img_cp">
                        <rect width="136.517" x="-68.258" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="136.517" x="-68.258" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#34531104_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31926352" stroke-linecap="round"
                    name="Rectangle_44_6381" transform="translate(-104.159,129.818)">
                    <clipPath id="31926352_img_cp">
                        <rect width="136.517" x="-68.258" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="136.517" x="-68.258" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#31926352_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34530064" stroke-linecap="round"
                    name="Rectangle_44_6383" transform="translate(-601.737,139.790)">
                    <clipPath id="34530064_img_cp">
                        <rect width="136.517" x="-68.258" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="136.517" x="-68.258" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#34530064_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34534384" stroke-linecap="round"
                    name="Rectangle_44_6385" transform="translate(-714.254,10.576) scale(-1,1)">
                    <clipPath id="34534384_img_cp">
                        <rect width="136.517" x="-68.258" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="136.517" x="-68.258" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#34534384_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33420080" stroke-linecap="round"
                    name="Rectangle_44_6389" transform="translate(-830.742,286.955) scale(-1,1)">
                    <clipPath id="33420080_img_cp">
                        <rect width="136.517" x="-68.258" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="136.517" x="-68.258" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#33420080_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33593504" stroke-linecap="round"
                    name="Rectangle_44_6391" transform="translate(-565.984,-259.558)">
                    <clipPath id="33593504_img_cp">
                        <rect width="136.517" x="-68.258" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="136.517" x="-68.258" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#33593504_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="39841648" stroke-linecap="round"
                    name="Rectangle_44_6395" transform="translate(148.362,-320.885)">
                    <clipPath id="39841648_img_cp">
                        <rect width="175.776" x="-87.888" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="175.776" x="-87.888" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A10.png" clip-path="url(#39841648_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31470192" stroke-linecap="round"
                    name="Text_45_8531" transform="translate(815.778,292.928)">
                    <text x="-19.5" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        4#站
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="41553216" stroke-linecap="round"
                    name="Text_45_8533" transform="translate(833.555,-76.638)">
                    <text x="-19.5" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        1#站
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31882608" stroke-linecap="round"
                    name="Text_45_8535" transform="translate(650.975,-107.240)">
                    <text x="-28.5" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        鼓风站
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34464208" stroke-linecap="round"
                    name="Text_45_8537" transform="translate(311.359,109.316)">
                    <text x="-19" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        2#站
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34419136" stroke-linecap="round"
                    name="Text_45_8541" transform="translate(-27.219,352.196)">
                    <text x="-19.5" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        3#站
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33465632" stroke-linecap="round"
                    name="Text_45_8543" transform="translate(-507.270,332.53)">
                    <text x="-39" y="6" fill="#ffffff" stroke="none" font-size="19px">
                        1550冷轧
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34431888" stroke-linecap="round"
                    name="Text_45_8545" transform="translate(-813.913,231.539)">
                    <text x="-38.5" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        1700冷轧
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34474800" stroke-linecap="round"
                    name="Text_45_8547" transform="translate(-592.743,88.610)">
                    <text x="-38.5" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        1580热轧
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34429904" stroke-linecap="round"
                    name="Text_45_8549" transform="translate(-98.804,184.823)">
                    <text x="-38.5" y="6" fill="#ffffff" stroke="none" font-size="19px">
                        2250热轧
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34594496" stroke-linecap="round"
                    name="Text_45_8551" transform="translate(-754.876,-36.68)">
                    <text x="-38.5" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        2230冷轧
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34631680" stroke-linecap="round"
                    name="Text_45_8553" transform="translate(-445.125,-59.139)">
                    <text x="-53.5" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        220kV轧钢站
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34602352" stroke-linecap="round"
                    name="Text_45_8555" transform="translate(121.517,-61.013)">
                    <text x="-53" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        220kV铁钢站
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34622784" stroke-linecap="round"
                    name="Text_45_8557" transform="translate(122,-356.5)">
                    <text x="-19" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        6#站
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34392720" stroke-linecap="round"
                    name="Text_45_8561" transform="translate(-583.303,-206.750)">
                    <text x="-19.5" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        7#站
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34471344" stroke-linecap="round"
                    name="Text_45_9714" transform="translate(823.555,425.704)">
                    <text x="-19.5" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        5#站
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34661712" stroke-linecap="round"
                    name="Text_45_9716" transform="translate(516.628,494.257)">
                    <text x="-38" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        自备电厂
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34646720" stroke-linecap="round"
                    name="Text_45_19242" transform="translate(-103.000,-179.991)">
                    <text x="-38" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        一期制氧
                    </text>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34637792" stroke-linecap="square"
                    name="Line_1_19244" stroke-width="4" transform="translate(-227.343,-146.49)">
                    <line y1="0" x1="-82.781" y2="0" x2="82.781"></line>
                    <line stroke="#ff55ff" y1="0" x1="-82.781" y2="0" x2="-72.781"></line>
                    <line stroke="#ff55ff" y1="0" x1="-52.781" y2="0" x2="-42.781"></line>
                    <line stroke="#ff55ff" y1="0" x1="-22.781" y2="0" x2="-12.781"></line>
                    <line stroke="#ff55ff" y1="0" x1="7.219" y2="0" x2="17.219"></line>
                    <line stroke="#ff55ff" y1="0" x1="37.219" y2="0" x2="47.219"></line>
                    <line stroke="#ff55ff" y1="0" x1="67.219" y2="0" x2="77.219"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34574176" stroke-linecap="square"
                    name="Line_1_19246" stroke-width="4" transform="translate(22.887,-147.457) scale(-1,1)">
                    <line y1="0" x1="-65.887" y2="0" x2="65.887"></line>
                    <line stroke="#ff55ff" y1="0" x1="-65.887" y2="0" x2="-55.887"></line>
                    <line stroke="#ff55ff" y1="0" x1="-35.887" y2="0" x2="-25.887"></line>
                    <line stroke="#ff55ff" y1="0" x1="-5.887" y2="0" x2="4.113"></line>
                    <line stroke="#ff55ff" y1="0" x1="24.113" y2="0" x2="34.113"></line>
                    <line stroke="#ff55ff" y1="0" x1="54.113" y2="0" x2="64.113"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="42026272" stroke-linecap="round"
                    name="Rectangle_44_6361" transform="translate(165.396,-121.815)">
                    <clipPath id="42026272_img_cp">
                        <rect width="209.208" x="-104.604" y="-48.801" height="97.602"></rect>
                    </clipPath>
                    <image width="209.208" x="-104.604" y="-48.801" preserveAspectRatio="none" height="97.602"
                        xlink:href="../../resource/images/SanWeiIcon/A10.png" clip-path="url(#42026272_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34514752" stroke-linecap="round"
                    name="Circle_43_19248" transform="translate(-309.061,-147.423)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34434800" stroke-linecap="round"
                    name="Circle_43_19250" transform="translate(-52.103,-146.423)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34643760" stroke-linecap="round"
                    name="Circle_43_19252" transform="translate(92.743,-103.937)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34657616" stroke-linecap="round"
                    name="Circle_43_19254" transform="translate(-367.153,-70.115)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34653712" stroke-linecap="round"
                    name="Line_1_19258" stroke-width="4" transform="translate(-408.786,383.444) scale(-1,1)">
                    <line y1="0" x1="-40.664" y2="0" x2="40.664"></line>
                    <line stroke="#ff55ff" y1="0" x1="40.664" y2="0" x2="30.664"></line>
                    <line stroke="#ff55ff" y1="0" x1="10.664" y2="0" x2="0.664"></line>
                    <line stroke="#ff55ff" y1="0" x1="-19.336" y2="0" x2="-29.336"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34542928" stroke-linecap="round"
                    name="Rectangle_44_6387" transform="translate(-500.281,384.557) scale(-1,1)">
                    <clipPath id="34542928_img_cp">
                        <rect width="136.517" x="-68.258" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="136.517" x="-68.258" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#34542928_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34649696" stroke-linecap="round"
                    name="Circle_43_19260" transform="translate(-448.482,383.511)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34648704" stroke-linecap="square"
                    name="Line_1_19262" stroke-width="4" transform="translate(-457.196,152.148)">
                    <line y1="0" x1="-89.075" y2="0" x2="89.075"></line>
                    <line stroke="#ff55ff" y1="0" x1="89.075" y2="0" x2="79.075"></line>
                    <line stroke="#ff55ff" y1="0" x1="59.075" y2="0" x2="49.075"></line>
                    <line stroke="#ff55ff" y1="0" x1="29.075" y2="0" x2="19.075"></line>
                    <line stroke="#ff55ff" y1="0" x1="-0.925" y2="0" x2="-10.925"></line>
                    <line stroke="#ff55ff" y1="0" x1="-30.925" y2="0" x2="-40.925"></line>
                    <line stroke="#ff55ff" y1="0" x1="-60.925" y2="0" x2="-70.925"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34636752" stroke-linecap="round"
                    name="Circle_43_19264" transform="translate(-367.153,151.181)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34635744" stroke-linecap="round"
                    name="Circle_43_19266" transform="translate(-541.430,151.181)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34634752" stroke-linecap="round"
                    name="Line_1_19268" stroke-width="4" transform="translate(-507.058,-11.167) scale(-1,1)">
                    <line y1="0" x1="-139.905" y2="0" x2="139.905"></line>
                    <line stroke="#ff55ff" y1="0" x1="-139.905" y2="0" x2="-129.905"></line>
                    <line stroke="#ff55ff" y1="0" x1="-109.905" y2="0" x2="-99.905"></line>
                    <line stroke="#ff55ff" y1="0" x1="-79.905" y2="0" x2="-69.905"></line>
                    <line stroke="#ff55ff" y1="0" x1="-49.905" y2="0" x2="-39.905"></line>
                    <line stroke="#ff55ff" y1="0" x1="-19.905" y2="0" x2="-9.905"></line>
                    <line stroke="#ff55ff" y1="0" x1="10.095" y2="0" x2="20.095"></line>
                    <line stroke="#ff55ff" y1="0" x1="40.095" y2="0" x2="50.095"></line>
                    <line stroke="#ff55ff" y1="0" x1="70.095" y2="0" x2="80.095"></line>
                    <line stroke="#ff55ff" y1="0" x1="100.095" y2="0" x2="110.095"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34632768" stroke-linecap="round"
                    name="Circle_43_19270" transform="translate(-367.153,-13.100)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34601360" stroke-linecap="round"
                    name="Circle_43_19272" transform="translate(-647.932,-13.100)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34615008" stroke-linecap="round"
                    name="Line_1_19276" stroke-width="4" transform="translate(-404.429,347.982) scale(-1,1)">
                    <line y1="0" x1="-36.308" y2="0" x2="36.308"></line>
                    <line stroke="#ff55ff" y1="0" x1="36.308" y2="0" x2="26.308"></line>
                    <line stroke="#ff55ff" y1="0" x1="6.308" y2="0" x2="-3.692"></line>
                    <line stroke="#ff55ff" y1="0" x1="-23.692" y2="0" x2="-33.692"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34619792" stroke-linecap="round"
                    name="Circle_43_19275" transform="translate(-448.482,346.049)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34605280" stroke-linecap="round"
                    name="Circle_43_19278" transform="translate(-367.153,347.016)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34603344" stroke-linecap="round"
                    name="Circle_43_19280" transform="translate(-367.153,382.477)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="33416944" stroke-linecap="round"
                    name="Line_1_19282" stroke-width="4" transform="translate(-567.870,264.279) scale(-1,1)">
                    <line y1="0" x1="-197.13" y2="0" x2="197.13"></line>
                    <line stroke="#ff55ff" y1="0" x1="-197.13" y2="0" x2="-187.13"></line>
                    <line stroke="#ff55ff" y1="0" x1="-167.13" y2="0" x2="-157.13"></line>
                    <line stroke="#ff55ff" y1="0" x1="-137.13" y2="0" x2="-127.13"></line>
                    <line stroke="#ff55ff" y1="0" x1="-107.13" y2="0" x2="-97.13"></line>
                    <line stroke="#ff55ff" y1="0" x1="-77.13" y2="0" x2="-67.13"></line>
                    <line stroke="#ff55ff" y1="0" x1="-47.13" y2="0" x2="-37.13"></line>
                    <line stroke="#ff55ff" y1="0" x1="-17.13" y2="0" x2="-7.13"></line>
                    <line stroke="#ff55ff" y1="0" x1="12.870" y2="0" x2="22.870"></line>
                    <line stroke="#ff55ff" y1="0" x1="42.870" y2="0" x2="52.870"></line>
                    <line stroke="#ff55ff" y1="0" x1="72.870" y2="0" x2="82.870"></line>
                    <line stroke="#ff55ff" y1="0" x1="102.870" y2="0" x2="112.870"></line>
                    <line stroke="#ff55ff" y1="0" x1="132.870" y2="0" x2="142.870"></line>
                    <line stroke="#ff55ff" y1="0" x1="162.870" y2="0" x2="172.870"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33412064" stroke-linecap="round"
                    name="Circle_43_19286" transform="translate(-367.153,261.346)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33411072" stroke-linecap="round"
                    name="Circle_43_19290" transform="translate(-768.356,287.505)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34390704" stroke-linecap="round"
                    name="Circle_43_19292" transform="translate(-767.642,262.346)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34585872" stroke-linecap="round"
                    name="Circle_43_19298" transform="translate(396.758,409.199)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34464832" stroke-linecap="round"
                    name="Circle_43_19308" transform="translate(-367.153,448.820)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34462816" stroke-linecap="round"
                    name="Circle_43_19324" transform="translate(83.06,-350.359)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34346848" stroke-linecap="round"
                    name="Circle_43_19325" transform="translate(-545.772,-294.863)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34523040" stroke-linecap="round"
                    name="Circle_43_19335" transform="translate(83.06,-335.863)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33518368" stroke-linecap="round"
                    name="Circle_43_19333" transform="translate(-520.376,-305.704)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="33519520" stroke-linecap="round"
                    name="Line_1_19338" stroke-width="4" transform="translate(84.997,-277.882)">
                    <line y1="44.452" x1="0" y2="-44.452" x2="0"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34341872" stroke-linecap="round"
                    name="Circle_43_19345" transform="translate(70.474,-318.469)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31925952" stroke-linecap="round"
                    name="Circle_43_19355" transform="translate(182.771,-279.815)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34306048" stroke-linecap="square"
                    name="Line_1_19354" stroke-width="4" transform="translate(153.248,-217.842)">
                    <line y1="61.721" x1="0" y2="-61.721" x2="0"></line>
                    <polyline points="-3.42,51.118 0,41.721 3.42,51.118" stroke="#ff55ff"></polyline>
                    <polyline points="-3.42,-8.882 0,-18.279 3.42,-8.882" stroke="#ff55ff"></polyline>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34408288" stroke-linecap="round"
                    name="Circle_43_19353" transform="translate(153.248,-279.815)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33592944" stroke-linecap="round"
                    name="Circle_43_19360" transform="translate(182.771,-154.188)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33599696" stroke-linecap="round"
                    name="Circle_43_19359" transform="translate(153.248,-154.188)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="40417616" stroke-linecap="square"
                    name="Line_1_19366" stroke-width="4" transform="translate(-9.669,101.31) scale(-1,1)">
                    <line y1="0" x1="-135.33" y2="0" x2="135.33"></line>
                    <line stroke="#ff55ff" y1="0" x1="-135.33" y2="0" x2="-125.33"></line>
                    <line stroke="#ff55ff" y1="0" x1="-105.33" y2="0" x2="-95.33"></line>
                    <line stroke="#ff55ff" y1="0" x1="-75.33" y2="0" x2="-65.33"></line>
                    <line stroke="#ff55ff" y1="0" x1="-45.33" y2="0" x2="-35.33"></line>
                    <line stroke="#ff55ff" y1="0" x1="-15.33" y2="0" x2="-5.33"></line>
                    <line stroke="#ff55ff" y1="0" x1="14.669" y2="0" x2="24.669"></line>
                    <line stroke="#ff55ff" y1="0" x1="44.669" y2="0" x2="54.669"></line>
                    <line stroke="#ff55ff" y1="0" x1="74.669" y2="0" x2="84.669"></line>
                    <line stroke="#ff55ff" y1="0" x1="104.669" y2="0" x2="114.669"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34532784" stroke-linecap="round"
                    name="Circle_43_19365" transform="translate(-150.149,100.344)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31576896" stroke-linecap="round"
                    name="Circle_43_19364" transform="translate(126.63,100.344)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="38549456" stroke-linecap="round"
                    name="Circle_43_19371" transform="translate(34.65,277.774)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="35248784" stroke-linecap="square"
                    name="Line_1_19378" stroke-width="4" transform="translate(366.26,-127.130)">
                    <line y1="0" x1="-143.778" y2="0" x2="143.778"></line>
                    <line stroke="#ff55ff" y1="0" x1="143.778" y2="0" x2="133.778"></line>
                    <line stroke="#ff55ff" y1="0" x1="113.778" y2="0" x2="103.778"></line>
                    <line stroke="#ff55ff" y1="0" x1="83.778" y2="0" x2="73.778"></line>
                    <line stroke="#ff55ff" y1="0" x1="53.778" y2="0" x2="43.778"></line>
                    <line stroke="#ff55ff" y1="0" x1="23.778" y2="0" x2="13.778"></line>
                    <line stroke="#ff55ff" y1="0" x1="-6.222" y2="0" x2="-16.222"></line>
                    <line stroke="#ff55ff" y1="0" x1="-36.222" y2="0" x2="-46.222"></line>
                    <line stroke="#ff55ff" y1="0" x1="-66.222" y2="0" x2="-76.222"></line>
                    <line stroke="#ff55ff" y1="0" x1="-96.222" y2="0" x2="-106.222"></line>
                    <line stroke="#ff55ff" y1="0" x1="-126.222" y2="0" x2="-136.222"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34347744" stroke-linecap="round"
                    name="Circle_43_19377" transform="translate(220.546,-128.096)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="32413936" stroke-linecap="round"
                    name="Line_1_19384" stroke-width="4" transform="translate(-50.067,16.858)">
                    <line y1="0" x1="-317.086" y2="0" x2="317.086"></line>
                    <line stroke="#ff55ff" y1="0" x1="-317.086" y2="0" x2="-307.086"></line>
                    <line stroke="#ff55ff" y1="0" x1="-287.086" y2="0" x2="-277.086"></line>
                    <line stroke="#ff55ff" y1="0" x1="-257.086" y2="0" x2="-247.086"></line>
                    <line stroke="#ff55ff" y1="0" x1="-227.086" y2="0" x2="-217.086"></line>
                    <line stroke="#ff55ff" y1="0" x1="-197.086" y2="0" x2="-187.086"></line>
                    <line stroke="#ff55ff" y1="0" x1="-167.086" y2="0" x2="-157.086"></line>
                    <line stroke="#ff55ff" y1="0" x1="-137.086" y2="0" x2="-127.086"></line>
                    <line stroke="#ff55ff" y1="0" x1="-107.086" y2="0" x2="-97.086"></line>
                    <line stroke="#ff55ff" y1="0" x1="-77.086" y2="0" x2="-67.086"></line>
                    <line stroke="#ff55ff" y1="0" x1="-47.086" y2="0" x2="-37.086"></line>
                    <line stroke="#ff55ff" y1="0" x1="-17.086" y2="0" x2="-7.086"></line>
                    <line stroke="#ff55ff" y1="0" x1="12.914" y2="0" x2="22.914"></line>
                    <line stroke="#ff55ff" y1="0" x1="42.914" y2="0" x2="52.914"></line>
                    <line stroke="#ff55ff" y1="0" x1="72.914" y2="0" x2="82.914"></line>
                    <line stroke="#ff55ff" y1="0" x1="102.914" y2="0" x2="112.914"></line>
                    <line stroke="#ff55ff" y1="0" x1="132.914" y2="0" x2="142.914"></line>
                    <line stroke="#ff55ff" y1="0" x1="162.914" y2="0" x2="172.914"></line>
                    <line stroke="#ff55ff" y1="0" x1="192.914" y2="0" x2="202.914"></line>
                    <line stroke="#ff55ff" y1="0" x1="222.914" y2="0" x2="232.914"></line>
                    <line stroke="#ff55ff" y1="0" x1="252.914" y2="0" x2="262.914"></line>
                    <line stroke="#ff55ff" y1="0" x1="282.914" y2="0" x2="292.914"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33404032" stroke-linecap="round"
                    name="Circle_43_19383" transform="translate(262.178,15.891)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31938576" stroke-linecap="round"
                    name="Circle_43_19382" transform="translate(-367.153,15.891)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" id="34523936" stroke-linecap="round" name="Rectangle_44_19238"
                    transform="translate(-325.528,16.858)">
                    <rect width="18.396" x="-9.198" opacity="1" y="-2.899" fill="#ffffff" rx="45" height="5.798" ry="45"
                        stroke="none"></rect>
                    <rect width="18.396" x="-9.198" y="-2.899" fill="none" rx="45" height="5.798" ry="45"
                        stroke="#ffffff"></rect>
                </g>
                <g fill="none" stroke="#ffffff" id="31824752" stroke-linecap="round" name="Rectangle_44_19386"
                    transform="translate(-291.482,16.858)">
                    <rect width="18.396" x="-9.198" opacity="1" y="-2.899" fill="#ffffff" rx="45" height="5.798" ry="45"
                        stroke="none"></rect>
                    <rect width="18.396" x="-9.198" y="-2.899" fill="none" rx="45" height="5.798" ry="45"
                        stroke="#ffffff"></rect>
                </g>
                <g fill="none" stroke="#ffffff" id="39584688" stroke-linecap="round" name="Rectangle_44_19388"
                    transform="translate(127.114,16.858)">
                    <rect width="18.396" x="-9.198" opacity="1" y="-2.899" fill="#ffffff" rx="45" height="5.798" ry="45"
                        stroke="none"></rect>
                    <rect width="18.396" x="-9.198" y="-2.899" fill="none" rx="45" height="5.798" ry="45"
                        stroke="#ffffff"></rect>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31931712" stroke-linecap="round"
                    name="Circle_43_19402" transform="translate(-288.902,408.233)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34341264" stroke-linecap="round"
                    name="Circle_43_19404" transform="translate(-324.075,427.560)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31658256" stroke-linecap="round"
                    name="Circle_43_19399" transform="translate(373.522,388.906)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="38211024" stroke-linecap="round"
                    name="Circle_43_19416" transform="translate(26.905,295.169)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34666064" stroke-linecap="round"
                    name="Circle_43_19422" transform="translate(439.455,429.560)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31421376" stroke-linecap="round"
                    name="Circle_43_19417" transform="translate(402.568,369.578)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34626768" stroke-linecap="round"
                    name="Circle_43_19429" transform="translate(262.242,27.598)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34627744" stroke-linecap="round"
                    name="Circle_43_19435" transform="translate(495.024,350.588)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34600368" stroke-linecap="round"
                    name="Circle_43_19441" transform="translate(532.547,364.285)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34598400" stroke-linecap="square"
                    name="Line_1_19444" stroke-width="4" transform="translate(512.828,-59.485)">
                    <line y1="0" x1="-265.172" y2="0" x2="265.172"></line>
                    <polyline points="-254.569,-3.42 -245.172,0 -254.569,3.42" stroke="#ff55ff"></polyline>
                    <polyline points="-194.569,-3.42 -185.172,0 -194.569,3.42" stroke="#ff55ff"></polyline>
                    <polyline points="-134.569,-3.42 -125.172,0 -134.569,3.42" stroke="#ff55ff"></polyline>
                    <polyline points="-74.569,-3.42 -65.172,0 -74.569,3.42" stroke="#ff55ff"></polyline>
                    <polyline points="-14.569,-3.42 -5.172,0 -14.569,3.42" stroke="#ff55ff"></polyline>
                    <polyline points="45.43,-3.42 54.828,0 45.43,3.42" stroke="#ff55ff"></polyline>
                    <polyline points="105.43,-3.42 114.828,0 105.43,3.42" stroke="#ff55ff"></polyline>
                    <polyline points="165.43,-3.42 174.828,0 165.43,3.42" stroke="#ff55ff"></polyline>
                    <polyline points="225.43,-3.42 234.828,0 225.43,3.42" stroke="#ff55ff"></polyline>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="33404672" stroke-linecap="round"
                    name="Line_1_19446" stroke-width="4" transform="translate(246.687,-65.766)">
                    <line y1="3.382" x1="0" y2="-3.382" x2="0"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34397728" stroke-linecap="round"
                    name="Circle_43_19448" transform="translate(244.655,-68.216)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34416176" stroke-linecap="round"
                    name="Circle_43_19467" transform="translate(777.884,-61.418)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34421120" stroke-linecap="round"
                    name="Circle_43_19464" transform="translate(563.498,377.915)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34411280" stroke-linecap="round"
                    name="Circle_43_19463" transform="translate(565.529,-18.292)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34423056" stroke-linecap="round"
                    name="Circle_43_19462" transform="translate(764.329,-16.292)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33477376" stroke-linecap="round"
                    name="Circle_43_19470" transform="translate(216.609,-68.182)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33479360" stroke-linecap="round"
                    name="Circle_43_19474" transform="translate(194.404,-68.182)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33475424" stroke-linecap="round"
                    name="Circle_43_19485" transform="translate(436.455,355.083)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34511728" stroke-linecap="round"
                    name="Circle_43_19487" transform="translate(459.692,345.419)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33463680" stroke-linecap="round"
                    name="Circle_43_20019" transform="translate(612.668,211.643)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33473440" stroke-linecap="round"
                    name="Circle_43_20018" transform="translate(778.852,211.643)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34570288" stroke-linecap="round"
                    name="Circle_43_19454" transform="translate(776.915,231.937)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34510720" stroke-linecap="round"
                    name="Circle_43_20031" transform="translate(612.668,369.578)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34521984" stroke-linecap="round"
                    name="Circle_43_19316" transform="translate(583.575,388.41)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34500640" stroke-linecap="round"
                    name="Circle_43_20054" transform="translate(83.06,-319.435)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34458112" stroke-linecap="round"
                    name="Circle_43_20058" transform="translate(-781.639,323.068)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34482672" stroke-linecap="round"
                    name="Circle_43_20062" transform="translate(529.402,423.694)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" id="34436816" stroke-linecap="round" name="Rectangle_44_20065"
                    transform="translate(528.918,450.752)">
                    <rect width="18.396" x="-9.198" opacity="1" y="-2.899" fill="#ffffff" rx="45" height="5.798" ry="45"
                        stroke="none"></rect>
                    <rect width="18.396" x="-9.198" y="-2.899" fill="none" rx="45" height="5.798" ry="45"
                        stroke="#ffffff"></rect>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34524480" stroke-linecap="round"
                    name="Circle_43_20069" transform="translate(527.498,469.113)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34427952" stroke-linecap="round"
                    name="Circle_43_20077" transform="translate(-782.639,470.046)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34461040" stroke-linecap="round"
                    name="Line_1_20083" stroke-width="4" transform="translate(-647.932,325.126)">
                    <line y1="144.954" x1="0" y2="-144.954" x2="0"></line>
                    <line stroke="#ff55ff" y1="144.954" x1="0" y2="134.954" x2="0"></line>
                    <line stroke="#ff55ff" y1="114.954" x1="0" y2="104.954" x2="0"></line>
                    <line stroke="#ff55ff" y1="84.954" x1="0" y2="74.954" x2="0"></line>
                    <line stroke="#ff55ff" y1="54.954" x1="0" y2="44.954" x2="0"></line>
                    <line stroke="#ff55ff" y1="24.954" x1="0" y2="14.954" x2="0"></line>
                    <line stroke="#ff55ff" y1="-5.046" x1="0" y2="-15.046" x2="0"></line>
                    <line stroke="#ff55ff" y1="-35.046" x1="0" y2="-45.046" x2="0"></line>
                    <line stroke="#ff55ff" y1="-65.046" x1="0" y2="-75.046" x2="0"></line>
                    <line stroke="#ff55ff" y1="-95.046" x1="0" y2="-105.046" x2="0"></line>
                    <line stroke="#ff55ff" y1="-125.046" x1="0" y2="-135.046" x2="0"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33409024" stroke-linecap="round"
                    name="Circle_43_20082" transform="translate(-647.932,177.273)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34454944" stroke-linecap="round"
                    name="Circle_43_20081" transform="translate(-647.932,470.046)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34474160" stroke-linecap="round"
                    name="Line_1_20087" stroke-width="4" transform="translate(-583.045,327.040)">
                    <line y1="144.040" x1="0" y2="-144.040" x2="0"></line>
                    <line stroke="#ff55ff" y1="-144.040" x1="0" y2="-134.040" x2="0"></line>
                    <line stroke="#ff55ff" y1="-114.040" x1="0" y2="-104.040" x2="0"></line>
                    <line stroke="#ff55ff" y1="-84.040" x1="0" y2="-74.040" x2="0"></line>
                    <line stroke="#ff55ff" y1="-54.040" x1="0" y2="-44.040" x2="0"></line>
                    <line stroke="#ff55ff" y1="-24.040" x1="0" y2="-14.040" x2="0"></line>
                    <line stroke="#ff55ff" y1="5.96" x1="0" y2="15.96" x2="0"></line>
                    <line stroke="#ff55ff" y1="35.96" x1="0" y2="45.96" x2="0"></line>
                    <line stroke="#ff55ff" y1="65.96" x1="0" y2="75.96" x2="0"></line>
                    <line stroke="#ff55ff" y1="95.96" x1="0" y2="105.96" x2="0"></line>
                    <line stroke="#ff55ff" y1="125.96" x1="0" y2="135.96" x2="0"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33483856" stroke-linecap="round"
                    name="Circle_43_20089" transform="translate(-584.045,470.046)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" id="34468640" stroke-linecap="round" name="Rectangle_44_20091"
                    transform="translate(-649.384,262.313)">
                    <rect width="18.396" x="-9.198" opacity="1" y="-2.899" fill="#ffffff" rx="45" height="5.798" ry="45"
                        stroke="none"></rect>
                    <rect width="18.396" x="-9.198" y="-2.899" fill="none" rx="45" height="5.798" ry="45"
                        stroke="#ffffff"></rect>
                </g>
                <g fill="none" stroke="#ffffff" id="32054624" stroke-linecap="round" name="Rectangle_44_20097"
                    transform="translate(-584.497,263.313)">
                    <rect width="18.396" x="-9.198" opacity="1" y="-2.899" fill="#ffffff" rx="45" height="5.798" ry="45"
                        stroke="none"></rect>
                    <rect width="18.396" x="-9.198" y="-2.899" fill="none" rx="45" height="5.798" ry="45"
                        stroke="#ffffff"></rect>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="39891248" stroke-linecap="round"
                    name="Line_1_20107" stroke-width="4" transform="translate(-681.819,235.738)">
                    <line y1="234.342" x1="0" y2="-234.342" x2="0"></line>
                    <line stroke="#ff55ff" y1="234.342" x1="0" y2="224.342" x2="0"></line>
                    <line stroke="#ff55ff" y1="204.342" x1="0" y2="194.342" x2="0"></line>
                    <line stroke="#ff55ff" y1="174.342" x1="0" y2="164.342" x2="0"></line>
                    <line stroke="#ff55ff" y1="144.342" x1="0" y2="134.342" x2="0"></line>
                    <line stroke="#ff55ff" y1="114.342" x1="0" y2="104.342" x2="0"></line>
                    <line stroke="#ff55ff" y1="84.342" x1="0" y2="74.342" x2="0"></line>
                    <line stroke="#ff55ff" y1="54.342" x1="0" y2="44.342" x2="0"></line>
                    <line stroke="#ff55ff" y1="24.342" x1="0" y2="14.342" x2="0"></line>
                    <line stroke="#ff55ff" y1="-5.658" x1="0" y2="-15.658" x2="0"></line>
                    <line stroke="#ff55ff" y1="-35.658" x1="0" y2="-45.658" x2="0"></line>
                    <line stroke="#ff55ff" y1="-65.658" x1="0" y2="-75.658" x2="0"></line>
                    <line stroke="#ff55ff" y1="-95.658" x1="0" y2="-105.658" x2="0"></line>
                    <line stroke="#ff55ff" y1="-125.658" x1="0" y2="-135.658" x2="0"></line>
                    <line stroke="#ff55ff" y1="-155.658" x1="0" y2="-165.658" x2="0"></line>
                    <line stroke="#ff55ff" y1="-185.658" x1="0" y2="-195.658" x2="0"></line>
                    <line stroke="#ff55ff" y1="-215.658" x1="0" y2="-225.658" x2="0"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34409328" stroke-linecap="round"
                    name="Circle_43_20106" transform="translate(-681.819,0.429)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34493008" stroke-linecap="round"
                    name="Circle_43_20105" transform="translate(-681.819,470.046)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" id="32055584" stroke-linecap="round" name="Rectangle_44_20104"
                    transform="translate(-683.271,262.313)">
                    <rect width="18.396" x="-9.198" opacity="1" y="-2.899" fill="#ffffff" rx="45" height="5.798" ry="45"
                        stroke="none"></rect>
                    <rect width="18.396" x="-9.198" y="-2.899" fill="none" rx="45" height="5.798" ry="45"
                        stroke="#ffffff"></rect>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="35745120" stroke-linecap="round"
                    name="Circle_43_20550" transform="translate(91.775,-147.423)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34521120" stroke-linecap="round"
                    name="Circle_43_19337" transform="translate(-348.757,-152.255)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="35275776" stroke-linecap="round"
                    name="Circle_43_19348" transform="translate(-372.962,-152.255)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34180368" stroke-linecap="round"
                    name="Circle_43_20568" transform="translate(-382.644,-137.760)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31885344" stroke-linecap="round"
                    name="Circle_43_20584" transform="translate(254.072,-155.154)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33506608" stroke-linecap="round"
                    name="Circle_43_20586" transform="translate(254.549,-144.659)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34405808" stroke-linecap="round"
                    name="Circle_43_20604" transform="translate(746.96,-352.291)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33502576" stroke-linecap="round"
                    name="Circle_43_20578" transform="translate(728.564,-351.325)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="41724688" stroke-linecap="round"
                    name="Circle_43_20576" transform="translate(707.264,-349.392)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31467536" stroke-linecap="round"
                    name="Circle_43_20606" transform="translate(707.264,-325.099)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34525472" stroke-linecap="round"
                    name="Text_45_20608" transform="translate(811.209,-259.467)">
                    <text x="-82" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        220kV曹妃甸变电站
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34407200" stroke-linecap="round"
                    name="Circle_43_32940" transform="translate(-326.012,-70.115)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34306848" stroke-linecap="round"
                    name="Circle_43_32942" transform="translate(-291.807,-70.115)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31924032" stroke-linecap="round"
                    name="Circle_43_20552" transform="translate(-310.029,-159.020)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34183616" stroke-linecap="round"
                    name="Circle_43_20559" transform="translate(-329.393,-159.020)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34232880" stroke-linecap="round"
                    name="Circle_43_20558" transform="translate(91.775,-159.020)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33561216" stroke-linecap="round"
                    name="Circle_43_20554" transform="translate(115.980,-159.020)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="39003376" stroke-linecap="round"
                    name="Circle_43_33705" transform="translate(-141.562,-147.423)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31831728" stroke-linecap="round"
                    name="Text_45_33710" transform="translate(-103,-81.537)">
                    <text x="-38" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        二期制氧
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="32047520" stroke-linecap="round"
                    name="Rectangle_44_33711" transform="translate(-90.731,-28.561)">
                    <clipPath id="32047520_img_cp">
                        <rect width="121.025" x="-60.513" y="-38.654" height="77.309"></rect>
                    </clipPath>
                    <image width="121.025" x="-60.513" y="-38.654" preserveAspectRatio="none" height="77.309"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#32047520_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34473280" stroke-linecap="round"
                    name="Line_1_33717" stroke-width="4" transform="translate(-196.265,-53.687)">
                    <line y1="0" x1="-54.703" y2="0" x2="54.703"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34473680" stroke-linecap="round"
                    name="Circle_43_33721" transform="translate(-144.467,-55.619)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33582832" stroke-linecap="round"
                    name="Circle_43_33723" transform="translate(-50.103,-55.619)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="33492640" stroke-linecap="round"
                    name="Line_1_33725" stroke-width="4" transform="translate(-250.969,-88.959)">
                    <line y1="32.373" x1="0" y2="-32.373" x2="0"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="33493040" stroke-linecap="round"
                    name="Line_1_33727" stroke-width="4" transform="translate(-295.506,-121.332)">
                    <line y1="0" x1="-42.6" y2="0" x2="42.6"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31927872" stroke-linecap="round"
                    name="Circle_43_33716" transform="translate(-338.107,-123.264)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34583952" stroke-linecap="round"
                    name="Line_1_33731" stroke-width="4" transform="translate(30.778,-88.959)">
                    <line y1="32.373" x1="0" y2="-32.373" x2="0"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="33481120" stroke-linecap="round"
                    name="Line_1_33730" stroke-width="4" transform="translate(77.736,-121.332)">
                    <line y1="0" x1="-46.958" y2="0" x2="46.958"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="31928272" stroke-linecap="round"
                    name="Circle_43_33719" transform="translate(125.662,-123.264)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="39838400" stroke-linecap="round"
                    name="Circle_43_19393" transform="translate(-164.545,99.512)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33583232" stroke-linecap="round"
                    name="Circle_43_34258" transform="translate(646.555,449.887)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33589056" stroke-linecap="round"
                    name="Circle_43_34260" transform="translate(690.124,448.820)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="31838528" stroke-linecap="square"
                    name="Line_1_34267" stroke-width="4" transform="translate(691.350,330.924)">
                    <line y1="0" x1="-79.65" y2="0" x2="79.65"></line>
                    <line stroke="#ff55ff" y1="0" x1="-79.65" y2="0" x2="-69.65"></line>
                    <line stroke="#ff55ff" y1="0" x1="-49.65" y2="0" x2="-39.65"></line>
                    <line stroke="#ff55ff" y1="0" x1="-19.65" y2="0" x2="-9.65"></line>
                    <line stroke="#ff55ff" y1="0" x1="10.350" y2="0" x2="20.350"></line>
                    <line stroke="#ff55ff" y1="0" x1="40.350" y2="0" x2="50.350"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34538912" stroke-linecap="round"
                    name="Circle_43_34266" transform="translate(612.668,330.924)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34642784" stroke-linecap="round"
                    name="Circle_43_34268" transform="translate(774.01,330.924)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34509712" stroke-linecap="round"
                    name="Circle_43_20026" transform="translate(768.202,350.251)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34487648" stroke-linecap="round"
                    name="Circle_43_19376" transform="translate(509.070,-130.995)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33406848" stroke-linecap="round"
                    name="Circle_43_19440" transform="translate(534.070,-76.038)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="39878144" stroke-linecap="round"
                    name="Rectangle_44_20574" transform="translate(816.623,-320.643)">
                    <clipPath id="39878144_img_cp">
                        <rect width="226.255" x="-113.127" y="-50.893" height="101.787"></rect>
                    </clipPath>
                    <image width="226.255" x="-113.127" y="-50.893" preserveAspectRatio="none" height="101.787"
                        xlink:href="../../resource/images/SanWeiIcon/A10a.png" clip-path="url(#39878144_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#5555ff" stroke-linejoin="bevel" id="34608192" stroke-linecap="square"
                    name="Polyline_3_3216" stroke-width="4" transform="translate(1.5,-262.375)">
                    <polyline points="727.5,-95.625 727.5,-109.625 -727.5,-109.625 -727.5,107.375 -381.75,109.625">
                    </polyline>
                    <polyline points="721.897,-106.205 712.5,-109.625 721.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="676.897,-106.205 667.5,-109.625 676.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="631.897,-106.205 622.5,-109.625 631.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="586.897,-106.205 577.5,-109.625 586.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="541.897,-106.205 532.5,-109.625 541.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="496.897,-106.205 487.5,-109.625 496.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="451.897,-106.205 442.5,-109.625 451.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="406.897,-106.205 397.5,-109.625 406.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="361.897,-106.205 352.5,-109.625 361.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="316.897,-106.205 307.5,-109.625 316.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="271.897,-106.205 262.5,-109.625 271.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="226.897,-106.205 217.5,-109.625 226.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="181.897,-106.205 172.5,-109.625 181.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="136.897,-106.205 127.5,-109.625 136.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="91.897,-106.205 82.5,-109.625 91.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="46.897,-106.205 37.5,-109.625 46.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="1.897,-106.205 -7.5,-109.625 1.897,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="-43.103,-106.205 -52.5,-109.625 -43.103,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="-88.103,-106.205 -97.5,-109.625 -88.103,-113.045" stroke="#55aaff"></polyline>
                    <polyline points="-133.103,-106.205 -142.5,-109.625 -133.103,-113.045" stroke="#55aaff">
                    </polyline>
                    <polyline points="-178.103,-106.205 -187.5,-109.625 -178.103,-113.045" stroke="#55aaff">
                    </polyline>
                    <polyline points="-223.103,-106.205 -232.5,-109.625 -223.103,-113.045" stroke="#55aaff">
                    </polyline>
                    <polyline points="-268.103,-106.205 -277.5,-109.625 -268.103,-113.045" stroke="#55aaff">
                    </polyline>
                    <polyline points="-313.103,-106.205 -322.5,-109.625 -313.103,-113.045" stroke="#55aaff">
                    </polyline>
                    <polyline points="-358.103,-106.205 -367.5,-109.625 -358.103,-113.045" stroke="#55aaff">
                    </polyline>
                    <polyline points="-403.103,-106.205 -412.5,-109.625 -403.103,-113.045" stroke="#55aaff">
                    </polyline>
                    <polyline points="-448.103,-106.205 -457.5,-109.625 -448.103,-113.045" stroke="#55aaff">
                    </polyline>
                    <polyline points="-493.103,-106.205 -502.5,-109.625 -493.103,-113.045" stroke="#55aaff">
                    </polyline>
                    <polyline points="-538.103,-106.205 -547.5,-109.625 -538.103,-113.045" stroke="#55aaff">
                    </polyline>
                    <polyline points="-583.103,-106.205 -592.5,-109.625 -583.103,-113.045" stroke="#55aaff">
                    </polyline>
                    <polyline points="-628.103,-106.205 -637.5,-109.625 -628.103,-113.045" stroke="#55aaff">
                    </polyline>
                    <polyline points="-673.103,-106.205 -682.5,-109.625 -673.103,-113.045" stroke="#55aaff">
                    </polyline>
                    <polyline points="-718.103,-106.205 -727.5,-109.625 -718.103,-113.045" stroke="#55aaff">
                    </polyline>
                    <polyline points="-724.080,-104.022 -727.5,-94.625 -730.92,-104.022" stroke="#55aaff">
                    </polyline>
                    <polyline points="-724.080,-59.022 -727.5,-49.625 -730.92,-59.022" stroke="#55aaff"></polyline>
                    <polyline points="-724.080,-14.022 -727.5,-4.625 -730.92,-14.022" stroke="#55aaff"></polyline>
                    <polyline points="-724.080,30.978 -727.5,40.375 -730.92,30.978" stroke="#55aaff"></polyline>
                    <polyline points="-724.080,75.978 -727.5,85.375 -730.92,75.978" stroke="#55aaff"></polyline>
                    <polyline points="-721.875,103.991 -712.5,107.473 -721.919,110.832" stroke="#55aaff"></polyline>
                    <polyline points="-676.876,104.284 -667.501,107.765 -676.92,111.124" stroke="#55aaff">
                    </polyline>
                    <polyline points="-631.877,104.577 -622.502,108.058 -631.921,111.417" stroke="#55aaff">
                    </polyline>
                    <polyline points="-586.878,104.870 -577.503,108.351 -586.922,111.71" stroke="#55aaff">
                    </polyline>
                    <polyline points="-541.879,105.163 -532.504,108.644 -541.923,112.003" stroke="#55aaff">
                    </polyline>
                    <polyline points="-496.880,105.456 -487.505,108.937 -496.924,112.296" stroke="#55aaff">
                    </polyline>
                    <polyline points="-451.88,105.748 -442.506,109.230 -451.925,112.589" stroke="#55aaff">
                    </polyline>
                    <polyline points="-406.881,106.041 -397.507,109.522 -406.926,112.881" stroke="#55aaff">
                    </polyline>
                </g>
                <g fill="none" stroke="#5555ff" stroke-linejoin="bevel" id="31944336" stroke-linecap="square"
                    name="Polyline_3_3734" stroke-width="4" transform="translate(-0.5,-265.875)">
                    <polyline points="747.5,-91.125 747.5,-129.125 -747.5,-129.125 -747.5,126.875 -389.5,129.125">
                    </polyline>
                    <polyline points="744.080,-96.728 747.5,-106.125 750.92,-96.728" stroke="#55aaff"></polyline>
                    <polyline points="741.897,-125.705 732.5,-129.125 741.897,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="696.897,-125.705 687.5,-129.125 696.897,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="651.897,-125.705 642.5,-129.125 651.897,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="606.897,-125.705 597.5,-129.125 606.897,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="561.897,-125.705 552.5,-129.125 561.897,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="516.897,-125.705 507.5,-129.125 516.897,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="471.897,-125.705 462.5,-129.125 471.897,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="426.897,-125.705 417.500,-129.125 426.897,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="381.897,-125.705 372.5,-129.125 381.897,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="336.897,-125.705 327.500,-129.125 336.897,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="291.897,-125.705 282.5,-129.125 291.897,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="246.897,-125.705 237.5,-129.125 246.897,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="201.897,-125.705 192.5,-129.125 201.897,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="156.897,-125.705 147.5,-129.125 156.897,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="111.897,-125.705 102.5,-129.125 111.897,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="66.897,-125.705 57.5,-129.125 66.897,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="21.897,-125.705 12.5,-129.125 21.897,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="-23.103,-125.705 -32.5,-129.125 -23.103,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="-68.103,-125.705 -77.5,-129.125 -68.103,-132.545" stroke="#55aaff"></polyline>
                    <polyline points="-113.103,-125.705 -122.5,-129.125 -113.103,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="-158.103,-125.705 -167.5,-129.125 -158.103,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="-203.103,-125.705 -212.5,-129.125 -203.103,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="-248.103,-125.705 -257.5,-129.125 -248.103,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="-293.103,-125.705 -302.5,-129.125 -293.103,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="-338.103,-125.705 -347.5,-129.125 -338.103,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="-383.103,-125.705 -392.5,-129.125 -383.103,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="-428.103,-125.705 -437.5,-129.125 -428.103,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="-473.103,-125.705 -482.5,-129.125 -473.103,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="-518.103,-125.705 -527.5,-129.125 -518.103,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="-563.103,-125.705 -572.5,-129.125 -563.103,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="-608.103,-125.705 -617.5,-129.125 -608.103,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="-653.103,-125.705 -662.5,-129.125 -653.103,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="-698.103,-125.705 -707.5,-129.125 -698.103,-132.545" stroke="#55aaff">
                    </polyline>
                    <polyline points="-744.080,-123.522 -747.5,-114.125 -750.92,-123.522" stroke="#55aaff">
                    </polyline>
                    <polyline points="-744.080,-78.522 -747.5,-69.125 -750.92,-78.522" stroke="#55aaff"></polyline>
                    <polyline points="-744.080,-33.522 -747.5,-24.125 -750.92,-33.522" stroke="#55aaff"></polyline>
                    <polyline points="-744.080,11.478 -747.5,20.875 -750.92,11.478" stroke="#55aaff"></polyline>
                    <polyline points="-744.080,56.478 -747.5,65.875 -750.92,56.478" stroke="#55aaff"></polyline>
                    <polyline points="-744.080,101.478 -747.5,110.875 -750.92,101.478" stroke="#55aaff"></polyline>
                    <polyline points="-741.876,123.49 -732.5,126.969 -741.919,130.33" stroke="#55aaff"></polyline>
                    <polyline points="-696.876,123.773 -687.501,127.252 -696.919,130.613" stroke="#55aaff">
                    </polyline>
                    <polyline points="-651.877,124.056 -642.502,127.535 -651.92,130.896" stroke="#55aaff">
                    </polyline>
                    <polyline points="-606.878,124.339 -597.503,127.818 -606.921,131.179" stroke="#55aaff">
                    </polyline>
                    <polyline points="-561.879,124.621 -552.504,128.1 -561.922,131.462" stroke="#55aaff"></polyline>
                    <polyline points="-516.880,124.904 -507.505,128.383 -516.923,131.744" stroke="#55aaff">
                    </polyline>
                    <polyline points="-471.88,125.187 -462.506,128.666 -471.924,132.027" stroke="#55aaff">
                    </polyline>
                    <polyline points="-426.882,125.470 -417.507,128.949 -426.925,132.31" stroke="#55aaff">
                    </polyline>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="33493456" stroke-linecap="square"
                    name="Polyline_3_3735" stroke-width="4" transform="translate(-234,-327.25)">
                    <polyline points="311,-26.25 -311,-26.25 -311,26.25"></polyline>
                    <line stroke="#ff55ff" y1="-26.25" x1="311" y2="-26.25" x2="301"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="281" y2="-26.25" x2="271"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="251" y2="-26.25" x2="241"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="221" y2="-26.25" x2="211"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="191" y2="-26.25" x2="181"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="161" y2="-26.25" x2="151"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="131" y2="-26.25" x2="121"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="101" y2="-26.25" x2="91"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="71" y2="-26.25" x2="61"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="41" y2="-26.25" x2="31"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="11" y2="-26.25" x2="1"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="-19.000" y2="-26.25" x2="-29"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="-49" y2="-26.25" x2="-59.000"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="-79.000" y2="-26.25" x2="-89"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="-109.000" y2="-26.25" x2="-119"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="-139" y2="-26.25" x2="-149.000"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="-169.000" y2="-26.25" x2="-179.000"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="-199.000" y2="-26.25" x2="-209"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="-229" y2="-26.25" x2="-239"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="-259" y2="-26.25" x2="-269.000"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="-289" y2="-26.25" x2="-299"></line>
                    <line stroke="#ff55ff" y1="-26.25" x1="-311" y2="-16.25" x2="-311"></line>
                    <line stroke="#ff55ff" y1="3.75" x1="-311" y2="13.75" x2="-311"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="31917312" stroke-linecap="square"
                    name="Polyline_3_4245" stroke-width="4" transform="translate(-221.875,-323.75)">
                    <polyline points="297.875,-10.75 -297.875,-10.75 -297.875,10.75"></polyline>
                    <line stroke="#ff55ff" y1="-10.75" x1="297.875" y2="-10.75" x2="287.875"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="267.875" y2="-10.75" x2="257.875"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="237.875" y2="-10.75" x2="227.875"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="207.875" y2="-10.75" x2="197.875"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="177.875" y2="-10.75" x2="167.875"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="147.875" y2="-10.75" x2="137.875"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="117.875" y2="-10.75" x2="107.875"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="87.875" y2="-10.75" x2="77.875"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="57.875" y2="-10.75" x2="47.875"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="27.875" y2="-10.75" x2="17.875"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="-2.125" y2="-10.75" x2="-12.125"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="-32.125" y2="-10.75" x2="-42.125"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="-62.125" y2="-10.75" x2="-72.125"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="-92.125" y2="-10.75" x2="-102.125"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="-122.125" y2="-10.75" x2="-132.125"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="-152.125" y2="-10.75" x2="-162.125"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="-182.125" y2="-10.75" x2="-192.125"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="-212.125" y2="-10.75" x2="-222.125"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="-242.125" y2="-10.75" x2="-252.125"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="-272.125" y2="-10.75" x2="-282.125"></line>
                    <line stroke="#ff55ff" y1="-10.75" x1="-297.875" y2="-0.75" x2="-297.875"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34660688" stroke-linecap="square"
                    name="Polyline_3_4246" stroke-width="4" transform="translate(-150,-236.25)">
                    <polyline points="-220,76.25 -220,-21.25 220,-21.25 220,-76.25"></polyline>
                    <polyline points="-216.580,-10.647 -220,-1.25 -223.42,-10.647" stroke="#ff55ff"></polyline>
                    <polyline points="-216.580,49.353 -220,58.75 -223.42,49.353" stroke="#ff55ff"></polyline>
                    <polyline points="209.397,-17.830 200,-21.25 209.397,-24.67" stroke="#ff55ff"></polyline>
                    <polyline points="149.397,-17.830 140,-21.25 149.397,-24.67" stroke="#ff55ff"></polyline>
                    <polyline points="89.397,-17.830 80,-21.25 89.397,-24.67" stroke="#ff55ff"></polyline>
                    <polyline points="29.397,-17.830 20.000,-21.25 29.397,-24.67" stroke="#ff55ff"></polyline>
                    <polyline points="-30.603,-17.830 -40,-21.25 -30.603,-24.67" stroke="#ff55ff"></polyline>
                    <polyline points="-90.603,-17.830 -100,-21.25 -90.603,-24.67" stroke="#ff55ff"></polyline>
                    <polyline points="-150.603,-17.830 -160,-21.25 -150.603,-24.67" stroke="#ff55ff"></polyline>
                    <polyline points="-210.603,-17.830 -220,-21.25 -210.603,-24.67" stroke="#ff55ff"></polyline>
                    <polyline points="223.42,-65.647 220,-56.25 216.580,-65.647" stroke="#ff55ff"></polyline>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34503664" stroke-linecap="square"
                    name="Polyline_3_4750" stroke-width="4" transform="translate(-133.875,-236.625)">
                    <polyline points="-218.125,76.875 -218.125,3.125 218.125,3.125 218.125,-76.875"></polyline>
                    <polyline points="-214.705,13.728 -218.125,23.125 -221.545,13.728" stroke="#ff55ff"></polyline>
                    <polyline points="207.522,6.545 198.125,3.125 207.522,-0.295" stroke="#ff55ff"></polyline>
                    <polyline points="147.522,6.545 138.125,3.125 147.522,-0.295" stroke="#ff55ff"></polyline>
                    <polyline points="87.522,6.545 78.125,3.125 87.522,-0.295" stroke="#ff55ff"></polyline>
                    <polyline points="27.522,6.545 18.125,3.125 27.522,-0.295" stroke="#ff55ff"></polyline>
                    <polyline points="-32.478,6.545 -41.875,3.125 -32.478,-0.295" stroke="#ff55ff"></polyline>
                    <polyline points="-92.478,6.545 -101.875,3.125 -92.478,-0.295" stroke="#ff55ff"></polyline>
                    <polyline points="-152.478,6.545 -161.875,3.125 -152.478,-0.295" stroke="#ff55ff"></polyline>
                    <polyline points="221.545,-66.272 218.125,-56.875 214.705,-66.272" stroke="#ff55ff"></polyline>
                    <polyline points="221.545,-6.272 218.125,3.125 214.705,-6.272" stroke="#ff55ff"></polyline>
                </g>
                <g fill="none" stroke="#5555ff" stroke-linejoin="bevel" id="34476768" stroke-linecap="square"
                    name="Polyline_3_5254" stroke-width="4" transform="translate(-105.625,-189.875)">
                    <polyline points="223.125,23.125 223.125,-23.125 -223.125,-23.125 -223.125,23.125"></polyline>
                    <polyline points="226.545,-12.522 223.125,-3.125 219.705,-12.522" stroke="#55aaff"></polyline>
                    <polyline points="-212.522,-26.545 -203.125,-23.125 -212.522,-19.705" stroke="#55aaff">
                    </polyline>
                    <polyline points="-152.522,-26.545 -143.125,-23.125 -152.522,-19.705" stroke="#55aaff">
                    </polyline>
                    <polyline points="-92.522,-26.545 -83.125,-23.125 -92.522,-19.705" stroke="#55aaff"></polyline>
                    <polyline points="-32.522,-26.545 -23.125,-23.125 -32.522,-19.705" stroke="#55aaff"></polyline>
                    <polyline points="27.478,-26.545 36.875,-23.125 27.478,-19.705" stroke="#55aaff"></polyline>
                    <polyline points="87.478,-26.545 96.875,-23.125 87.478,-19.705" stroke="#55aaff"></polyline>
                    <polyline points="147.478,-26.545 156.875,-23.125 147.478,-19.705" stroke="#55aaff"></polyline>
                    <polyline points="207.478,-26.545 216.875,-23.125 207.478,-19.705" stroke="#55aaff"></polyline>
                    <polyline points="-226.545,12.522 -223.125,3.125 -219.705,12.522" stroke="#55aaff"></polyline>
                </g>
                <g fill="none" stroke="#5555ff" stroke-linejoin="bevel" id="33488656" stroke-linecap="square"
                    name="Polyline_3_5761" stroke-width="4" transform="translate(-108.125,-181.625)">
                    <polyline points="201.875,14.375 201.875,-14.375 -201.875,-14.375 -201.875,13.125"></polyline>
                    <polyline points="205.295,-3.772 201.875,5.625 198.455,-3.772" stroke="#55aaff"></polyline>
                    <polyline points="-191.272,-17.795 -181.875,-14.375 -191.272,-10.955" stroke="#55aaff">
                    </polyline>
                    <polyline points="-131.272,-17.795 -121.875,-14.375 -131.272,-10.955" stroke="#55aaff">
                    </polyline>
                    <polyline points="-71.272,-17.795 -61.875,-14.375 -71.272,-10.955" stroke="#55aaff"></polyline>
                    <polyline points="-11.272,-17.795 -1.875,-14.375 -11.272,-10.955" stroke="#55aaff"></polyline>
                    <polyline points="48.728,-17.795 58.125,-14.375 48.728,-10.955" stroke="#55aaff"></polyline>
                    <polyline points="108.728,-17.795 118.125,-14.375 108.728,-10.955" stroke="#55aaff"></polyline>
                    <polyline points="168.728,-17.795 178.125,-14.375 168.728,-10.955" stroke="#55aaff"></polyline>
                    <polyline points="-205.295,2.522 -201.875,-6.875 -198.455,2.522" stroke="#55aaff"></polyline>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34463280" stroke-linecap="square"
                    name="Polyline_3_6769" stroke-width="4" transform="translate(-241,-88.125)">
                    <polyline points="-91,-34.375 -10.25,-34.375 -10.25,34.375 91,34.375"></polyline>
                    <line stroke="#ff55ff" y1="-34.375" x1="-91" y2="-34.375" x2="-81"></line>
                    <line stroke="#ff55ff" y1="-34.375" x1="-61" y2="-34.375" x2="-51"></line>
                    <line stroke="#ff55ff" y1="-34.375" x1="-31" y2="-34.375" x2="-21"></line>
                    <line stroke="#ff55ff" y1="-34.375" x1="-10.25" y2="-24.375" x2="-10.25"></line>
                    <line stroke="#ff55ff" y1="-4.375" x1="-10.25" y2="5.625" x2="-10.25"></line>
                    <line stroke="#ff55ff" y1="34.375" x1="-10.25" y2="34.375" x2="-0.25"></line>
                    <line stroke="#ff55ff" y1="34.375" x1="19.75" y2="34.375" x2="29.75"></line>
                    <line stroke="#ff55ff" y1="34.375" x1="49.75" y2="34.375" x2="59.75"></line>
                    <line stroke="#ff55ff" y1="34.375" x1="79.75" y2="34.375" x2="89.75"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="35746928" stroke-linecap="square"
                    name="Polyline_3_6771" stroke-width="4" transform="translate(37.25,-90)">
                    <polyline points="80.25,-33.75 -7.25,-33.75 -7.25,33.75 -80.25,33.75"></polyline>
                    <line stroke="#ff55ff" y1="-33.75" x1="80.25" y2="-33.75" x2="70.25"></line>
                    <line stroke="#ff55ff" y1="-33.75" x1="50.25" y2="-33.75" x2="40.25"></line>
                    <line stroke="#ff55ff" y1="-33.75" x1="20.25" y2="-33.75" x2="10.25"></line>
                    <line stroke="#ff55ff" y1="-33.75" x1="-7.25" y2="-23.75" x2="-7.25"></line>
                    <line stroke="#ff55ff" y1="-3.75" x1="-7.25" y2="6.25" x2="-7.25"></line>
                    <line stroke="#ff55ff" y1="33.75" x1="-7.25" y2="33.75" x2="-17.25"></line>
                    <line stroke="#ff55ff" y1="33.75" x1="-37.25" y2="33.75" x2="-47.25"></line>
                    <line stroke="#ff55ff" y1="33.75" x1="-67.25" y2="33.75" x2="-77.25"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34550848" stroke-linecap="square"
                    name="Polyline_3_9799" stroke-width="4" transform="translate(336.375,195.875)">
                    <polyline points="66.875,167.125 66.875,-167.125 -66.875,-167.125"></polyline>
                    <polyline points="63.455,156.522 66.875,147.125 70.295,156.522" stroke="#ff55ff"></polyline>
                    <polyline points="63.455,96.522 66.875,87.125 70.295,96.522" stroke="#ff55ff"></polyline>
                    <polyline points="63.455,36.522 66.875,27.125 70.295,36.522" stroke="#ff55ff"></polyline>
                    <polyline points="63.455,-23.478 66.875,-32.875 70.295,-23.478" stroke="#ff55ff"></polyline>
                    <polyline points="63.455,-83.478 66.875,-92.875 70.295,-83.478" stroke="#ff55ff"></polyline>
                    <polyline points="63.455,-143.478 66.875,-152.875 70.295,-143.478" stroke="#ff55ff"></polyline>
                    <polyline points="56.272,-163.705 46.875,-167.125 56.272,-170.545" stroke="#ff55ff"></polyline>
                    <polyline points="-3.728,-163.705 -13.125,-167.125 -3.728,-170.545" stroke="#ff55ff"></polyline>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34616912" stroke-linecap="square"
                    name="Polyline_3_15310" stroke-width="4" transform="translate(80.625,252)">
                    <polyline points="285.625,138 -285.625,138 -285.625,-138 -247.625,-138"></polyline>
                    <line stroke="#ff55ff" y1="138" x1="-285.625" y2="138" x2="-275.625"></line>
                    <line stroke="#ff55ff" y1="138" x1="-255.625" y2="138" x2="-245.625"></line>
                    <line stroke="#ff55ff" y1="138" x1="-225.625" y2="138" x2="-215.625"></line>
                    <line stroke="#ff55ff" y1="138" x1="-195.625" y2="138" x2="-185.625"></line>
                    <line stroke="#ff55ff" y1="138" x1="-165.625" y2="138" x2="-155.625"></line>
                    <line stroke="#ff55ff" y1="138" x1="-135.625" y2="138" x2="-125.625"></line>
                    <line stroke="#ff55ff" y1="138" x1="-105.625" y2="138" x2="-95.625"></line>
                    <line stroke="#ff55ff" y1="138" x1="-75.625" y2="138" x2="-65.625"></line>
                    <line stroke="#ff55ff" y1="138" x1="-45.625" y2="138" x2="-35.625"></line>
                    <line stroke="#ff55ff" y1="138" x1="-15.625" y2="138" x2="-5.625"></line>
                    <line stroke="#ff55ff" y1="138" x1="14.375" y2="138" x2="24.375"></line>
                    <line stroke="#ff55ff" y1="138" x1="44.375" y2="138" x2="54.375"></line>
                    <line stroke="#ff55ff" y1="138" x1="74.375" y2="138" x2="84.375"></line>
                    <line stroke="#ff55ff" y1="138" x1="104.375" y2="138" x2="114.375"></line>
                    <line stroke="#ff55ff" y1="138" x1="134.375" y2="138" x2="144.375"></line>
                    <line stroke="#ff55ff" y1="138" x1="164.375" y2="138" x2="174.375"></line>
                    <line stroke="#ff55ff" y1="138" x1="194.375" y2="138" x2="204.375"></line>
                    <line stroke="#ff55ff" y1="138" x1="224.375" y2="138" x2="234.375"></line>
                    <line stroke="#ff55ff" y1="138" x1="254.375" y2="138" x2="264.375"></line>
                    <line stroke="#ff55ff" y1="-138" x1="-285.625" y2="-128" x2="-285.625"></line>
                    <line stroke="#ff55ff" y1="-108" x1="-285.625" y2="-98" x2="-285.625"></line>
                    <line stroke="#ff55ff" y1="-78" x1="-285.625" y2="-68" x2="-285.625"></line>
                    <line stroke="#ff55ff" y1="-48" x1="-285.625" y2="-38" x2="-285.625"></line>
                    <line stroke="#ff55ff" y1="-18.000" x1="-285.625" y2="-8" x2="-285.625"></line>
                    <line stroke="#ff55ff" y1="12" x1="-285.625" y2="22" x2="-285.625"></line>
                    <line stroke="#ff55ff" y1="42" x1="-285.625" y2="52" x2="-285.625"></line>
                    <line stroke="#ff55ff" y1="72" x1="-285.625" y2="82" x2="-285.625"></line>
                    <line stroke="#ff55ff" y1="102" x1="-285.625" y2="112" x2="-285.625"></line>
                    <line stroke="#ff55ff" y1="-138" x1="-247.625" y2="-138" x2="-257.625"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34596448" stroke-linecap="square"
                    name="Polyline_3_15806" stroke-width="4" transform="translate(-21.125,73.375)">
                    <polyline points="144.125,-17.625 -144.125,-17.625 -144.125,17.625"></polyline>
                    <line stroke="#ff55ff" y1="-17.625" x1="144.125" y2="-17.625" x2="134.125"></line>
                    <line stroke="#ff55ff" y1="-17.625" x1="114.125" y2="-17.625" x2="104.125"></line>
                    <line stroke="#ff55ff" y1="-17.625" x1="84.125" y2="-17.625" x2="74.125"></line>
                    <line stroke="#ff55ff" y1="-17.625" x1="54.125" y2="-17.625" x2="44.125"></line>
                    <line stroke="#ff55ff" y1="-17.625" x1="24.125" y2="-17.625" x2="14.125"></line>
                    <line stroke="#ff55ff" y1="-17.625" x1="-5.875" y2="-17.625" x2="-15.875"></line>
                    <line stroke="#ff55ff" y1="-17.625" x1="-35.875" y2="-17.625" x2="-45.875"></line>
                    <line stroke="#ff55ff" y1="-17.625" x1="-65.875" y2="-17.625" x2="-75.875"></line>
                    <line stroke="#ff55ff" y1="-17.625" x1="-95.875" y2="-17.625" x2="-105.875"></line>
                    <line stroke="#ff55ff" y1="-17.625" x1="-125.875" y2="-17.625" x2="-135.875"></line>
                    <line stroke="#ff55ff" y1="-17.625" x1="-144.125" y2="-7.625" x2="-144.125"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34424976" stroke-linecap="square"
                    name="Polyline_3_16790" stroke-width="4" transform="translate(210.375,336.25)">
                    <polyline points="183.125,34.75 -183.125,34.75 -183.125,-34.75"></polyline>
                    <line stroke="#ff55ff" y1="34.75" x1="183.125" y2="34.75" x2="173.125"></line>
                    <line stroke="#ff55ff" y1="34.75" x1="153.125" y2="34.75" x2="143.125"></line>
                    <line stroke="#ff55ff" y1="34.75" x1="123.125" y2="34.75" x2="113.125"></line>
                    <line stroke="#ff55ff" y1="34.75" x1="93.125" y2="34.75" x2="83.125"></line>
                    <line stroke="#ff55ff" y1="34.75" x1="63.125" y2="34.75" x2="53.125"></line>
                    <line stroke="#ff55ff" y1="34.75" x1="33.125" y2="34.75" x2="23.125"></line>
                    <line stroke="#ff55ff" y1="34.75" x1="3.125" y2="34.75" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="34.75" x1="-26.875" y2="34.75" x2="-36.875"></line>
                    <line stroke="#ff55ff" y1="34.75" x1="-56.875" y2="34.75" x2="-66.875"></line>
                    <line stroke="#ff55ff" y1="34.75" x1="-86.875" y2="34.75" x2="-96.875"></line>
                    <line stroke="#ff55ff" y1="34.75" x1="-116.875" y2="34.75" x2="-126.875"></line>
                    <line stroke="#ff55ff" y1="34.75" x1="-146.875" y2="34.75" x2="-156.875"></line>
                    <line stroke="#ff55ff" y1="34.75" x1="-183.125" y2="24.75" x2="-183.125"></line>
                    <line stroke="#ff55ff" y1="4.75" x1="-183.125" y2="-5.25" x2="-183.125"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="39821616" stroke-linecap="square"
                    name="Polyline_3_20204" stroke-width="4" transform="translate(726,397.5)">
                    <polyline points="-36,46.25 -36,-46.25 36,-46.25"></polyline>
                    <line stroke="#ff55ff" y1="46.25" x1="-36" y2="36.25" x2="-36"></line>
                    <line stroke="#ff55ff" y1="16.25" x1="-36" y2="6.25" x2="-36"></line>
                    <line stroke="#ff55ff" y1="-13.75" x1="-36" y2="-23.75" x2="-36"></line>
                    <line stroke="#ff55ff" y1="-46.25" x1="-36" y2="-46.25" x2="-26"></line>
                    <line stroke="#ff55ff" y1="-46.25" x1="-6" y2="-46.25" x2="4"></line>
                    <line stroke="#ff55ff" y1="-46.25" x1="24" y2="-46.25" x2="34"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34675120" stroke-linecap="round"
                    name="Polyline_3_20679" stroke-width="4" transform="translate(315,144.375)">
                    <polyline points="121.25,205.625 121.25,-166.875 -121.25,-166.875 -121.25,-205.625"></polyline>
                    <polyline points="117.830,195.022 121.25,185.625 124.67,195.022" stroke="#ff55ff"></polyline>
                    <polyline points="117.830,135.022 121.25,125.625 124.67,135.022" stroke="#ff55ff"></polyline>
                    <polyline points="117.830,75.022 121.25,65.625 124.67,75.022" stroke="#ff55ff"></polyline>
                    <polyline points="117.830,15.022 121.25,5.625 124.67,15.022" stroke="#ff55ff"></polyline>
                    <polyline points="117.830,-44.978 121.25,-54.375 124.67,-44.978" stroke="#ff55ff"></polyline>
                    <polyline points="117.830,-104.978 121.25,-114.375 124.67,-104.978" stroke="#ff55ff"></polyline>
                    <polyline points="110.647,-163.455 101.25,-166.875 110.647,-170.295" stroke="#ff55ff">
                    </polyline>
                    <polyline points="50.647,-163.455 41.25,-166.875 50.647,-170.295" stroke="#ff55ff"></polyline>
                    <polyline points="-9.353,-163.455 -18.75,-166.875 -9.353,-170.295" stroke="#ff55ff"></polyline>
                    <polyline points="-69.353,-163.455 -78.75,-166.875 -69.353,-170.295" stroke="#ff55ff">
                    </polyline>
                    <polyline points="-124.67,-177.478 -121.25,-186.875 -117.830,-177.478" stroke="#ff55ff">
                    </polyline>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34673136" stroke-linecap="round"
                    name="Polyline_3_20682" stroke-width="4" transform="translate(338.25,140)">
                    <polyline points="121.25,198.75 121.25,-182.5 -121.25,-182.5 -121.25,-198.75"></polyline>
                    <polyline points="117.830,188.147 121.25,178.75 124.67,188.147" stroke="#ff55ff"></polyline>
                    <polyline points="117.830,128.147 121.25,118.75 124.67,128.147" stroke="#ff55ff"></polyline>
                    <polyline points="117.830,68.147 121.25,58.75 124.67,68.147" stroke="#ff55ff"></polyline>
                    <polyline points="117.830,8.147 121.25,-1.25 124.67,8.147" stroke="#ff55ff"></polyline>
                    <polyline points="117.830,-51.853 121.25,-61.25 124.67,-51.853" stroke="#ff55ff"></polyline>
                    <polyline points="117.830,-111.853 121.25,-121.25 124.67,-111.853" stroke="#ff55ff"></polyline>
                    <polyline points="117.830,-171.853 121.25,-181.25 124.67,-171.853" stroke="#ff55ff"></polyline>
                    <polyline points="110.647,-179.080 101.25,-182.5 110.647,-185.92" stroke="#ff55ff"></polyline>
                    <polyline points="50.647,-179.080 41.25,-182.5 50.647,-185.92" stroke="#ff55ff"></polyline>
                    <polyline points="-9.353,-179.080 -18.75,-182.5 -9.353,-185.92" stroke="#ff55ff"></polyline>
                    <polyline points="-69.353,-179.080 -78.75,-182.5 -69.353,-185.92" stroke="#ff55ff"></polyline>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="34613056" stroke-linecap="round"
                    name="Polyline_3_20687" stroke-width="4" transform="translate(503.125,120.625)">
                    <polyline points="-6.875,225.625 -6.875,-225.625 6.875,-225.625"></polyline>
                    <line stroke="#ff55ff" y1="225.625" x1="-6.875" y2="215.625" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="195.625" x1="-6.875" y2="185.625" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="165.625" x1="-6.875" y2="155.625" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="135.625" x1="-6.875" y2="125.625" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="105.625" x1="-6.875" y2="95.625" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="75.625" x1="-6.875" y2="65.625" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="45.625" x1="-6.875" y2="35.625" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="15.625" x1="-6.875" y2="5.625" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="-14.375" x1="-6.875" y2="-24.375" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="-44.375" x1="-6.875" y2="-54.375" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="-74.375" x1="-6.875" y2="-84.375" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="-104.375" x1="-6.875" y2="-114.375" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="-134.375" x1="-6.875" y2="-144.375" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="-164.375" x1="-6.875" y2="-174.375" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="-194.375" x1="-6.875" y2="-204.375" x2="-6.875"></line>
                    <line stroke="#ff55ff" y1="-225.625" x1="-6.875" y2="-225.625" x2="3.125"></line>
                </g>
                <g fill="none" stroke="#5555ff" stroke-linejoin="bevel" id="34606256" stroke-linecap="square"
                    name="Polyline_3_21136" stroke-width="4" transform="translate(480.5,-252.375)">
                    <polyline points="219.5,-96.375 127.5,-96.375 128.5,96.375 -219.5,96.375"></polyline>
                    <polyline points="208.897,-92.955 199.5,-96.375 208.897,-99.795" stroke="#55aaff"></polyline>
                    <polyline points="148.897,-92.955 139.5,-96.375 148.897,-99.795" stroke="#55aaff"></polyline>
                    <polyline points="130.975,-85.790 127.604,-76.375 124.135,-85.754" stroke="#55aaff"></polyline>
                    <polyline points="131.286,-25.79 127.915,-16.376 124.446,-25.755" stroke="#55aaff"></polyline>
                    <polyline points="131.598,34.209 128.226,43.623 124.757,34.244" stroke="#55aaff"></polyline>
                    <polyline points="117.897,99.795 108.5,96.375 117.897,92.955" stroke="#55aaff"></polyline>
                    <polyline points="57.897,99.795 48.5,96.375 57.897,92.955" stroke="#55aaff"></polyline>
                    <polyline points="-2.103,99.795 -11.5,96.375 -2.103,92.955" stroke="#55aaff"></polyline>
                    <polyline points="-62.103,99.795 -71.5,96.375 -62.103,92.955" stroke="#55aaff"></polyline>
                    <polyline points="-122.103,99.795 -131.5,96.375 -122.103,92.955" stroke="#55aaff"></polyline>
                    <polyline points="-182.103,99.795 -191.5,96.375 -182.103,92.955" stroke="#55aaff"></polyline>
                </g>
                <g fill="none" stroke="#5555ff" stroke-linejoin="bevel" id="34573216" stroke-linecap="square"
                    name="Polyline_3_21138" stroke-width="4" transform="translate(478.5,-233)">
                    <polyline points="219.5,-91 144.5,-91 146.5,91 -219.5,91"></polyline>
                    <polyline points="208.897,-87.580 199.5,-91 208.897,-94.42" stroke="#55aaff"></polyline>
                    <polyline points="148.037,-80.435 144.720,-71.001 141.197,-80.360" stroke="#55aaff"></polyline>
                    <polyline points="148.696,-20.439 145.379,-11.005 141.856,-20.364" stroke="#55aaff"></polyline>
                    <polyline points="149.355,39.558 146.038,48.992 142.515,39.633" stroke="#55aaff"></polyline>
                    <polyline points="135.897,94.42 126.5,91 135.897,87.580" stroke="#55aaff"></polyline>
                    <polyline points="75.897,94.42 66.5,91 75.897,87.580" stroke="#55aaff"></polyline>
                    <polyline points="15.897,94.42 6.5,91 15.897,87.580" stroke="#55aaff"></polyline>
                    <polyline points="-44.103,94.42 -53.500,91 -44.103,87.580" stroke="#55aaff"></polyline>
                    <polyline points="-104.103,94.42 -113.5,91 -104.103,87.580" stroke="#55aaff"></polyline>
                    <polyline points="-164.103,94.42 -173.5,91 -164.103,87.580" stroke="#55aaff"></polyline>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="33476400" name=""
                    transform="translate(312.5,-167)">
                    <g fill="none" stroke="#000000" id="33469536" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -61.8
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="33464656" stroke-linecap="round"
                    name="Text_45_331" transform="translate(287,-166.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34432864" name=""
                    transform="translate(312.5,-146)">
                    <g fill="none" stroke="#000000" id="34460064" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -63.8
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34433824" stroke-linecap="round"
                    name="Text_45_1229" transform="translate(287,-145.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34469392" name=""
                    transform="translate(-434.5,-170)">
                    <g fill="none" stroke="#000000" id="34415200" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -63.2
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34470368" stroke-linecap="round"
                    name="Text_45_1688" transform="translate(-463,-168.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34655664" name=""
                    transform="translate(-434.5,-145)">
                    <g fill="none" stroke="#000000" id="34628720" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -59.9
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34654688" stroke-linecap="round"
                    name="Text_45_1694" transform="translate(-463,-143.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34611120" stroke-linecap="round"
                    name="Text_45_4956" transform="translate(-502,-169.5)">
                    <text x="-26" y="4.5" fill="#ffffff" stroke="none" font-size="13px">
                        曹轧一线
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34609168" stroke-linecap="round"
                    name="Text_45_4959" transform="translate(-502,-144.5)">
                    <text x="-26" y="4.5" fill="#ffffff" stroke="none" font-size="13px">
                        曹轧二线
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33415968" stroke-linecap="round"
                    name="Text_45_4961" transform="translate(560,-167.5)">
                    <text x="-26" y="4.5" fill="#ffffff" stroke="none" font-size="13px">
                        曹铁一线
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34604304" stroke-linecap="round"
                    name="Text_45_4963" transform="translate(560,-147.5)">
                    <text x="-26" y="4.5" fill="#ffffff" stroke="none" font-size="13px">
                        曹铁二线
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33414992" stroke-linecap="round"
                    name="Rectangle_44_7177" transform="translate(474.258,-303.930)">
                    <clipPath id="33414992_img_cp">
                        <rect width="136.517" x="-68.258" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="136.517" x="-68.258" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#33414992_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34569328" stroke-linecap="round"
                    name="Circle_43_7179" transform="translate(234.771,-314.815)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34569632" stroke-linecap="round"
                    name="Circle_43_7181" transform="translate(407.771,-314.815)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="33472464" stroke-linecap="square"
                    name="Line_1_7183" stroke-width="4" transform="translate(320.5,-315.187) rotate(-90)">
                    <line y1="79.5" x1="0" y2="-79.5" x2="0"></line>
                    <polyline points="-3.42,68.897 0,59.5 3.42,68.897" stroke="#ff55ff"></polyline>
                    <polyline points="-3.42,8.897 0,-0.5 3.42,8.897" stroke="#ff55ff"></polyline>
                    <polyline points="-3.42,-51.103 0,-60.5 3.42,-51.103" stroke="#ff55ff"></polyline>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="33467584" stroke-linecap="round"
                    name="Text_45_7185" transform="translate(480.5,-250)">
                    <text x="-19.5" y="6" fill="#ffffff" stroke="none" font-size="19px">
                        CCPP
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34549872" name=""
                    transform="translate(389.5,-301.000)">
                    <g fill="none" stroke="#000000" id="34548896" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            157.3
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="33466608" stroke-linecap="round"
                    name="Text_45_7672" transform="translate(361,-299.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34526688" name=""
                    transform="translate(264.5,-301.000)">
                    <g fill="none" stroke="#000000" id="33471488" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-21" y="4" fill="#000000" stroke="none" font-size="13px">
                            -156.2
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34472320" stroke-linecap="round"
                    name="Text_45_8167" transform="translate(236,-299.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34334400" name=""
                    transform="translate(-26.5,-162.000)">
                    <g fill="none" stroke="#000000" id="41428944" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -61.1
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34335376" stroke-linecap="round"
                    name="Text_45_8671" transform="translate(-55,-160.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34556800" name=""
                    transform="translate(-165.5,-162.000)">
                    <g fill="none" stroke="#000000" id="34667088" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -58.6
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34512736" stroke-linecap="round"
                    name="Text_45_8677" transform="translate(-195,-160.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34389712" name=""
                    transform="translate(-26.5,-72.000)">
                    <g fill="none" stroke="#000000" id="33418928" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -29.4
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34638800" stroke-linecap="round"
                    name="Text_45_9190" transform="translate(-55,-70.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34417168" name=""
                    transform="translate(-166.5,-72.000)">
                    <g fill="none" stroke="#000000" id="34507696" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -27.0
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34418144" stroke-linecap="round"
                    name="Text_45_9196" transform="translate(-195,-70.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34541776" name=""
                    transform="translate(-472.5,-364.000)">
                    <g fill="none" stroke="#000000" id="34536944" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -20.7
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34559760" stroke-linecap="round"
                    name="Text_45_10759" transform="translate(-501,-362.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34480704" name=""
                    transform="translate(-472.5,-344.000)">
                    <g fill="none" stroke="#000000" id="34437824" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -15.2
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34478736" stroke-linecap="round"
                    name="Text_45_10765" transform="translate(-501,-342.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34396720" name=""
                    transform="translate(42.5,-363.000)">
                    <g fill="none" stroke="#000000" id="34394704" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-14" y="4" fill="#000000" stroke="none" font-size="13px">
                            21.0
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="33405760" stroke-linecap="round"
                    name="Text_45_11302" transform="translate(14,-361.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="33512368" name=""
                    transform="translate(42.5,-343.000)">
                    <g fill="none" stroke="#000000" id="33417936" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-14" y="4" fill="#000000" stroke="none" font-size="13px">
                            15.0
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="33478368" stroke-linecap="round"
                    name="Text_45_11308" transform="translate(14,-341.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34553840" stroke-linecap="round"
                    name="Text_45_11855" transform="translate(-140,-362.5)">
                    <text x="-26" y="4.5" fill="#ffffff" stroke="none" font-size="13px">
                        六七一线
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34479712" stroke-linecap="round"
                    name="Text_45_11857" transform="translate(-140,-342.5)">
                    <text x="-26" y="4.5" fill="#ffffff" stroke="none" font-size="13px">
                        六七二线
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34483664" name=""
                    transform="translate(42.5,-268.000)">
                    <g fill="none" stroke="#000000" id="34662800" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-14" y="4" fill="#000000" stroke="none" font-size="13px">
                            65.1
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34583056" stroke-linecap="round"
                    name="Text_45_12408" transform="translate(14,-266.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34388720" name=""
                    transform="translate(42.5,-243.000)">
                    <g fill="none" stroke="#000000" id="34513744" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-14" y="4" fill="#000000" stroke="none" font-size="13px">
                            67.3
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34625776" stroke-linecap="round"
                    name="Text_45_12414" transform="translate(14,-241.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34558784" stroke-linecap="round"
                    name="Text_45_12977" transform="translate(-140.5,-267.5)">
                    <text x="-32.5" y="4.5" fill="#ffffff" stroke="none" font-size="13px">
                        轧6#站一线
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34557792" stroke-linecap="round"
                    name="Text_45_12979" transform="translate(-140.5,-242.5)">
                    <text x="-32.5" y="4.5" fill="#ffffff" stroke="none" font-size="13px">
                        轧6#站二线
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34485664" name=""
                    transform="translate(129.5,-257.000)">
                    <g fill="none" stroke="#000000" id="34477760" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -48.8
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34540800" stroke-linecap="round"
                    name="Text_45_12983" transform="translate(105,-257.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="33410048" name=""
                    transform="translate(213.5,-258.000)">
                    <g fill="none" stroke="#000000" id="33407936" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -42.8
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34451936" stroke-linecap="round"
                    name="Text_45_12989" transform="translate(190,-257.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34555808" name=""
                    transform="translate(77.5,266)">
                    <g fill="none" stroke="#000000" id="34659664" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-14" y="4" fill="#000000" stroke="none" font-size="13px">
                            -6.9
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34393712" stroke-linecap="round"
                    name="Text_45_13570" transform="translate(54,266.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34539808" name=""
                    transform="translate(77.5,341)">
                    <g fill="none" stroke="#000000" id="34537920" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -14.9
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34624784" stroke-linecap="round"
                    name="Text_45_13576" transform="translate(54,341.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34652704" name=""
                    transform="translate(219.5,30)">
                    <g fill="none" stroke="#000000" id="34391712" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -13.3
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34475776" stroke-linecap="round"
                    name="Text_45_14169" transform="translate(196,30.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34576192" name=""
                    transform="translate(314.5,20)">
                    <g fill="none" stroke="#000000" id="34575184" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-14" y="4" fill="#000000" stroke="none" font-size="13px">
                            -2.1
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34492112" stroke-linecap="round"
                    name="Text_45_14175" transform="translate(291,20.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="33542112" name=""
                    transform="translate(734.5,220)">
                    <g fill="none" stroke="#000000" id="31926912" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -76.1
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="32409376" stroke-linecap="round"
                    name="Text_45_14780" transform="translate(711,220.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="31908672" name=""
                    transform="translate(734.5,200)">
                    <g fill="none" stroke="#000000" id="31834544" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -38.1
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="31837424" stroke-linecap="round"
                    name="Text_45_14786" transform="translate(711,200.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="33490576" name=""
                    transform="translate(734.5,320)">
                    <g fill="none" stroke="#000000" id="31911552" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -26.6
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="32057360" stroke-linecap="round"
                    name="Text_45_15406" transform="translate(711,320.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="33598736" name=""
                    transform="translate(734.5,340)">
                    <g fill="none" stroke="#000000" id="31839344" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -22.6
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="32061200" stroke-linecap="round"
                    name="Text_45_15412" transform="translate(711,340.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="33481936" name=""
                    transform="translate(734.5,-70.000)">
                    <g fill="none" stroke="#000000" id="31924992" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -54.8
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="33586992" stroke-linecap="round"
                    name="Text_45_17910" transform="translate(711,-69.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34452928" name=""
                    transform="translate(734.5,-25.000)">
                    <g fill="none" stroke="#000000" id="34457056" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -11.9
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="31832624" stroke-linecap="round"
                    name="Text_45_17916" transform="translate(711,-24.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34639808" stroke-linecap="round"
                    name="Circle_43_19434" transform="translate(509.070,-105.365)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34552768" name=""
                    transform="translate(471.5,-135.000)">
                    <g fill="none" stroke="#000000" id="33500416" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-10.5" y="4" fill="#55aa7f" stroke="none" font-size="13px">
                            0.0
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="31962896" stroke-linecap="round"
                    name="Text_45_18557" transform="translate(448,-134.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="31901936" name=""
                    transform="translate(471.5,-100.000)">
                    <g fill="none" stroke="#000000" id="33560048" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#55aa7f" stroke="none" font-size="13px">
                            -40.0
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="33499408" stroke-linecap="round"
                    name="Text_45_18563" transform="translate(448,-99.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="32048336" name=""
                    transform="translate(553.5,-39.000)">
                    <g fill="none" stroke="#000000" id="33524928" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#55aa7f" stroke="none" font-size="13px">
                            -39.9
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="31933728" stroke-linecap="round"
                    name="Text_45_18569" transform="translate(530,-38.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="33565152" name=""
                    transform="translate(-102.5,46)">
                    <g fill="none" stroke="#000000" id="34308976" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#55aa7f" stroke="none" font-size="13px">
                            -44.8
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="33564128" stroke-linecap="round"
                    name="Text_45_19228" transform="translate(-126,46.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34529616" stroke-linecap="round"
                    name="Circle_43_19398" transform="translate(-163.704,114.04)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="35850544" stroke-linecap="round"
                    name="Circle_43_19392" transform="translate(126.63,56.016)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="35843760" name=""
                    transform="translate(-102.5,91)">
                    <g fill="none" stroke="#000000" id="39743520" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#55aa7f" stroke="none" font-size="13px">
                            -55.6
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="35849072" stroke-linecap="round"
                    name="Text_45_19234" transform="translate(-126,91.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="33527696" name=""
                    transform="translate(-231.5,120)">
                    <g fill="none" stroke="#000000" id="40930816" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-10.5" y="4" fill="#55aa7f" stroke="none" font-size="13px">
                            0.0
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="32406208" stroke-linecap="round"
                    name="Text_45_19240" transform="translate(-255,120.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34294240" name=""
                    transform="translate(-598.5,-19.000)">
                    <g fill="none" stroke="#000000" id="35836464" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -38.9
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="41344384" stroke-linecap="round"
                    name="Text_45_19917" transform="translate(-622,-18.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="41089008" name=""
                    transform="translate(-709.5,73)">
                    <g fill="none" stroke="#000000" id="38754704" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -16.6
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="31825296" stroke-linecap="round"
                    name="Text_45_19923" transform="translate(-738,73.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34449952" stroke-linecap="round"
                    name="Circle_43_20085" transform="translate(-583.045,178.273)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="39211040" name=""
                    transform="translate(-492.5,139)">
                    <g fill="none" stroke="#000000" id="33420464" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#55aa7f" stroke="none" font-size="13px">
                            -29.9
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="39857856" stroke-linecap="round"
                    name="Text_45_19929" transform="translate(-516,139.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="39789232" name=""
                    transform="translate(-552.5,198)">
                    <g fill="none" stroke="#000000" id="39585744" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-10.5" y="4" fill="#55aa7f" stroke="none" font-size="13px">
                            0.0
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="39585104" stroke-linecap="round"
                    name="Text_45_19935" transform="translate(-576,198.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="38330096" name=""
                    transform="translate(-617.5,198)">
                    <g fill="none" stroke="#000000" id="38330880" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#55aa7f" stroke="none" font-size="13px">
                            -41.7
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="37624992" stroke-linecap="round"
                    name="Text_45_19941" transform="translate(-641,198.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="39028752" name=""
                    transform="translate(-730.5,254)">
                    <g fill="none" stroke="#000000" id="39029536" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#55aa7f" stroke="none" font-size="13px">
                            -20.1
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="38916336" stroke-linecap="round"
                    name="Text_45_21349" transform="translate(-754,254.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="39753072" name=""
                    transform="translate(-730.5,279)">
                    <g fill="none" stroke="#000000" id="31411040" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-10.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            8.9
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="31410352" stroke-linecap="round"
                    name="Text_45_21355" transform="translate(-754,279.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="41268000" name=""
                    transform="translate(-746.5,346)">
                    <g fill="none" stroke="#000000" id="33519920" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-10.5" y="4" fill="#55aa7f" stroke="none" font-size="13px">
                            0.0
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="39194480" stroke-linecap="round"
                    name="Text_45_21361" transform="translate(-770,346.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="37898832" name=""
                    transform="translate(-408.5,335)">
                    <g fill="none" stroke="#000000" id="33520688" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-14" y="4" fill="#000000" stroke="none" font-size="13px">
                            -9.3
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="39872816" stroke-linecap="round"
                    name="Text_45_22086" transform="translate(-432,335.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="41436944" stroke-linecap="round"
                    name="Text_45_22092" transform="translate(-432,375.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="41711408" name=""
                    transform="translate(-408.5,375)">
                    <g fill="none" stroke="#000000" id="38974144" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-14" y="4" fill="#000000" stroke="none" font-size="13px">
                            -7.9
                        </text>
                    </g>
                </a>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="41678384" name=""
                    transform="translate(-254.5,-31)">
                    <g fill="none" stroke="#000000" id="35847152" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8.000" fill="#ffffff" height="16.000"
                            stroke="none"></rect>
                        <text x="-17.5" y="4.5" fill="#000000" stroke="none" font-size="13px">
                            -60.9
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="35846416" stroke-linecap="round"
                    name="Text_45_22827" transform="translate(-278,-30.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34288816" name=""
                    transform="translate(-309.5,-31)">
                    <g fill="none" stroke="#000000" id="41700368" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8.000" fill="#ffffff" height="16.000"
                            stroke="none"></rect>
                        <text x="-17.5" y="4.5" fill="#000000" stroke="none" font-size="13px">
                            -59.6
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="39464336" stroke-linecap="round"
                    name="Text_45_24295" transform="translate(-333,-30.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" id="34568352" stroke-linecap="round" name="Rectangle_44_19452"
                    transform="translate(495.904,-60.451)">
                    <rect width="18.396" x="-9.198" opacity="1" y="-2.899" fill="#ffffff" rx="45" height="5.798" ry="45"
                        stroke="none"></rect>
                    <rect width="18.396" x="-9.198" y="-2.899" fill="none" rx="45" height="5.798" ry="45"
                        stroke="#ffffff"></rect>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="31457488" name=""
                    transform="translate(245.5,-11)">
                    <g fill="none" stroke="#000000" id="41689968" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8.000" fill="#ffffff" height="16.000"
                            stroke="none"></rect>
                        <text x="-21" y="4.5" fill="#000000" stroke="none" font-size="13px">
                            -104.8
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="41689360" stroke-linecap="round"
                    name="Text_45_35356" transform="translate(222,-10.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="41667696" name=""
                    transform="translate(245.5,-36)">
                    <g fill="none" stroke="#000000" id="31466736" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8.000" fill="#ffffff" height="16.000"
                            stroke="none"></rect>
                        <text x="-21" y="4.5" fill="#000000" stroke="none" font-size="13px">
                            -104.7
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="41667264" stroke-linecap="round"
                    name="Text_45_35362" transform="translate(222,-35.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33572976" stroke-linecap="round"
                    name="Rectangle_44_37607" transform="translate(822.258,100.07)">
                    <clipPath id="33572976_img_cp">
                        <rect width="136.517" x="-68.258" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="136.517" x="-68.258" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#33572976_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="38755472" stroke-linecap="round"
                    name="Circle_43_37609" transform="translate(819.214,8.204)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="39939744" stroke-linecap="round"
                    name="Circle_43_37611" transform="translate(821.214,73.204)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="33550144" stroke-linecap="square"
                    name="Line_1_37613" stroke-width="4" transform="translate(820.33,39.165) scale(-1,1) rotate(90)">
                    <line y1="0" x1="-25.165" y2="0" x2="25.165"></line>
                    <line stroke="#ff55ff" y1="0" x1="-15.165" y2="0" x2="-5.165"></line>
                    <line stroke="#ff55ff" y1="0" x1="14.835" y2="0" x2="24.835"></line>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="38737248" name=""
                    transform="translate(858.5,20)">
                    <g fill="none" stroke="#000000" id="39195648" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-14" y="4" fill="#000000" stroke="none" font-size="13px">
                            37.5
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="39194960" stroke-linecap="round"
                    name="Text_45_37617" transform="translate(835,20.167)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="39454432" stroke-linecap="round"
                    name="Text_45_38382" transform="translate(814.525,161.979)">
                    <text x="-57" y="6.5" fill="#ffffff" stroke="none" font-size="19px">
                        4#高炉鼓风站
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="33501984" stroke-linecap="round"
                    name="Rectangle_44_39147" transform="translate(374.258,-227.930)">
                    <clipPath id="33501984_img_cp">
                        <rect width="136.517" x="-68.258" y="-41.07" height="82.14"></rect>
                    </clipPath>
                    <image width="136.517" x="-68.258" y="-41.07" preserveAspectRatio="none" height="82.14"
                        xlink:href="../../resource/images/SanWeiIcon/A1a.png" clip-path="url(#33501984_img_cp)">
                    </image>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="35306080" stroke-linecap="round"
                    name="Text_45_39149" transform="translate(388.5,-182)">
                    <text x="-19.5" y="6" fill="#ffffff" stroke="none" font-size="19px">
                        MCCR
                    </text>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="35306544" stroke-linecap="square"
                    name="Polyline_3_39150" stroke-width="4" transform="translate(263.5,-195.5)">
                    <polyline points="-50.5,35.5 -50.5,-35.5 50.5,-35.5"></polyline>
                    <line stroke="#ff55ff" y1="35.5" x1="-50.5" y2="25.5" x2="-50.5"></line>
                    <line stroke="#ff55ff" y1="5.5" x1="-50.5" y2="-4.5" x2="-50.5"></line>
                    <line stroke="#ff55ff" y1="-24.5" x1="-50.5" y2="-34.5" x2="-50.5"></line>
                    <line stroke="#ff55ff" y1="-35.5" x1="-50.5" y2="-35.5" x2="-40.5"></line>
                    <line stroke="#ff55ff" y1="-35.5" x1="-20.500" y2="-35.5" x2="-10.5"></line>
                    <line stroke="#ff55ff" y1="-35.5" x1="9.5" y2="-35.5" x2="19.5"></line>
                    <line stroke="#ff55ff" y1="-35.5" x1="39.5" y2="-35.5" x2="49.5"></line>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="35262320" stroke-linecap="square"
                    name="Polyline_3_39152" stroke-width="4" transform="translate(270.5,-179.5)">
                    <polyline points="-37.5,20.5 -37.5,-20.5 37.5,-20.5"></polyline>
                    <line stroke="#ff00ff" y1="20.5" x1="-37.5" y2="10.5" x2="-37.5"></line>
                    <line stroke="#ff00ff" y1="-9.5" x1="-37.5" y2="-19.5" x2="-37.5"></line>
                    <line stroke="#ff00ff" y1="-20.5" x1="-37.5" y2="-20.5" x2="-27.5"></line>
                    <line stroke="#ff00ff" y1="-20.5" x1="-7.5" y2="-20.5" x2="2.5"></line>
                    <line stroke="#ff00ff" y1="-20.5" x1="22.5" y2="-20.5" x2="32.5"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="40422576" stroke-linecap="round"
                    name="Circle_43_39155" transform="translate(212.771,-154.188)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="40423056" stroke-linecap="round"
                    name="Circle_43_39157" transform="translate(232.771,-154.188)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="33869408" name=""
                    transform="translate(290.5,-242.000)">
                    <g fill="none" stroke="#000000" id="34116896" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -58.4
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="33883680" stroke-linecap="round"
                    name="Text_45_39161" transform="translate(267,-241.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34194912" stroke-linecap="round"
                    name="Circle_43_39165" transform="translate(313.214,-231.796)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34195360" stroke-linecap="round"
                    name="Circle_43_39167" transform="translate(313.214,-201.796)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="34310400" name=""
                    transform="translate(290.5,-212.000)">
                    <g fill="none" stroke="#000000" id="33595456" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -33.3
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="33594688" stroke-linecap="round"
                    name="Text_45_39171" transform="translate(267,-211.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="32051696" name=""
                    transform="translate(42.5,-222.000)">
                    <g fill="none" stroke="#000000" id="41307040" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -34.9
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="32081456" stroke-linecap="round"
                    name="Text_45_3566" transform="translate(14,-220.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <a onmousedown="OnNumFg(evt);" cursor="pointer" ict="2" subtype="P" ici="31" id="38211872" name=""
                    transform="translate(42.5,-202.000)">
                    <g fill="none" stroke="#000000" id="37627616" stroke-linecap="round" name="Text_45_43"
                        transform="translate(0.149,0)">
                        <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none">
                        </rect>
                        <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">
                            -36.8
                        </text>
                    </g>
                </a>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" subtype="P" id="34298640" stroke-linecap="round"
                    name="Text_45_3572" transform="translate(14,-200.833)">
                    <text x="-7" y="4" fill="#ffffff" stroke="none" font-size="13px">
                        P:
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="41452944" stroke-linecap="round"
                    name="Text_45_4379" transform="translate(-140.5,-222.5)">
                    <text x="-25.5" y="4.5" fill="#ffffff" stroke="none" font-size="13px">
                        铁轧一线
                    </text>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="38270640" stroke-linecap="round"
                    name="Text_45_4381" transform="translate(-140.5,-204.5)">
                    <text x="-25.5" y="4.5" fill="#ffffff" stroke="none" font-size="13px">
                        铁轧二线
                    </text>
                </g>
                <g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="39009184" stroke-linecap="square"
                    name="Polyline_3_1218" stroke-width="4" transform="translate(-349.25,106.75)">
                    <polyline points="416.75,-179.25 416.75,135.25 201.25,135.25 200.25,179.25 -416.75,179.25">
                    </polyline>
                    <line stroke="#ff55ff" y1="-179.25" x1="416.75" y2="-169.25" x2="416.75"></line>
                    <line stroke="#ff55ff" y1="-149.25" x1="416.75" y2="-139.25" x2="416.75"></line>
                    <line stroke="#ff55ff" y1="-119.25" x1="416.75" y2="-109.25" x2="416.75"></line>
                    <line stroke="#ff55ff" y1="-89.25" x1="416.75" y2="-79.25" x2="416.75"></line>
                    <line stroke="#ff55ff" y1="-59.25" x1="416.75" y2="-49.25" x2="416.75"></line>
                    <line stroke="#ff55ff" y1="-29.25" x1="416.75" y2="-19.25" x2="416.75"></line>
                    <line stroke="#ff55ff" y1="0.75" x1="416.75" y2="10.750" x2="416.75"></line>
                    <line stroke="#ff55ff" y1="30.75" x1="416.75" y2="40.750" x2="416.75"></line>
                    <line stroke="#ff55ff" y1="60.750" x1="416.75" y2="70.750" x2="416.75"></line>
                    <line stroke="#ff55ff" y1="90.75" x1="416.75" y2="100.750" x2="416.75"></line>
                    <line stroke="#ff55ff" y1="120.750" x1="416.75" y2="130.75" x2="416.75"></line>
                    <line stroke="#ff55ff" y1="135.25" x1="416.75" y2="135.25" x2="406.75"></line>
                    <line stroke="#ff55ff" y1="135.25" x1="386.75" y2="135.25" x2="376.75"></line>
                    <line stroke="#ff55ff" y1="135.25" x1="356.75" y2="135.25" x2="346.75"></line>
                    <line stroke="#ff55ff" y1="135.25" x1="326.75" y2="135.25" x2="316.75"></line>
                    <line stroke="#ff55ff" y1="135.25" x1="296.75" y2="135.25" x2="286.75"></line>
                    <line stroke="#ff55ff" y1="135.25" x1="266.75" y2="135.25" x2="256.75"></line>
                    <line stroke="#ff55ff" y1="135.25" x1="236.75" y2="135.25" x2="226.75"></line>
                    <line stroke="#ff55ff" y1="135.25" x1="201.25" y2="145.247" x2="201.023"></line>
                    <line stroke="#ff55ff" y1="165.242" x1="200.568" y2="175.240" x2="200.341"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="200.25" y2="179.25" x2="190.25"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="170.25" y2="179.25" x2="160.25"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="140.25" y2="179.25" x2="130.25"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="110.25" y2="179.25" x2="100.25"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="80.25" y2="179.25" x2="70.25"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="50.25" y2="179.25" x2="40.25"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="20.25" y2="179.25" x2="10.25"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="-9.750" y2="179.25" x2="-19.75"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="-39.750" y2="179.25" x2="-49.75"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="-69.75" y2="179.25" x2="-79.75"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="-99.75" y2="179.25" x2="-109.75"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="-129.750" y2="179.25" x2="-139.75"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="-159.750" y2="179.25" x2="-169.75"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="-189.750" y2="179.25" x2="-199.75"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="-219.750" y2="179.25" x2="-229.75"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="-249.750" y2="179.25" x2="-259.75"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="-279.750" y2="179.25" x2="-289.75"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="-309.75" y2="179.25" x2="-319.75"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="-339.75" y2="179.25" x2="-349.75"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="-369.75" y2="179.25" x2="-379.75"></line>
                    <line stroke="#ff55ff" y1="179.25" x1="-399.75" y2="179.25" x2="-409.75"></line>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="39866688" stroke-linecap="round"
                    name="Circle_43_2029" transform="translate(126.404,-68.182)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="39867168" stroke-linecap="round"
                    name="Circle_43_2031" transform="translate(66.404,-68.182)">
                    <ellipse fill="#ffffff" rx="5.214" ry="5.204" stroke="none"></ellipse>
                    <circle cx="0" cy="0" r="5.204"></circle>
                </g>
                <g fill="none" stroke="#ffffff" id="34547168" stroke-linecap="round" name="Rectangle_44_20093"
                    transform="translate(-649.384,286.472)">
                    <rect width="18.396" x="-9.198" opacity="1" y="-2.899" fill="#ffffff" rx="45" height="5.798" ry="45"
                        stroke="none"></rect>
                    <rect width="18.396" x="-9.198" y="-2.899" fill="none" rx="45" height="5.798" ry="45"
                        stroke="#ffffff"></rect>
                </g>
                <g fill="none" stroke="#ffffff" id="41447072" stroke-linecap="round" name="Rectangle_44_20095"
                    transform="translate(-585.497,286.472)">
                    <rect width="18.396" x="-9.198" opacity="1" y="-2.899" fill="#ffffff" rx="45" height="5.798" ry="45"
                        stroke="none"></rect>
                    <rect width="18.396" x="-9.198" y="-2.899" fill="none" rx="45" height="5.798" ry="45"
                        stroke="#ffffff"></rect>
                </g>
                <g fill="none" stroke="#ffffff" id="33600800" stroke-linecap="round" name="Rectangle_44_20103"
                    transform="translate(-683.271,286.472)">
                    <rect width="18.396" x="-9.198" opacity="1" y="-2.899" fill="#ffffff" rx="45" height="5.798" ry="45"
                        stroke="none"></rect>
                    <rect width="18.396" x="-9.198" y="-2.899" fill="none" rx="45" height="5.798" ry="45"
                        stroke="#ffffff"></rect>
                </g>
                <g fill="none" stroke="#ffffff" id="39867648" stroke-linecap="round" name="Rectangle_44_2846"
                    transform="translate(-365.497,286.472)">
                    <rect width="18.396" x="-9.198" opacity="1" y="-2.899" fill="#ffffff" rx="45" height="5.798" ry="45"
                        stroke="none"></rect>
                    <rect width="18.396" x="-9.198" y="-2.899" fill="none" rx="45" height="5.798" ry="45"
                        stroke="#ffffff"></rect>
                </g>
                <g fill="none" stroke="#ffffff" id="39792448" stroke-linecap="round" name="Rectangle_44_2848"
                    transform="translate(67.114,16.858)">
                    <rect width="18.396" x="-9.198" opacity="1" y="-2.899" fill="#ffffff" rx="45" height="5.798" ry="45"
                        stroke="none"></rect>
                    <rect width="18.396" x="-9.198" y="-2.899" fill="none" rx="45" height="5.798" ry="45"
                        stroke="#ffffff"></rect>
                </g>
                <g fill="none" stroke="#ffffff" id="39792992" stroke-linecap="round" name="Rectangle_44_2850"
                    transform="translate(67.114,56.858)">
                    <rect width="18.396" x="-9.198" opacity="1" y="-2.899" fill="#ffffff" rx="45" height="5.798" ry="45"
                        stroke="none"></rect>
                    <rect width="18.396" x="-9.198" y="-2.899" fill="none" rx="45" height="5.798" ry="45"
                        stroke="#ffffff"></rect>
                </g>
                <g fill="none" stroke="#ffffff" id="39481552" stroke-linecap="round" name="Rectangle_44_2852"
                    transform="translate(67.114,101.858)">
                    <rect width="18.396" x="-9.198" opacity="1" y="-2.899" fill="#ffffff" rx="45" height="5.798" ry="45"
                        stroke="none"></rect>
                    <rect width="18.396" x="-9.198" y="-2.899" fill="none" rx="45" height="5.798" ry="45"
                        stroke="#ffffff"></rect>
                </g>
                <a onmousedown="FireAction(evt,'39865664')" cursor="pointer" name="HotButton_46_676">
                    <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="39865664" stroke-linecap="round"
                        name="HotButton_46_676" transform="translate(807.375,-481.125)">
                        <clipPath id="39865664_img_cp">
                            <rect width="52.75" x="-26.375" y="-24.875" height="49.75"></rect>
                        </clipPath>
                        <image width="52.75" x="-26.375" y="-24.875" preserveAspectRatio="none" height="49.75"
                            xlink:href="../../resource/jingtang/icon2.png" clip-path="url(#39865664_img_cp)">
                        </image>
                    </g>
                    <rect width="52.75" opacity="0" height="49.75" transform="translate(781,-506)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'41416928')" cursor="pointer" name="HotButton_46_5349">
                    <rect width="149" opacity="0" height="85" transform="translate(753,-71)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'38796288')" cursor="pointer" name="HotButton_46_5347">
                    <rect width="149" opacity="0" height="85" transform="translate(-106,264)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'41725440')" cursor="pointer" name="HotButton_46_5348">
                    <rect width="132" opacity="0" height="85" transform="translate(499,-142)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'39435408')" cursor="pointer" name="HotButton_46_5350">
                    <rect width="149" opacity="0" height="85" transform="translate(744,61)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'38466736')" cursor="pointer" name="HotButton_46_5351">
                    <rect width="143" opacity="0" height="85" transform="translate(755,198)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'32734384')" cursor="pointer" name="HotButton_46_5346">
                    <rect width="149" opacity="0" height="85" transform="translate(-569,340)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'38437072')" cursor="pointer" name="HotButton_46_5352">
                    <rect width="149" opacity="0" height="85" transform="translate(750,314)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'38377920')" cursor="pointer" name="HotButton_46_5353">
                    <rect width="225" opacity="0" height="125" transform="translate(367,327)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'38397664')" cursor="pointer" name="HotButton_46_5329">
                    <rect width="145" opacity="0" height="85" transform="translate(-788,-30)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'39200592')" cursor="pointer" name="HotButton_46_5322">
                    <rect width="206" opacity="0" height="92" transform="translate(60,-160)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'38475360')" cursor="pointer" name="HotButton_46_5345">
                    <rect width="149" opacity="0" height="85" transform="translate(-902,241)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'31463328')" cursor="pointer" name="HotButton_46_5321">
                    <rect width="145" opacity="0" height="85" transform="translate(397,-350)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'37935792')" cursor="pointer" name="HotButton_46_5314">
                    <rect width="179" opacity="0" height="85" transform="translate(57,-360)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'39482096')" cursor="pointer" name="HotButton_46_4491">
                    <rect width="158" opacity="0" height="101" transform="translate(-650,-298)"></rect>
                </a>
                <a cursor="pointer" name="HotButton_46_5316">
                    <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="35510192" stroke-linecap="round"
                        name="HotButton_46_5316" transform="translate(407.5,-345.5)">
                        <line stroke="#ffffff" y1="-2.5" x1="-2.5" y2="-2.5" stroke-width="2" x2="2.5"></line>
                        <line stroke="#ffffff" y1="-2.5" x1="-2.5" y2="2.5" stroke-width="2" x2="-2.5"></line>
                        <line stroke="#7f7f7f" y1="-2.5" x1="2.5" y2="2.5" stroke-width="2" x2="2.5"></line>
                        <line stroke="#7f7f7f" y1="2.5" x1="-2.5" y2="2.5" stroke-width="2" x2="2.5"></line>
                        <text x="-20.5" y="4.5" fill="#ffffff" stroke="none" font-size="13px">
                            Button
                        </text>
                    </g>
                    <rect width="5" opacity="0" height="5" transform="translate(405,-348)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'39345632')" cursor="pointer" name="HotButton_46_5323">
                    <rect width="227" opacity="0" height="93" transform="translate(-473,-158)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'38387792')" cursor="pointer" name="HotButton_46_5339">
                    <rect width="149" opacity="0" height="85" transform="translate(-673,96)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'34285184')" cursor="pointer" name="HotButton_46_228">
                    <g fill="none" stroke="#ffffff" stroke-linejoin="bevel" id="34285184" stroke-linecap="round"
                        name="HotButton_46_228" transform="translate(637.375,-481.125)">
                        <clipPath id="34285184_img_cp">
                            <rect width="52.75" x="-26.375" y="-24.875" height="49.75"></rect>
                        </clipPath>
                        <image width="52.75" x="-26.375" y="-24.875" preserveAspectRatio="none" height="49.75"
                            xlink:href="../../resource/jingtang/icon1.png" clip-path="url(#34285184_img_cp)">
                        </image>
                    </g>
                    <rect width="52.75" opacity="0" height="49.75" transform="translate(611,-506)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'41657520')" cursor="pointer" name="HotButton_46_5324">
                    <rect width="134" opacity="0" height="75" transform="translate(-163,-165)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'38407536')" cursor="pointer" name="HotButton_46_5328">
                    <rect width="141" opacity="0" height="85" transform="translate(-178,90)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'38446960')" cursor="pointer" name="HotButton_46_5326">
                    <rect width="137" opacity="0" height="85" transform="translate(302,-260)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'41668608')" cursor="pointer" name="HotButton_46_5325">
                    <rect width="122" opacity="0" height="78" transform="translate(-158,-68)"></rect>
                </a>
                <a onmousedown="FireAction(evt,'38427184')" cursor="pointer" name="HotButton_46_5327">
                    <rect width="138" opacity="0" height="82" transform="translate(237,35)"></rect>
                </a>
                <g id="AllTags"></g>
            </g>
        </svg>`}
            width={952}
            height={420}
          /> */}
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
    width: screenHeight + StatusBar.currentHeight - 2,
    height: hp(1920 / BASE_HEIGHT) - hp(165 / BASE_HEIGHT),
    backgroundColor: 'pink',
    borderColor: 'red',
  },
  webview: {
    position: 'relative',
    overflow: 'hidden',
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
