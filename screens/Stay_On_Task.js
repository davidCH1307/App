import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TodoItem from '../components/TodoItem';
import AddTodo from '../components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState ([
    {text: 'buy coffee', key: '1'},
    {text: 'buy tea',    key: '2'},
    {text: 'buy milk',   key: '3'},
    {text: 'buy sugar',  key: '4'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key); 
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3){
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    }else {
      Alert.alert('OOPS', 'TODOS must be over 3 chars long', [
      {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress = {() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
        <View style = {styles.content}>
          <AddTodo submitHandler = {submitHandler} />
          <View style = {styles.list}>
            <FlatList 
              data = {todos}
              renderItem = {({ item }) => (
              <TodoItem item = {item} pressHandler = {pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
  },
  content:{
    flex: 1,
    padding: 40,
    },
    list:{
      flex: 1,
      marginTop: 20
    }
});