
import { FlatList, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {todoList}from './assets/data/data'
import {Ionicons} from '@expo/vector-icons'
import { TextInput } from 'react-native';
import {Checkbox} from 'expo-checkbox';
import {SafeAreaProvider} from 'react-native-safe-area-context'



export default function App() {
  return (
  <SafeAreaProvider>
    <ScrollView >
        <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>{}}>
<Ionicons name='menu' size={24} />
          </TouchableOpacity>
          <TouchableOpacity>
  <Image source={{uri:'https://i.pinimg.com/736x/5c/84/42/5c84428d983d26ce85a84f946e4ce8ab.jpg'}}
      style={{width:50, height:50}}
      />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
<Ionicons name='search' size={24} color={'black'}/>
 <TextInput placeholder='Search'  clearButtonMode='always'style={styles.searchInputs}/> 
        </View>

          <FlatList 
      data={todoList}
      keyExtractor={(i)=>i.id} 
      renderItem={({item})=>(
         <View style={styles.todoContiner}>
          <View style={styles.todoInfoContiner}>

          <Checkbox value={item.completed}/>
          <Text style={[styles.todoText ,item.completed && {textDecorationLine:'line-through'}]}>{item.title}</Text>
          </View>
          <TouchableOpacity onPress={()=>{alert('Deleted')}}>
<Ionicons name='trash' size={24} color={'red'}/>
          </TouchableOpacity>

        </View>
      )}
       
    
      />

        </View>
     <KeyboardAvoidingView style={styles.footer} keyboardVerticalOffset={50} behavior='padding'>
      <TextInput placeholder='Add New ToDo' style={styles.addToDoList}/>
      <TouchableOpacity onPress={()=>{}} style={styles.addTodo}>

<Ionicons name='add' size={30} />
      </TouchableOpacity>
     </KeyboardAvoidingView>
      

    </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecdf',
    paddingHorizontal:20,  
  },
  header:{
marginBottom:20,
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center'
  },
  searchBar:{
backgroundColor:'rgba(247, 244, 245, 1)',
flexDirection:'row',
alignItems:'center',
gap:50,
borderRadius:10,
padding:5,
marginBottom:20

  },
  searchInputs:{
    flex:1,
    fontSize:20,
    
  },
  todoContiner:{
   backgroundColor:'white',
   padding:20,
   borderRadius:10,
   marginBottom:10,
   flexDirection:'row',
   justifyContent:'space-between',


  },
  todoInfoContiner:{
  flexDirection:'row',
  gap: 20,
  alignItems:'center'
  },
  todoText:{
    fontSize:16,
  },
  footer:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between'
  },
  addToDoList:{
    flex:1,
    backgroundColor:'white',
    padding:15,
    borderRadius:10,
    fontSize:16,
    color:'black',
    marginLeft:5

  },
  addTodo:{
backgroundColor:'pink',
padding:5,
borderRadius:10,
marginRight:20,

  },
});
