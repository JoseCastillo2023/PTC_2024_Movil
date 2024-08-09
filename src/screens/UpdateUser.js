import { StyleSheet, Text, Image, View, TouchableOpacity, Alert, ScrollView, Modal, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Constantes from '../utils/constantes';
import Input from '../components/Inputs/Input';
import InputMultiline from '../components/Inputs/InputMultiline';
import Buttons from '../components/Buttons/Button';
import MaskedInputTelefono from '../components/Inputs/MaskedInputTelefono';
import MaskedInputDui from '../components/Inputs/MaskedInputDui';
import InputEmail from '../components/Inputs/InputEmail';
import AntDesign from "@expo/vector-icons/AntDesign";

export default function UserProfile({ navigation }) {
  const ip = Constantes.IP;

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [dui, setDui] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [claveActual, setClaveActual] = useState('');
  const [claveNueva, setClaveNueva] = useState('');
  const [confirmarClave, setConfirmarClave] = useState('');

  const duiRegex = /^\d{8}-\d$/;
  const telefonoRegex = /^\d{4}-\d{4}$/;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    
    // Calcula la fecha mínima permitida (hace 18 años desde hoy)
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
  
    // Verifica si la fecha seleccionada es menor a la fecha mínima
    if (currentDate > eighteenYearsAgo) {
      Alert.alert('Error', 'Debes tener al menos 18 años.');
      return;
    }
  
    setDate(currentDate);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    setFechaNacimiento(`${year}-${month}-${day}`);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const volverInicio = () => {
    navigation.navigate("Home");
  };

  const showDatepicker = () => {
    showMode('date');
  };


  const getUser = async () => {
    try {
      const response = await fetch(`${ip}/PTC_2024/api/services/public/cliente.php?action=readProfileMovil`, {
        method: 'GET'
      });
      console.log('Fetch response:', response);  
      const data = await response.json();
      console.log('Fetch data:', data);  
      if (data.status) {
        setNombre(data.name.nombre_cliente);
        setApellido(data.name.apellido_cliente);
        setEmail(data.name.correo_cliente);
        setDui(data.name.dui_cliente);
        setTelefono(data.name.telefono_cliente);
        setDireccion(data.name.direccion_cliente);
        setFechaNacimiento(data.name.nacimiento_cliente);
        const [year, month, day] = data.name.nacimiento_cliente.split('-');
        setDate(new Date(year, month - 1, day));
        setClaveActual(data.name.clave_cliente);
      } else {
        Alert.alert('Error', data.error);
        console.log(error);
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al obtener los datos del usuario');
      console.log(error);
    }
  };

  const handleEdit = async () => {
    try {
      if (!nombre.trim() || !apellido.trim() || !email.trim() || !direccion.trim() ||
          !dui.trim() || !fechaNacimiento.trim() || !telefono.trim()) {
        Alert.alert("Debes llenar todos los campos");
        return;
      } else if (!duiRegex.test(dui)) {
        Alert.alert("El DUI debe tener el formato correcto (########-#)");
        return;
      } else if (!telefonoRegex.test(telefono)) {
        Alert.alert("El teléfono debe tener el formato correcto (####-####)");
        return;
      }

      const formData = new FormData();
      formData.append('nombreCliente', nombre);
      formData.append('apellidoCliente', apellido);
      formData.append('correoCliente', email);
      formData.append('duiCliente', dui);
      formData.append('telefonoCliente', telefono);
      formData.append('direccionCliente', direccion);
      formData.append('nacimientoCliente', fechaNacimiento);

      const response = await fetch(`${ip}/PTC_2024/api/services/public/cliente.php?action=editProfile`, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (data.status) {
        Alert.alert('Perfil actualizado correctamente');
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', data.error);
      }
    } catch (error) {
      Alert.alert('Ocurrió un error al intentar editar el perfil');
    }
  };

  const handleChangePassword = async () => {
    if (claveNueva !== confirmarClave) {
      Alert.alert("Las contraseñas nuevas no coinciden");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('claveActual', claveActual);
      formData.append('claveNueva', claveNueva);
  
      const response = await fetch(`${ip}/PTC_2024/api/services/public/cliente.php?action=changePassword`, {
        method: 'POST',
        body: formData,
      });
  
      const responseText = await response.text();
      console.log('Change Password Response:', responseText);
  
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (jsonError) {
        throw new Error(`Respuesta del servidor no es JSON: ${responseText}`);
      }
  
      if (data.status) {
        Alert.alert("Contraseña cambiada con éxito");
        setModalVisible(false);
      } else {
        Alert.alert('Error', data.error);
      }
    } catch (error) {
      console.error('Error en el manejo de cambio de contraseña:', error);
      Alert.alert('Ocurrió un error al intentar cambiar la contraseña', error.message);
    }
  };
  
  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <TouchableOpacity style={styles.ButtonVolver} onPress={volverInicio}>
          <AntDesign name="arrowleft" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.texto}>Editar Perfil</Text>
        <Image source={require('../img/human.png')} style={styles.image} />
        <Text style={styles.label}>Nombre:</Text>
        <Input
          placeHolder='Ingrese un nuevo nombre...'
          valor={nombre}
          setTextChange={setNombre}
        />
        <Text style={styles.label}>Apellido:</Text>
        <Input
          placeHolder='Ingrese un nuevo apellido...'
          valor={apellido}
          setTextChange={setApellido}
        />
        <Text style={styles.label}>Email:</Text>
        <InputEmail
          placeHolder='Ingrese un nuevo correo...'
          valor={email}
          setTextChange={setEmail} />
        <Text style={styles.label}>Dirección:</Text>
        <InputMultiline
          placeHolder='Ingrese un nuevo dirección...'
          valor={direccion}
          setTextChange={setDireccion} />
        <Text style={styles.label}>DUI:</Text>
        <MaskedInputDui
          dui={dui}
          setDui={setDui} />
        <Text style={styles.label}>Fecha de nacimiento:</Text>
        <View style={styles.contenedorFecha}>
          <TouchableOpacity onPress={showDatepicker}>
            <Text style={styles.fechaSeleccionar}>
            <Text style={styles.fecha}> {fechaNacimiento || 'Selecciona tu fecha de nacimiento'}</Text>
            </Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              minimumDate={new Date(new Date().getFullYear() - 100, new Date().getMonth(), new Date().getDate())}
              maximumDate={new Date()}
              onChange={onChange}
            />
          )}
        </View>

        <Text style={styles.label}>Teléfono:</Text>
        <MaskedInputTelefono
          telefono={telefono}
          setTelefono={setTelefono} />

        <Buttons
          textoBoton='Editar perfil'
          accionBoton={handleEdit}
        />

        <Buttons
          textoBoton='Cambiar contraseña'
          accionBoton={() => setModalVisible(true)}
        />

        {/* Modal para cambiar la contraseña */}
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
            // Opcionalmente, limpiar los campos de contraseña aquí
            setClaveActual('');
            setClaveNueva('');
            setConfirmarClave('');
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Cambiar contraseña</Text>
              <TextInput
                style={styles.modalInput}
                placeholder='Contraseña actual:'
                secureTextEntry
                value={claveActual}
                onChangeText={setClaveActual}
              />
              <TextInput
                style={styles.modalInput}
                placeholder='Nueva contraseña:'
                secureTextEntry
                value={claveNueva}
                onChangeText={setClaveNueva}
              />
              <TextInput
                style={styles.modalInput}
                placeholder='Confirmar nueva contraseña:'
                secureTextEntry
                value={confirmarClave}
                onChangeText={setConfirmarClave}
              />
              <Buttons
                textoBoton='Confirmar'
                accionBoton={handleChangePassword}
              />
              <Buttons
                textoBoton='Cancelar'
                accionBoton={() => {
                  setModalVisible(false);
                  // Limpiar campos de contraseña si es necesario
                  setClaveActual('');
                  setClaveNueva('');
                  setConfirmarClave('');
                }}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#623431',
    paddingTop: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ButtonVolver: {
    flexDirection: "row",
    marginRight: 310,
    marginTop: 10,

    borderRadius: 8,
    paddingHorizontal: 15,
  },
  scrollViewStyle: {
    backgroundColor: '#623431',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
  },
  texto: {
    color: '#FFF', fontWeight: '500',
    fontSize: 25,
    marginVertical: 10
  },
  textRegistrar: {
    color: '#FFF', fontWeight: '500',
    fontSize: 25
  },
  contenedorFecha: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    height: 45,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  fechaSeleccionar: {
    fontSize: 14,
    color: '#16537E',
    fontWeight: '500'
  },
  fecha: {
    fontSize: 14,
    color: '#16537E',
    fontWeight: '500'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15
  },
  modalInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10
  },
  modalButton: {
    width: '100%',
    backgroundColor: '#16537E',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  label: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
});

