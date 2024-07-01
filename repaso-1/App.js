import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const guardar = () => {
    alert(`Nombre: ${name}\nEmail: ${email}\nPassword: ${password}`);
  }

  return (
    <ImageBackground source={require('./assets/diegogo.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre:</Text>
            <TextInput
              style={styles.textInput}
              placeholder='Ingresa tu nombre'
              onChangeText={setName}
              value={name}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.textInput}
              placeholder='Ingresa tu email'
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
              style={styles.textInput}
              placeholder='Ingresa tu contraseña'
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={guardar}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

// Configuraciones de hojas de estilos
const styles = StyleSheet.create({
  background: {
    flex: 1, //hace que la imagen ocupe toda la pantalla
    resizeMode: 'cover', //hace que la imagen se ajuste al tamaño de la pantalla
    justifyContent: 'center', //hace que la imagen se centre
  },
  container: {
    flex: 1, //hace que el contenedor ocupe toda la pantalla
    alignItems: 'center', //hace que los elementos esten centrados
    justifyContent: 'center', //hace que los elementos esten centrados
    padding: 20, //hace que haya un espacio de 20px entre los elementos y los bordes
  },
  card: {
    width: '90%', //hace que el card ocupe el 90% del contenedor
    padding: 20, //hace que haya un espacio de 20px entre los elementos y los bordes
    borderRadius: 10, //hace que el card tenga las esquinas redondeadas
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // hace que el card tenga un fondo blanco con opacidad
    shadowColor: '#000', //hace que haya una sombra en el card
    shadowOffset: { width: 0, height: 2 }, //hace que la sombra tenga un desplazamiento de 0px en el eje x y 2px en el eje y
    shadowOpacity: 0.25, //hace que la sombra tenga una opacidad de 0.25
    shadowRadius: 3.84, //hace que la sombra tenga un radio de 3.84
    elevation: 5, //hace que la sombra tenga un efecto de elevación
  },
  inputContainer: {
    marginBottom: 20, //hace que haya un espacio de 20px entre los elementos
  },
  label: {
    fontSize: 16, //hace que el texto tenga un tamaño de 16
    color: 'black', //hace que el texto sea negro
    marginBottom: 5, // 
  },
  textInput: {
    width: '100%', 
    height: 40, 
    borderColor: '#ccc', //es para que se vea el borde del input
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});
