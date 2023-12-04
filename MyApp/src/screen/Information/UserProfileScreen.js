import React from 'react';
import { Layout, Text, Avatar, Button } from '@ui-kitten/components';
import { Alert, Image, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const UserProfileScreen = ({route,navigation}) => {

  const userData = {
    username: 'Quang Hiếu',
    email:'taquanghieu812001@gmail.com',
    avatar: require('../../assets/icon/Profile-ic.png'), // URL của hình ảnh avatar
  };

  const handleLogout = () => {
   // Hiển thị thông báo khi đăng xuất thành công
   Alert.alert(
    'Đăng xuất thành công',
    '',
    [
      {
        text: 'OK',
        onPress: () => {
          setTimeout(() => {
            navigation.navigate('LoginScreen');
          }, 500); 
        },
      },
    ],
    { cancelable: false }
  );
  };
  const handleTodo = ()=>{
    navigation.navigate('TodoListScreen');
  }

  return (
    <Layout style={styles.container}>
      <Image
        source={userData.avatar}
        style={styles.mb}
      />
      <Text category='h5' style={styles.mb}>{userData.username}</Text>
      <Text category='s1' style={styles.mb}>{userData.email}</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.btnLogOut}>
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTodo} style={styles.btnTodo}>
        <Text style={styles.text}>Todo List</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default UserProfileScreen;
