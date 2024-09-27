import { StyleSheet, TextInput } from 'react-native';
import React from 'react';

// Componente InputMultiline que recibe varias props para gestionar el valor, el texto y si es seguro
export default function Input({ placeHolder, valor, contra, setTextChange }) {
  return (
    <TextInput
    style={styles.Input}
    placeholder={placeHolder}
    value={valor}
    onChangeText={setTextChange}
    secureTextEntry={contra} // Controla si se debe ocultar el texto
    placeholderTextColor="#623431"
/>
  );
}

// Estilos para el componente InputMultiline
const styles = StyleSheet.create({
  Input: {
    borderWidth: 1,
    borderColor: '#623431', 
    backgroundColor: '#FFF',
    color: "#623431",
    fontWeight: '500',
    width: 350,
    height: 45,  // Ajuste la altura para multiline
    borderRadius: 15,
    padding: 10,
    marginVertical: 10
  },
});
