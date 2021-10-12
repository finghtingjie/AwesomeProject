import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Dimensions, StatusBar } from 'react-native';

import { SvgXml } from 'react-native-svg';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { screenWidth, screenHeight, scale } from '../../utils/device';

const BASE_WIDTH = 10.8;

let BASE_HEIGHT = 19.2;
const formatVal = Number(screenHeight).toFixed(0);
if (scale === 2.75 && formatVal === 759) {
  // 1080*2220
  BASE_HEIGHT = 22.2;
} else if (scale === 2.75 && formatVal === 802) {
  // 1080*2340
  BASE_HEIGHT = 23.4;
}

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
<a onmousedown="OnNumFg(evt);" cursor="pointer" ICT="2" subtype="P" ICI="31" id="46053936" name="" transform="translate(389.5,-301.000)">
  <g fill="none" stroke="#000000" id="50606624" stroke-linecap="round" name="Text_45_43" transform="translate(0.149,0)">
    <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none"/>
    <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">154.2</text>
  </g>
</a>
<a onmousedown="OnNumFg(evt);" cursor="pointer" ICT="2" subtype="P" ICI="31" id="46315216" name="" transform="translate(264.5,-301.000)">
  <g fill="none" stroke="#000000" id="46306768" stroke-linecap="round" name="Text_45_43" transform="translate(0.149,0)">
    <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none"/>
    <text x="-21" y="4" fill="#000000" stroke="none" font-size="13px">-154.2</text>
  </g>
</a>
<a onmousedown="OnNumFg(evt);" cursor="pointer" ICT="2" subtype="P" ICI="31" id="46044848" name="" transform="translate(-472.5,-364.000)">
  <g fill="none" stroke="#000000" id="46042832" stroke-linecap="round" name="Text_45_43" transform="translate(0.149,0)">
    <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none"/>
    <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">-42.5</text>
  </g>
</a>
<a onmousedown="OnNumFg(evt);" cursor="pointer" ICT="2" subtype="P" ICI="31" id="46151792" name="" transform="translate(-472.5,-344.000)">
  <g fill="none" stroke="#000000" id="46065296" stroke-linecap="round" name="Text_45_43" transform="translate(0.149,0)">
    <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none"/>
    <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">-15.6</text>
  </g>
</a>
<a onmousedown="OnNumFg(evt);" cursor="pointer" ICT="2" subtype="P" ICI="31" id="46085952" name="" transform="translate(42.5,-363.000)">
  <g fill="none" stroke="#000000" id="46124896" stroke-linecap="round" name="Text_45_43" transform="translate(0.149,0)">
    <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none"/>
    <text x="-14" y="4" fill="#000000" stroke="none" font-size="13px">45.9</text>
  </g>
</a>
<a onmousedown="OnNumFg(evt);" cursor="pointer" ICT="2" subtype="P" ICI="31" id="46273904" name="" transform="translate(42.5,-343.000)">
  <g fill="none" stroke="#000000" id="46036848" stroke-linecap="round" name="Text_45_43" transform="translate(0.149,0)">
    <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none"/>
    <text x="-14" y="4" fill="#000000" stroke="none" font-size="13px">15.3</text>
  </g>
</a>
<a onmousedown="OnNumFg(evt);" cursor="pointer" ICT="2" subtype="P" ICI="31" id="46189904" name="" transform="translate(42.5,-268.000)">
  <g fill="none" stroke="#000000" id="46132784" stroke-linecap="round" name="Text_45_43" transform="translate(0.149,0)">
    <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none"/>
    <text x="-14" y="4" fill="#000000" stroke="none" font-size="13px">54.0</text>
  </g>
</a>
<a onmousedown="OnNumFg(evt);" cursor="pointer" ICT="2" subtype="P" ICI="31" id="46100064" name="" transform="translate(42.5,-243.000)">
  <g fill="none" stroke="#000000" id="46295840" stroke-linecap="round" name="Text_45_43" transform="translate(0.149,0)">
    <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none"/>
    <text x="-14" y="4" fill="#000000" stroke="none" font-size="13px">55.4</text>
  </g>
</a>
<a onmousedown="OnNumFg(evt);" cursor="pointer" ICT="2" subtype="P" ICI="31" id="46278816" name="" transform="translate(129.5,-257.000)">
  <g fill="none" stroke="#000000" id="46204928" stroke-linecap="round" name="Text_45_43" transform="translate(0.149,0)">
    <rect width="38.094" x="-19.047" opacity="1" y="-8" fill="#ffffff" height="16" stroke="none"/>
    <text x="-17.5" y="4" fill="#000000" stroke="none" font-size="13px">-71.0</text>
  </g>
</a>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46262160" stroke-linecap="square" name="Polyline_3_20683" stroke-width="4" transform="translate(663.5,193.875)">
  <polyline points="-98.5,210.125 -98.5,-210.125 98.5,-210.125"/>
  <polyline points="-101.92,179.522 -98.5,170.125 -95.080,179.522" stroke="#ff55ff"/>
  <polyline points="-101.92,119.522 -98.5,110.125 -95.080,119.522" stroke="#ff55ff"/>
  <polyline points="-101.92,59.522 -98.5,50.125 -95.080,59.522" stroke="#ff55ff"/>
  <polyline points="-101.92,-0.478 -98.5,-9.875 -95.080,-0.478" stroke="#ff55ff"/>
  <polyline points="-101.92,-60.478 -98.5,-69.875 -95.080,-60.478" stroke="#ff55ff"/>
  <polyline points="-101.92,-120.478 -98.5,-129.875 -95.080,-120.478" stroke="#ff55ff"/>
  <polyline points="-101.92,-180.478 -98.5,-189.875 -95.080,-180.478" stroke="#ff55ff"/>
  <polyline points="-67.897,-213.545 -58.5,-210.125 -67.897,-206.705" stroke="#ff55ff"/>
  <polyline points="-7.897,-213.545 1.5,-210.125 -7.897,-206.705" stroke="#ff55ff"/>
  <polyline points="52.103,-213.545 61.5,-210.125 52.103,-206.705" stroke="#ff55ff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="51002144" stroke-linecap="square" name="Polyline_3_39150" stroke-width="4" transform="translate(263.5,-195.5)">
  <polyline points="-50.5,35.5 -50.5,-35.5 50.5,-35.5"/>
  <line stroke="#ff55ff" y1="25.5" x1="-50.5" y2="15.5" x2="-50.5"/>
  <line stroke="#ff55ff" y1="-4.5" x1="-50.5" y2="-14.5" x2="-50.5"/>
  <line stroke="#ff55ff" y1="-35.5" x1="-40.5" y2="-35.5" x2="-30.5"/>
  <line stroke="#ff55ff" y1="-35.5" x1="-10.5" y2="-35.5" x2="-0.5"/>
  <line stroke="#ff55ff" y1="-35.5" x1="19.5" y2="-35.5" x2="29.5"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="44950304" stroke-linecap="square" name="Polyline_3_4245" stroke-width="4" transform="translate(-221.875,-323.75)">
  <polyline points="297.875,-10.75 -297.875,-10.75 -297.875,10.75"/>
  <line stroke="#ff55ff" y1="-10.75" x1="287.875" y2="-10.75" x2="277.875"/>
  <line stroke="#ff55ff" y1="-10.75" x1="257.875" y2="-10.75" x2="247.875"/>
  <line stroke="#ff55ff" y1="-10.75" x1="227.875" y2="-10.75" x2="217.875"/>
  <line stroke="#ff55ff" y1="-10.75" x1="197.875" y2="-10.75" x2="187.875"/>
  <line stroke="#ff55ff" y1="-10.75" x1="167.875" y2="-10.75" x2="157.875"/>
  <line stroke="#ff55ff" y1="-10.75" x1="137.875" y2="-10.75" x2="127.875"/>
  <line stroke="#ff55ff" y1="-10.75" x1="107.875" y2="-10.75" x2="97.875"/>
  <line stroke="#ff55ff" y1="-10.75" x1="77.875" y2="-10.75" x2="67.875"/>
  <line stroke="#ff55ff" y1="-10.75" x1="47.875" y2="-10.75" x2="37.875"/>
  <line stroke="#ff55ff" y1="-10.75" x1="17.875" y2="-10.75" x2="7.875"/>
  <line stroke="#ff55ff" y1="-10.75" x1="-12.125" y2="-10.75" x2="-22.125"/>
  <line stroke="#ff55ff" y1="-10.75" x1="-42.125" y2="-10.75" x2="-52.125"/>
  <line stroke="#ff55ff" y1="-10.75" x1="-72.125" y2="-10.75" x2="-82.125"/>
  <line stroke="#ff55ff" y1="-10.75" x1="-102.125" y2="-10.75" x2="-112.125"/>
  <line stroke="#ff55ff" y1="-10.75" x1="-132.125" y2="-10.75" x2="-142.125"/>
  <line stroke="#ff55ff" y1="-10.75" x1="-162.125" y2="-10.75" x2="-172.125"/>
  <line stroke="#ff55ff" y1="-10.75" x1="-192.125" y2="-10.75" x2="-202.125"/>
  <line stroke="#ff55ff" y1="-10.75" x1="-222.125" y2="-10.75" x2="-232.125"/>
  <line stroke="#ff55ff" y1="-10.75" x1="-252.125" y2="-10.75" x2="-262.125"/>
  <line stroke="#ff55ff" y1="-10.75" x1="-282.125" y2="-10.75" x2="-292.125"/>
  <line stroke="#ff55ff" y1="-0.75" x1="-297.875" y2="9.25" x2="-297.875"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="43118256" stroke-linecap="square" name="Line_1_19246" stroke-width="4" transform="translate(22.887,-147.457) scale(-1,1)">
  <line y1="0" x1="-65.887" y2="0" x2="65.887"/>
  <line stroke="#ff55ff" y1="0" x1="-55.887" y2="0" x2="-45.887"/>
  <line stroke="#ff55ff" y1="0" x1="-25.887" y2="0" x2="-15.887"/>
  <line stroke="#ff55ff" y1="0" x1="4.113" y2="0" x2="14.113"/>
  <line stroke="#ff55ff" y1="0" x1="34.113" y2="0" x2="44.113"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46255600" stroke-linecap="square" name="Polyline_3_20685" stroke-width="4" transform="translate(538,136.25)">
  <polyline points="-5,222.5 -5,-222.5 5,-222.5"/>
  <line stroke="#ff55ff" y1="212.5" x1="-5" y2="202.5" x2="-5"/>
  <line stroke="#ff55ff" y1="182.5" x1="-5" y2="172.5" x2="-5"/>
  <line stroke="#ff55ff" y1="152.5" x1="-5" y2="142.5" x2="-5"/>
  <line stroke="#ff55ff" y1="122.5" x1="-5" y2="112.5" x2="-5"/>
  <line stroke="#ff55ff" y1="92.5" x1="-5" y2="82.5" x2="-5"/>
  <line stroke="#ff55ff" y1="62.5" x1="-5" y2="52.5" x2="-5"/>
  <line stroke="#ff55ff" y1="32.5" x1="-5" y2="22.5" x2="-5"/>
  <line stroke="#ff55ff" y1="2.5" x1="-5" y2="-7.500" x2="-5"/>
  <line stroke="#ff55ff" y1="-27.5" x1="-5" y2="-37.5" x2="-5"/>
  <line stroke="#ff55ff" y1="-57.5" x1="-5" y2="-67.5" x2="-5"/>
  <line stroke="#ff55ff" y1="-87.500" x1="-5" y2="-97.5" x2="-5"/>
  <line stroke="#ff55ff" y1="-117.5" x1="-5" y2="-127.500" x2="-5"/>
  <line stroke="#ff55ff" y1="-147.5" x1="-5" y2="-157.5" x2="-5"/>
  <line stroke="#ff55ff" y1="-177.5" x1="-5" y2="-187.5" x2="-5"/>
  <line stroke="#ff55ff" y1="-207.500" x1="-5" y2="-217.5" x2="-5"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46218416" stroke-linecap="round" name="Line_1_20083" stroke-width="4" transform="translate(-647.932,325.126)">
  <line y1="144.954" x1="0" y2="-144.954" x2="0"/>
  <line stroke="#ff55ff" y1="134.954" x1="0" y2="124.954" x2="0"/>
  <line stroke="#ff55ff" y1="104.954" x1="0" y2="94.954" x2="0"/>
  <line stroke="#ff55ff" y1="74.954" x1="0" y2="64.954" x2="0"/>
  <line stroke="#ff55ff" y1="44.954" x1="0" y2="34.954" x2="0"/>
  <line stroke="#ff55ff" y1="14.954" x1="0" y2="4.954" x2="0"/>
  <line stroke="#ff55ff" y1="-15.046" x1="0" y2="-25.046" x2="0"/>
  <line stroke="#ff55ff" y1="-45.046" x1="0" y2="-55.046" x2="0"/>
  <line stroke="#ff55ff" y1="-75.046" x1="0" y2="-85.046" x2="0"/>
  <line stroke="#ff55ff" y1="-105.046" x1="0" y2="-115.046" x2="0"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="43504112" stroke-linecap="square" name="Line_1_19354" stroke-width="4" transform="translate(153.248,-217.842)">
  <line y1="61.721" x1="0" y2="-61.721" x2="0"/>
  <polyline points="-3.42,31.118 0,21.721 3.42,31.118" stroke="#ff55ff"/>
  <polyline points="-3.42,-28.882 0,-38.279 3.42,-28.882" stroke="#ff55ff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="51080272" stroke-linecap="square" name="Polyline_3_1218" stroke-width="4" transform="translate(-349.25,106.75)">
  <polyline points="416.75,-179.25 416.75,135.25 201.25,135.25 200.25,179.25 -416.75,179.25"/>
  <line stroke="#ff55ff" y1="-169.25" x1="416.75" y2="-159.25" x2="416.75"/>
  <line stroke="#ff55ff" y1="-139.25" x1="416.75" y2="-129.25" x2="416.75"/>
  <line stroke="#ff55ff" y1="-109.25" x1="416.75" y2="-99.25" x2="416.75"/>
  <line stroke="#ff55ff" y1="-79.25" x1="416.75" y2="-69.25" x2="416.75"/>
  <line stroke="#ff55ff" y1="-49.25" x1="416.75" y2="-39.25" x2="416.75"/>
  <line stroke="#ff55ff" y1="-19.25" x1="416.75" y2="-9.25" x2="416.75"/>
  <line stroke="#ff55ff" y1="10.750" x1="416.75" y2="20.75" x2="416.75"/>
  <line stroke="#ff55ff" y1="40.750" x1="416.75" y2="50.75" x2="416.75"/>
  <line stroke="#ff55ff" y1="70.750" x1="416.75" y2="80.75" x2="416.75"/>
  <line stroke="#ff55ff" y1="100.750" x1="416.75" y2="110.75" x2="416.75"/>
  <line stroke="#ff55ff" y1="135.25" x1="406.75" y2="135.25" x2="396.75"/>
  <line stroke="#ff55ff" y1="135.25" x1="376.75" y2="135.25" x2="366.75"/>
  <line stroke="#ff55ff" y1="135.25" x1="346.75" y2="135.25" x2="336.75"/>
  <line stroke="#ff55ff" y1="135.25" x1="316.75" y2="135.25" x2="306.75"/>
  <line stroke="#ff55ff" y1="135.25" x1="286.75" y2="135.25" x2="276.75"/>
  <line stroke="#ff55ff" y1="135.25" x1="256.75" y2="135.25" x2="246.75"/>
  <line stroke="#ff55ff" y1="135.25" x1="226.75" y2="135.25" x2="216.75"/>
  <line stroke="#ff55ff" y1="145.247" x1="201.023" y2="155.245" x2="200.796"/>
  <line stroke="#ff55ff" y1="179.25" x1="190.25" y2="179.25" x2="180.25"/>
  <line stroke="#ff55ff" y1="179.25" x1="160.25" y2="179.25" x2="150.25"/>
  <line stroke="#ff55ff" y1="179.25" x1="130.25" y2="179.25" x2="120.25"/>
  <line stroke="#ff55ff" y1="179.25" x1="100.25" y2="179.25" x2="90.25"/>
  <line stroke="#ff55ff" y1="179.25" x1="70.25" y2="179.25" x2="60.25"/>
  <line stroke="#ff55ff" y1="179.25" x1="40.25" y2="179.25" x2="30.25"/>
  <line stroke="#ff55ff" y1="179.25" x1="10.25" y2="179.25" x2="0.25"/>
  <line stroke="#ff55ff" y1="179.25" x1="-19.75" y2="179.25" x2="-29.75"/>
  <line stroke="#ff55ff" y1="179.25" x1="-49.75" y2="179.25" x2="-59.75"/>
  <line stroke="#ff55ff" y1="179.25" x1="-79.75" y2="179.25" x2="-89.75"/>
  <line stroke="#ff55ff" y1="179.25" x1="-109.75" y2="179.25" x2="-119.75"/>
  <line stroke="#ff55ff" y1="179.25" x1="-139.75" y2="179.25" x2="-149.75"/>
  <line stroke="#ff55ff" y1="179.25" x1="-169.75" y2="179.25" x2="-179.75"/>
  <line stroke="#ff55ff" y1="179.25" x1="-199.75" y2="179.25" x2="-209.75"/>
  <line stroke="#ff55ff" y1="179.25" x1="-229.75" y2="179.25" x2="-239.75"/>
  <line stroke="#ff55ff" y1="179.25" x1="-259.75" y2="179.25" x2="-269.75"/>
  <line stroke="#ff55ff" y1="179.25" x1="-289.75" y2="179.25" x2="-299.75"/>
  <line stroke="#ff55ff" y1="179.25" x1="-319.75" y2="179.25" x2="-329.75"/>
  <line stroke="#ff55ff" y1="179.25" x1="-349.75" y2="179.25" x2="-359.75"/>
  <line stroke="#ff55ff" y1="179.25" x1="-379.75" y2="179.25" x2="-389.75"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46321264" stroke-linecap="round" name="Polyline_3_20679" stroke-width="4" transform="translate(315,144.375)">
  <polyline points="121.25,205.625 121.25,-166.875 -121.25,-166.875 -121.25,-205.625"/>
  <polyline points="117.830,175.022 121.25,165.625 124.67,175.022" stroke="#ff55ff"/>
  <polyline points="117.830,115.022 121.25,105.625 124.67,115.022" stroke="#ff55ff"/>
  <polyline points="117.830,55.022 121.25,45.625 124.67,55.022" stroke="#ff55ff"/>
  <polyline points="117.830,-4.978 121.25,-14.375 124.67,-4.978" stroke="#ff55ff"/>
  <polyline points="117.830,-64.978 121.25,-74.375 124.67,-64.978" stroke="#ff55ff"/>
  <polyline points="117.830,-124.978 121.25,-134.375 124.67,-124.978" stroke="#ff55ff"/>
  <polyline points="90.647,-163.455 81.25,-166.875 90.647,-170.295" stroke="#ff55ff"/>
  <polyline points="30.647,-163.455 21.25,-166.875 30.647,-170.295" stroke="#ff55ff"/>
  <polyline points="-29.353,-163.455 -38.75,-166.875 -29.353,-170.295" stroke="#ff55ff"/>
  <polyline points="-89.353,-163.455 -98.75,-166.875 -89.353,-170.295" stroke="#ff55ff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="45954976" stroke-linecap="square" name="Polyline_3_4246" stroke-width="4" transform="translate(-150,-236.25)">
  <polyline points="-220,76.25 -220,-21.25 220,-21.25 220,-76.25"/>
  <polyline points="-216.580,9.353 -220,18.75 -223.42,9.353" stroke="#ff55ff"/>
  <polyline points="189.397,-17.830 180,-21.25 189.397,-24.67" stroke="#ff55ff"/>
  <polyline points="129.397,-17.830 120.000,-21.25 129.397,-24.67" stroke="#ff55ff"/>
  <polyline points="69.397,-17.830 60,-21.25 69.397,-24.67" stroke="#ff55ff"/>
  <polyline points="9.397,-17.830 0,-21.25 9.397,-24.67" stroke="#ff55ff"/>
  <polyline points="-50.603,-17.830 -60,-21.25 -50.603,-24.67" stroke="#ff55ff"/>
  <polyline points="-110.603,-17.830 -120,-21.25 -110.603,-24.67" stroke="#ff55ff"/>
  <polyline points="-170.603,-17.830 -180,-21.25 -170.603,-24.67" stroke="#ff55ff"/>
  <polyline points="223.42,-45.647 220,-36.25 216.580,-45.647" stroke="#ff55ff"/>
</g>
<g fill="none" stroke="#5555ff" stroke-linejoin="bevel" id="46121408" stroke-linecap="square" name="Polyline_3_5254" stroke-width="4" transform="translate(-105.625,-189.875)">
  <polyline points="223.125,23.125 223.125,-23.125 -223.125,-23.125 -223.125,23.125"/>
  <polyline points="226.545,7.478 223.125,16.875 219.705,7.478" stroke="#55aaff"/>
  <polyline points="-192.522,-26.545 -183.125,-23.125 -192.522,-19.705" stroke="#55aaff"/>
  <polyline points="-132.522,-26.545 -123.125,-23.125 -132.522,-19.705" stroke="#55aaff"/>
  <polyline points="-72.522,-26.545 -63.125,-23.125 -72.522,-19.705" stroke="#55aaff"/>
  <polyline points="-12.522,-26.545 -3.125,-23.125 -12.522,-19.705" stroke="#55aaff"/>
  <polyline points="47.478,-26.545 56.875,-23.125 47.478,-19.705" stroke="#55aaff"/>
  <polyline points="107.478,-26.545 116.875,-23.125 107.478,-19.705" stroke="#55aaff"/>
  <polyline points="167.478,-26.545 176.875,-23.125 167.478,-19.705" stroke="#55aaff"/>
  <polyline points="-226.545,-7.478 -223.125,-16.875 -219.705,-7.478" stroke="#55aaff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46073104" stroke-linecap="round" name="Polyline_3_20202" stroke-width="4" transform="translate(679,298.375)">
  <polyline points="-92,86.625 -66,70.625 -65.25,-86.625 92,-86.625"/>
  <line stroke="#ff55ff" y1="81.384" x1="-83.483" y2="76.143" x2="-74.967"/>
  <line stroke="#ff55ff" y1="60.625" x1="-65.952" y2="50.625" x2="-65.905"/>
  <line stroke="#ff55ff" y1="30.625" x1="-65.809" y2="20.626" x2="-65.762"/>
  <line stroke="#ff55ff" y1="0.626" x1="-65.666" y2="-9.374" x2="-65.618"/>
  <line stroke="#ff55ff" y1="-29.374" x1="-65.523" y2="-39.374" x2="-65.475"/>
  <line stroke="#ff55ff" y1="-59.374" x1="-65.380" y2="-69.373" x2="-65.332"/>
  <line stroke="#ff55ff" y1="-86.625" x1="-55.25" y2="-86.625" x2="-45.25"/>
  <line stroke="#ff55ff" y1="-86.625" x1="-25.25" y2="-86.625" x2="-15.25"/>
  <line stroke="#ff55ff" y1="-86.625" x1="4.750" y2="-86.625" x2="14.75"/>
  <line stroke="#ff55ff" y1="-86.625" x1="34.75" y2="-86.625" x2="44.750"/>
  <line stroke="#ff55ff" y1="-86.625" x1="64.75" y2="-86.625" x2="74.750"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46292864" stroke-linecap="round" name="Polyline_3_20682" stroke-width="4" transform="translate(338.25,140)">
  <polyline points="121.25,198.75 121.25,-182.5 -121.25,-182.5 -121.25,-198.75"/>
  <polyline points="117.830,168.147 121.25,158.75 124.67,168.147" stroke="#ff55ff"/>
  <polyline points="117.830,108.147 121.25,98.75 124.67,108.147" stroke="#ff55ff"/>
  <polyline points="117.830,48.147 121.25,38.75 124.67,48.147" stroke="#ff55ff"/>
  <polyline points="117.830,-11.853 121.25,-21.25 124.67,-11.853" stroke="#ff55ff"/>
  <polyline points="117.830,-71.853 121.25,-81.25 124.67,-71.853" stroke="#ff55ff"/>
  <polyline points="117.830,-131.853 121.25,-141.25 124.67,-131.853" stroke="#ff55ff"/>
  <polyline points="90.647,-179.080 81.25,-182.5 90.647,-185.92" stroke="#ff55ff"/>
  <polyline points="30.647,-179.080 21.25,-182.5 30.647,-185.92" stroke="#ff55ff"/>
  <polyline points="-29.353,-179.080 -38.75,-182.5 -29.353,-185.92" stroke="#ff55ff"/>
  <polyline points="-89.353,-179.080 -98.75,-182.5 -89.353,-185.92" stroke="#ff55ff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46229216" stroke-linecap="square" name="Polyline_3_18258" stroke-width="4" transform="translate(160,192.5)">
  <polyline points="-526.25,-257.5 -526.25,257.5 526.25,257.5"/>
  <line stroke="#ff55ff" y1="-237.5" x1="-526.25" y2="-227.5" x2="-526.25"/>
  <line stroke="#ff55ff" y1="-207.5" x1="-526.25" y2="-197.5" x2="-526.25"/>
  <line stroke="#ff55ff" y1="-177.5" x1="-526.25" y2="-167.5" x2="-526.25"/>
  <line stroke="#ff55ff" y1="-147.5" x1="-526.25" y2="-137.5" x2="-526.25"/>
  <line stroke="#ff55ff" y1="-117.5" x1="-526.25" y2="-107.5" x2="-526.25"/>
  <line stroke="#ff55ff" y1="-87.5" x1="-526.25" y2="-77.5" x2="-526.25"/>
  <line stroke="#ff55ff" y1="-57.5" x1="-526.25" y2="-47.5" x2="-526.25"/>
  <line stroke="#ff55ff" y1="-27.5" x1="-526.25" y2="-17.5" x2="-526.25"/>
  <line stroke="#ff55ff" y1="2.5" x1="-526.25" y2="12.5" x2="-526.25"/>
  <line stroke="#ff55ff" y1="32.5" x1="-526.25" y2="42.5" x2="-526.25"/>
  <line stroke="#ff55ff" y1="62.5" x1="-526.25" y2="72.500" x2="-526.25"/>
  <line stroke="#ff55ff" y1="92.500" x1="-526.25" y2="102.500" x2="-526.25"/>
  <line stroke="#ff55ff" y1="122.500" x1="-526.25" y2="132.500" x2="-526.25"/>
  <line stroke="#ff55ff" y1="152.5" x1="-526.25" y2="162.5" x2="-526.25"/>
  <line stroke="#ff55ff" y1="182.5" x1="-526.25" y2="192.5" x2="-526.25"/>
  <line stroke="#ff55ff" y1="212.500" x1="-526.25" y2="222.500" x2="-526.25"/>
  <line stroke="#ff55ff" y1="242.500" x1="-526.25" y2="252.500" x2="-526.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="-506.25" y2="257.5" x2="-496.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="-476.25" y2="257.5" x2="-466.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="-446.25" y2="257.5" x2="-436.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="-416.25" y2="257.5" x2="-406.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="-386.25" y2="257.5" x2="-376.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="-356.25" y2="257.5" x2="-346.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="-326.25" y2="257.5" x2="-316.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="-296.25" y2="257.5" x2="-286.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="-266.25" y2="257.5" x2="-256.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="-236.250" y2="257.5" x2="-226.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="-206.25" y2="257.5" x2="-196.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="-176.25" y2="257.5" x2="-166.250"/>
  <line stroke="#ff55ff" y1="257.5" x1="-146.250" y2="257.5" x2="-136.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="-116.25" y2="257.5" x2="-106.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="-86.25" y2="257.5" x2="-76.250"/>
  <line stroke="#ff55ff" y1="257.5" x1="-56.250" y2="257.5" x2="-46.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="-26.250" y2="257.5" x2="-16.25"/>
  <line stroke="#ff55ff" y1="257.5" x1="3.75" y2="257.5" x2="13.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="33.75" y2="257.5" x2="43.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="63.75" y2="257.5" x2="73.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="93.75" y2="257.5" x2="103.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="123.75" y2="257.5" x2="133.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="153.75" y2="257.5" x2="163.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="183.75" y2="257.5" x2="193.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="213.75" y2="257.5" x2="223.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="243.75" y2="257.5" x2="253.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="273.75" y2="257.5" x2="283.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="303.75" y2="257.5" x2="313.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="333.75" y2="257.5" x2="343.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="363.75" y2="257.5" x2="373.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="393.75" y2="257.5" x2="403.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="423.75" y2="257.5" x2="433.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="453.75" y2="257.5" x2="463.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="483.75" y2="257.5" x2="493.75"/>
  <line stroke="#ff55ff" y1="257.5" x1="513.75" y2="257.5" x2="523.75"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46266000" stroke-linecap="square" name="Polyline_3_14812" stroke-width="4" transform="translate(52.125,172.625)">
  <polyline points="339.875,236.375 -339.875,236.375 -339.875,-236.375"/>
  <polyline points="309.272,239.795 299.875,236.375 309.272,232.955" stroke="#ff55ff"/>
  <polyline points="249.272,239.795 239.875,236.375 249.272,232.955" stroke="#ff55ff"/>
  <polyline points="189.272,239.795 179.875,236.375 189.272,232.955" stroke="#ff55ff"/>
  <polyline points="129.272,239.795 119.875,236.375 129.272,232.955" stroke="#ff55ff"/>
  <polyline points="69.272,239.795 59.875,236.375 69.272,232.955" stroke="#ff55ff"/>
  <polyline points="9.272,239.795 -0.125,236.375 9.272,232.955" stroke="#ff55ff"/>
  <polyline points="-50.728,239.795 -60.125,236.375 -50.728,232.955" stroke="#ff55ff"/>
  <polyline points="-110.728,239.795 -120.125,236.375 -110.728,232.955" stroke="#ff55ff"/>
  <polyline points="-170.728,239.795 -180.125,236.375 -170.728,232.955" stroke="#ff55ff"/>
  <polyline points="-230.728,239.795 -240.125,236.375 -230.728,232.955" stroke="#ff55ff"/>
  <polyline points="-290.728,239.795 -300.125,236.375 -290.728,232.955" stroke="#ff55ff"/>
  <polyline points="-343.295,205.772 -339.875,196.375 -336.455,205.772" stroke="#ff55ff"/>
  <polyline points="-343.295,145.772 -339.875,136.375 -336.455,145.772" stroke="#ff55ff"/>
  <polyline points="-343.295,85.772 -339.875,76.375 -336.455,85.772" stroke="#ff55ff"/>
  <polyline points="-343.295,25.772 -339.875,16.375 -336.455,25.772" stroke="#ff55ff"/>
  <polyline points="-343.295,-34.228 -339.875,-43.625 -336.455,-34.228" stroke="#ff55ff"/>
  <polyline points="-343.295,-94.228 -339.875,-103.625 -336.455,-94.228" stroke="#ff55ff"/>
  <polyline points="-343.295,-154.228 -339.875,-163.625 -336.455,-154.228" stroke="#ff55ff"/>
  <polyline points="-343.295,-214.228 -339.875,-223.625 -336.455,-214.228" stroke="#ff55ff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46320272" stroke-linecap="round" name="Line_1_19276" stroke-width="4" transform="translate(-404.429,347.982) scale(-1,1)">
  <line y1="0" x1="-36.308" y2="0" x2="36.308"/>
  <line stroke="#ff55ff" y1="0" x1="36.308" y2="0" x2="26.308"/>
  <line stroke="#ff55ff" y1="0" x1="6.308" y2="0" x2="-3.692"/>
  <line stroke="#ff55ff" y1="0" x1="-23.692" y2="0" x2="-33.692"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46063328" stroke-linecap="round" name="Polyline_3_20687" stroke-width="4" transform="translate(503.125,120.625)">
  <polyline points="-6.875,225.625 -6.875,-225.625 6.875,-225.625"/>
  <line stroke="#ff55ff" y1="215.625" x1="-6.875" y2="205.625" x2="-6.875"/>
  <line stroke="#ff55ff" y1="185.625" x1="-6.875" y2="175.625" x2="-6.875"/>
  <line stroke="#ff55ff" y1="155.625" x1="-6.875" y2="145.625" x2="-6.875"/>
  <line stroke="#ff55ff" y1="125.625" x1="-6.875" y2="115.625" x2="-6.875"/>
  <line stroke="#ff55ff" y1="95.625" x1="-6.875" y2="85.625" x2="-6.875"/>
  <line stroke="#ff55ff" y1="65.625" x1="-6.875" y2="55.625" x2="-6.875"/>
  <line stroke="#ff55ff" y1="35.625" x1="-6.875" y2="25.625" x2="-6.875"/>
  <line stroke="#ff55ff" y1="5.625" x1="-6.875" y2="-4.375" x2="-6.875"/>
  <line stroke="#ff55ff" y1="-24.375" x1="-6.875" y2="-34.375" x2="-6.875"/>
  <line stroke="#ff55ff" y1="-54.375" x1="-6.875" y2="-64.375" x2="-6.875"/>
  <line stroke="#ff55ff" y1="-84.375" x1="-6.875" y2="-94.375" x2="-6.875"/>
  <line stroke="#ff55ff" y1="-114.375" x1="-6.875" y2="-124.375" x2="-6.875"/>
  <line stroke="#ff55ff" y1="-144.375" x1="-6.875" y2="-154.375" x2="-6.875"/>
  <line stroke="#ff55ff" y1="-174.375" x1="-6.875" y2="-184.375" x2="-6.875"/>
  <line stroke="#ff55ff" y1="-204.375" x1="-6.875" y2="-214.375" x2="-6.875"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="43505136" stroke-linecap="square" name="Line_1_19378" stroke-width="4" transform="translate(366.26,-127.130)">
  <line y1="0" x1="-143.778" y2="0" x2="143.778"/>
  <line stroke="#ff55ff" y1="0" x1="143.778" y2="0" x2="133.778"/>
  <line stroke="#ff55ff" y1="0" x1="113.778" y2="0" x2="103.778"/>
  <line stroke="#ff55ff" y1="0" x1="83.778" y2="0" x2="73.778"/>
  <line stroke="#ff55ff" y1="0" x1="53.778" y2="0" x2="43.778"/>
  <line stroke="#ff55ff" y1="0" x1="23.778" y2="0" x2="13.778"/>
  <line stroke="#ff55ff" y1="0" x1="-6.222" y2="0" x2="-16.222"/>
  <line stroke="#ff55ff" y1="0" x1="-36.222" y2="0" x2="-46.222"/>
  <line stroke="#ff55ff" y1="0" x1="-66.222" y2="0" x2="-76.222"/>
  <line stroke="#ff55ff" y1="0" x1="-96.222" y2="0" x2="-106.222"/>
  <line stroke="#ff55ff" y1="0" x1="-126.222" y2="0" x2="-136.222"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46198000" stroke-linecap="square" name="Polyline_3_6771" stroke-width="4" transform="translate(37.25,-90)">
  <polyline points="80.25,-33.75 -7.25,-33.75 -7.25,33.75 -80.25,33.75"/>
  <line stroke="#ff55ff" y1="-33.75" x1="70.25" y2="-33.75" x2="60.25"/>
  <line stroke="#ff55ff" y1="-33.75" x1="40.25" y2="-33.75" x2="30.25"/>
  <line stroke="#ff55ff" y1="-33.75" x1="10.25" y2="-33.75" x2="0.25"/>
  <line stroke="#ff55ff" y1="-23.75" x1="-7.25" y2="-13.75" x2="-7.25"/>
  <line stroke="#ff55ff" y1="6.25" x1="-7.25" y2="16.25" x2="-7.25"/>
  <line stroke="#ff55ff" y1="33.75" x1="-17.25" y2="33.75" x2="-27.25"/>
  <line stroke="#ff55ff" y1="33.75" x1="-47.25" y2="33.75" x2="-57.25"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46242624" stroke-linecap="square" name="Line_1_19262" stroke-width="4" transform="translate(-457.196,152.148)">
  <line y1="0" x1="-89.075" y2="0" x2="89.075"/>
  <line stroke="#ff55ff" y1="0" x1="79.075" y2="0" x2="69.075"/>
  <line stroke="#ff55ff" y1="0" x1="49.075" y2="0" x2="39.075"/>
  <line stroke="#ff55ff" y1="0" x1="19.075" y2="0" x2="9.075"/>
  <line stroke="#ff55ff" y1="0" x1="-10.925" y2="0" x2="-20.925"/>
  <line stroke="#ff55ff" y1="0" x1="-40.925" y2="0" x2="-50.925"/>
  <line stroke="#ff55ff" y1="0" x1="-70.925" y2="0" x2="-80.925"/>
</g>
<g fill="none" stroke="#5555ff" stroke-linejoin="bevel" id="45005872" stroke-linecap="square" name="Polyline_3_21138" stroke-width="4" transform="translate(478.5,-233)">
  <polyline points="219.5,-91 144.5,-91 146.5,91 -219.5,91"/>
  <polyline points="188.897,-87.580 179.5,-91 188.897,-94.42" stroke="#55aaff"/>
  <polyline points="148.256,-60.436 144.940,-51.002 141.416,-60.361" stroke="#55aaff"/>
  <polyline points="148.916,-0.440 145.599,8.994 142.076,-0.365" stroke="#55aaff"/>
  <polyline points="149.575,59.556 146.258,68.99 142.735,59.632" stroke="#55aaff"/>
  <polyline points="115.897,94.42 106.5,91 115.897,87.580" stroke="#55aaff"/>
  <polyline points="55.897,94.42 46.5,91 55.897,87.580" stroke="#55aaff"/>
  <polyline points="-4.103,94.42 -13.5,91 -4.103,87.580" stroke="#55aaff"/>
  <polyline points="-64.103,94.42 -73.5,91 -64.103,87.580" stroke="#55aaff"/>
  <polyline points="-124.103,94.42 -133.5,91 -124.103,87.580" stroke="#55aaff"/>
  <polyline points="-184.103,94.42 -193.500,91 -184.103,87.580" stroke="#55aaff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="52579488" stroke-linecap="square" name="Polyline_3_4750" stroke-width="4" transform="translate(-133.875,-236.625)">
  <polyline points="-218.125,76.875 -218.125,3.125 218.125,3.125 218.125,-76.875"/>
  <polyline points="-214.705,33.728 -218.125,43.125 -221.545,33.728" stroke="#ff55ff"/>
  <polyline points="187.522,6.545 178.125,3.125 187.522,-0.295" stroke="#ff55ff"/>
  <polyline points="127.522,6.545 118.125,3.125 127.522,-0.295" stroke="#ff55ff"/>
  <polyline points="67.522,6.545 58.125,3.125 67.522,-0.295" stroke="#ff55ff"/>
  <polyline points="7.522,6.545 -1.875,3.125 7.522,-0.295" stroke="#ff55ff"/>
  <polyline points="-52.478,6.545 -61.875,3.125 -52.478,-0.295" stroke="#ff55ff"/>
  <polyline points="-112.478,6.545 -121.875,3.125 -112.478,-0.295" stroke="#ff55ff"/>
  <polyline points="-172.478,6.545 -181.875,3.125 -172.478,-0.295" stroke="#ff55ff"/>
  <polyline points="221.545,-46.272 218.125,-36.875 214.705,-46.272" stroke="#ff55ff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="43451408" stroke-linecap="square" name="Line_1_34267" stroke-width="4" transform="translate(691.350,330.924)">
  <line y1="0" x1="-79.65" y2="0" x2="79.65"/>
  <line stroke="#ff55ff" y1="0" x1="-69.65" y2="0" x2="-59.65"/>
  <line stroke="#ff55ff" y1="0" x1="-39.65" y2="0" x2="-29.65"/>
  <line stroke="#ff55ff" y1="0" x1="-9.65" y2="0" x2="0.350"/>
  <line stroke="#ff55ff" y1="0" x1="20.350" y2="0" x2="30.350"/>
  <line stroke="#ff55ff" y1="0" x1="50.350" y2="0" x2="60.350"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46176768" stroke-linecap="square" name="Polyline_3_20204" stroke-width="4" transform="translate(726,397.5)">
  <polyline points="-36,46.25 -36,-46.25 36,-46.25"/>
  <line stroke="#ff55ff" y1="36.25" x1="-36" y2="26.25" x2="-36"/>
  <line stroke="#ff55ff" y1="6.25" x1="-36" y2="-3.75" x2="-36"/>
  <line stroke="#ff55ff" y1="-23.75" x1="-36" y2="-33.75" x2="-36"/>
  <line stroke="#ff55ff" y1="-46.25" x1="-26" y2="-46.25" x2="-16"/>
  <line stroke="#ff55ff" y1="-46.25" x1="4" y2="-46.25" x2="14"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="43935888" stroke-linecap="square" name="Line_1_1984" stroke-width="4" transform="translate(183.248,-217.842)">
  <line y1="61.721" x1="0" y2="-61.721" x2="0"/>
  <polyline points="-3.42,31.118 0,21.721 3.42,31.118" stroke="#ff55ff"/>
  <polyline points="-3.42,-28.882 0,-38.279 3.42,-28.882" stroke="#ff55ff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="44926016" stroke-linecap="square" name="Line_1_19244" stroke-width="4" transform="translate(-227.343,-146.49)">
  <line y1="0" x1="-82.781" y2="0" x2="82.781"/>
  <line stroke="#ff55ff" y1="0" x1="-72.781" y2="0" x2="-62.781"/>
  <line stroke="#ff55ff" y1="0" x1="-42.781" y2="0" x2="-32.781"/>
  <line stroke="#ff55ff" y1="0" x1="-12.781" y2="0" x2="-2.781"/>
  <line stroke="#ff55ff" y1="0" x1="17.219" y2="0" x2="27.219"/>
  <line stroke="#ff55ff" y1="0" x1="47.219" y2="0" x2="57.219"/>
</g>
<g fill="none" stroke="#5555ff" stroke-linejoin="bevel" id="45081328" stroke-linecap="square" name="Polyline_3_3216" stroke-width="4" transform="translate(1.5,-262.375)">
  <polyline points="727.5,-95.625 727.5,-109.625 -727.5,-109.625 -727.5,107.375 -381.75,109.625"/>
  <polyline points="706.897,-106.205 697.5,-109.625 706.897,-113.045" stroke="#55aaff"/>
  <polyline points="661.897,-106.205 652.5,-109.625 661.897,-113.045" stroke="#55aaff"/>
  <polyline points="616.897,-106.205 607.5,-109.625 616.897,-113.045" stroke="#55aaff"/>
  <polyline points="571.897,-106.205 562.5,-109.625 571.897,-113.045" stroke="#55aaff"/>
  <polyline points="526.897,-106.205 517.5,-109.625 526.897,-113.045" stroke="#55aaff"/>
  <polyline points="481.897,-106.205 472.5,-109.625 481.897,-113.045" stroke="#55aaff"/>
  <polyline points="436.897,-106.205 427.5,-109.625 436.897,-113.045" stroke="#55aaff"/>
  <polyline points="391.897,-106.205 382.5,-109.625 391.897,-113.045" stroke="#55aaff"/>
  <polyline points="346.897,-106.205 337.5,-109.625 346.897,-113.045" stroke="#55aaff"/>
  <polyline points="301.897,-106.205 292.5,-109.625 301.897,-113.045" stroke="#55aaff"/>
  <polyline points="256.897,-106.205 247.5,-109.625 256.897,-113.045" stroke="#55aaff"/>
  <polyline points="211.897,-106.205 202.5,-109.625 211.897,-113.045" stroke="#55aaff"/>
  <polyline points="166.897,-106.205 157.5,-109.625 166.897,-113.045" stroke="#55aaff"/>
  <polyline points="121.897,-106.205 112.5,-109.625 121.897,-113.045" stroke="#55aaff"/>
  <polyline points="76.897,-106.205 67.5,-109.625 76.897,-113.045" stroke="#55aaff"/>
  <polyline points="31.897,-106.205 22.5,-109.625 31.897,-113.045" stroke="#55aaff"/>
  <polyline points="-13.103,-106.205 -22.500,-109.625 -13.103,-113.045" stroke="#55aaff"/>
  <polyline points="-58.103,-106.205 -67.500,-109.625 -58.103,-113.045" stroke="#55aaff"/>
  <polyline points="-103.103,-106.205 -112.500,-109.625 -103.103,-113.045" stroke="#55aaff"/>
  <polyline points="-148.103,-106.205 -157.500,-109.625 -148.103,-113.045" stroke="#55aaff"/>
  <polyline points="-193.103,-106.205 -202.500,-109.625 -193.103,-113.045" stroke="#55aaff"/>
  <polyline points="-238.103,-106.205 -247.500,-109.625 -238.103,-113.045" stroke="#55aaff"/>
  <polyline points="-283.103,-106.205 -292.500,-109.625 -283.103,-113.045" stroke="#55aaff"/>
  <polyline points="-328.103,-106.205 -337.5,-109.625 -328.103,-113.045" stroke="#55aaff"/>
  <polyline points="-373.103,-106.205 -382.5,-109.625 -373.103,-113.045" stroke="#55aaff"/>
  <polyline points="-418.103,-106.205 -427.5,-109.625 -418.103,-113.045" stroke="#55aaff"/>
  <polyline points="-463.103,-106.205 -472.5,-109.625 -463.103,-113.045" stroke="#55aaff"/>
  <polyline points="-508.103,-106.205 -517.5,-109.625 -508.103,-113.045" stroke="#55aaff"/>
  <polyline points="-553.103,-106.205 -562.5,-109.625 -553.103,-113.045" stroke="#55aaff"/>
  <polyline points="-598.103,-106.205 -607.5,-109.625 -598.103,-113.045" stroke="#55aaff"/>
  <polyline points="-643.103,-106.205 -652.5,-109.625 -643.103,-113.045" stroke="#55aaff"/>
  <polyline points="-688.103,-106.205 -697.5,-109.625 -688.103,-113.045" stroke="#55aaff"/>
  <polyline points="-724.080,-89.022 -727.5,-79.625 -730.92,-89.022" stroke="#55aaff"/>
  <polyline points="-724.080,-44.022 -727.5,-34.625 -730.92,-44.022" stroke="#55aaff"/>
  <polyline points="-724.080,0.978 -727.5,10.375 -730.92,0.978" stroke="#55aaff"/>
  <polyline points="-724.080,45.978 -727.5,55.375 -730.92,45.978" stroke="#55aaff"/>
  <polyline points="-724.080,90.978 -727.5,100.375 -730.92,90.978" stroke="#55aaff"/>
  <polyline points="-706.875,104.089 -697.5,107.57 -706.920,110.929" stroke="#55aaff"/>
  <polyline points="-661.876,104.382 -652.502,107.863 -661.92,111.222" stroke="#55aaff"/>
  <polyline points="-616.877,104.675 -607.503,108.156 -616.922,111.515" stroke="#55aaff"/>
  <polyline points="-571.878,104.967 -562.503,108.449 -571.922,111.808" stroke="#55aaff"/>
  <polyline points="-526.879,105.26 -517.504,108.742 -526.923,112.1" stroke="#55aaff"/>
  <polyline points="-481.880,105.553 -472.505,109.034 -481.924,112.393" stroke="#55aaff"/>
  <polyline points="-436.88,105.846 -427.506,109.327 -436.925,112.686" stroke="#55aaff"/>
  <polyline points="-391.882,106.139 -382.507,109.62 -391.926,112.979" stroke="#55aaff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46266960" stroke-linecap="square" name="Polyline_3_19234" stroke-width="4" transform="translate(-126.25,400.375)">
  <polyline points="655,29.625 655,68.375 -655,68.375 -655,-68.375"/>
  <line stroke="#ff55ff" y1="68.375" x1="655" y2="58.375" x2="655"/>
  <line stroke="#ff55ff" y1="68.375" x1="-655" y2="68.375" x2="-645"/>
  <line stroke="#ff55ff" y1="68.375" x1="-625" y2="68.375" x2="-615"/>
  <line stroke="#ff55ff" y1="68.375" x1="-595" y2="68.375" x2="-585"/>
  <line stroke="#ff55ff" y1="68.375" x1="-565" y2="68.375" x2="-555"/>
  <line stroke="#ff55ff" y1="68.375" x1="-535" y2="68.375" x2="-525"/>
  <line stroke="#ff55ff" y1="68.375" x1="-505" y2="68.375" x2="-495"/>
  <line stroke="#ff55ff" y1="68.375" x1="-475" y2="68.375" x2="-465"/>
  <line stroke="#ff55ff" y1="68.375" x1="-445" y2="68.375" x2="-435"/>
  <line stroke="#ff55ff" y1="68.375" x1="-415" y2="68.375" x2="-405"/>
  <line stroke="#ff55ff" y1="68.375" x1="-385" y2="68.375" x2="-375"/>
  <line stroke="#ff55ff" y1="68.375" x1="-355" y2="68.375" x2="-345"/>
  <line stroke="#ff55ff" y1="68.375" x1="-325" y2="68.375" x2="-315"/>
  <line stroke="#ff55ff" y1="68.375" x1="-295" y2="68.375" x2="-285"/>
  <line stroke="#ff55ff" y1="68.375" x1="-265" y2="68.375" x2="-255"/>
  <line stroke="#ff55ff" y1="68.375" x1="-235" y2="68.375" x2="-225"/>
  <line stroke="#ff55ff" y1="68.375" x1="-205" y2="68.375" x2="-195"/>
  <line stroke="#ff55ff" y1="68.375" x1="-175" y2="68.375" x2="-165"/>
  <line stroke="#ff55ff" y1="68.375" x1="-145" y2="68.375" x2="-135"/>
  <line stroke="#ff55ff" y1="68.375" x1="-115" y2="68.375" x2="-105"/>
  <line stroke="#ff55ff" y1="68.375" x1="-85" y2="68.375" x2="-75"/>
  <line stroke="#ff55ff" y1="68.375" x1="-55" y2="68.375" x2="-45"/>
  <line stroke="#ff55ff" y1="68.375" x1="-25" y2="68.375" x2="-15"/>
  <line stroke="#ff55ff" y1="68.375" x1="5.000" y2="68.375" x2="15"/>
  <line stroke="#ff55ff" y1="68.375" x1="35" y2="68.375" x2="45"/>
  <line stroke="#ff55ff" y1="68.375" x1="65" y2="68.375" x2="75.000"/>
  <line stroke="#ff55ff" y1="68.375" x1="95.000" y2="68.375" x2="105"/>
  <line stroke="#ff55ff" y1="68.375" x1="125" y2="68.375" x2="135"/>
  <line stroke="#ff55ff" y1="68.375" x1="155" y2="68.375" x2="165.000"/>
  <line stroke="#ff55ff" y1="68.375" x1="185" y2="68.375" x2="195"/>
  <line stroke="#ff55ff" y1="68.375" x1="215" y2="68.375" x2="225"/>
  <line stroke="#ff55ff" y1="68.375" x1="245.000" y2="68.375" x2="255.000"/>
  <line stroke="#ff55ff" y1="68.375" x1="275" y2="68.375" x2="285"/>
  <line stroke="#ff55ff" y1="68.375" x1="305" y2="68.375" x2="315"/>
  <line stroke="#ff55ff" y1="68.375" x1="335.000" y2="68.375" x2="345.000"/>
  <line stroke="#ff55ff" y1="68.375" x1="365" y2="68.375" x2="375"/>
  <line stroke="#ff55ff" y1="68.375" x1="395" y2="68.375" x2="405"/>
  <line stroke="#ff55ff" y1="68.375" x1="425" y2="68.375" x2="435"/>
  <line stroke="#ff55ff" y1="68.375" x1="455" y2="68.375" x2="465"/>
  <line stroke="#ff55ff" y1="68.375" x1="485" y2="68.375" x2="495"/>
  <line stroke="#ff55ff" y1="68.375" x1="515" y2="68.375" x2="525"/>
  <line stroke="#ff55ff" y1="68.375" x1="545" y2="68.375" x2="555"/>
  <line stroke="#ff55ff" y1="68.375" x1="575" y2="68.375" x2="585.000"/>
  <line stroke="#ff55ff" y1="68.375" x1="605" y2="68.375" x2="615"/>
  <line stroke="#ff55ff" y1="68.375" x1="635" y2="68.375" x2="645"/>
  <line stroke="#ff55ff" y1="-68.375" x1="-655" y2="-58.375" x2="-655"/>
  <line stroke="#ff55ff" y1="-38.375" x1="-655" y2="-28.375" x2="-655"/>
  <line stroke="#ff55ff" y1="-8.375" x1="-655" y2="1.625" x2="-655"/>
  <line stroke="#ff55ff" y1="21.625" x1="-655" y2="31.625" x2="-655"/>
  <line stroke="#ff55ff" y1="51.625" x1="-655" y2="61.625" x2="-655"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="45094128" stroke-linecap="square" name="Polyline_3_3735" stroke-width="4" transform="translate(-234,-327.25)">
  <polyline points="311,-26.25 -311,-26.25 -311,26.25"/>
  <line stroke="#ff55ff" y1="-26.25" x1="301" y2="-26.25" x2="291"/>
  <line stroke="#ff55ff" y1="-26.25" x1="271" y2="-26.25" x2="261"/>
  <line stroke="#ff55ff" y1="-26.25" x1="241" y2="-26.25" x2="231"/>
  <line stroke="#ff55ff" y1="-26.25" x1="211" y2="-26.25" x2="201"/>
  <line stroke="#ff55ff" y1="-26.25" x1="181" y2="-26.25" x2="171"/>
  <line stroke="#ff55ff" y1="-26.25" x1="151" y2="-26.25" x2="141"/>
  <line stroke="#ff55ff" y1="-26.25" x1="121" y2="-26.25" x2="111"/>
  <line stroke="#ff55ff" y1="-26.25" x1="91" y2="-26.25" x2="81"/>
  <line stroke="#ff55ff" y1="-26.25" x1="61" y2="-26.25" x2="51"/>
  <line stroke="#ff55ff" y1="-26.25" x1="31" y2="-26.25" x2="21"/>
  <line stroke="#ff55ff" y1="-26.25" x1="1" y2="-26.25" x2="-9"/>
  <line stroke="#ff55ff" y1="-26.25" x1="-29" y2="-26.25" x2="-39.000"/>
  <line stroke="#ff55ff" y1="-26.25" x1="-59.000" y2="-26.25" x2="-69"/>
  <line stroke="#ff55ff" y1="-26.25" x1="-89" y2="-26.25" x2="-99"/>
  <line stroke="#ff55ff" y1="-26.25" x1="-119" y2="-26.25" x2="-129.000"/>
  <line stroke="#ff55ff" y1="-26.25" x1="-149.000" y2="-26.25" x2="-159"/>
  <line stroke="#ff55ff" y1="-26.25" x1="-179.000" y2="-26.25" x2="-189"/>
  <line stroke="#ff55ff" y1="-26.25" x1="-209" y2="-26.25" x2="-219"/>
  <line stroke="#ff55ff" y1="-26.25" x1="-239" y2="-26.25" x2="-249.000"/>
  <line stroke="#ff55ff" y1="-26.25" x1="-269.000" y2="-26.25" x2="-279"/>
  <line stroke="#ff55ff" y1="-26.25" x1="-299" y2="-26.25" x2="-309"/>
  <line stroke="#ff55ff" y1="-16.25" x1="-311" y2="-6.25" x2="-311"/>
  <line stroke="#ff55ff" y1="13.75" x1="-311" y2="23.75" x2="-311"/>
</g>
<g fill="none" stroke="#5555ff" stroke-linejoin="bevel" id="45119120" stroke-linecap="square" name="Polyline_3_3734" stroke-width="4" transform="translate(-0.5,-265.875)">
  <polyline points="747.5,-91.125 747.5,-129.125 -747.5,-129.125 -747.5,126.875 -389.5,129.125"/>
  <polyline points="744.080,-111.728 747.5,-121.125 750.92,-111.728" stroke="#55aaff"/>
  <polyline points="726.897,-125.705 717.5,-129.125 726.897,-132.545" stroke="#55aaff"/>
  <polyline points="681.897,-125.705 672.5,-129.125 681.897,-132.545" stroke="#55aaff"/>
  <polyline points="636.897,-125.705 627.5,-129.125 636.897,-132.545" stroke="#55aaff"/>
  <polyline points="591.897,-125.705 582.5,-129.125 591.897,-132.545" stroke="#55aaff"/>
  <polyline points="546.897,-125.705 537.5,-129.125 546.897,-132.545" stroke="#55aaff"/>
  <polyline points="501.897,-125.705 492.5,-129.125 501.897,-132.545" stroke="#55aaff"/>
  <polyline points="456.897,-125.705 447.5,-129.125 456.897,-132.545" stroke="#55aaff"/>
  <polyline points="411.897,-125.705 402.5,-129.125 411.897,-132.545" stroke="#55aaff"/>
  <polyline points="366.897,-125.705 357.5,-129.125 366.897,-132.545" stroke="#55aaff"/>
  <polyline points="321.897,-125.705 312.500,-129.125 321.897,-132.545" stroke="#55aaff"/>
  <polyline points="276.897,-125.705 267.5,-129.125 276.897,-132.545" stroke="#55aaff"/>
  <polyline points="231.897,-125.705 222.5,-129.125 231.897,-132.545" stroke="#55aaff"/>
  <polyline points="186.897,-125.705 177.5,-129.125 186.897,-132.545" stroke="#55aaff"/>
  <polyline points="141.897,-125.705 132.5,-129.125 141.897,-132.545" stroke="#55aaff"/>
  <polyline points="96.897,-125.705 87.500,-129.125 96.897,-132.545" stroke="#55aaff"/>
  <polyline points="51.897,-125.705 42.5,-129.125 51.897,-132.545" stroke="#55aaff"/>
  <polyline points="6.897,-125.705 -2.5,-129.125 6.897,-132.545" stroke="#55aaff"/>
  <polyline points="-38.103,-125.705 -47.5,-129.125 -38.103,-132.545" stroke="#55aaff"/>
  <polyline points="-83.103,-125.705 -92.5,-129.125 -83.103,-132.545" stroke="#55aaff"/>
  <polyline points="-128.103,-125.705 -137.5,-129.125 -128.103,-132.545" stroke="#55aaff"/>
  <polyline points="-173.103,-125.705 -182.5,-129.125 -173.103,-132.545" stroke="#55aaff"/>
  <polyline points="-218.103,-125.705 -227.5,-129.125 -218.103,-132.545" stroke="#55aaff"/>
  <polyline points="-263.103,-125.705 -272.5,-129.125 -263.103,-132.545" stroke="#55aaff"/>
  <polyline points="-308.103,-125.705 -317.5,-129.125 -308.103,-132.545" stroke="#55aaff"/>
  <polyline points="-353.103,-125.705 -362.5,-129.125 -353.103,-132.545" stroke="#55aaff"/>
  <polyline points="-398.103,-125.705 -407.5,-129.125 -398.103,-132.545" stroke="#55aaff"/>
  <polyline points="-443.103,-125.705 -452.5,-129.125 -443.103,-132.545" stroke="#55aaff"/>
  <polyline points="-488.103,-125.705 -497.5,-129.125 -488.103,-132.545" stroke="#55aaff"/>
  <polyline points="-533.103,-125.705 -542.5,-129.125 -533.103,-132.545" stroke="#55aaff"/>
  <polyline points="-578.103,-125.705 -587.5,-129.125 -578.103,-132.545" stroke="#55aaff"/>
  <polyline points="-623.103,-125.705 -632.5,-129.125 -623.103,-132.545" stroke="#55aaff"/>
  <polyline points="-668.103,-125.705 -677.5,-129.125 -668.103,-132.545" stroke="#55aaff"/>
  <polyline points="-713.103,-125.705 -722.5,-129.125 -713.103,-132.545" stroke="#55aaff"/>
  <polyline points="-744.080,-108.522 -747.5,-99.125 -750.92,-108.522" stroke="#55aaff"/>
  <polyline points="-744.080,-63.522 -747.5,-54.125 -750.92,-63.522" stroke="#55aaff"/>
  <polyline points="-744.080,-18.522 -747.5,-9.125 -750.92,-18.522" stroke="#55aaff"/>
  <polyline points="-744.080,26.478 -747.5,35.875 -750.92,26.478" stroke="#55aaff"/>
  <polyline points="-744.080,71.478 -747.5,80.875 -750.92,71.478" stroke="#55aaff"/>
  <polyline points="-744.080,116.478 -747.5,125.875 -750.92,116.478" stroke="#55aaff"/>
  <polyline points="-726.876,123.584 -717.5,127.064 -726.919,130.425" stroke="#55aaff"/>
  <polyline points="-681.877,123.867 -672.501,127.346 -681.920,130.707" stroke="#55aaff"/>
  <polyline points="-636.878,124.150 -627.502,127.629 -636.92,130.99" stroke="#55aaff"/>
  <polyline points="-591.879,124.433 -582.503,127.912 -591.921,131.273" stroke="#55aaff"/>
  <polyline points="-546.879,124.716 -537.504,128.195 -546.922,131.556" stroke="#55aaff"/>
  <polyline points="-501.88,124.998 -492.505,128.478 -501.923,131.839" stroke="#55aaff"/>
  <polyline points="-456.881,125.281 -447.506,128.76 -456.924,132.122" stroke="#55aaff"/>
  <polyline points="-411.882,125.564 -402.507,129.043 -411.925,132.404" stroke="#55aaff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46069248" stroke-linecap="round" name="Line_1_20087" stroke-width="4" transform="translate(-583.045,327.040)">
  <line y1="144.040" x1="0" y2="-144.040" x2="0"/>
  <line stroke="#ff55ff" y1="-144.040" x1="0" y2="-134.040" x2="0"/>
  <line stroke="#ff55ff" y1="-114.040" x1="0" y2="-104.040" x2="0"/>
  <line stroke="#ff55ff" y1="-84.040" x1="0" y2="-74.040" x2="0"/>
  <line stroke="#ff55ff" y1="-54.040" x1="0" y2="-44.040" x2="0"/>
  <line stroke="#ff55ff" y1="-24.040" x1="0" y2="-14.040" x2="0"/>
  <line stroke="#ff55ff" y1="5.96" x1="0" y2="15.96" x2="0"/>
  <line stroke="#ff55ff" y1="35.96" x1="0" y2="45.96" x2="0"/>
  <line stroke="#ff55ff" y1="65.96" x1="0" y2="75.96" x2="0"/>
  <line stroke="#ff55ff" y1="95.96" x1="0" y2="105.96" x2="0"/>
  <line stroke="#ff55ff" y1="125.96" x1="0" y2="135.96" x2="0"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="44686240" stroke-linecap="square" name="Polyline_3_39152" stroke-width="4" transform="translate(270.5,-179.5)">
  <polyline points="-37.5,20.5 -37.5,-20.5 37.5,-20.5"/>
  <line stroke="#ff00ff" y1="10.5" x1="-37.5" y2="0.5" x2="-37.5"/>
  <line stroke="#ff00ff" y1="-20.5" x1="-27.5" y2="-20.5" x2="-17.5"/>
  <line stroke="#ff00ff" y1="-20.5" x1="2.5" y2="-20.5" x2="12.5"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="45113232" stroke-linecap="square" name="Line_1_19366" stroke-width="4" transform="translate(-9.669,101.31) scale(-1,1)">
  <line y1="0" x1="-135.33" y2="0" x2="135.33"/>
  <line stroke="#ff55ff" y1="0" x1="-125.33" y2="0" x2="-115.33"/>
  <line stroke="#ff55ff" y1="0" x1="-95.33" y2="0" x2="-85.33"/>
  <line stroke="#ff55ff" y1="0" x1="-65.33" y2="0" x2="-55.33"/>
  <line stroke="#ff55ff" y1="0" x1="-35.33" y2="0" x2="-25.33"/>
  <line stroke="#ff55ff" y1="0" x1="-5.33" y2="0" x2="4.669"/>
  <line stroke="#ff55ff" y1="0" x1="24.669" y2="0" x2="34.669"/>
  <line stroke="#ff55ff" y1="0" x1="54.669" y2="0" x2="64.669"/>
  <line stroke="#ff55ff" y1="0" x1="84.669" y2="0" x2="94.669"/>
  <line stroke="#ff55ff" y1="0" x1="114.669" y2="0" x2="124.669"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46040848" stroke-linecap="round" name="Line_1_19268" stroke-width="4" transform="translate(-507.058,-11.167) scale(-1,1)">
  <line y1="0" x1="-139.905" y2="0" x2="139.905"/>
  <line stroke="#ff55ff" y1="0" x1="-129.905" y2="0" x2="-119.905"/>
  <line stroke="#ff55ff" y1="0" x1="-99.905" y2="0" x2="-89.905"/>
  <line stroke="#ff55ff" y1="0" x1="-69.905" y2="0" x2="-59.905"/>
  <line stroke="#ff55ff" y1="0" x1="-39.905" y2="0" x2="-29.905"/>
  <line stroke="#ff55ff" y1="0" x1="-9.905" y2="0" x2="0.095"/>
  <line stroke="#ff55ff" y1="0" x1="20.095" y2="0" x2="30.095"/>
  <line stroke="#ff55ff" y1="0" x1="50.095" y2="0" x2="60.095"/>
  <line stroke="#ff55ff" y1="0" x1="80.095" y2="0" x2="90.095"/>
  <line stroke="#ff55ff" y1="0" x1="110.095" y2="0" x2="120.095"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46106240" stroke-linecap="round" name="Line_1_20107" stroke-width="4" transform="translate(-681.819,235.738)">
  <line y1="234.342" x1="0" y2="-234.342" x2="0"/>
  <line stroke="#ff55ff" y1="224.342" x1="0" y2="214.342" x2="0"/>
  <line stroke="#ff55ff" y1="194.342" x1="0" y2="184.342" x2="0"/>
  <line stroke="#ff55ff" y1="164.342" x1="0" y2="154.342" x2="0"/>
  <line stroke="#ff55ff" y1="134.342" x1="0" y2="124.342" x2="0"/>
  <line stroke="#ff55ff" y1="104.342" x1="0" y2="94.342" x2="0"/>
  <line stroke="#ff55ff" y1="74.342" x1="0" y2="64.342" x2="0"/>
  <line stroke="#ff55ff" y1="44.342" x1="0" y2="34.342" x2="0"/>
  <line stroke="#ff55ff" y1="14.342" x1="0" y2="4.342" x2="0"/>
  <line stroke="#ff55ff" y1="-15.658" x1="0" y2="-25.658" x2="0"/>
  <line stroke="#ff55ff" y1="-45.658" x1="0" y2="-55.658" x2="0"/>
  <line stroke="#ff55ff" y1="-75.658" x1="0" y2="-85.658" x2="0"/>
  <line stroke="#ff55ff" y1="-105.658" x1="0" y2="-115.658" x2="0"/>
  <line stroke="#ff55ff" y1="-135.658" x1="0" y2="-145.658" x2="0"/>
  <line stroke="#ff55ff" y1="-165.658" x1="0" y2="-175.658" x2="0"/>
  <line stroke="#ff55ff" y1="-195.658" x1="0" y2="-205.658" x2="0"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="45836096" stroke-linecap="square" name="Line_1_37613" stroke-width="4" transform="translate(820.33,39.165) scale(-1,1) rotate(90)">
  <line y1="0" x1="-25.165" y2="0" x2="25.165"/>
  <line stroke="#ff55ff" y1="0" x1="-5.165" y2="0" x2="4.835"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46245536" stroke-linecap="square" name="Polyline_3_20198" stroke-width="4" transform="translate(708.625,337.5)">
  <polyline points="-62.375,107.5 -62.375,-107.5 62.375,-107.5"/>
  <line stroke="#ff55ff" y1="97.5" x1="-62.375" y2="87.5" x2="-62.375"/>
  <line stroke="#ff55ff" y1="67.5" x1="-62.375" y2="57.5" x2="-62.375"/>
  <line stroke="#ff55ff" y1="37.5" x1="-62.375" y2="27.5" x2="-62.375"/>
  <line stroke="#ff55ff" y1="7.5" x1="-62.375" y2="-2.5" x2="-62.375"/>
  <line stroke="#ff55ff" y1="-22.5" x1="-62.375" y2="-32.5" x2="-62.375"/>
  <line stroke="#ff55ff" y1="-52.5" x1="-62.375" y2="-62.5" x2="-62.375"/>
  <line stroke="#ff55ff" y1="-82.5" x1="-62.375" y2="-92.5" x2="-62.375"/>
  <line stroke="#ff55ff" y1="-107.5" x1="-52.375" y2="-107.5" x2="-42.375"/>
  <line stroke="#ff55ff" y1="-107.5" x1="-22.375" y2="-107.5" x2="-12.375"/>
  <line stroke="#ff55ff" y1="-107.5" x1="7.625" y2="-107.5" x2="17.625"/>
  <line stroke="#ff55ff" y1="-107.5" x1="37.625" y2="-107.5" x2="47.625"/>
</g>
<g fill="none" stroke="#5555ff" stroke-linejoin="bevel" id="45010592" stroke-linecap="square" name="Polyline_3_21136" stroke-width="4" transform="translate(480.5,-252.375)">
  <polyline points="219.5,-96.375 127.5,-96.375 128.5,96.375 -219.5,96.375"/>
  <polyline points="188.897,-92.955 179.5,-96.375 188.897,-99.795" stroke="#55aaff"/>
  <polyline points="131.079,-65.79 127.708,-56.376 124.239,-65.755" stroke="#55aaff"/>
  <polyline points="131.39,-5.79 128.019,3.624 124.550,-5.755" stroke="#55aaff"/>
  <polyline points="131.701,54.208 128.33,63.623 124.861,54.244" stroke="#55aaff"/>
  <polyline points="97.897,99.795 88.5,96.375 97.897,92.955" stroke="#55aaff"/>
  <polyline points="37.897,99.795 28.5,96.375 37.897,92.955" stroke="#55aaff"/>
  <polyline points="-22.103,99.795 -31.5,96.375 -22.103,92.955" stroke="#55aaff"/>
  <polyline points="-82.103,99.795 -91.5,96.375 -82.103,92.955" stroke="#55aaff"/>
  <polyline points="-142.103,99.795 -151.5,96.375 -142.103,92.955" stroke="#55aaff"/>
  <polyline points="-202.103,99.795 -211.5,96.375 -202.103,92.955" stroke="#55aaff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46082928" stroke-linecap="round" name="Line_1_19282" stroke-width="4" transform="translate(-567.870,264.279) scale(-1,1)">
  <line y1="0" x1="-197.13" y2="0" x2="197.13"/>
  <line stroke="#ff55ff" y1="0" x1="-187.13" y2="0" x2="-177.13"/>
  <line stroke="#ff55ff" y1="0" x1="-157.13" y2="0" x2="-147.13"/>
  <line stroke="#ff55ff" y1="0" x1="-127.13" y2="0" x2="-117.13"/>
  <line stroke="#ff55ff" y1="0" x1="-97.13" y2="0" x2="-87.13"/>
  <line stroke="#ff55ff" y1="0" x1="-67.13" y2="0" x2="-57.13"/>
  <line stroke="#ff55ff" y1="0" x1="-37.13" y2="0" x2="-27.13"/>
  <line stroke="#ff55ff" y1="0" x1="-7.13" y2="0" x2="2.870"/>
  <line stroke="#ff55ff" y1="0" x1="22.870" y2="0" x2="32.870"/>
  <line stroke="#ff55ff" y1="0" x1="52.870" y2="0" x2="62.870"/>
  <line stroke="#ff55ff" y1="0" x1="82.870" y2="0" x2="92.870"/>
  <line stroke="#ff55ff" y1="0" x1="112.870" y2="0" x2="122.870"/>
  <line stroke="#ff55ff" y1="0" x1="142.870" y2="0" x2="152.870"/>
  <line stroke="#ff55ff" y1="0" x1="172.870" y2="0" x2="182.870"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46264096" stroke-linecap="square" name="Polyline_3_15310" stroke-width="4" transform="translate(80.625,252)">
  <polyline points="285.625,138 -285.625,138 -285.625,-138 -247.625,-138"/>
  <line stroke="#ff55ff" y1="138" x1="-285.625" y2="138" x2="-275.625"/>
  <line stroke="#ff55ff" y1="138" x1="-255.625" y2="138" x2="-245.625"/>
  <line stroke="#ff55ff" y1="138" x1="-225.625" y2="138" x2="-215.625"/>
  <line stroke="#ff55ff" y1="138" x1="-195.625" y2="138" x2="-185.625"/>
  <line stroke="#ff55ff" y1="138" x1="-165.625" y2="138" x2="-155.625"/>
  <line stroke="#ff55ff" y1="138" x1="-135.625" y2="138" x2="-125.625"/>
  <line stroke="#ff55ff" y1="138" x1="-105.625" y2="138" x2="-95.625"/>
  <line stroke="#ff55ff" y1="138" x1="-75.625" y2="138" x2="-65.625"/>
  <line stroke="#ff55ff" y1="138" x1="-45.625" y2="138" x2="-35.625"/>
  <line stroke="#ff55ff" y1="138" x1="-15.625" y2="138" x2="-5.625"/>
  <line stroke="#ff55ff" y1="138" x1="14.375" y2="138" x2="24.375"/>
  <line stroke="#ff55ff" y1="138" x1="44.375" y2="138" x2="54.375"/>
  <line stroke="#ff55ff" y1="138" x1="74.375" y2="138" x2="84.375"/>
  <line stroke="#ff55ff" y1="138" x1="104.375" y2="138" x2="114.375"/>
  <line stroke="#ff55ff" y1="138" x1="134.375" y2="138" x2="144.375"/>
  <line stroke="#ff55ff" y1="138" x1="164.375" y2="138" x2="174.375"/>
  <line stroke="#ff55ff" y1="138" x1="194.375" y2="138" x2="204.375"/>
  <line stroke="#ff55ff" y1="138" x1="224.375" y2="138" x2="234.375"/>
  <line stroke="#ff55ff" y1="138" x1="254.375" y2="138" x2="264.375"/>
  <line stroke="#ff55ff" y1="-138" x1="-285.625" y2="-128" x2="-285.625"/>
  <line stroke="#ff55ff" y1="-108" x1="-285.625" y2="-98" x2="-285.625"/>
  <line stroke="#ff55ff" y1="-78" x1="-285.625" y2="-68" x2="-285.625"/>
  <line stroke="#ff55ff" y1="-48" x1="-285.625" y2="-38" x2="-285.625"/>
  <line stroke="#ff55ff" y1="-18.000" x1="-285.625" y2="-8" x2="-285.625"/>
  <line stroke="#ff55ff" y1="12" x1="-285.625" y2="22" x2="-285.625"/>
  <line stroke="#ff55ff" y1="42" x1="-285.625" y2="52" x2="-285.625"/>
  <line stroke="#ff55ff" y1="72" x1="-285.625" y2="82" x2="-285.625"/>
  <line stroke="#ff55ff" y1="102" x1="-285.625" y2="112" x2="-285.625"/>
  <line stroke="#ff55ff" y1="-138" x1="-247.625" y2="-138" x2="-257.625"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46122928" stroke-linecap="round" name="Line_1_19258" stroke-width="4" transform="translate(-408.786,383.444) scale(-1,1)">
  <line y1="0" x1="-40.664" y2="0" x2="40.664"/>
  <line stroke="#ff55ff" y1="0" x1="40.664" y2="0" x2="30.664"/>
  <line stroke="#ff55ff" y1="0" x1="10.664" y2="0" x2="0.664"/>
  <line stroke="#ff55ff" y1="0" x1="-19.336" y2="0" x2="-29.336"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="43512944" stroke-linecap="round" name="Line_1_19384" stroke-width="4" transform="translate(-50.067,16.858)">
  <line y1="0" x1="-317.086" y2="0" x2="317.086"/>
  <line stroke="#ff55ff" y1="0" x1="-307.086" y2="0" x2="-297.086"/>
  <line stroke="#ff55ff" y1="0" x1="-277.086" y2="0" x2="-267.086"/>
  <line stroke="#ff55ff" y1="0" x1="-247.086" y2="0" x2="-237.086"/>
  <line stroke="#ff55ff" y1="0" x1="-217.086" y2="0" x2="-207.086"/>
  <line stroke="#ff55ff" y1="0" x1="-187.086" y2="0" x2="-177.086"/>
  <line stroke="#ff55ff" y1="0" x1="-157.086" y2="0" x2="-147.086"/>
  <line stroke="#ff55ff" y1="0" x1="-127.086" y2="0" x2="-117.086"/>
  <line stroke="#ff55ff" y1="0" x1="-97.086" y2="0" x2="-87.086"/>
  <line stroke="#ff55ff" y1="0" x1="-67.086" y2="0" x2="-57.086"/>
  <line stroke="#ff55ff" y1="0" x1="-37.086" y2="0" x2="-27.086"/>
  <line stroke="#ff55ff" y1="0" x1="-7.086" y2="0" x2="2.914"/>
  <line stroke="#ff55ff" y1="0" x1="22.914" y2="0" x2="32.914"/>
  <line stroke="#ff55ff" y1="0" x1="52.914" y2="0" x2="62.914"/>
  <line stroke="#ff55ff" y1="0" x1="82.914" y2="0" x2="92.914"/>
  <line stroke="#ff55ff" y1="0" x1="112.914" y2="0" x2="122.914"/>
  <line stroke="#ff55ff" y1="0" x1="142.914" y2="0" x2="152.914"/>
  <line stroke="#ff55ff" y1="0" x1="172.914" y2="0" x2="182.914"/>
  <line stroke="#ff55ff" y1="0" x1="202.914" y2="0" x2="212.914"/>
  <line stroke="#ff55ff" y1="0" x1="232.914" y2="0" x2="242.914"/>
  <line stroke="#ff55ff" y1="0" x1="262.914" y2="0" x2="272.914"/>
  <line stroke="#ff55ff" y1="0" x1="292.914" y2="0" x2="302.914"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46175792" stroke-linecap="square" name="Line_1_7183" stroke-width="4" transform="translate(320.5,-315.187) rotate(-90)">
  <line y1="79.5" x1="0" y2="-79.5" x2="0"/>
  <polyline points="-3.42,48.897 0,39.5 3.42,48.897" stroke="#ff55ff"/>
  <polyline points="-3.42,-11.103 0,-20.5 3.42,-11.103" stroke="#ff55ff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46072144" stroke-linecap="square" name="Polyline_3_16790" stroke-width="4" transform="translate(210.375,336.25)">
  <polyline points="183.125,34.75 -183.125,34.75 -183.125,-34.75"/>
  <line stroke="#ff55ff" y1="34.75" x1="173.125" y2="34.75" x2="163.125"/>
  <line stroke="#ff55ff" y1="34.75" x1="143.125" y2="34.75" x2="133.125"/>
  <line stroke="#ff55ff" y1="34.75" x1="113.125" y2="34.75" x2="103.125"/>
  <line stroke="#ff55ff" y1="34.75" x1="83.125" y2="34.75" x2="73.125"/>
  <line stroke="#ff55ff" y1="34.75" x1="53.125" y2="34.75" x2="43.125"/>
  <line stroke="#ff55ff" y1="34.75" x1="23.125" y2="34.75" x2="13.125"/>
  <line stroke="#ff55ff" y1="34.75" x1="-6.875" y2="34.75" x2="-16.875"/>
  <line stroke="#ff55ff" y1="34.75" x1="-36.875" y2="34.75" x2="-46.875"/>
  <line stroke="#ff55ff" y1="34.75" x1="-66.875" y2="34.75" x2="-76.875"/>
  <line stroke="#ff55ff" y1="34.75" x1="-96.875" y2="34.75" x2="-106.875"/>
  <line stroke="#ff55ff" y1="34.75" x1="-126.875" y2="34.75" x2="-136.875"/>
  <line stroke="#ff55ff" y1="34.75" x1="-156.875" y2="34.75" x2="-166.875"/>
  <line stroke="#ff55ff" y1="24.75" x1="-183.125" y2="14.75" x2="-183.125"/>
  <line stroke="#ff55ff" y1="-5.25" x1="-183.125" y2="-15.25" x2="-183.125"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46322256" stroke-linecap="square" name="Polyline_3_6769" stroke-width="4" transform="translate(-241,-88.125)">
  <polyline points="-91,-34.375 -10.25,-34.375 -10.25,34.375 91,34.375"/>
  <line stroke="#ff55ff" y1="-34.375" x1="-81" y2="-34.375" x2="-71"/>
  <line stroke="#ff55ff" y1="-34.375" x1="-51" y2="-34.375" x2="-41"/>
  <line stroke="#ff55ff" y1="-34.375" x1="-21" y2="-34.375" x2="-11"/>
  <line stroke="#ff55ff" y1="-24.375" x1="-10.25" y2="-14.375" x2="-10.25"/>
  <line stroke="#ff55ff" y1="5.625" x1="-10.25" y2="15.625" x2="-10.25"/>
  <line stroke="#ff55ff" y1="34.375" x1="-0.25" y2="34.375" x2="9.75"/>
  <line stroke="#ff55ff" y1="34.375" x1="29.75" y2="34.375" x2="39.75"/>
  <line stroke="#ff55ff" y1="34.375" x1="59.75" y2="34.375" x2="69.75"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46198976" stroke-linecap="square" name="Polyline_3_14310" stroke-width="4" transform="translate(54.625,181.875)">
  <polyline points="380.375,248.125 -380.375,248.125 -380.375,-248.125"/>
  <polyline points="349.772,251.545 340.375,248.125 349.772,244.705" stroke="#ff55ff"/>
  <polyline points="289.772,251.545 280.375,248.125 289.772,244.705" stroke="#ff55ff"/>
  <polyline points="229.772,251.545 220.375,248.125 229.772,244.705" stroke="#ff55ff"/>
  <polyline points="169.772,251.545 160.375,248.125 169.772,244.705" stroke="#ff55ff"/>
  <polyline points="109.772,251.545 100.375,248.125 109.772,244.705" stroke="#ff55ff"/>
  <polyline points="49.772,251.545 40.375,248.125 49.772,244.705" stroke="#ff55ff"/>
  <polyline points="-10.228,251.545 -19.625,248.125 -10.228,244.705" stroke="#ff55ff"/>
  <polyline points="-70.228,251.545 -79.625,248.125 -70.228,244.705" stroke="#ff55ff"/>
  <polyline points="-130.228,251.545 -139.625,248.125 -130.228,244.705" stroke="#ff55ff"/>
  <polyline points="-190.228,251.545 -199.625,248.125 -190.228,244.705" stroke="#ff55ff"/>
  <polyline points="-250.228,251.545 -259.625,248.125 -250.228,244.705" stroke="#ff55ff"/>
  <polyline points="-310.228,251.545 -319.625,248.125 -310.228,244.705" stroke="#ff55ff"/>
  <polyline points="-370.228,251.545 -379.625,248.125 -370.228,244.705" stroke="#ff55ff"/>
  <polyline points="-383.795,217.522 -380.375,208.125 -376.955,217.522" stroke="#ff55ff"/>
  <polyline points="-383.795,157.522 -380.375,148.125 -376.955,157.522" stroke="#ff55ff"/>
  <polyline points="-383.795,97.522 -380.375,88.125 -376.955,97.522" stroke="#ff55ff"/>
  <polyline points="-383.795,37.522 -380.375,28.125 -376.955,37.522" stroke="#ff55ff"/>
  <polyline points="-383.795,-22.478 -380.375,-31.875 -376.955,-22.478" stroke="#ff55ff"/>
  <polyline points="-383.795,-82.478 -380.375,-91.875 -376.955,-82.478" stroke="#ff55ff"/>
  <polyline points="-383.795,-142.478 -380.375,-151.875 -376.955,-142.478" stroke="#ff55ff"/>
  <polyline points="-383.795,-202.478 -380.375,-211.875 -376.955,-202.478" stroke="#ff55ff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46111408" stroke-linecap="square" name="Polyline_3_9799" stroke-width="4" transform="translate(336.375,195.875)">
  <polyline points="66.875,167.125 66.875,-167.125 -66.875,-167.125"/>
  <polyline points="63.455,136.522 66.875,127.125 70.295,136.522" stroke="#ff55ff"/>
  <polyline points="63.455,76.522 66.875,67.125 70.295,76.522" stroke="#ff55ff"/>
  <polyline points="63.455,16.522 66.875,7.125 70.295,16.522" stroke="#ff55ff"/>
  <polyline points="63.455,-43.478 66.875,-52.875 70.295,-43.478" stroke="#ff55ff"/>
  <polyline points="63.455,-103.478 66.875,-112.875 70.295,-103.478" stroke="#ff55ff"/>
  <polyline points="36.272,-163.705 26.875,-167.125 36.272,-170.545" stroke="#ff55ff"/>
  <polyline points="-23.728,-163.705 -33.125,-167.125 -23.728,-170.545" stroke="#ff55ff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46267920" stroke-linecap="square" name="Line_1_19444" stroke-width="4" transform="translate(512.828,-59.485)">
  <line y1="0" x1="-265.172" y2="0" x2="265.172"/>
  <polyline points="-234.569,-3.42 -225.172,0 -234.569,3.42" stroke="#ff55ff"/>
  <polyline points="-174.569,-3.42 -165.172,0 -174.569,3.42" stroke="#ff55ff"/>
  <polyline points="-114.569,-3.42 -105.172,0 -114.569,3.42" stroke="#ff55ff"/>
  <polyline points="-54.569,-3.42 -45.172,0 -54.569,3.42" stroke="#ff55ff"/>
  <polyline points="5.43,-3.42 14.828,0 5.43,3.42" stroke="#ff55ff"/>
  <polyline points="65.43,-3.42 74.828,0 65.43,3.42" stroke="#ff55ff"/>
  <polyline points="125.43,-3.42 134.828,0 125.43,3.42" stroke="#ff55ff"/>
  <polyline points="185.43,-3.42 194.828,0 185.43,3.42" stroke="#ff55ff"/>
  <polyline points="245.43,-3.42 254.828,0 245.43,3.42" stroke="#ff55ff"/>
</g>
<g fill="none" stroke="#5555ff" stroke-linejoin="bevel" id="46228256" stroke-linecap="square" name="Polyline_3_5761" stroke-width="4" transform="translate(-108.125,-181.625)">
  <polyline points="201.875,14.375 201.875,-14.375 -201.875,-14.375 -201.875,13.125"/>
  <polyline points="-171.272,-17.795 -161.875,-14.375 -171.272,-10.955" stroke="#55aaff"/>
  <polyline points="-111.272,-17.795 -101.875,-14.375 -111.272,-10.955" stroke="#55aaff"/>
  <polyline points="-51.272,-17.795 -41.875,-14.375 -51.272,-10.955" stroke="#55aaff"/>
  <polyline points="8.728,-17.795 18.125,-14.375 8.728,-10.955" stroke="#55aaff"/>
  <polyline points="68.728,-17.795 78.125,-14.375 68.728,-10.955" stroke="#55aaff"/>
  <polyline points="128.728,-17.795 138.125,-14.375 128.728,-10.955" stroke="#55aaff"/>
  <polyline points="188.728,-17.795 198.125,-14.375 188.728,-10.955" stroke="#55aaff"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46203936" stroke-linecap="square" name="Polyline_3_7785" stroke-width="4" transform="translate(83.75,104.75)">
  <polyline points="43.75,-172.75 43.75,172.75 -43.75,172.75"/>
  <line stroke="#ff55ff" y1="-162.75" x1="43.75" y2="-152.75" x2="43.75"/>
  <line stroke="#ff55ff" y1="-132.75" x1="43.75" y2="-122.75" x2="43.75"/>
  <line stroke="#ff55ff" y1="-102.75" x1="43.75" y2="-92.75" x2="43.75"/>
  <line stroke="#ff55ff" y1="-72.75" x1="43.75" y2="-62.75" x2="43.75"/>
  <line stroke="#ff55ff" y1="-42.75" x1="43.75" y2="-32.75" x2="43.75"/>
  <line stroke="#ff55ff" y1="-12.75" x1="43.75" y2="-2.75" x2="43.75"/>
  <line stroke="#ff55ff" y1="17.25" x1="43.75" y2="27.25" x2="43.75"/>
  <line stroke="#ff55ff" y1="47.25" x1="43.75" y2="57.25" x2="43.75"/>
  <line stroke="#ff55ff" y1="77.25" x1="43.75" y2="87.25" x2="43.75"/>
  <line stroke="#ff55ff" y1="107.25" x1="43.75" y2="117.25" x2="43.75"/>
  <line stroke="#ff55ff" y1="137.25" x1="43.75" y2="147.25" x2="43.75"/>
  <line stroke="#ff55ff" y1="172.75" x1="33.75" y2="172.75" x2="23.75"/>
  <line stroke="#ff55ff" y1="172.75" x1="3.75" y2="172.75" x2="-6.25"/>
  <line stroke="#ff55ff" y1="172.75" x1="-26.25" y2="172.75" x2="-36.25"/>
</g>
<g fill="none" stroke="#ff0000" stroke-linejoin="bevel" id="46243600" stroke-linecap="square" name="Polyline_3_15806" stroke-width="4" transform="translate(-21.125,73.375)">
  <polyline points="144.125,-17.625 -144.125,-17.625 -144.125,17.625"/>
  <line stroke="#ff55ff" y1="-17.625" x1="134.125" y2="-17.625" x2="124.125"/>
  <line stroke="#ff55ff" y1="-17.625" x1="104.125" y2="-17.625" x2="94.125"/>
  <line stroke="#ff55ff" y1="-17.625" x1="74.125" y2="-17.625" x2="64.125"/>
  <line stroke="#ff55ff" y1="-17.625" x1="44.125" y2="-17.625" x2="34.125"/>
  <line stroke="#ff55ff" y1="-17.625" x1="14.125" y2="-17.625" x2="4.125"/>
  <line stroke="#ff55ff" y1="-17.625" x1="-15.875" y2="-17.625" x2="-25.875"/>
  <line stroke="#ff55ff" y1="-17.625" x1="-45.875" y2="-17.625" x2="-55.875"/>
  <line stroke="#ff55ff" y1="-17.625" x1="-75.875" y2="-17.625" x2="-85.875"/>
  <line stroke="#ff55ff" y1="-17.625" x1="-105.875" y2="-17.625" x2="-115.875"/>
  <line stroke="#ff55ff" y1="-7.625" x1="-144.125" y2="2.375" x2="-144.125"/>
</g>
<g id="AllTags"/>
</svg>
`;

class Index extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.ScrollView.scrollTo({ x: 85, y: 0, animated: true });
  }

  render() {
    const { option, fakeData, fakeData2, pieOption, chartOption, activeTab } = this.state;
    return (
      <View style={styles.container}>
        <SvgXml xml={xml} width="100%" height="100%" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    position: 'relative',
    overflow: 'hidden',
    // width: wp(152 / BASE_WIDTH),
    // height: wp(152 / BASE_WIDTH),
  },
  topcardContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#3D447B',
    width: '100%',
    height: hp(560 / BASE_HEIGHT),
  },
  centerContainer: {
    position: 'relative',
    width: '92%',
    height: 'auto',
    // backgroundColor: 'pink',
    marginLeft: '4%',
    marginTop: hp(160 / BASE_HEIGHT),
    marginBottom: hp(12 / BASE_HEIGHT),
    // paddingBottom: hp(32 / BASE_HEIGHT),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  card: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: wp(15 / BASE_WIDTH),
  },
  commonPic: {
    width: wp(232 / BASE_WIDTH),
    height: wp(365 / BASE_WIDTH),
  },
  commonWrap: {
    position: 'absolute',
    left: '5%',
    top: hp(32 / BASE_HEIGHT),
    width: '90%',
    height: 'auto',
  },
  yougong: {
    color: '#079BB5',
    width: '100%',
    textAlign: 'center',
    fontSize: hp(36 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  yougong2: {
    color: '#888',
    width: '100%',
    textAlign: 'center',
    // marginTop: hp(6 / BASE_HEIGHT),
    fontSize: hp(20 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  wugong: {
    color: '#7F651E',
    width: '100%',
    textAlign: 'center',
    fontSize: hp(36 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  lightContainer: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightContainer2: {
    position: 'absolute',
    // width: '80%',
    // left: '8%',
    // justifyContent: 'center',
    // alignItems: 'center',
    top: hp(42 / BASE_HEIGHT),
    left: wp(10 / BASE_WIDTH),
    // height: hp(152 / BASE_HEIGHT),
    zIndex: 100,
    width: wp(210 / BASE_WIDTH),
    height: wp(210 / BASE_WIDTH),
  },
  percent: {
    position: 'absolute',
    width: '100%',
    top: hp(42 / BASE_HEIGHT),
    // left: hp(76 / BASE_HEIGHT),
    color: '#00AAFF',
    textAlign: 'center',
    fontSize: hp(36 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  lightPic: {
    width: wp(100 / BASE_WIDTH),
    height: wp(40 / BASE_WIDTH),
  },
  dianlvjindu: {
    width: wp(153 / BASE_WIDTH),
    height: wp(153 / BASE_WIDTH),
    // marginTop: hp(62 / BASE_HEIGHT),
  },
  commonTextbg: {
    position: 'absolute',
    left: '15%',
    bottom: hp(32 / BASE_HEIGHT),
    width: '70%',
    height: hp(50 / BASE_HEIGHT),
    backgroundColor: '#3D447B',
    borderRadius: wp(15 / BASE_WIDTH),
  },
  commonText: {
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    fontSize: hp(28 / BASE_HEIGHT),
    lineHeight: hp(50 / BASE_HEIGHT),
    height: hp(50 / BASE_HEIGHT),
    // marginTop: hp(8 / BASE_HEIGHT),
    fontWeight: 'bold',
  },
  horizontalContainer: {
    // flex: 1,
    width: wp(1040 / BASE_WIDTH),
    marginLeft: wp(20 / BASE_WIDTH),
    backgroundColor: '#fff',
    height: hp(430 / BASE_HEIGHT),
    marginTop: hp(24 / BASE_HEIGHT),
    borderRadius: wp(20 / BASE_WIDTH),
  },
  image: {
    width: wp(100 / BASE_WIDTH),
    height: wp(100 / BASE_WIDTH),
  },
  topContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // height: hp(430 / BASE_HEIGHT),
  },
  chartContainer1: {
    // position: 'absolute',
    // right: wp(72 / BASE_WIDTH),
    // top: hp(100 / BASE_HEIGHT),
    width: '92%',
    height: hp(380 / BASE_HEIGHT),
    // marginTop: hp(20 / BASE_HEIGHT),
    marginLeft: '4%',
    borderRadius: wp(20 / BASE_WIDTH),
    overflow: 'hidden',
    // width: wp(152 / BASE_WIDTH),
    // height: wp(152 / BASE_WIDTH),
  },
  chartContainer: {
    width: '92%',
    marginLeft: '4%',
    // width: screenHeight - 40,
    height: hp(380 / BASE_HEIGHT),
    borderRadius: wp(20 / BASE_WIDTH),
    marginTop: hp(20 / BASE_HEIGHT),
    overflow: 'hidden',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // height: 'auto',
    height: hp(230 / BASE_HEIGHT),
    // width: '92%',
    width: wp(1040 / BASE_WIDTH),
    marginLeft: wp(0 / BASE_WIDTH),
    // marginLeft: '4%',
    // width: (scrreenWidth * 1040) / 1080,
    marginTop: hp(24 / BASE_HEIGHT),
    // marginBottom: hp(24 / BASE_HEIGHT),
    // backgroundColor: 'pink',
    flexWrap: 'wrap',
    borderRadius: wp(20 / BASE_WIDTH),
  },
  menuContainer2: {
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: hp(24 / BASE_HEIGHT),
  },
  tabButton: {
    // flex: 1,
    width: wp(1040 / 4 / BASE_WIDTH),
    // width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    // backgroundColor: 'red',
  },
  menuItem: {
    color: '#333',
    fontWeight: '400',
    fontSize: hp(32 / BASE_HEIGHT),
    marginTop: hp(25 / BASE_HEIGHT),
    marginBottom: hp(8 / BASE_HEIGHT),
  },
  dotContainer: {
    position: 'absolute',
    left: '0%',
    bottom: hp(18 / BASE_HEIGHT),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '92%',
    marginLeft: '4%',
    height: 'auto',
    // backgroundColor: 'pink',
    zIndex: 999,
  },
  commonBtn: {
    width: wp(32 / BASE_WIDTH),
    height: wp(32 / BASE_WIDTH),
    borderColor: '#3D447B',
    backgroundColor: '#3D447B',
    paddingVertical: 0,
    borderRadius: wp(16 / BASE_WIDTH),
  },
  border: {
    width: wp(16 / BASE_WIDTH),
    height: wp(32 / BASE_WIDTH),
  },
  btnActive: {
    backgroundColor: '#588CE4',
    borderColor: '#588CE4',
    width: wp(32 / BASE_WIDTH),
    height: wp(32 / BASE_WIDTH),
    paddingVertical: 0,
    borderRadius: wp(16 / BASE_WIDTH),
  },
});

export default Index;
