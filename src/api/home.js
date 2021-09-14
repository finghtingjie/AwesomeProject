import request from '@utils/request';

//获取首页顶部数据
export async function getHeadInfo(params) {
  return request('/head', {
    method: 'GET',
    params,
  });
}

//获取用户信息
export async function getUserInfo(params) {
  return request('/getUserInfo', {
    method: 'GET',
    params,
  });
}
