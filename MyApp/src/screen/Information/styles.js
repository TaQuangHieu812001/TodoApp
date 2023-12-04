import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTodo: {
    width: '30%',
    height: 40,
    marginTop: 10,
    backgroundColor: 'black',
    borderRadius: 4,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnLogOut: {
    width: '30%',
    height: 40,
    marginTop: 10,
    backgroundColor: 'blue',
    borderRadius: 4,
    justifyContent: 'center',
  },
  mb: {
    marginBottom: 20,
  },
});

export default styles;
