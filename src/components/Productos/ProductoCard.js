// Importaciones necesarias desde React y React Native
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, FlatList, ScrollView, SafeAreaView, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';

// Componente ProductoCard para mostrar la información de un producto
export default function ProductoCard({ ip, imagenProducto, idProducto, nombreProducto, descripcionProducto
  , precioProducto, existenciasProducto, accionBotonProducto, Detalle
}) {

  // Mostrar el componente
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${ip}/Sport_Development_3/api/images/productos/${imagenProducto}` }}
          style={styles.image}
          resizeMode="contain" // Ajustar la imagen al contenedor
        />
      </View>
      <Text style={styles.text}>{idProducto}</Text>
      <Text style={styles.textTitle}>{nombreProducto}</Text>
      <Text style={styles.text}>{descripcionProducto}</Text>
      <Text style={styles.textTitle}>Precio: <Text style={styles.textDentro}>${precioProducto}</Text></Text>
      <Text style={styles.textTitle}>Existencias: <Text style={styles.textDentro}>{existenciasProducto} {(existenciasProducto === 1) ? 'Unidad' : 'Unidades'}</Text></Text>

          
      <View style={styles.ratingContainer}>
          <Text style={styles.textTitle}>Calificación:</Text>
          <FontAwesome name="star" size={20} color="#FFD700" />
          <FontAwesome name="star" size={20} color="#FFD700" />
          <FontAwesome name="star" size={20} color="#FFD700" />
          <FontAwesome name="star" size={20} color="#FFD700" />
          <FontAwesome name="star-half-o" size={20} color="#FFD700" />
        </View>

      <TouchableOpacity
        style={styles.cartButton}
        onPress={accionBotonProducto}>
        <FontAwesome name="plus-circle" size={24} color="white" />
        <Text style={styles.cartButtonText}>Agregar al Carrito</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={Detalle}>
        <FontAwesome name="address-card" size={24} color="white" />
        <Text style={styles.cartButtonText}>Ver detalle</Text>
      </TouchableOpacity>
    </View>
  );
}


// Estilos para el componente ProductoCard
const styles = StyleSheet.create({
  containerFlat: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#16537E',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 12,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  textTitle: {
    fontSize: 16,
    marginBottom: 8, fontWeight: '500'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#312323',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#312323',
    fontSize: 16,
    fontWeight: '500'
  },
  image: {
    width: '65%',
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  imageContainer: {
    alignItems: 'center',
  }, textDentro: {
    fontWeight: '400'
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#312323',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  cartButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    textAlign: 'center'
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});
