import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './src/store';

import MainStack  from './src/navigators/MainStack';
//import Settings from './src/screen/Settings';

const Tab = createBottomTabNavigator();

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainStack/>
    </PersistGate>
  </Provider>
);

// <NavigationContainer>
// <Tab.Navigator>
//   <Tab.Screen name="Home" component={Home} />
//   <Tab.Screen name="Settings" component={Settings} />
// </Tab.Navigator>
// </NavigationContainer>