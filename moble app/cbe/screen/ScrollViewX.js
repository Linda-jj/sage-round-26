import { View,Text,ScrollView } from "react-native";
import { AfricaCountry } from "../data/AfricaCountry";



export default function scrollViewX(){
    return<ScrollView>
        {
            AfricaCountry.map((c)=>(
                <View>
                    <Text>{c.code}</Text>
                    <Text>{c.name}</Text>
                </View>
            ))
        }
    </ScrollView>
}