import { View, Text, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

const endpoint = "http://192.168.0.100:5000";
export default function ListPage() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("http://192.168.0.100:5000/names", {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data from backend:", data);
        setNames(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={names}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>
              {item.firstName} {item.surname}
            </Text>
            <Text>{item.fullAdrress}</Text>
            <Text>{item.subCity}</Text>
            <Text>{item.email}</Text>
            <Text>{item.phone}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center" }}>No data found</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
