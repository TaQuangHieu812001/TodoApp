import React, { useState } from 'react';
import {ImageBackground,Alert } from 'react-native';
import {Layout, Input, Button, Text } from '@ui-kitten/components';
import styles from './styles';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'taquanghieu@gmail.com' && password === '123456') {
      navigation.navigate('UserProfileScreen');
      
    } else {
      // Thông báo lỗi khi đăng nhập không thành công
      Alert.alert('Thông tin đăng nhập không đúng', 'Vui lòng nhập lại tài khoản và mật khẩu.');
    }

  };

  return (
    
      <ImageBackground
        source={{ uri: 'https://placekitten.com/400/800' }}
        style={styles.main}
      >
        <Layout style={styles.container}>
          <Text category='h1' style={styles.textLogin}>Login</Text>
          <Input
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            style={styles.mb12}
          />
          <Input
            placeholder='Password'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.mb24}
          />
          <Button onPress={handleLogin}>Login</Button>
        </Layout>
      </ImageBackground>
  );
};

export default LoginScreen;
