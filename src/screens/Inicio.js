import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';


const Inicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.reposteriaText}>
        Repostería - Realizado con los mejores materiales y por las mejores manos 100% salvadoreñas
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
  reposteriaText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Inicio;