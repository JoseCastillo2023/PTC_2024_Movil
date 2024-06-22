import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Buttons, TextInput } from 'react-native';
import { useState } from 'react';

export default function Recup2({ navigation }) {
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const irRecup1 = async () => {
    navigation.navigate('Recup1');
  };

  const irInicio = () => {
    if (password.length < 8) {
      setErrorMessage('La contraseña debe tener al menos 5 caracteres.');
      return;
    }
    if (password2.length < 8) {
        setErrorMessage('La contraseña debe tener al menos 5 caracteres.');
        return;
    }
    if (password != password2){
        setErrorMessage('Las contraseñas no coinciden');
        return;
    }
    setErrorMessage(''); // Clear error message if all validations pass
    navigation.navigate('IniciarSesion');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../img/logo_panaderia.png')} // Ruta de la imagen dentro de la carpeta de activos
        style={styles.image}
      />
      <View style={styles.container2}>

        <Text style={styles.texto}>Nueva contraseña</Text>
        <View style={styles.container3}>
          <TextInput style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <Text style={styles.texto}>Repita la contraseña</Text>
        <View style={styles.container3}>
          <TextInput style={styles.input}
            value={password2}
            onChangeText={setPassword2}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.container4}>
          <TouchableOpacity onPress={irRecup1} style={(styles.button)}><Text style={styles.textIniciar}>Volver</Text></TouchableOpacity>
          <TouchableOpacity onPress={irInicio} style={(styles.button)}><Text style={styles.textIniciar}>Guardar</Text></TouchableOpacity>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
    backgroundColor: "#312323",
    width: 308,
    height: 300,
    borderRadius: 20,
    padding: 5,
    margin: 10,
  },
  container3: {
    alignItems: 'center',
  },
  container4: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    borderColor: "#FFF",
    width: 100,
    borderRadius: 50,
    backgroundColor: "#FFF",
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: "#FFF",
    fontWeight: '500',
  },
  texto: {
    marginVertical: 5,
    marginLeft: 30,
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16
  },
  textIniciar: {
    color: '#322C2B', fontWeight: '700',
    fontSize: 18
  },
  textRegistrar: {
    color: '#FFF', fontWeight: '700',
    fontSize: 18
  },
  image: {
    width: 240,
    height: 240,
    marginBottom: 10
  },
  input: {
    backgroundColor: '#FFFFFF',
    color: "#000",
    width: 279,
    height: 33,
    borderRadius: 50,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});