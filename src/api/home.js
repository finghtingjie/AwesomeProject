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

//月供电率
export async function selfDowerSupplyRate(params) {
  return request('/selfDowerSupplyRate', {
    method: 'GET',
    params,
  });
}

//总负荷曲线统计图
export async function totalLoadCurve(params) {
  return request('/totalLoadCurve', {
    method: 'GET',
    params,
  });
}
