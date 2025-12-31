import { ScrollView, View, Text } from "react-native"
import { useState, useEffect } from "react"



export default function UserFromApi() {
    const [user, SetUser] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(u => SetUser(u))
    }, [])
    return (
        <ScrollView>
            {user.map((u) => (
                <View>
                    <Text>{u.id}</Text>
                </View>
            ))}


        </ScrollView>
    )
}