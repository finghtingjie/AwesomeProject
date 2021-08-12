const BASE_URL = 'http://api.juheapi.com';
// const BASE_URL = 'http://apis.juhe.cn';

export default async function(method, url, {bodyParams = {}, urlParams = {}}) {
  // 将url参数写入URL
  let urlParStr = '';
  const urlParArr = Object.keys(urlParams);
  if (urlParArr.length) {
    Object.keys(urlParams).forEach(element => {
      urlParStr += `${element}=${urlParams[element]}&`;
    });
    urlParStr = `?${urlParStr}`.slice(0, -1);
  }

  const res = await fetch(
    new Request(`${BASE_URL}${url}${urlParStr}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        // 'X-Auth-Token': storeObj.user.user ? storeObj.user.user.token : '',
      },
      // 如果是 get 或者 head 方法，不添加请求头部
      body: method === ('GET' || 'HEAD') ? null : JSON.stringify(bodyParams),
    }),
  );

  if (res.status < 200 || res.status > 299) {
    console.log(`出错啦：${res.status}`);
  } else {
    return res.json();
  }
}
