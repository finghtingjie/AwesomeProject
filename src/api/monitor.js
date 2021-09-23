import request from '@utils/request';

//获取监控数据
export async function getMonitor(params) {
  return request('/getMonitor', {
    method: 'GET',
    params,
  });
}
