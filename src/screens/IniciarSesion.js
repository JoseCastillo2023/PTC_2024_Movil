
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import Input from '../components/Inputs/Input'
import Buttons from '../components/Buttons/Button';
import * as Constantes from '../utils/constantes'

export default function IniciarSesion({ navigation }) {


  const ip = Constantes.IP;

  const [isContra, setIsContra] = useState(true)
  const [usuario, setUsuario] = useState('')
  const [contrasenia, setContrasenia] = useState('')
  //const [confirmarContrasenia, setConfirmarContrasenia] = useState('')
  //http://localhost/coffeeshop/api/services/public/cliente.php?action=signUpMovil

  const cerrarSesion = async () => {
    try {
      const response = await fetch(`${ip}/coffeeshop/api/services/public/cliente.php?action=logOut`, {
        method: 'GET'
      });

      const data = await response.json();

      if (data.status) {
        Alert.alert("Sesion Finalizada")
      } else {
        console.log(data);
        // Alert the user about the error
        Alert.alert('Error', data.error);
      }
    } catch (error) {
      console.error(error, "Error desde Catch");
      Alert.alert('Error', 'Ocurrió un error al iniciar sesión con bryancito');
    }
  }


  const handlerLogin = async () => {

    try {
      const formData = new FormData();
      formData.append('correo', usuario);
      formData.append('clave', contrasenia);
      //utilizar la direccion IP del servidor y no localhost
      const response = await fetch(`${ip}/coffeeshop/api/services/public/cliente.php?action=logIn`, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (data.status) {
        //setContrasenia('')
        //setUsuario('')
        navigation.navigate('Home');

      } else {
        console.log(data);
        // Alert the user about the error
        Alert.alert('Error sesion', data.error);
      }
    } catch (error) {
      console.error(error, "Error desde Catch");

      Alert.alert('Error', 'Ocurrió un error al iniciar sesión');
    }
  };

  const irRegistrar = async () => {
    navigation.navigate('SignUp');
  };



  return (
    <View style={styles.container}>
      <Image source={require('../img/logo_panaderia.png')} // Ruta de la imagen dentro de la carpeta de activos
        style={styles.image}
      />
      <View style={styles.container2}>

        <Text style={styles.texto}>Correo</Text>
        <Input
          placeHolder='Usuario'
          setValor={usuario}
          setTextChange={setUsuario}
        />
        <Text style={styles.texto}>Contraseña</Text>
        <Input
          placeHolder='Contraseña'
          setValor={contrasenia}
          setTextChange={setContrasenia}
          contra={isContra} />

          <View style={styles.container3}>

          </View>

        <Buttons
          textoBoton='Iniciar Sesión'
          accionBoton={handlerLogin} />
        <TouchableOpacity onPress={irRegistrar}><Text style={styles.textRegistrar}>Registrar Usuario</Text></TouchableOpacity>

        {//Boton de ayuda para finalizar la sesión
        }
        <Buttons
          textoBoton='Cerrar Sesion'
          accionBoton={cerrarSesion} />
      </View>
    </View>
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
    padding: 25,
    borderRadius: 20,
  },
  container3: {
    backgroundColor: "#312323",
    padding: 5,
  },
  button: {
    borderWidth: 2,
    borderColor: "#AF8260",
    width: 150,
    borderRadius: 10,
    backgroundColor: "#AF8260",
    padding: 10,
    marginVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: "#FFF", fontWeight: '800', textTransform: 'uppercase'
  },
  texto: {
    marginLeft: 17,
    color: '#FFFFFF', fontWeight: '900',
    fontSize: 16
  },
  textRegistrar: {
    color: '#322C2B', fontWeight: '700',
    fontSize: 18
  },
  image: {
    width: 240,
    height: 240,
    marginBottom: 10
  },
});