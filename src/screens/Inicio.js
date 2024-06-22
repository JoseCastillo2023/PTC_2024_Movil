// Importar Dependencias.
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';

const Inicio = ({ navigation }) => {

  const [currentScreen, setCurrentScreen] = useState('Screen1');

  // Navegación entre pantallas.
  const irDetalle = async () => {
    navigation.navigate('DetalleProd');
  };

  const renderScreen = () => {
    if (currentScreen === 'Screen1') {
      // Pantalla 1.
      return (
        <View style={styles.container}>
          <View style={styles.containerBuscador}>
            <TouchableOpacity style={styles.minicontainerBuscador}>
              <Ionicons name="search-outline" size={24} color="black" />
              <TextInput style={styles.buscador} placeholder='Busca Productos'></TextInput>
            </TouchableOpacity>
          </View>

          <View style={styles.productosContainer}>
            <View style={styles.containerProducto}>
              <TouchableOpacity style={styles.minicontainerProducto} onPress={() => setCurrentScreen('Screen2')}>
                <Image source={require('../img/pan_frances.png')} style={styles.imagenProducto} />
                <Text style={styles.productText}>Pan Francés</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerProducto}>
              <TouchableOpacity style={styles.minicontainerProducto}>
                <Image source={require('../img/pan_dulce.png')} style={styles.imagenProducto} />
                <Text style={styles.productText}>Pan Dulce</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerProducto}>
              <TouchableOpacity style={styles.minicontainerProducto}>
                <Image source={require('../img/pasteles.png')} style={styles.imagenProducto} />
                <Text style={styles.productText}>Pasteles</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerProducto}>
              <TouchableOpacity style={styles.minicontainerProducto}>
                <Image source={require('../img/reposteria.png')} style={styles.imagenProducto} />
                <Text style={styles.productText}>Repostería</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerProducto}>
              <TouchableOpacity style={styles.minicontainerProducto}>
                <Image source={require('../img/bebidas.png')} style={styles.imagenProducto} />
                <Text style={styles.productText}>Bebidas</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else {
      // Pantalla 2.
      return (
        <View style={styles.container}>
          <View style={styles.containerBuscador}>
            <TouchableOpacity style={styles.minicontainerBuscador}>
              <Ionicons name="search-outline" size={24} color="black" />
              <TextInput style={styles.buscador} placeholder='Busca Productos'></TextInput>
            </TouchableOpacity>
          </View>

          <View style={styles.productosContainer}>
            <View style={styles.containerProducto}>
              <TouchableOpacity style={styles.minicontainerProducto} onPress={irDetalle}>
                <Image source={require('../img/baguette.png')} style={styles.imagenProducto} />
                <Text style={styles.productText}>Baguette </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerProducto}>
              <TouchableOpacity style={styles.minicontainerProducto}>
                <Image source={require('../img/boule.png')} style={styles.imagenProducto} />
                <Text style={styles.productText}>Boule </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerProducto}>
              <TouchableOpacity style={styles.minicontainerProducto}>
                <Image source={require('../img/bretzel.png')} style={styles.imagenProducto} />
                <Text style={styles.productText}>Bretzel</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerProducto}>
              <TouchableOpacity style={styles.minicontainerProducto}>
                <Image source={require('../img/brioche.png')} style={styles.imagenProducto} />
                <Text style={styles.productText}>Brioche</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerProducto}>
              <TouchableOpacity style={styles.minicontainerProducto}>
                <Image source={require('../img/kuaso.png')} style={styles.imagenProducto} />
                <Text style={styles.productText}>Cruasán</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerProducto}>
              <TouchableOpacity style={styles.minicontainerProducto}>
                <Image source={require('../img/pan_sportif.jpg')} style={styles.imagenProducto} />
                <Text style={styles.productText}>Pan Sportif</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerRegresar}>
              <TouchableOpacity onPress={() => setCurrentScreen('Screen1')} style={styles.buttonRegresar}>
                <Text style={styles.buttonTextRegresar}> Regresar </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <ScrollView>
      {renderScreen()}
    </ScrollView>
  );
};

// Diseño de la pantalla.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  containerBuscador: {
    backgroundColor: '#C0C0C0',
    width: '100%',
    borderRadius: 8,
    marginBottom: 20,
  },
  minicontainerBuscador: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
    borderRadius: 8,
    padding: 10,
  },
  buscador: {
    marginLeft: 10,
    color: 'black',
    fontSize: 16,
    flex: 1,
  },
  productosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  containerProducto: {
    borderRadius: 20,
    paddingTop: 15,
    width: '48%',
    marginBottom: 15,
    height: 150,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  minicontainerProducto: {
    width: 100,
    marginBottom: 15,
    height: 100,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  imagenProducto: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonRegresar: {
    textAlign: 'center',
    backgroundColor: '#FFC0CB',
    justifyContent: 'center',
    height: 50,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    width: 120,
  },
  buttonTextRegresar: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center'
  },
  containerRegresar:{
    textAlign: 'center',
    marginLeft: 125,
    width: '10000',
  }
});

export default Inicio;
