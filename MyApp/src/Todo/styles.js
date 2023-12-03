import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1, 
    padding: 20,
  },
  btnProfile: {
    width: 40,
    height: 40
  },
  todoList: {
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 22,
  },
  mrbottom: {
    marginBottom: 10,
  },
  addTodo: {
    width: '80%',
    backgroundColor: '#8758ff',
    padding: 6,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 10,
  },
  list: {
    backgroundColor: '#3366FF',
    width: '100%',

    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 4,
  },
  listItem: {
    marginVertical: 6,

    width: '90%',
    alignSelf: 'center',
    borderRadius: 4,
  },
  add: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  mt20: { marginTop: 20 },
});
export default styles;
