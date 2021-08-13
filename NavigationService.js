// NavigationService.js

import { NavigationActions } from 'react-navigation';

let navigator;

//ref传值
const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};

const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};

//页面goBack方法
const goBack = () => {
  navigator.dispatch(NavigationActions.back());
};

//获取当前路由
const getCurrentRoute = () => {
  let route = navigator.state.nav;
  while (route.routes) {
    route = route.routes[route.index];
  }
  return route;
};

//获取当前路由名称
const getCurrentRouteName = () => {
  return getCurrentRoute().routeName;
};

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  getCurrentRoute,
  getCurrentRouteName,
  goBack,
};
