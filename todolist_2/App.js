/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity,
   FlatList
 } from 'react-native';
 import PlusIcon from 'react-native-vector-icons/Ionicons';
 import TrashIcon from 'react-native-vector-icons/Ionicons';
 
 
 const App = () => {
   const [todos, setTodos] = useState([]);
   const [userInput, setUserInput] = useState("");
 
   const addTodoHandler = () => {
     if(userInput === "") {
       return
     }
 
     const newTodo = {
       id: Math.floor(Math.random() * 1000),
       text: userInput,
       completed: false,
     }
 
     const newTodos = [...todos, newTodo]
     setTodos(newTodos);
     setUserInput(null);
   };
 
   const deleteTodoHandler = (id) => {
     const oldTodos = [...todos];
     const newTodos = oldTodos.filter((todo)=> todo.id !== id);
     setTodos(newTodos);
   }
 
   const renderItem = ({item}) => (
     <View 
       style={styles.todoView}>
       <View>
         <Text style={styles.todoText}>{item.text}</Text>
       </View>
       <TouchableOpacity onPress={() => deleteTodoHandler(item.id)}>
         <TrashIcon size={35} name="trash" style={styles.trashIcon}/>
       </TouchableOpacity>
     </View>
   );
 
   return (
     <SafeAreaView style={styles.root}>
       <View style={styles.textInputView}>
         <TextInput 
           style={styles.textInput}
           value={userInput} 
           onChangeText={text => setUserInput(text)}
           placeholder='Enter your todos...!!'
           />
           <TouchableOpacity style={styles.addButton}>
             <PlusIcon 
               size={35} 
               name="add-sharp" 
               style={styles.plusIcon}
               onPress={() => addTodoHandler()}
               />
           </TouchableOpacity>
       </View>
 
       <View style={ styles.flatListView }>
         <FlatList 
           data={todos}
           renderItem={renderItem}
         />
       </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   root: {
     flex: 1,
   },
   textInputView: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center',
   },
   flatListView : {
     alignItems: 'center',
   },
   todoView: {
     backgroundColor: '#6b4d57', 
     marginVertical: 10, 
     flexDirection: 'row', 
     alignItems: 'center',
     justifyContent: 'space-between',
     height: 60,
     width: 350,
     borderRadius: 10,
     padding: 5,
   },
   todoText: {
     color: '#eff9f0', 
     fontSize:20, 
     fontWeight:'bold'
   },
   plusIcon: {
     color: '#eff9f0',
   },
   trashIcon: {
     color: '#eff9f0'
   },
   addButton : {
     padding: 5,
     backgroundColor: '#896a67',
     borderRadius: 10
   }, 
   textInput: {
     borderWidth: 1,
     borderColor: '#ddc8c4',
     width: 300,
     padding: 10,
     marginVertical: 10,
     fontSize: 18,
     borderRadius: 10,
   },
 });
 
 export default App;
 