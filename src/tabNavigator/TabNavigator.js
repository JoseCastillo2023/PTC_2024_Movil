import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Platform, View } from "react-native";

// Importa tus componentes de pantalla aquí
import Productos from "../screens/Productos";
import Home from "../screens/Home";
import Carrito from "../screens/Carrito";
import Historial from "../screens/Historial";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Oculta el header
        tabBarActiveTintColor: "#FFF", // Color de los íconos activos
        tabBarInactiveTintColor: "#FFF", // Color de los íconos inactivos
        tabBarStyle: {
          backgroundColor: "#312323",
          height: Platform.OS === "ios" ? 70 : 70, // Estilo de la barra de pestañas, altura diferente para iOS y Android
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12, 
          fontWeight: "500",
          paddingBottom: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          // Función que define el ícono de la pestaña
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? 'person-sharp' : 'person-outline';
          } else if (route.name === "Productos") {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === "Carrito") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Historial") {
            iconName = focused ? 'time' : 'time-outline';
          }
          return (
            <View
              style={{
                width: 50, 
                height: 40, 
                borderRadius: 10, 
                backgroundColor: focused ? "#9f6f53" : "#312323", 
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name={iconName} color={color} size={size} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Productos"
        component={Productos}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name="Carrito"
        component={Carrito}
        options={{ title: "Carrito" }}
      />
      <Tab.Screen
        name="Historial"
        component={Historial}
        options={{ title: "Historial" }}
      />
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ title: "Cuenta" }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
