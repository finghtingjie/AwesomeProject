import {Text, TextInput} from 'react-native';
//设置字体不随系统设置改变
if (!Text.defaultProps) {
  Text.defaultProps = {};
}
if (!TextInput.defaultProps) {
  TextInput.defaultProps = {};
}
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps.allowFontScaling = false;
