// Importar Dependencias.
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './src/screens/Index';
import IniciarSesion from './src/screens/IniciarSesion';
import Registrar from './src/screens/Registrar';
import Inicio from './src/screens/Inicio';
import Carrito from './src/screens/Carrito';
import Ordenes from './src/screens/Ordenes';
import Cuenta from './src/screens/Cuenta';
import Notificaciones from './src/screens/Notificaciones';
import Recup1 from './src/screens/Recup1';
import Recup2 from './src/screens/Recup2';
import DetalleProd from './src/screens/DetalleProd';
import NavBottom from './src/navegacion/NavBottom';

const Stack = createNativeStackNavigator();

// Navegación entre pantallas.
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="IniciarSesion"
          component={IniciarSesion}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registrar"
          component={Registrar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Carrito"
          component={Carrito}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ordenes"
          component={Ordenes}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Cuenta"
          component={Cuenta}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Notificaciones"
          component={Notificaciones}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recup1"
          component={Recup1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recup2"
          component={Recup2}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="DetalleProd"
          component={DetalleProd}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NavBottom"
          component={NavBottom}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
