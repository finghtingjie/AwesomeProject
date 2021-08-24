import request from '@utils/request';

//新增用户
export async function addUser(params) {
  return request('addUser', {
    method: 'POST',
    params,
  });
}

//获取所有用户信息
export async function getAllUserInfo(params) {
  return request('getAllUserInfo', {
    method: 'GET',
    params,
  });
}

//删除用户
export async function deleteUser(params) {
  return request('deleteUser', {
    method: 'GET',
    params,
  });
}

//搜索用户
export async function userSearch(params) {
  return request('userSearch', {
    method: 'GET',
    params,
  });
}

//搜索用户
export async function revisePassword(params) {
  return request('revisePassword', {
    method: 'GET',
    params,
  });
}
