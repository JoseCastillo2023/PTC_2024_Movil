import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';

export default function Recup1({ navigation }) {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const irInicio = () => {
        navigation.navigate('InicioSesion');
    };

    const irRecup2 = () => {
        if (!validateEmail(email)) {
            setErrorMessage('Por favor, ingrese un correo electrónico válido.');
            return;
        }
        setErrorMessage(''); // Clear error message if all validations pass
        navigation.navigate('Recup2');
    };

    const validateEmail = (email) => {
        // Simple regex for validating email format
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../img/logo_panaderia.png')} // Ruta de la imagen dentro de la carpeta de activos
                style={styles.image}
            />
            <View style={styles.container2}>
                <Text style={styles.texto}>Correo</Text>
                <View style={styles.container3}>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.container4}>
                    <TouchableOpacity onPress={irInicio} style={styles.button}>
                        <Text style={styles.textIniciar}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={irRecup2} style={styles.button}>
                        <Text style={styles.textIniciar}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    container2: {
        backgroundColor: '#312323',
        width: 308,
        height: 300,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
    },
    container3: {
        width: '100%',
        alignItems: 'center',
    },
    container4: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '100%',
    },
    button: {
        borderWidth: 2,
        borderColor: '#FFF',
        width: 120,
        borderRadius: 50,
        backgroundColor: '#FFF',
        paddingVertical: 10,
        alignItems: 'center',
    },
    texto: {
        marginVertical: 5,
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16,
    },
    textIniciar: {
        color: '#322C2B',
        fontWeight: '700',
        fontSize: 18,
    },
    image: {
        width: 240,
        height: 240,
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#FFFFFF',
        color: '#000',
        width: '100%',
        height: 40,
        borderRadius: 50,
        paddingHorizontal: 20,
    },
});
