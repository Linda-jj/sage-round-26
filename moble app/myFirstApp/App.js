import { View, Text,Image ,TextInput,Button,ActivityIndicator, Switch} from 'react-native'

import { useState } from 'react'




export default function App() {

  const [x,setX]=useState(0)
  return <View>
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
  <Switch/>
  </View>

  
}