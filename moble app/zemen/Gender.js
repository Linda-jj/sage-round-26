import  { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function Gender() {
  const [val, setVal] = useState("male");

  return (
    <View style={{ padding: 20 }}>
      <Pressable onPress={() => setVal("male")}>
        <Text style={{fontSize:20}}>{val === "male" ? "◉" : "○"} Male</Text>
      </Pressable>

      <Pressable onPress={() => setVal("female")}>
        <Text style={{fontSize:20}}>{val === "female" ? "◉" : "○"} Female</Text>
      </Pressable>
    </View>
  );
}
