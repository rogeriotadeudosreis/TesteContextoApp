import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default function Contato() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de Cadastro de Contato</Text>
      <View style={styles.inputs}>
        <TextInput 
        placeholder='Digite seu nome...'
        />
      </View>
      <Button title="Voltar para tela inicial"
      onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#182522',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
