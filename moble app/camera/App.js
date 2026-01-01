import { Camera, CameraView } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Button, Image, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [hasPermission, setHasPermission] = useState()
  const [photo, setPhoto] = useState()
  const cameraRef = useRef()

  async function p() {
    const { status } = await Camera.requestCameraPermissionsAsync()
    console.log(status)
    setHasPermission(status === 'granted')
  }
  useEffect(() => {
    p()

  }, [])

  async function takephoto() {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync()
      setPhoto(data.uri)
    }
  }

  if (hasPermission == null) return <View><Text>Requesting Permission</Text></View>
  if (hasPermission == false) return <View><Text>No Permission</Text></View>

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <View style={{ flex: 1 }} >
          <CameraView ref={cameraRef} style={{ flex: 1 }} />
          <Image source={{ uri: photo }} style={{ height: 400 }} />
          <Button title='Take Photo' onPress={takephoto} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

