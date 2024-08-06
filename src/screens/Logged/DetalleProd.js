// Importar Dependencias.
import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const DetalleProd = () => {

    const navigation = useNavigation();

    const irCarrito = () => {
        navigation.navigate('Carrito');
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.containerImagen}>
                    <Image
                        source={require('../img/baguette.png')}
                        style={styles.imagenProducto}
                    />
                </View>
                <View style={styles.productDetails}>
                    <View style={styles.containerProducto}>
                        <Text style={styles.tituloProducto}>
                            Pan Baguette Integral - 15cm
                        </Text>
                        <Text style={styles.precioProducto}>
                            $ 5.00
                        </Text>
                    </View>
                    <Text style={styles.textoProducto}>
                        Pan 100% Artesanal, 0.5 Kg por unidad.
                    </Text>
                    <TouchableOpacity style={styles.botonCarrito} onPress={irCarrito}>
                        <Text style={styles.textoBoton}>
                            Agregar al carrito
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.masProductosContainer}>
                    <Text style={styles.masProductosTitulo}>
                        Más Productos
                    </Text>
                    <View style={styles.productoRelacionado}>
                        <View style={styles.containerImagen2}>
                            <Image
                                source={require('../img/brioche.png')}
                                style={styles.imagenProducto2}
                            />
                        </View>
                        <View style={styles.productoInfo}>
                            <Text style={styles.productoRelacionadoTitulo}>Pan Brioche</Text>
                            <Text style={styles.productoRelacionadoDescripcion}>
                                Pan suave y esponjoso con textura ligera y su sabor sutil, con mantequilla y
                                huevos.
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

// Diseño de la pantalla.
const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 20,
        backgroundColor: 'white',
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    containerProducto: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 4,
        alignItems: 'center',
        paddingHorizontal: 50,
    },
    containerImagen: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        marginBottom: 30,
    },
    containerImagen2: {
        backgroundColor: 'white',
        width: '20%',
        alignItems: 'center',
        marginBottom: 20,
    },
    imagenProducto: {
        width: 290,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    imagenProducto2: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    productDetails: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    tituloProducto: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginHorizontal: 10,
        textAlign: 'justify'
    },
    precioProducto: {
        marginLeft: 45,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5EC401',
        marginBottom: 30,
    },
    textoProducto: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    botonCarrito: {
        textAlign: 'center',
        backgroundColor: '#623431',
        width: 200,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    textoBoton: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    masProductosContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        width: '70%',
        marginTop: 20,
        marginHorizontal: 10,
    },
    masProductosTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productoRelacionado: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    productoInfo: {
        backgroundColor: 'white',
        marginLeft: 20,
    },
    productoRelacionadoTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productoRelacionadoDescripcion: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
});

export default DetalleProd;
