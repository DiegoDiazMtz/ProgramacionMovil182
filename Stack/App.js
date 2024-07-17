//Global  -> npm i @react-navigation/native  -> Navegación
//Global  -> npm i @react-navigation/stack -> Navegación Stack
//Proyecto  -> npx expo install react-native-screens react-native-safe-area-context  -> Librerías para la navegación
//Proyecto  -> npx expo install react-navigation -> Biblioteca React Navigation y dependencias 
//Proyecto  -> npx expo install @react-native-masked-view/masked-view  -> Paquetes para la interfaz grafica
//Proyecto  -> npx expo install react-native-gesture-handler -> Gestos en la pantalla del celular
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Buttom } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function homeScreen ({navigation}){
  return(
    <View>
      <Text> Home Screen </Text>
      <Buttom title="Ir a detalles" />  
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
