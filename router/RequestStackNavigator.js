import {createStackNavigator} from 'react-navigation-stack';

import Request from '../pages/Request';
import RequestDetail from '../pages/RequestDetail';

const RequestRootStack = createStackNavigator(
  {
    Request: Request,
    RequestDetail: RequestDetail,
  },
  {
    initialRouteName: 'Request',
    navigationOptions: ({navigation}) => ({
      tabBarVisible: navigation.state.index === 0,
    }),
  },
);

export default RequestRootStack;
