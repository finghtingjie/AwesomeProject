/**
 * @format
 */
// 引入注册组件类
import {AppRegistry} from 'react-native';
// 引入组件汇总模块
import App from './App';
// 引入输出组件的名称
import {name as appName} from './app.json';
import './config';
// 注册组件， 程序的主入口
// appName 注册组件的名称
AppRegistry.registerComponent(appName, () => App);
