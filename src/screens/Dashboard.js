import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/logo_panaderia.png')}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>BIENVENIDO</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Image
        source={require('../img/Pastel.png')}
        style={styles.cakeImage}
      />
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
  logo: {
    width: 150,
    height: 150,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#312323',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  cakeImage: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  reposteriaText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default WelcomeScreen;