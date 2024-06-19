// Importaciones 
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import React,{useState} from 'react'; //Importacion para hacer usos de datos



//Funciones 
/* const Texto=({estilo})=>{ // Parametros en este caso estilos que estilo
  const[contenido, setContenido] = useState('holaMundo') // Variable de contenido (propiedad children), se u
  const actualizarContenido=()=>{ // Array function que va a permitir hacer esa actualizacion
    setContenido('State actualizó este texto')} 
  return(<Text style={[styles.text,estilo]} onPress={actualizarContenido}>{contenido}</Text>) // Mandar llamar el evento 
  // con 'style' especificamos la copnexión que está en styles, y colocamos el estilo de texto y estilo
} */

//Existen componentes, area donde se va a ejecutar
export default function App() {

  const[text, setText]= useState('valor default')
  const[submit, setSubmit]= useState('')

  return (

    <View style={styles.container}>

      <Text> Componente TextInput: {submit} </Text>
      <TextInput style={styles.TextInput} placeholder='Escribe texto ...' onChangeText={(t)=>setText(t) } value={text}/> 
      <Button title='Presioname...' onPress={()=>{setSubmit(text); alert('Texto enviado')}}/>
      {/* <TouchableHighlight 
        style={styles.touchable} 
        onPress={() => {setSubmit(text); alert('TouchableHighlight presionado'); }}
        underlayColor={"#DDDDDD"}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}> TouchableHighlight Button </Text>
        </View>
        </TouchableHighlight> */}

        {/* <TouchableOpacity
          style={styles.touchable}
          onPress={() => {setSubmit(text); alert('TouchableOpacity presionado'); }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}> TouchableOpacity Button </Text>
          </View>
        </TouchableOpacity> */}

      <TouchableWithoutFeedback
        onPress={() => { setSubmit(text); alert('TouchableWithoutFeedback presionado'); }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableWithoutFeedback Button</Text>
        </View>
      </TouchableWithoutFeedback>


      <StatusBar style="auto" />
    </View>
  );
}

// Configuraciones de hojas de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', //La forma en la que se acomoda el texto ("orden")
    backgroundColor: '#fff',
    alignItems: 'center', // alinea el orden de izquierda a derecha
    justifyContent: 'center', // orden de arriba a abajo
  },

  TextInput: {
    width: '30%',
    height: 40,
    borderBottomColor: 'purple', // pone color a la línea de abajo 
    borderBottomWidth: 2, // es el grosor de la línea
  },

  touchable: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
  },

  touchableO: {    
    marginTop: 20,
    padding: 10,
    backgroundColor: '#DDDDDD',
  },

  toucableW: {
    padding: 10,
    backgroundColor: '#2196F3',
  },

});


/* const Boton=()=>{ // Parametros 
  const[contenido, setContenido] = useState('Presioname') // Variable de contenido (propiedad children), se u 
  const actualizarContenido=()=>{// Array function que va a permitir hacer esa actualizacion 
    setContenido('State actualizó este boton')
  } 
  return(<Button title={contenido} color="#000000" onPress={actualizarContenido}>{contenido}</Button>) // Mandar llamar el evento 
} */