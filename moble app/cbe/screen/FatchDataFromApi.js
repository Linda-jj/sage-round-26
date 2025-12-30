import { ActivityIndicator, FlatList } from "react-native"
import { View,Text } from "react-native"
import { useState,useEffect } from "react"

export default function FatchDataFromApi(){
    const[data ,setData]=useState()
    const[error,setError]=useState(false)
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then(data=>setData(data))
    .catch(()=>{
setError(true)
    })
},[])
if (data==undefined){
    return<View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
    {error?<Text>Error</Text>:<ActivityIndicator size={'large'}/>}
    </View>

}else{
return(
<FlatList
data={data}
keyExtractor={(post)=>post.id}
renderItem={({item})=>(
    <View style={{margin:5,borderBottomWidth:1}}>
        <Text>post id{item.id}</Text>
        <Text>Title{item.title}</Text>
        <Text>{item.body}</Text>
    </View>
)}
/>

    )
}
    
}