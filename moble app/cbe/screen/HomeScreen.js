import { setStatusBarBackgroundColor } from "expo-status-bar";
import { View,Text, Button } from "react-native";



export default function HomeScreen({navigation}){
    return<View >
        <Text>This is home page</Text>
        <Button title="Detail" onPress={()=>{
navigation.navigate('Detail')
        }}/>
        <Button  title="contact" onPress={()=>{
            navigation.navigate('contact')
        }}/>
         <Button  title="Africa" onPress={()=>{
            navigation.navigate('scrollView')
        }}/>
                 <Button  title="Country" onPress={()=>{
            navigation.navigate('FlatList')
        }}/>
                  <Button  title="Facth from API" onPress={()=>{
            navigation.navigate('Facth')
        }}/>
              <Button  title="Photo" onPress={()=>{
            navigation.navigate('Photo')
        }}/>
    </View>
}