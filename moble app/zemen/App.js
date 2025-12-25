import {View,Text,Button,TextInput} from 'react-native'
import { useState } from 'react'



export default function App(){
const [name, setName]=useState('')

  return <View>
<TextInput placeholder='Enter Your name :'
value={name}
onChangeText={setName}
style={{borderWidth:1}}
/>
<Button title='Submit' onPress={()=>{
  alert(name)
}}/>
<Text> Your name :{name}</Text>
  </View>
 
}
