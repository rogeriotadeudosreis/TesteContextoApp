import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Contato() {

    

    return (
      <View style={styles.container}>
        <Text style={styles.texto}>snippets</Text>
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
