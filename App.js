// Importar Dependencias que se utilizara.
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, useAuth } from './src/contexts/AuthContext';
import { UserProvider } from './src/contexts/UserContext';
import StackMain from './src/navigation/StackMain';
import StackAuth from './src/navigation/StackAuth';
import SplashScreen from './src/screens/SplashScreen';
import { SERVER } from './src/contexts/Network';

const Stack = createStackNavigator();

const App = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar la pantalla de carga

  const getSession = async () => {
    try {
      const response = await fetch(`${SERVER}services/public/clientes.php?action=getUser`, {
        method: 'POST',
      });
      const data = await response.json();
      if (data.status) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setIsLoggedIn(false); // Manejo de error: Se asume que la sesión no está iniciada
    } finally {
      setIsLoading(false); // Deja de mostrar la pantalla de carga
    }
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator>
          {isLoading ? (
            <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
            initialParams={{ log: isLoading}}
          />
          ) : isLoggedIn ? (
            <Stack.Screen
              name="Main"
              component={StackMain}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="Auth"
              component={StackAuth}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppWrapper;


/*
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
                    name="NavBottom"
                    component={NavBottom}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Notificaciones"
                    component={Notificaciones}
                    options={{
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#FFC0CB',
                        },
                        headerTintColor: '#000',
                    }}
                />
                <Stack.Screen
                    name="DetalleProd"
                    component={DetalleProd}
                    options={{
                        headerShown: true,
                        title: 'Detalle del Producto',
                        headerStyle: {
                            backgroundColor: '#FFC0CB',
                        },
                        headerTintColor: '#000',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

*/