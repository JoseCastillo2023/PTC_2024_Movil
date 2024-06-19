// Utilidades de React Navigation
import { createStackNavigator } from '@react-navigation/stack';


// Pantalla de Inicio o Bienvenida
import Index from '../screens/Index.js';

// Navegador Stack
const Stack = createStackNavigator();

export default function NavStack (){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Index'
        component={Index}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
