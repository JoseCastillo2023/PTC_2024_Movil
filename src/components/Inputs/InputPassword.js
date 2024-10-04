import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

// Componente Input que recibe varias props para gestionar el valor, el texto y si es seguro
export default function Input({ placeHolder, valor, contra, setTextChange, onToggleVisibility }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeHolder}
                value={valor}
                onChangeText={setTextChange}
                secureTextEntry={contra} // Controla si se debe ocultar el texto
                placeholderTextColor="#623431"
            />
            <TouchableOpacity onPress={onToggleVisibility} style={styles.icon}>
                <Icon name={contra ? 'eye-slash' : 'eye'} size={20} color="#623431" />
            </TouchableOpacity>
        </View>
    );
}

// Estilos para el componente Input
const styles = StyleSheet.create({
    input: {
        flex: 1,
        borderColor: '#623431',
        backgroundColor: '#FFF',
        color: "#623431",
        fontWeight: '500',
        height: 40, // Mantén la altura del TextInput
        borderRadius: 15,
        padding: 10,
        marginVertical: 10,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center', // Alinear elementos verticalmente
        borderWidth: 1,
        borderColor: '#623431',
        backgroundColor: '#FFF',
        borderRadius: 15,
        marginVertical: 10,
        height: 50,
        width: 350, 
    },
    icon: {
        marginRight: 8, // Ajustar el margen izquierdo
        marginTop: 5, // Ajustar el margen superior para subir el ícono
    }
});
