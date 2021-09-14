import request from '@utils/request';

//获取网侧监视
export async function netSideMonitor(params) {
  return request('/netSideMonitor', {
    method: 'GET',
    params,
  });
}

//获取源端监视
export async function sourceEndMonitor(params) {
  return request('/sourceEndMonitor', {
    method: 'GET',
    params,
  });
}

// 获取发电机负荷率
export async function generatorLoadRate(params) {
  return request('/generatorLoadRate', {
    method: 'GET',
    params,
  });
}
