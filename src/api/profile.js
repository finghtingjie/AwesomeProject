import request from '@utils/request';

//新增用户
export async function addUser(params) {
  return request('addUser', {
    method: 'POST',
    params,
  });
}

//搜索用户
export async function reviseUser(params) {
  return request('reviseUser', {
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

//获取分组列表
export async function getGrouping(params) {
  return request('getGrouping', {
    method: 'GET',
    params,
  });
}

//新增分组
export async function addGrouping(params) {
  return request('addGrouping', {
    method: 'POST',
    params,
  });
}

//修改分组
export async function updateGrouping(params) {
  return request('updateGrouping', {
    method: 'POST',
    params,
  });
}

//删除分组
export async function deleteGrouping(params) {
  return request('deleteGrouping', {
    method: 'GET',
    params,
  });
}

//根据分组id获取分组菜单列表
export async function getGroupingMenu(params) {
  return request('getGroupingMenu', {
    method: 'GET',
    params,
  });
}

// 获取用户信息
export async function getUserInfo(params) {
  return request('getUserInfo', {
    method: 'GET',
    params,
  });
}

// 获取告警配置用户
export async function getTGiveAnAlarmUser(params) {
  return request('getTGiveAnAlarmUser', {
    method: 'GET',
    params,
  });
}

// 新增告警人员
export async function addTGiveAnAlarmUser(params) {
  return request('addTGiveAnAlarmUser', {
    method: 'GET',
    params,
  });
}

// 获取告警配置列表
export async function getTGiveAnAlarm(params) {
  return request('getTGiveAnAlarm', {
    method: 'GET',
    params,
  });
}

// 删除告警人员
export async function deleteTGiveAnAlarmr(params) {
  return request('deleteTGiveAnAlarmr', {
    method: 'POST',
    params,
  });
}
