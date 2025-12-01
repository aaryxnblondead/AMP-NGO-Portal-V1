import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegistrationScreen } from '../screens/RegistrationScreen';
import { TabNavigator } from './TabNavigator';
import { SubmitReportScreen } from '../screens/SubmitReportScreen';
import { ProjectsScreen } from '../screens/ProjectsScreen';
import { EventsScreen } from '../screens/EventsScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { NGODetailsScreen } from '../screens/NGODetailsScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="MainApp" component={TabNavigator} />
          <Stack.Screen name="Projects" component={ProjectsScreen} />
          <Stack.Screen name="Events" component={EventsScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="NGODetails" component={NGODetailsScreen} options={{ headerShown: true, title: 'NGO Details' }} />
        </Stack.Group>
        
        <Stack.Group screenOptions={{ presentation: 'modal', headerShown: true }}>
          <Stack.Screen name="SubmitReport" component={SubmitReportScreen} options={{ title: 'Submit Report' }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
