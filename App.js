import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  NavigationContainer
} from '@react-navigation/native';
import Home  from './screen/Home';
import Settings from './screen/Settings';

const Tab = createBottomTabNavigator();

const App = () =>  {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
