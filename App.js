import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginComponent from './src/components/LoginComponent/LoginComponent';
import DashboardComponent from './src/components/DashboardComponent/DashboardComponent'
import RegisterComponent from './src/components/RegisterComponent/RegisterComponent'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginComponent} />
        <Stack.Screen name="Register" component={RegisterComponent} />
        <Stack.Screen name="Dashboard" component={DashboardComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
