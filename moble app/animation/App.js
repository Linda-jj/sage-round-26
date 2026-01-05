import { useEffect, useRef } from 'react'
import { Animated, Button, View } from 'react-native';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const moveX = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true

    }).start()
  }, [])

  function moveBox() {
    Animated.spring(moveX, {
      toValue: 300,
      tension:3,
      friction:10,

      useNativeDriver: true
    }).start()
  }
  function moveBoxR() {
    Animated.spring(moveX, {
      toValue: 0,
       tension:3,
      friction:10,

      useNativeDriver: true
    }).start()
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View style={{ width: 200, height: 200, backgroundColor: 'blue', opacity: fadeAnim }}>

      </Animated.View>
      <Animated.View style={{
        width: 200, height: 200, margin: 10,
        backgroundColor: 'green', transform: [{ translateX: moveX }]
      }}>

      </Animated.View>
      
        <Button title='Press Me' onPress={()=>{
          console.log( moveX._value)
         moveX._value > 200 ? moveBoxR(): moveBox()
         
        }} />
       
   

    </View>
  );
}


