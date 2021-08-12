import {createStackNavigator} from 'react-navigation-stack';

import Home from '../pages/Home';
import HomeDetail from '../pages/HomeDetail';

const HomeRootStack = createStackNavigator(
  {
    Home: Home,
    HomeDetail: HomeDetail,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({navigation}) => ({
      tabBarVisible: navigation.state.index === 0,
    }),
  },
);

export default HomeRootStack;
