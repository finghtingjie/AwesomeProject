import request from '@utils/request';

//获取告警列表
export async function getGiveAnAlarm(params) {
  return request('/getGiveAnAlarm', {
    method: 'GET',
    params,
  });
}
