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

// 获取电压趋势图
export async function voltageTrend(params) {
  return request('/voltageTrend', {
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

// 获取电压合格率
export async function getVoltageQualificationRate(params) {
  return request('/getVoltageQualificationRate', {
    method: 'GET',
    params,
  });
}

// 获取主变负荷率
export async function loadRateOfMainTransformer(params) {
  return request('/loadRateOfMainTransformer', {
    method: 'GET',
    params,
  });
}
// 获取油温
export async function getOilTemperatureOfMainTransformer(params) {
  return request('/getOilTemperatureOfMainTransformer', {
    method: 'GET',
    params,
  });
}

// 更新潮流图
export async function shougang(params) {
  return request('/shougang', {
    method: 'GET',
    params,
  });
}
// 更新潮流图
export async function shougangUpdate(params) {
  return request('/shougangUpdate', {
    method: 'GET',
    params,
  });
}
