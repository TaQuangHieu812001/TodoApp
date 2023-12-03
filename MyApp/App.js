import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout,IconRegistry } from '@ui-kitten/components';
import LoginScreen from './src/Login/LoginScreen';
import TodoListScreen from './src/Todo/TodoScreen';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import UserProfileScreen from './src/Information/UserProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/navigation';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
  <ApplicationProvider {...eva} theme={eva.light}>
    <Layout style={{flex: 1}}>
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  </Layout> 
  </ApplicationProvider>
  </>
);