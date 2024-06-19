import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'; 

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const guardar = () => {
    alert(`Nombre: ${name}\n Email: ${email} \n Password: ${password}`);
  }

  return (
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
  );
}

// Configuraciones de hojas de estilos
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  inputContainer: {
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },

  textInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
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