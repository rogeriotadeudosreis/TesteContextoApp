import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from '../../assets/styles/contato';

export default function Contato({route}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Aula Sobre Context</Text>
      <Text style={styles.texto}>Tela de Contato</Text>
      <Text style={styles.data}>{route.params?.name}</Text>
      <Text style={styles.data}>{route.params?.email}</Text>
      <Text style={styles.data}>{route.params?.phone}</Text>
      <Button
        title="Voltar para tela inicial"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
