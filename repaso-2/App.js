import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const pelis = [
    { key: '1', name: 'Iron Man' },
    { key: '2', name: 'Capitan America' },
    { key: '3', name: 'Thor' },
    { key: '4', name: 'Hulk' },
    { key: '5', name: 'Avengers' },
    { key: '6', name: 'Spider Man' },
    { key: '7', name: 'Ant Man' },
  ];

  const [name, setName] = useState(''); // Estado para almacenar el texto ingresado por el usuario
  const [datosFiltrados, setDatosFiltrados] = useState([]); // Estado para almacenar los datos filtrados, inicialmente vacío

  const buscar = () => {
    if (name === '') { // Si el campo de búsqueda está vacío
      setDatosFiltrados(pelis); // Muestra todas las películas
    } else {
      const pelisFiltradas = pelis.filter(function(item) { //este hace un filtro de las peliculas
        return item.name.toLowerCase().includes(name.toLowerCase()); // este hace que se busque por nombre de tal forma que no importe si es mayuscula o minuscula
      }); // Busca todas las coincidencias que incluyan el texto ingresado

      if (pelisFiltradas.length > 0) { // Si se encuentran coincidencias
        setDatosFiltrados(pelisFiltradas); // Actualiza los datos filtrados para mostrar las coincidencias
      } else { // Si no se encuentra ninguna coincidencia
        alert('No se encontró ninguna pelicula llamada así'); // Muestra una alerta
        setDatosFiltrados([]); // Limpia los datos filtrados
      }
    }
  };

  return (
    <ImageBackground source={require('./assets/img.jpg')} style={styles.background}>
      <View style={styles.card}>
        <View style={styles.container}> 
          <View>

            <Text style={styles.textBuscador}>Buscador de Peliculas</Text> 

            <TextInput
              style={styles.input}
              placeholder='Título o parte...' 
              onChangeText={setName} // Actualiza el estado 'name' cuando cambia el texto
              value={name} 
            />

            <TouchableOpacity style={styles.button} onPress={buscar}> 
              <Text style={styles.text}>BUSCAR</Text> 
            </TouchableOpacity>

          </View>

          <FlatList
            data={datosFiltrados} 

            renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>} // itera cada película en la lista
          />

          <StatusBar style="auto" /> 
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Hace que la imagen ocupe toda la pantalla
    justifyContent: 'center', // Hace que la imagen se centre
    resizeMode: 'repeat',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Hace el fondo del contenedor transparente
    alignItems: 'center',
    justifyContent: 'center',
  }, // Estilos del contenedor principal
  textBuscador: {
    marginTop: 60,
    fontSize: 24,
    fontWeight:'bold',
    marginBottom: 20,
    color: 'black'
  }, // Estilos del texto del buscador
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: 250,
    borderRadius: 5
  }, // Estilos del TextInput
  button: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  }, // Estilos del botón
  text: {
    color: '#fff',
    fontWeight: 'bold',
  }, // Estilos del texto del botón
  item: {
    padding:10,
    fontSize:24,
    height:50,
    borderColor:'black',
    borderBottomWidth:1
  },
});
