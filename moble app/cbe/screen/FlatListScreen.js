import { FlatList, View,Text } from "react-native";
import{countries}  from "../data/Country"



export default function FlatListScreen(){
    return(
        <FlatList
            data={countries}
            keyExtractor={(c)=>c.code}
            renderItem={({item})=>(
                <View style={{padding:15,borderBottomWidth:2,borderBottomColor:'green'}}> 
                    <Text>{item.name}</Text>
                    <Text>{item.code}</Text>
                </View>
            )}
      />
    )
}