import React, { useState } from 'react';
import { Layout, Text, Button, Icon, Input, List, ListItem } from '@ui-kitten/components';
import styles from './styles';
import { Image, TouchableOpacity } from 'react-native';


const TodoListScreen = ({navigation}) => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [todoDeadline, setTodoDeadline] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editedTodo, setEditedTodo] = useState({ title: '', description: '', deadline: '' });

  const addTodo = () => {
    if (todoTitle.trim() !== '') {
      const newTodo = {
        title: todoTitle,
        description: todoDescription,
        deadline: todoDeadline,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTodoTitle('');
      setTodoDescription('');
      setTodoDeadline('');
    }
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const startEditing = index => {
    setEditIndex(index);
    const todoToEdit = todos[index];
    setEditedTodo({
      title: todoToEdit.title,
      description: todoToEdit.description,
      deadline: todoToEdit.deadline,
    });
  };

  const saveEditing = index => {
    const newTodos = [...todos];
    newTodos[index] = { ...editedTodo };
    setTodos(newTodos);
    setEditIndex(-1);
    setEditedTodo({ title: '', description: '', deadline: '' });
  };

  const renderItem = ({ item, index }) => (
    <ListItem
      style={styles.listItem}
      title={`${item.title}`}
      description={`${item.description} - Deadline: ${item.deadline}`}
  
      accessoryLeft={props => (
        <Button {...props} appearance='ghost' status='danger' onPress={() => removeTodo(index)}>
          <Icon name='trash-outline' fill='#FF3D71' />
        </Button>
      )}
      accessoryRight={props => (
        editIndex === index ? (
          <Button {...props} appearance='ghost' onPress={() => saveEditing(index)}>
            <Icon name='checkmark-outline' fill='#3366FF' />
          </Button>
        ) : (
          <Button {...props} appearance='ghost' onPress={() => startEditing(index)}>
            <Icon name='edit-2-outline' fill='black' />
          </Button>
        )
      )}
    />
  );

  return (
    <Layout style={styles.container}>
        <TouchableOpacity style={styles.btnProfile} onPress={()=>navigation.navigate('UserProfileScreen')}>
          <Image
           source={require('../assets/icon/Profile-ic.png')}
            resizeMode='contain'
            style={styles.btnProfile}
          />
        </TouchableOpacity>
      <Text category='h4' style={styles.todoList}>To-do List</Text>
      <Input
        placeholder='Title'
        value={editIndex !== -1 ? editedTodo.title : todoTitle}
        onChangeText={text => editIndex !== -1 ? setEditedTodo({ ...editedTodo, title: text }) : setTodoTitle(text)}
        style={styles.mrbottom}
      />
      <Input
        placeholder='Description'
        value={editIndex !== -1 ? editedTodo.description : todoDescription}
        onChangeText={text => editIndex !== -1 ? setEditedTodo({ ...editedTodo, description: text }) : setTodoDescription(text)}
        style={styles.mrbottom}
      />
      <Input
        placeholder='Deadline'
        value={editIndex !== -1 ? editedTodo.deadline : todoDeadline}
        onChangeText={text => editIndex !== -1 ? setEditedTodo({ ...editedTodo, deadline: text }) : setTodoDeadline(text)}
        style={styles.mrbottom}
      />
      <Button onPress={editIndex !== -1 ? () => saveEditing(editIndex) : addTodo}>
        {editIndex !== -1 ? 'Update Todo' : 'Add Todo'}
      </Button>
      
      <List
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </Layout>
  );
};

export default TodoListScreen;
