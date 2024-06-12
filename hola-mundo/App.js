


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

// Componente Texto que recibe props
const Texto = ({ contenido }) => {
  return <Text>{contenido}</Text>;
};

// Componente principal de la aplicación
export default function App() {
  const [contenido, setContenido] = useState('Hola Mundo');

  const actualizarContenido = () => {
    setContenido('State actualizó este texto');
  };

  return (
    <View style={styles.container}>
      // Componente Texto con contenido dinámico
      {}
      <Texto contenido={contenido} />

      // Botón para actualizar el contenido
      {}
      <Button title='Presioname' color="#000000" onPress={actualizarContenido} />

      <StatusBar style="auto" />
    </View>
  );
}

// Estilos para el contenedor
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 


