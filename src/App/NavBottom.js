// Utilidades de React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Pantallas de navegación
import Inicio from '../screens/Inicio';
import Productos from '../screens/Productos';
import Ordenes from '../screens/Ordenes';
import Cuenta from '../screens/Cuenta';

// Navegador Bottom Tabs Navigator
const Tab = createBottomTabNavigator();

export default function NavBottom() {
    return (
        <Tab.Navigator>
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
    );
}