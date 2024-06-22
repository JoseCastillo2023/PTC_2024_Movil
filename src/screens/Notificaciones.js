// Importar Dependencias.
import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';

const Notificaciones = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.containerNotf}>
          <View style={styles.infoContainer}>
            <Text style={styles.reposteriaText}>
              Orden #4
            </Text>
            <Text style={styles.reposteriaSubText}>
              Tu orden está tomada y está en preparación.
            </Text>
          </View>
          <View style={styles.containerIcon}>
            <MaterialIcons name="pause-circle-filled" size={28} color="#FFA500" />
          </View>
        </View>
        <View style={styles.containerNotf}>
          <View style={styles.infoContainer}>
            <Text style={styles.reposteriaText}>
              Orden #3
            </Text>
            <Text style={styles.reposteriaSubText}>
              Orden finalizada, confirmada y entregada con éxito.
            </Text>
          </View>
          <View style={styles.containerIcon}>
            <Octicons name="check-circle-fill" size={28} color="#32CD32" />
          </View>
        </View>
        <View style={styles.containerNotf}>
          <View style={styles.infoContainer}>
            <Text style={styles.reposteriaText}>
              Orden #2
            </Text>
            <Text style={styles.reposteriaSubText}>
              Su orden ha sido cancelada correctamente. Vuelva a intentarlo.
            </Text>
          </View>
          <View style={styles.containerIcon}>
            <Octicons name="x-circle-fill" size={28} color="#FF4500" />
          </View>
        </View>
        <View style={styles.containerNotf}>
          <View style={styles.infoContainer}>
            <Text style={styles.reposteriaText}>
              Orden #1
            </Text>
            <Text style={styles.reposteriaSubText}>
              Orden finalizada, confirmada y entregada con éxito.
            </Text>
          </View>
          <View style={styles.containerIcon}>
            <Octicons name="check-circle-fill" size={28} color="#32CD32" />
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
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerNotf: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 10,
    backgroundColor: '#F9F9F9',
    marginBottom: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginRight: 10,
  },
  containerIcon: {
    alignItems: 'center',
  },
  reposteriaText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reposteriaSubText: {
    fontSize: 16,
    color: '#555',
  },
});

export default Notificaciones;
