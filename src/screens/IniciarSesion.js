// Importar Dependencias.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Buttons, TextInput } from 'react-native';
import { useState } from 'react';

export default function IniciarSesion({ navigation }) {

    // Constantes para validar
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Navegación entre pantallas.
    const irRecup1 = async () => {
        navigation.navigate('Recup1');
    };

    // Validación de la pantalla.
    const irMenu = () => {
        if (!validateEmail(email)) {
            setErrorMessage('Por favor, ingrese un correo electrónico válido.');
            return;
        }
        if (password.length < 8) {
            setErrorMessage('La contraseña debe tener al menos 5 caracteres.');
            return;
        }
        setErrorMessage(''); // Clear error message if all validations pass
        navigation.navigate('NavBottom');
    };

    const validateEmail = (email) => {
        // Simple regex for validating email format
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <View style={styles.container}>
            <Image source={require('../img/logo_panaderia.png')} // Ruta de la imagen dentro de la carpeta de activos
                style={styles.image}
            />
            <View style={styles.container2}>


                <Text style={styles.texto}>Correo</Text>
                <View style={styles.container3}>
                    <TextInput style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none" />
                </View>
                <Text style={styles.texto}>Contraseña</Text>
                <View style={styles.container3}>
                    <TextInput style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.container4}>
                    <TouchableOpacity onPress={irMenu} style={(styles.button)}><Text style={styles.textIniciar}>Iniciar Sesión</Text></TouchableOpacity>
                    <Text onPress={irRecup1} style={styles.textRegistrar}>Recuperar Contraseña</Text>
                </View>
            </View>
        </View >
    );
}


// Diseño de la pantalla.
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderWidth: 2,
        alignItems: 'center',
        borderColor: "#FFF",
        width: 222,
        borderRadius: 50,
        backgroundColor: "#FFF",
        padding: 10,
        marginVertical: 10,
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