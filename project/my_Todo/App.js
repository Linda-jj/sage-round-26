
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import {todoList}from './assets/data/data'
import {Ionicons} from '@expo/vector-icons'

export default function App() {
  return (
    <ScrollView >
        <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name='menu' size={24} />
      
        </View>
          <FlatList 
      data={todoList}
      keyExtractor={(i)=>i.id} 
      renderItem={({item})=>(
         <View>
          <Text>{item.title}</Text>
        </View>
      )}
       
    
      />

        </View>
     
      

    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecdfdfff',
    paddingHorizontal:20,  
  },
  header:{
marginBottom:20,
  },
});
