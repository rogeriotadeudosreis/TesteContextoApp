import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import styles from '../../assets/styles/Inicial';

export default function Inicial() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigation = useNavigation();

  function handleContato() {
    navigation.navigate('Contato', {name: name, email: email, phone: phone});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela Inicial de Cadastro</Text>
      <View>
        <View style={styles.containerInputs}>
          <TextInput
            style={styles.input}
            placeholder={'Digite seu nome...'}
            keyboardType="default"
            value={name}
            onChangeText={setName}
          />
          <TextInput 
          style={styles.input} 
          placeholder={'Digite seu email...'}
          keyboardType='default'
          value={email}
          onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder={'Digite seu telefone...'}
            keyboardType='numeric'
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <Button title="Ir para Contato" onPress={handleContato}></Button>
      </View>
    </View>
  );
}
