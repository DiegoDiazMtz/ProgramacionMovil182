import * as React from 'react'; // Importa todo el módulo de React y lo asigna al alias 'React'
import { Text, View, StyleSheet } from 'react-native'; // Importa componentes básicos de React Native
import { NavigationContainer } from '@react-navigation/native'; // Importa el contenedor de navegación para gestionar la navegación de la app
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Importa el creador de navegadores de pestañas inferiores

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> {/* Define el diseño de la pantalla 'Home' con estilo centrado */}
      <Text>Home!</Text> {/* Muestra el texto 'Home!' en la pantalla */}
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> {/* Define el diseño de la pantalla 'Settings' con estilo centrado */}
      <Text>Settings!</Text> {/* Muestra el texto 'Settings!' en la pantalla */}
    </View>
  );
}

const Tab = createBottomTabNavigator(); // Crea un navegador de pestañas inferiores

export default function App() { // Define el componente principal de la aplicación
  return (
    <NavigationContainer> {/* Contenedor de navegación que gestiona el estado de la navegación de la aplicación */}
      <Tab.Navigator> {/* Componente que crea un navegador de pestañas */}
        <Tab.Screen name="Home" component={HomeScreen} /> {/* Define una pestaña con la pantalla 'Home' */}
        <Tab.Screen name="Settings" component={SettingsScreen} /> {/* Define una pestaña con la pantalla 'Settings' */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
});
