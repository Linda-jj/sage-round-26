import { useEffect,useState } from "react"
import { FlatList,View,Text } from "react-native"

export default function PhotoFromApi(){
    const[photo,setPhoto]=useState()
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response)=>response.json())
    .then(data=>setPhoto(photo))

},[])

    return(
        <FlatList
        data={photo}
        keyExtractor={(post)=>post.id}
        renderItem={({item})=>{
            <View>
<Text>{item.title}</Text>
<Text>{item.url}</Text>
<Text>{item.thumbnailUrl}</Text>
            </View>
        }}
        />


    )
}
