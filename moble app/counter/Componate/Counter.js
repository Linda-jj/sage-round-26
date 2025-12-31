import { View, Text, Button } from "react-native";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { decrement, increment, reset } from "../Redux/slice/counterSlice";

export default function Counter() {
   const counterFromSrore=useSelector((state)=>state.counter.value)
   const dispatch=useDispatch()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 32, margin: 5 }} >
            <View>
                <Text style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', fontSize: 32 }}>{counterFromSrore}</Text>
                <View >
                    <Button  title="Add" onPress={() => {
                       dispatch(increment())
                    }}  />
                    <Button title="Sub" onPress={() => {
                       dispatch(decrement())
                    }}
                    />
                    <Button title="Resat" onPress={() => {
                        dispatch(reset())
                    }} />

                </View>
            </View>
        </View>
    )
}