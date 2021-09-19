import {useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import styles from '../../assets/styles/contato';
import AuthProvider, {AuthContext} from '../../Contexts/auth';

export default function Contato({route}) {
  const navigation = useNavigation();
  const {userLogin} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Aula Sobre Contexto</Text>
      <Text style={styles.texto}>Contados vindos via parâmetro</Text>
      <Text style={styles.data}>{route.params?.name}</Text>
      <Text style={styles.data}>{route.params?.email}</Text>
      <Text style={styles.data}>{route.params?.phone}</Text>
      <Text style={styles.texto}>Contados vindos via context</Text>
      <Text style={styles.data}>{userLogin.name}</Text>
      <Text style={styles.data}>{userLogin.email}</Text>
      <Text style={styles.data}>{userLogin.phone}</Text>
      <Button
        title="Voltar para tela inicial"
        onPress={() => navigation.goBack()}
      />

    </View>
  );
}
