import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AuthProvider from './src/Contexts/auth';
import Contato from './src/Pages/Contato';
import Inicial from './src/Pages/Inicial';

export default function App() {
  return (
    <View style={styles.container}>
   <Contato/>
   <Inicial/>
    </View>
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
