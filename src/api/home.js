import request from '@utils/request';

//获取工单列表
export async function getOrderList(params) {
  return request('order/app/client/order/getAppHomePageSo', {
    method: 'POST',
    params: params,
  });
}
//获取预约列表
export async function getRequestList(params) {
  return request('order/app/client/order/queryCurrentMonthMr', {
    method: 'GET',
    params: params,
  });
}
//获取本月有效单
export async function getCurrentMonthList(params) {
  return request('order/app/client/order/queryHomeCurrentMonthSoStatistics', {
    method: 'GET',
    params: params,
  });
}

//获取上月工单
export async function getLastMonthList(params) {
  return request('order/app/client/order/queryHomeLastMonthSoStatistics', {
    method: 'GET',
    params: params,
  });
}

export async function saveAppEquipment(params) {
  return request('/platform/sys/app/saveAppEquipment', {
    method: 'POST',
    params: params,
  });
}
//获取消息
export async function queryMessageInform(params) {
  return request('/batch/message/queryMessageInform', {
    method: 'GET',
    params: params,
  });
}

//获取当前用户信息
export async function getUserInfo(params) {
  return request('/getUserInfo', {
    method: 'GET',
    params: params,
  });
}

export async function uploadImage(params) {
  return request('platform/sys/user/uploadUserPic', {
    method: 'UPLOAD',
    params: params,
  });
}
