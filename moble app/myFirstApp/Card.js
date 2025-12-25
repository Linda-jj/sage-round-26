import {Image,View,Text} from 'react-native'


export default function Card(){
    return<View>
        <Image source={require('./assets/watch.webp')}
        style={{width:200, height:200}}
        />
        <Text style={{borderWidth:1 ,borderRadius:10,backgroundColor:'green', color:'white',fontSize:16,width:100}}>Buy Now</Text>
    </View>
}