// Importaciones 
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View, SectionList } from 'react-native';

//Existen componentes, area donde se va a ejecutar
export default function App() {


  return (

    <View style={styles.container}>
      
      <SectionList
        sections={[
          { title:'Grupo A:', 
            data:[
              {key:1,name:'Diego'},
              {key:2,name:'Maya'},
              {key:3,name:'Monse'},
              {key:4,name:'Isay'},
            ]
          },
          { title:'Grupo B:', 
            data:[
              {key:5,name:'Pablo'},
              {key:6,name:'Alan'},
              {key:7,name:'Victor'},
            ]
          },
          { title:'Grupo C:', 
            data:[
              {key:8,name:'Isa'},
              {key:9,name:'Elias'},
              {key:10,name:'Roman'},
              {key:11,name:'Juan'},
            ]
          },
        ]}

        renderItem={({item}) => <Text style={styles.item}> {item.name} </Text>}
        renderSectionHeader={({section}) => <Text style={styles.section}> {section.title} </Text>}

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
});
