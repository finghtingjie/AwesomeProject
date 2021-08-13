import axios from 'axios';
import { Platform } from 'react-native';

import { Toast, ModalIndicator } from 'teaset';
import AsyncStorage from '@react-native-community/async-storage';

import NavigationService from '../../NavigationService';

// const BASE_URL = 'http://172.18.229.32:8762/gw/';
// const BASE_URL = 'https://internalgw-test.mottuum.com/gw/';
const BASE_URL = 'https://internalgw-uat.mottuum.com/gw/';
// const BASE_URL = 'https://internalgw.mottuum.com/gw/';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 6000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json',
    'Device-Type': Platform.OS === 'ios' ? 'iOS' : 'Android',
  },
  //chrome下debug调试
  // __DEV__ react-native自带的环境变量，表示开发环境
  withCredentials: !__DEV__,
});

//请求拦截处理
instance.interceptors.request.use(
  async function(config) {
    let c_token = await AsyncStorage.getItem('Authorization');
    if (c_token) {
      // 登录之后 c_token
      config.headers.Authorization = c_token;
    } else {
      //没有登录状态时，跳转到登录页
      config.headers.Authorization = c_token;
    }

    //  给data赋值以绕过if判断，get请求时没有data content-type会失去
    if (config.method === 'get') {
      config.data = true;
    }
    // config.headers['Content-Type'] = 'application/json'
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

//返回拦截处理
instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(err) {
    // 对响应错误做点什么
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '错误请求';
          break;
        case 401:
          err.message = '未授权，请重新登录';
          break;
        case 403:
          err.message = '拒绝访问';
          break;
        case 404:
          err.message = '请求错误,未找到该资源';
          break;
        case 405:
          err.message = '请求方法未允许';
          break;
        case 408:
          err.message = '请求超时';
          break;
        case 500:
          err.message = '服务器端出错';
          break;
        case 501:
          err.message = '网络未实现';
          break;
        case 502:
          err.message = '网络错误';
          break;
        case 503:
          err.message = '服务不可用';
          break;
        case 504:
          err.message = '网络超时';
          break;
        case 505:
          err.message = 'http版本不支持该请求';
          break;
        default:
          err.message = `连接错误${err.response.status}`;
      }
      let errData = {
        code: err.response.status,
        message: err.message,
      };
      // 统一错误处理可以放这，例如页面提示错误...
      console.log('统一错误处理: ', errData);
      Toast.sad(errData.message);
      NavigationService.navigate('Login');
      ModalIndicator.hide();
    } else {
      Toast.sad('网络请求失败');
      if (__DEV__) {
        NavigationService.navigate('Login');
      }
      ModalIndicator.hide();
    }
    return Promise.reject(err);
  },
);

const request = async (api, { method, params }) => {
  if (method === 'GET') {
    return new Promise((resolve, reject) => {
      instance
        .get(api, { params })
        .then(res => resolve(res.data))
        .catch(error => reject(error));
    });
  } else if (method === 'POST') {
    return new Promise((resolve, reject) => {
      instance
        .post(api, params)
        .then(res => resolve(res.data))
        .catch(error => reject(error));
    });
  } else if (method === 'UPLOAD') {
    return new Promise((resolve, reject) => {
      instance({
        url: api,
        method: 'post',
        data: params,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then(res => resolve(res.data))
        .catch(error => reject(error));
    });
  }
};
export default request;
