import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "./screen/HomePage";
import ListPage from "./screen/ListPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registering Below " component={HomePage} />
        <Stack.Screen name="List" component={ListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}