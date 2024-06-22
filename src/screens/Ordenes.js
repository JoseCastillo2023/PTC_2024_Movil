import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Ordenes = () => {
  const [currentScreen, setCurrentScreen] = useState('Screen1');

  const renderScreen = () => {
    if (currentScreen === 'Screen1') {
      return (
        <View style={styles.containerOP}>
          <View style={styles.containerOrden}>
            <View style={styles.iconContainer}>
              <Ionicons name="cart" size={24} color="white" />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.textOrden}>Orden #4</Text>
              <Text style={styles.textEstadoP}>Pendiente</Text>
              <Text style={styles.textFecha}>26 Octubre</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.textPrecio}>$ 7.00</Text>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.containerHO}>
          <View style={styles.containerOrden}>
            <View style={styles.iconContainer}>
              <Ionicons name="cart" size={24} color="white" />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.textOrden}>Orden #1</Text>
              <Text style={styles.textEstadoE}>Entregada</Text>
              <Text style={styles.textFecha}>1 Octubre</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.textPrecio}>$ 7.00</Text>
            </View>
          </View>
          <View style={styles.containerOrden}>
            <View style={styles.iconContainer}>
              <Ionicons name="cart" size={24} color="white" />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.textOrden}>Orden #2</Text>
              <Text style={styles.textEstadoC}>Cancelada</Text>
              <Text style={styles.textFecha}>10 Octubre</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.textPrecio}>$ 4.52</Text>
            </View>
          </View>
          <View style={styles.containerOrden}>
            <View style={styles.iconContainer}>
              <Ionicons name="cart" size={24} color="white" />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.textOrden}>Orden #3</Text>
              <Text style={styles.textEstadoE}>Entregada</Text>
              <Text style={styles.textFecha}>15 Octubre</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.textPrecio}>$ 2.81</Text>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={() => setCurrentScreen('Screen1')}>
            <Text style={currentScreen === 'Screen1' ? styles.activeText : styles.inactiveText}>
              Ordenes Pendientes
            </Text>
          </TouchableOpacity>
          {currentScreen === 'Screen1' && <View style={styles.activeLine} />}
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={() => setCurrentScreen('Screen2')}>
            <Text style={currentScreen === 'Screen2' ? styles.activeText : styles.inactiveText}>
              Historial de Ordenes
            </Text>
          </TouchableOpacity>
          {currentScreen === 'Screen2' && <View style={styles.activeLine} />}
        </View>
      </View>
      <ScrollView>
        {renderScreen()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOP: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  containerHO: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOrden: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: '#D8D8D8',
    borderRadius: 5,
    height: 100,
    width: 350,
  },
  iconContainer: {
    flex: 0.4,
    alignItems: 'center',
    backgroundColor: '#F37A20',
    borderRadius: 50,
    padding: 5,
    marginRight: 30,
  },
  infoContainer: {
    flex: 3,
    alignItems: 'flex-start',
  },
  priceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  reposteriaText: {
    textAlign: 'center',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  activeText: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  inactiveText: {
    fontSize: 16,
    color: 'grey',
  },
  activeLine: {
    height: 3,
    backgroundColor: 'green',
    width: '90%',
    marginTop: 4,
  },
  textOrden: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  textEstadoE: {
    fontSize: 14,
    color: 'green',
    fontWeight: '500',
  },
  textEstadoC: {
    fontSize: 14,
    color: 'red',
    fontWeight: '500',
  },
  textEstadoP: {
    fontSize: 14,
    color: 'red',
    fontWeight: '500',
  },
  textFecha: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
  },
  textPrecio: {
    color: '#F37A20',
    fontWeight: '600',
    fontSize: 20,
  },
});

export default Ordenes;
