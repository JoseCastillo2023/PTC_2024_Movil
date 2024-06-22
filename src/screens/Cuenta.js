// Importar Dependencias.
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

export default function Cuenta({ navigation }) {

  // Navegación entre pantallas.
  const irInicio = async () => {
    navigation.navigate('IniciarSesion');
  };

  // Constantes para validar.
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');

  // Validación de la pantalla.
  const GuardarDatos = async () => {
    if (!nombre || !apellido || !telefono || !correo || !direccion) {
      Toast.show({
        type: 'error',
        text1: 'Faltan datos',
        text2: 'Por favor, complete todos los campos.',
      });
      return;
    }
    setCurrentScreen('Screen1')
  };

  const GuardarContra = () => {
    if (password.length < 8) {
      setErrorMessage('La contraseña debe tener al menos 5 caracteres.');
      return;
    }
    if (password2.length < 8) {
      setErrorMessage('La contraseña debe tener al menos 5 caracteres.');
      return;
    }
    if (password != password2) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }
    setErrorMessage(''); // Clear error message if all validations pass
    setCurrentScreen('Screen1')
  };

  const [currentScreen, setCurrentScreen] = useState('Screen1');

  const renderScreen = () => {
    if (currentScreen === 'Screen1') {
      // Pantalla 1.
      return (
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <Image
              source={require('../img/perfil.jpg')}
              style={styles.perfil}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.value}>Samuel.</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Apellido:</Text>
            <Text style={styles.value}>De Luque.</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Teléfono:</Text>
            <Text style={styles.value}>+503 7777-9999</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Correo:</Text>
            <Text style={styles.value}>vegetta777god@gmail.com</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Dirección:</Text>
            <Text style={styles.value}>San Salvador, San Salvador.</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => setCurrentScreen('Screen2')} style={[styles.button, styles.editButton]}>
              <Text style={styles.buttonText}>Editar perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentScreen('Screen3')} style={[styles.button, styles.changePasswordButton]}>
              <Text style={styles.buttonText}>Cambiar contraseña</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer2}>
            <TouchableOpacity onPress={(irInicio)}
              style={[styles.button, styles.logoutButton]}>
              <Text style={styles.buttonText}>Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    if (currentScreen === 'Screen2') {
      // Pantalla 2.
      return (
        <View style={styles.container2}>
          <View style={styles.profileContainer}>
            <Image
              source={require('../img/perfil_vacia.jpg')}
              style={styles.perfil}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Nombre:</Text>
            <TextInput style={styles.inputValue} value={nombre} onChangeText={setNombre}></TextInput>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Apellido:</Text>
            <TextInput style={styles.inputValue} value={apellido} onChangeText={setApellido}></TextInput>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Teléfono:</Text>
            <TextInput style={styles.inputValue} value={telefono} onChangeText={setTelefono}>
            </TextInput>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Correo:</Text>
            <TextInput style={styles.inputValue} 
            value={correo} onChangeText={setCorreo} keyboardType="email-address"></TextInput>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Dirección:</Text>
            <TextInput style={styles.inputValue}
              value={direccion} onChangeText={setDireccion}></TextInput>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => setCurrentScreen('Screen1')} style={[styles.buttonCancelar]}>
              <Text style={styles.buttonText2}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={GuardarDatos} style={[styles.buttonGuardar]}>
              <Text style={styles.buttonText2}>Guardar cambios</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    else {
      // Pantalla 3
      return (
        <View style={styles.container2}>

          <View style={styles.container3}>
          </View>
          <Text style={styles.titulo3}>
            Cambiar de contraseña
          </Text>
          <View style={styles.container3}>
          </View>
          <Text style={styles.label}>Nueva contraseña:</Text>
          <TextInput style={styles.inputValue}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}></TextInput>

          <Text style={styles.label}>Repita la contraseña:</Text>
          <TextInput style={styles.inputValue}
            value={password2}
            onChangeText={setPassword2}
            secureTextEntry={true}></TextInput>

          <View style={styles.container3}></View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => setCurrentScreen('Screen1')} style={[styles.buttonCancelar]}>
              <Text style={styles.buttonText2}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={GuardarContra} style={[styles.buttonGuardar]}>
              <Text style={styles.buttonText2}>Guardar cambios</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {renderScreen()}
    </ScrollView>
  );
};

// Diseño de la pantalla.
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingVertical: 30,
  },
  container2: {
    alignItems: 'center',
    paddingTop: 20,
    flex: 1,
    paddingBottom: 20,
  },
  container3: {
    paddingBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  perfil: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 100,
    height: 200,
    width: 200,
  },
  infoContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    textAlign: 'left',
  },
  label: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    paddingLeft: 3,
    textAlign: 'left',
    fontSize: 18,
    marginBottom: 15,
  },
  inputValue: {
    marginLeft: 10,
    backgroundColor: '#C0C0C0',
    width: 225,
    height: 30,
    borderRadius: 50,
    color: 'black',
    paddingLeft: 10,
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buttonContainer2: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  editButton: {
    backgroundColor: '#87CEEB',
    borderWidth: 2,
    borderColor: 'white',
    marginRight: 10,
  },
  changePasswordButton: {
    backgroundColor: '#98FB98',
    borderWidth: 2,
    borderColor: '#98FB98',
    marginRight: 10,
  },
  logoutButton: {
    alignItems: 'center',
    backgroundColor: '#F08080',
    borderWidth: 2,
    width: 200,
    borderColor: '#F08080',
  },
  buttonGuardar: {
    backgroundColor: '#98FB98',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#98FB98',
    marginHorizontal: 10,
    height: 50,
    width: 180,
  },
  buttonCancelar: {
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: '#F08080',
    marginHorizontal: 10,
    height: 50,
    width: 150,
    borderColor: '#F08080',
  },
  buttonText2: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  titulo3: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
  }
});
