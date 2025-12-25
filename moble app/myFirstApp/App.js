import { View, Text,Image, ScrollView ,TextInput,Button,ActivityIndicator, Switch} from 'react-native'
import{SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import { useState } from 'react'
import Card from './Card'




export default function App() {

  const [x,setX]=useState(0);
  const [oni,setOni]=useState(false);
  return(<ScrollView>
  <SafeAreaProvider>
    <SafeAreaView>
  <View>
 <Text>The value: {x}</Text>
    <Text style={{textAlign:'center',margin:20,color:'#070707ff'}}>
      Hello!
    </Text>
  <Image
  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLcNhwC6xfjZIMp6OE3BUadKio4HPMq__dtQ&s"}}
  style={{width:565, height:330}}
  />
  <TextInput
  placeholder='Enter your name'
  style={{borderWidth:2,padding:10,margin:10}}
  />
  <Button title='Submit' onPress={()=>{
   setX(30)
   console.log('the x value is x:',x)
  }}/>
  <ActivityIndicator size='large' color='red'/>
   <Text>{oni ? "ON":"OFF"}</Text> 
  <Switch style={{backgroundColor:'yellow'}} value={oni} onValueChange={setOni}/>
<Text style={{color:'hotpink',fontSize:20, textAlign:'center',textDecorationLine:'line-through',textShadowColor:'red'}}>Style Text Me </Text>
  <View style={{flex:1 ,flexDirection:'row',justifyContent:'space-evenly'}}>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  </View>
 
  </View>
</SafeAreaView>
</SafeAreaProvider>
</ScrollView>
  
);
}