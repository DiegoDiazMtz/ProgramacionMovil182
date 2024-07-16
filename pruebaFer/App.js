import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Prueba from './Screens/Prueba'; 

export default function App() {
  

  return (
  
    <Prueba/>
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
