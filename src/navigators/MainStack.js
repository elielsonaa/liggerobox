import {createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';

import Preload from '../screen/Preload';
import Login from '../screen/Login';
//import HomeStack from './HomeStack';

export default createAppContainer(createStackNavigator({
  Preload,
  Login
  //HomeStack
}));