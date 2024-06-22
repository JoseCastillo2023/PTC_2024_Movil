// Importar Dependencias.
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../screens/Inicio';
import Carrito from '../screens/Carrito';
import Ordenes from '../screens/Ordenes';
import Cuenta from '../screens/Cuenta';
import Notificaciones from '../screens/Notificaciones';
import DetalleProd from '../screens/DetalleProd';
import 'react-native-gesture-handler';

// Constantes de Navegación del menu.
const Tab = createBottomTabNavigator();
const Stack=  createStackNavigator();

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

// Metodo de navegación del Nav Bottom.
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
        <View style={[styles.topContent, headerContent === 'Mi Cuenta' ? styles.centeredHeader : null]}>
          <View>
            <Text style={[styles.topText, headerContent === 'Mi Cuenta' ? styles.centeredText : null]}>
              {headerContent}
            </Text>
            <Text style={[styles.topText2, headerContent === 'Mi Cuenta' ? styles.centeredText : null]}>
              {headerContent2}
            </Text>
          </View>
          {['Panaderia Hernández'].includes(headerContent) && (
            <TouchableOpacity onPress={() => navigation.navigate('Notificaciones')}>
              <Ionicons name="notifications-outline" size={30} color="black" style={styles.notificationIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      // Navegación entre pantallas.
      <View style={styles.navigatorContainer}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              switch (route.name) {
                case 'Inicio':
                  iconName = focused ? 'home' : 'home-outline';
                  break;
                case 'Carrito':
                  iconName = focused ? 'cart' : 'cart-outline';
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
                  setHeaderContent('Panaderia Hernández');
                  setHeaderContent2('Bienvenido');
                  break;
                case 'Carrito':
                  setHeaderContent('Panaderia Hernández');
                  setHeaderContent2('Mi carrito');
                  break;
                case 'Ordenes':
                  setHeaderContent('Panaderia Hernández');
                  setHeaderContent2('Ordenes');
                  break;
                case 'Cuenta':
                  setHeaderContent('Mi Cuenta');
                  setHeaderContent2('');
                  break;
                default:
                  setHeaderContent('Titulo (No cargo correctamente)');
                  setHeaderContent2('Texto (No cargo correctamente)');
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
            name="Carrito"
            component={Carrito}
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

// Navegación entre otras pantallas.
export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name="Notificaciones"
        component={Notificaciones}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#FFC0CB',
          },
          headerTintColor: '#000', // Color del texto y de los iconos del header
        }}
      />
      <Stack.Screen
        name="DetalleProd"
        component={DetalleProd}
        options={{
          headerShown: true,
          title:'Detalle del Producto',
          headerStyle: {
            backgroundColor: '#FFC0CB',
          },
          headerTintColor: '#000', // Color del texto y de los iconos del header
        }}
      />
    </Stack.Navigator>
  );
}

// Diseño de la pantalla.
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: 80, // Altura del contenedor superior
    backgroundColor: '#FFC0CB', // Color de fondo del contenedor superior
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
  centeredHeader: {
    paddingTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20, // Centrar el contenido horizontalmente
  },
  topText: {
    paddingTop: 20,
    fontSize: 18,
    fontWeight: 600,
    justifyContent: 'flex-start',
  },
  centeredText: {
    textAlign: 'center', // Centrar el texto horizontalmente
  },
  topText2: {
    fontSize: 16,
    fontWeight: 500,
    justifyContent: 'flex-start',
  },
  notificationIcon: {
    paddingTop: 20,
    marginLeft: 'auto', // Asegurar que el ícono esté a la derecha
  },
  navigatorContainer: {
    flex: 1, // Esto permite que el Tab.Navigator ocupe el resto del espacio disponible
  },
});
