import request from '@utils/request';

//登录-获取用户ID
export async function login(params) {
  return request('platform/sys/login/preLogin', {
    method: 'POST',
    params: params,
  });
}

//登录-获取账号列表
export async function getChooseBizEntity(params) {
  return request('platform/sys/login/getChooseBizEntity', {
    method: 'POST',
    params: params,
  });
}
//登录-选择登录账号
export async function getChoseBizAccount(params) {
  return request('platform/sys/login/choseBizAccount', {
    method: 'POST',
    params: params,
  });
}
//获取验证码
export async function getAppCode(params) {
  return request('platform/sys/login/getAppCode', {
    method: 'GET',
    params: params,
  });
}
//验证码验证
export async function checkVerifyList(params) {
  return request('platform/sys/login/checkAppVcode', {
    method: 'POST',
    params: params,
  });
}

//修改密码
export async function updatePassList(params) {
  return request('platform/sys/user/updatePasswordByPhone', {
    method: 'POST',
    params: params,
  });
}

// 强制更新
export async function queryUpdate(params) {
  return request('platform/sys/app/isNeedToUpdate', {
    method: 'POST',
    params: params,
  });
}

// 强制更新
export async function queryMenu(params) {
  return request('platform/sys/authorization/queryLoginAuthorization', {
    method: 'GET',
    params: params,
  });
}
