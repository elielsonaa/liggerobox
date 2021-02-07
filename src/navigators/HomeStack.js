import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Settings from '../screens/Settings';
import Home     from '../screens/Home';

const Tab = createBottomTabNavigator();

const HomeStack = () =>  {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer> 
  );
}
export default HomeStack;

