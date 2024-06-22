// Importar Dependencias.
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const Carrito = ({navigation}) => {
  
  // Metodos de navegación.
  const irInicio = async () => {
    navigation.navigate('Inicio')
  };

  const irOrdenes = async () => {
    navigation.navigate('Ordenes')
  };


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Productos en el Carrito</Text>
        <View style={styles.productContainer}>
          <View style={styles.productCard}>
            <Image source={require('../img/baguette.png')} style={styles.imagenProducto} />
            <View style={styles.productDetails}>
              <Text style={styles.productTitle}>Baguette</Text>
              <Text style={styles.productSubtitle}>15 cm</Text>
              <Text style={styles.productPrice}>$ 1.82</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.minusButton}>
                  <FontAwesome name="minus" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>1</Text>
                <TouchableOpacity style={styles.plusButton}>
                  <FontAwesome name="plus" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productCard}>
            <Image source={require('../img/pan_sportif.jpg')} style={styles.imagenProducto} />
            <View style={styles.productDetails}>
              <Text style={styles.productTitle}>Pan Sportif</Text>
              <Text style={styles.productSubtitle}>15 cm</Text>
              <Text style={styles.productPrice}>$ 3.40</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.minusButton}>
                  <FontAwesome name="minus" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>1</Text>
                <TouchableOpacity style={styles.plusButton}>
                  <FontAwesome name="plus" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.addMoreButton} onPress={irInicio}>
          <Text style={styles.addMoreText}>Añadir más productos al carrito</Text>
        </TouchableOpacity>

        <View style={styles.priceContainer}>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Subtotal:</Text>
            <Text style={styles.priceValue}>$ 4.22</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Total:</Text>
            <Text style={styles.priceValue}>$ 4.22</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={irOrdenes}>
          <Text style={styles.confirmButtonText}>Realizar y Confirmar el Pedido</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Diseño de la pantalla.
const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF6347',
  },
  productContainer: {
    width: '100%',
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imagenProducto: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  productDetails: {
    flex: 1,
    marginLeft: 20,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  productPrice: {
    fontSize: 16,
    color: '#FF6347',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusButton: {
    backgroundColor: '#5EC401',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  minusButton: {
    backgroundColor: '#FF5552',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addMoreButton: {
    backgroundColor: '#7FE5BA',
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  addMoreText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  priceContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
    width: '100%',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 5,
  },
  priceLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  priceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6347',
  },
  confirmButton: {
    backgroundColor: '#654948',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Carrito;
