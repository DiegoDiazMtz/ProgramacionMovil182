// Importaciones 
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

//Existen componentes, area donde se va a ejecutar
export default function App() {
  return (

    <View style={styles.container}>
      
      <FlatList 

        data={[
          {key:1,name:'Diego'},
          {key:2,name:'Maya'},
          {key:3,name:'Monse'},
          {key:4,name:'Isay'},
          {key:5,name:'Pablo'},
          {key:6,name:'Alan'},
          {key:7,name:'Victor'},
        ]}

        renderItem= {({item}) => <Text style={styles.item} > {item.name} </Text>} //Para iterar la lista

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
    borderColor:'blue',
    borderBottomWidth:1
  },
});
