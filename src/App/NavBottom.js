import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../screens/Inicio';
import Productos from '../screens/Productos';
import Ordenes from '../screens/Ordenes';
import Cuenta from '../screens/Cuenta';
import Notificaciones from '../screens/Notificaciones';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CustomTabBarIcon({ name, size, color, focused }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {focused ? (
        <View
          style={{
            width: size * 1.6,
            height: size * 1.6,
            borderRadius: size * 0.8,
            backgroundColor: 'rgba(255, 99, 71, 0.2)', // color de fondo del círculo
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Ionicons name={name} size={size} color={color} />
        </View>
      ) : (
        <Ionicons name={name} size={size} color={color} />
      )}
    </View>
  );
}

function TabNavigator({ navigation }) {
  const [headerContent, setHeaderContent] = useState('Contenedor Titulo');
  const [headerContent2, setHeaderContent2] = useState('Contenedor Texto');

  useEffect(() => {
    // Este efecto se ejecuta cuando cambia la pantalla seleccionada
  }, [headerContent, headerContent2]);

  return (
    <View style={styles.container}>
      {/* Contenedor superior */}
      <View style={styles.topContainer}>
        <View style={styles.topContent}>
          <View>
            <Text style={styles.topText}>{headerContent}</Text>
            <Text style={styles.topText2}>{headerContent2}</Text>
          </View>
          {['Bienvenido a Inicio', 'Nuestros Productos', 'Tus Ordenes'].includes(headerContent) && (
            <TouchableOpacity onPress={() => navigation.navigate('Notificaciones')}>
              <Ionicons name="notifications-outline" size={30} color="black" style={styles.notificationIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Tab.Navigator */}
      <View style={styles.navigatorContainer}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              switch (route.name) {
                case 'Inicio':
                  iconName = focused ? 'home' : 'home-outline';
                  break;
                case 'Productos':
                  iconName = focused ? 'pricetag' : 'pricetag-outline';
                  break;
                case 'Ordenes':
                  iconName = focused ? 'bag' : 'bag-outline';
                  break;
                case 'Cuenta':
                  iconName = focused ? 'person' : 'person-outline';
                  break;
                default:
                  iconName = 'home-outline';
                  break;
              }

              return <CustomTabBarIcon name={iconName} size={size} color={color} focused={focused} />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'black',
            tabBarStyle: {
              backgroundColor: '#FFFFFF', // Cambia el color de fondo aquí
            },
            tabBarShowLabel: false, // Oculta los nombres de las pestañas
          })}
          screenListeners={({ route }) => ({
            state: (e) => {
              // Aquí puedes cambiar el contenido del contenedor superior según la pantalla activa
              switch (route.name) {
                case 'Inicio':
                  setHeaderContent('Bienvenido a Inicio');
                  setHeaderContent2('Bienvenido');
                  break;
                case 'Productos':
                  setHeaderContent('Nuestros Productos');
                  setHeaderContent2('Tu app');
                  break;
                case 'Ordenes':
                  setHeaderContent('Tus Ordenes');
                  setHeaderContent2('Tu app');
                  break;
                case 'Cuenta':
                  setHeaderContent('Tu Cuenta');
                  setHeaderContent2('Tu app');
                  break;
                default:
                  setHeaderContent('Contenedor Superior');
                  setHeaderContent2('Tu app');
                  break;
              }
            },
          })}
        >
          <Tab.Screen
            name="Inicio"
            component={Inicio}
            options={{ headerShown: false }} 
          />
          <Tab.Screen
            name="Productos"
            component={Productos}
            options={{ headerShown: false }} 
          />
          <Tab.Screen
            name="Ordenes"
            component={Ordenes}
            options={{ headerShown: false }} 
          />
          <Tab.Screen
            name="Cuenta"
            component={Cuenta}
            options={{ headerShown: false }} 
          />
        </Tab.Navigator>
      </View>
    </View>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Notificaciones" component={Notificaciones} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: 100, // Altura del contenedor superior
    backgroundColor: 'lightgray', // Color de fondo del contenedor superior
    paddingLeft: 16, // Espacio a la izquierda
    justifyContent: 'center', // Centrar contenido verticalmente
  },
  topContent: {
    flexDirection: 'row', // Colocar elementos en fila
    alignItems: 'center', // Centrar elementos verticalmente
    justifyContent: 'space-between', // Espacio entre los elementos
    width: '100%',
    paddingRight: 16, // Espacio a la derecha
  },
  topText: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  topText2: {
    fontSize: 17,
    justifyContent: 'flex-start',
  },
  notificationIcon: {
    marginLeft: 'auto', // Asegurar que el ícono esté a la derecha
  },
  navigatorContainer: {
    flex: 1, // Esto permite que el Tab.Navigator ocupe el resto del espacio disponible
  },
});
