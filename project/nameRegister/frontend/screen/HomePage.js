import { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const endpoint = "http://192.168.0.100:5000";

export default function HomePage({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [fullAdrress, setFullAdrress] = useState("");
  const [subCity, setSubcity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // function getName() {
  //   fetch(`${endpoint}/names`)
  //     .then((res) => res.json())
  //     .then((data) => setNameRes(data));
  // }
  const hundeleSubmit = () => {
    fetch(`${endpoint}/names`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        firstName,
        surname,
        fullAdrress,
        subCity,
        email,
        phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((err) => {
        Alert.alert("Error", "Something went wrong");
        console.error(err);
      });
  };

  // useEffect(() => {
  //   getName();
  // }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text style={styles.header}>Registration Form</Text>
        <Text style={styles.smallText}>
          Please fill your information Below to Register
        </Text>
      </View>
      <View style={styles.first}>
        <TextInput
          placeholder="First Name"
          style={styles.firstinputone}
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Surname"
          style={styles.firstinputone}
          value={surname}
          onChangeText={setSurname}
        />
      </View>
      <View style={styles.first}>
        <TextInput
          placeholder="Full Address"
          style={styles.firstinputone}
          value={fullAdrress}
          onChangeText={setFullAdrress}
        />
        <TextInput
          placeholder="Sub City"
          style={styles.firstinputone}
          value={subCity}
          onChangeText={setSubcity}
        />
      </View>
      <View style={styles.second}>
        <TextInput
          placeholder="Email"
          style={styles.inputsecond}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.second}>
        <TextInput
          placeholder="your Phone Number"
          style={styles.inputsecond}
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <View style={styles.btn}>
        <Button title="Submit" onPress={hundeleSubmit} />
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <AntDesign name="bars" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7e7e7",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    color: "black",
  },
  header: {
    fontSize: 32,
    gap: 15,
    fontWeight: 800,
  },
  smallText: {
    fontSize: 14,
  },
  first: {
    flexDirection: "row",

    marginTop: 15,
    marginBottom: 15,
  },

  firstinputone: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginRight: 10,
    height: 40,
  },
  inputsecond: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    height: 40,
    width: 430,
    marginTop: 10,
    marginBottom: 10,
  },
  btn: {
    width: 200,
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
