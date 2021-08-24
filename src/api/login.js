import request from '@utils/request';

//登录-获取用户ID
export async function login(params) {
  return request('login', {
    method: 'POST',
    params,
  });
}

//登录-获取用户ID
export async function getMenuData(params) {
  return request('getMenuData', {
    method: 'GET',
    params,
  });
}
