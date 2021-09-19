import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import AuthProvider from './src/Contexts/auth';

import Contato from './src/Pages/Contato';
import Inicial from './src/Pages/Inicial';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Estratégia de navegação > stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator initialRouteName="Inicial">
            <Stack.Screen
              name="Inicial"
              component={Inicial}
              options={{headerShown: true}}
            />
            <Stack.Screen
              name="Contato"
              component={Contato}
              options={{headerShown: true}}
            />
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
