import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Platform,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [toDos, setToDos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [searchText, setSearchText] = useState('');

  /* ---------------- LOAD TODOS ---------------- */
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem('TODOS');
      if (storedTodos) {
        setToDos(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.log('Error loading todos', error);
    }
  };

  /* ---------------- SAVE TODOS ---------------- */
  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem('TODOS', JSON.stringify(toDos));
      } catch (error) {
        console.log('Error saving todos', error);
      }
    };

    saveTodos();
  }, [toDos]);

  /* ---------------- ADD TODO ---------------- */
  const addTodo = () => {
    if (newTodo.trim() === '') return;

    const newItem = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    };

    setToDos([newItem, ...toDos]);
    setNewTodo('');
  };

  /* ---------------- TOGGLE TODO ---------------- */
  const toggleTodo = (id) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  /* ---------------- DELETE TODO ---------------- */
  const deleteTodo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  /* ---------------- SEARCH FILTER ---------------- */
  const filteredTodos = toDos.filter((todo) =>
    todo.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <View style={styles.container}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} />
          </TouchableOpacity>

          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/5c/84/42/5c84428d983d26ce85a84f946e4ce8ab.jpg',
            }}
            style={styles.avatar}
          />
        </View>

      
        <View style={styles.searchBar}>
          <Ionicons name="search" size={22} />
          <TextInput
            placeholder="Search"
            style={styles.searchInputs}
            value={searchText}
            onChangeText={setSearchText}
            clearButtonMode="always"
          />
        </View>

      
        <FlatList
          data={filteredTodos}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ToDoItem
              item={item}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          )}
        />

        {/* FOOTER */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.footer}
        >
          <TextInput
            placeholder="Add New ToDo"
            value={newTodo}
            onChangeText={setNewTodo}
            style={styles.addToDoList}
          />

          <TouchableOpacity onPress={addTodo} style={styles.addTodo}>
            <Ionicons name="add" size={30} />
          </TouchableOpacity>
        </KeyboardAvoidingView>

      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const ToDoItem = ({ item, onToggle, onDelete }) => {
  return (
    <View style={styles.todoContiner}>
      <View style={styles.todoInfoContiner}>
        <Checkbox
          value={item.completed}
          onValueChange={() => onToggle(item.id)}
        />

        <Text
          style={[
            styles.todoText,
            item.completed && { textDecorationLine: 'line-through' },
          ]}
        >
          {item.title}
        </Text>
      </View>

      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Ionicons name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecdf',
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchBar: {
    backgroundColor: 'rgba(247, 244, 245, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    gap: 10,
  },
  searchInputs: {
    flex: 1,
    fontSize: 18,
  },
  todoContiner: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoInfoContiner: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  todoText: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addToDoList: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginRight: 10,
  },
  addTodo: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 10,
  },
});