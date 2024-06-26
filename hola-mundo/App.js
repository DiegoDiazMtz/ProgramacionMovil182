// Importaciones 
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View, SectionList, ActivityIndicator } from 'react-native';
import React, {useState,useEffect} from 'react'; //useEffect sirve para traer datos de una API

//Existen componentes, area donde se va a ejecutar
export default function App() {

  const [user,setUser] = useState([]); // esto srive para traer datos de una API
  const [loading,setLoading] = useState(true); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // aqui se trae los datos de la API
    .then(response => response.json()) // aqui se convierte a json
    .then(data => {setUser(data), setLoading(false)})   
  },[])

  if(loading){ // esto sirve para que muestre un mensaje de cargando
    return (
      <View style={styles.center}>
      <ActivityIndicator size="large" color="#0000ff"/>
      <Text> Cargando </Text>
      </View>
    );
  }

  return (

    <View style={styles.container}>
      
      <FlatList 
      
        data={user}

        renderItem={({item}) => <Text style={styles.item}> {item.name}  </Text>}
      />
      

      <StatusBar style="auto" />
    </View>
  );
}

// Configuraciones de hijas de estilos
const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch', // alinea el orden de izquierda a derecha
    justifyContent: 'center', // orden de arriba a abajo
    paddingTop: 20
  },
  item: {
    padding:10,
    fontSize:24,
    height:50,
    borderColor:'black',
    borderBottomWidth:1
  },
  section: {
    paddingTop:4,
    paddingBottom:4,
    fontSize:27,
    fontWeight:'bold',
    backgroundColor:'gray',
    height:50,
    borderColor:'black',
  },
  center:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});
