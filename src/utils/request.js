import axios from 'axios';
import { Platform } from 'react-native';

import { Toast, ModalIndicator } from 'teaset';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BASE_URL from '../utils/baseurl';
import NavigationService from '../../NavigationService';

const pending = new Map();

/**
 * 添加请求
 * @param {Object} config
 */
const addPending = config => {
  const url = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&');
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken(cancel => {
      if (!pending.has(url)) {
        // 如果 pending 中不存在当前请求，则添加进去
        pending.set(url, cancel);
      }
    });
};
/**
 * 移除请求
 * @param {Object} config
 */
const removePending = config => {
  const url = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&');
  if (pending.has(url)) {
    // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    const cancel = pending.get(url);
    cancel(url);
    pending.delete(url);
  }
};
/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
export const clearPending = () => {
  for (const [url, cancel] of pending) {
    cancel(url);
  }
  pending.clear();
};

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json',
  },
  withCredentials: !__DEV__,
});

//请求拦截处理
instance.interceptors.request.use(
  async config => {
    const c_token = await AsyncStorage.getItem('Authorization');
    if (c_token) {
      config.headers.token = c_token;
    } else {
      //没有登录状态时，跳转到登录页
      config.headers.token = c_token;
    }
    if (config.method === 'get') {
      config.data = true;
    }
    removePending(config); // 在请求开始前，对之前的请求做检查取消操作
    addPending(config); // 将当前请求添加到 pending 中
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

const errorHandler = err => {
  if (err && err.response) {
    ModalIndicator.hide();
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
        err.message = `请求地址出错: ${err.response.config.url}`;
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
        err.message = '服务未实现';
        break;
      case 502:
        err.message = '网关错误';
        break;
      case 503:
        err.message = '服务不可用';
        break;
      case 504:
        err.message = '网关超时';
        break;
      case 505:
        err.message = 'http版本不支持该请求';
        break;
      default:
        err.message = `连接错误${err.response.status}`;
    }
    const errData = {
      code: err.response.status,
      message: err.message,
    };
    // 统一错误处理可以放这，例如页面提示错误...
    console.log('统一错误处理: ', errData);
    Toast.sad(errData.message);
    NavigationService.navigate('Login');
  } else {
    console.log('Error', JSON.parse(JSON.stringify(err)));
    // 超时或断网
    let msg = '';
    if (err.message.includes('timeout')) {
      msg = '请求超时！请检查网络是否正常';
    } else {
      msg = '网络错误，请检查网络是否已连接！';
    }
    Toast.sad(msg);
    if (__DEV__) {
      NavigationService.navigate('Login');
    }
  }
};

//返回拦截处理
instance.interceptors.response.use(
  response => {
    removePending(response); // 在请求结束后，移除本次请求
    return response;
  },
  err => {
    if (axios.isCancel(err)) {
      console.log('repeated request: ' + err.message);
    } else {
      errorHandler(err);
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
