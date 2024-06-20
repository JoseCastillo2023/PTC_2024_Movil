import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';


const Inicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.reposteriaText}>
        Panaderia Hernández
      </Text>
      <Text style={styles.reposteriaText}>
        Bienvenido
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reposteriaText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Inicio;