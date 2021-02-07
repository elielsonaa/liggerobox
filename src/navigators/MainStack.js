import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import HomeStack from '../navigators/HomeStack';

export default createAppContainer(createStackNavigator({
  Preload,
  SignIn,
  HomeStack
},
{
  initialRouteName:'Preload',
  defaultNavigationOptions:{
      headerShown:false
  }
}));
