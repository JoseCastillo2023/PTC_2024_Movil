// App.js
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './src/screens/Index';
import IniciarSesion from './src/screens/IniciarSesion';
import Registrar from './src/screens/Registrar';
import Inicio from './src/screens/Inicio';
import Productos from './src/screens/Productos';
import Ordenes from './src/screens/Ordenes';
import Cuenta from './src/screens/Cuenta';
import Notificaciones from './src/screens/Notificaciones';
import NavBottom from './src/App/NavBottom';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }} // Oculta el header
        />
        <Stack.Screen
          name="IniciarSesion"
          component={IniciarSesion}
          options={{ headerShown: false }} // Oculta el header
        />
        <Stack.Screen
          name="Registrar"
          component={Registrar}
          options={{ headerShown: false }} // Oculta el header
        />
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }} // Oculta el header
        />
        <Stack.Screen
          name="Productos"
          component={Productos}
          options={{ headerShown: false }} // Oculta el header
        />
        <Stack.Screen
          name="Ordenes"
          component={Ordenes}
          options={{ headerShown: false }} // Oculta el header
        />
        <Stack.Screen
          name="Cuenta"
          component={Cuenta}
          options={{ headerShown: false }} // Oculta el header
        />
        <Stack.Screen
          name="Notificaciones"
          component={Notificaciones}
          options={{ headerShown: false }} // Oculta el header
        />
        <Stack.Screen
          name="NavBottom"
          component={NavBottom}
          options={{ headerShown: false }} // Oculta el header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
