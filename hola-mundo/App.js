// Importaciones 
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react'; //Importacion para hacer usos de datos



//Funciones 
const Texto=({estilo})=>{ // Parametros en este caso estilos que estilo
  const[contenido, setContenido] = useState('holaMundo') // Variable de contenido (propiedad children), se u
  const actualizarContenido=()=>{ // Array function que va a permitir hacer esa actualizacion
    setContenido('State actualizó este texto')} 
  return(<Text style={[styles.text,estilo]} onPress={actualizarContenido}>{contenido}</Text>) // Mandar llamar el evento 
  // con 'style' especificamos la copnexión que está en styles, y colocamos el estilo de texto y estilo
}



//Existen componentes, area donde se va a ejecutar
export default function App() {
  return (

    <View style={styles.container}>
      
      <Texto estilo={styles.red}/>  {/* Exportamos estilo más especifico con el nombre que le pusimos (red, green, blue) */}
      <Texto estilo={styles.green}/>
      <Texto estilo={styles.blue}/>

      <StatusBar style="auto" />
    </View>
  );
}



// Configuraciones de hijas de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', //La forma en la que se acomoda el texto ("orden")
    backgroundColor: '#fff',
    alignItems: 'stretch', // alinea el orden de izquierda a derecha
    justifyContent: 'space-evenly', // orden de arriba a abajo
  },
  text:{
    color: 'white', //Color blanco
    fontSize: 25, //Tamaño del texto
    /* height: 100,  */  //Alto del texto
    /* width: 150, */ //Ancho del texto
  },
  red:{
    /* flex: 1, */ //Adaptacion de la panatalla
    backgroundColor: 'red', //Color del fondo
  },
  green:{
    /* flex: 2, */
    backgroundColor: 'green',
  },
  blue:{
    /* flex: 3, */
    backgroundColor: 'blue',
  },
});






/* const Boton=()=>{ // Parametros 
  const[contenido, setContenido] = useState('Presioname') // Variable de contenido (propiedad children), se u 
  const actualizarContenido=()=>{// Array function que va a permitir hacer esa actualizacion 
    setContenido('State actualizó este boton')
  } 
  return(<Button title={contenido} color="#000000" onPress={actualizarContenido}>{contenido}</Button>) // Mandar llamar el evento 
} */

  