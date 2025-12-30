import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import DetailScreen from "./screen/DetailScreeen";
import ContactScreen from "./screen/ContactScreen";
import scrollViewX from "./screen/ScrollViewX";
import FlatListScreen from "./screen/FlatListScreen";
import FatchDataFromApi from "./screen/FatchDataFromApi";
import PhotoFromApi from "./screen/PhotofromApi";

export default function App() {
  const Stack=createNativeStackNavigator()
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
<Stack.Screen name='Home' component={HomeScreen}/>
<Stack.Screen name='Detail' component={DetailScreen}/>
<Stack.Screen name="contact" component={ContactScreen}/>
<Stack.Screen name="scrollView" component={scrollViewX}/>
<Stack.Screen name="FlatList" component={FlatListScreen}/>
<Stack.Screen name="Facth" component={FatchDataFromApi}/>
<Stack.Screen name="Photo" component={PhotoFromApi}/>
    </Stack.Navigator>

  </NavigationContainer>
  
}

