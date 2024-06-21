import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import Toast from 'react-native-toast-message';
import { ScrollView } from 'react-native';

export default function Registrar({ navigation }) {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');

    const irInicioCreado = async () => {
        if (!nombre || !apellido || !telefono || !contrasena || !correo || !direccion) {
            Toast.show({
                type: 'error',
                text1: 'Faltan datos',
                text2: 'Por favor, complete todos los campos.',
            });
            return;
        }
        navigation.navigate('IniciarSesion');
    };

    const irInicio = async () => {
        navigation.navigate('IniciarSesion');
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require('../img/logo_panaderia.png')}
                    style={styles.logo}
                />
                <View style={styles.rowContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textRegistro}>Nombre</Text>
                        <TextInput style={styles.cuadroTextoP} value={nombre} onChangeText={setNombre} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textRegistro}>Apellido</Text>
                        <TextInput style={styles.cuadroTextoP} value={apellido} onChangeText={setApellido} />
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textRegistro}>Teléfono</Text>
                        <TextInput style={styles.cuadroTextoP} value={telefono} onChangeText={setTelefono} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textRegistro}>Contraseña</Text>
                        <TextInput style={styles.cuadroTextoP} value={contrasena} onChangeText={setContrasena} secureTextEntry />
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textRegistro}>Correo</Text>
                        <TextInput style={styles.cuadroTextoG} value={correo} onChangeText={setCorreo} keyboardType="email-address" />
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textRegistro}>Dirección</Text>
                        <TextInput style={styles.cuadroTextoG} value={direccion} onChangeText={setDireccion} />
                    </View>
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity onPress={irInicioCreado} style={styles.button}>
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>
                    <Text onPress={irInicio} style={styles.buttonText2}>¿Ya tienes cuenta?</Text>
                </View>
                <Toast ref={(ref) => Toast.setRef(ref)} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 60,
        alignItems: 'center',
        marginBottom: 10,
        width: 200,
        height: 200,
    },
    container: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    container2: {
        alignItems: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        width: '100%',
    },
    inputContainer: {
        flex: 1,
        marginHorizontal: 7,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#322C2B',
        width: 160,
        height: 40,
        fontWeight: '900',
        borderRadius: 50,
    },
    buttonText: {
        marginVertical: 7,
        textAlign: 'center',
        alignItems: 'center',
        color: '#FFF',
        fontWeight: '600',
        fontSize: 16
    },
    buttonText2: {
        marginVertical: 10,
        textAlign: 'center',
        color: '#000',
        fontWeight: '600',
        fontSize: 16,
    },
    textRegistro: {
        color: '#322C2B',
        fontWeight: '700',
        fontSize: 14,
        marginBottom: 5,
    },
    cuadroTextoP: {
        backgroundColor: '#543F3F',
        borderRadius: 50,
        width: '100%',
        height: 33,
        paddingHorizontal: 10,
        color: '#FFF',
    },
    cuadroTextoG: {
        backgroundColor: '#543F3F',
        borderRadius: 50,
        width: '100%',
        height: 33,
        paddingHorizontal: 10,
        color: '#FFF',
        marginBottom: 10,
    },
});