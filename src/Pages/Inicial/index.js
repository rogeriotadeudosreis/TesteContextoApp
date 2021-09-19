import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Inicial() {
  const navigation = useNavigation();

  function handleContato() {
    navigation.navigate('Contato');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela Inicial</Text>
      <View>
        <Button
          title="Ir para Contato"
          onPress={handleContato}></Button>
      </View>
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
