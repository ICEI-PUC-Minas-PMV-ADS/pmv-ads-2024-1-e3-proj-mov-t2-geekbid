import React, { useState } from 'react';
import { Button, Headline } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import { login } from '../services/auth.services';


import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    navigation.navigate('Home');
  };

  const handleLogin = () => {
    login({
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);
      handleLoginPress();
    });
  };

  return (
    <Container>
      <View style={styles.voltar}>
        <Button
          icon="keyboard-backspace"
          onPress={() => navigation.goBack()}></Button>
      </View>
      <Headline style={styles.textHeader}>
        Faça o Login para continuar!
      </Headline>
      <Body>
        <Input
          label="E-mail"
          value={email}
          mode="outlined"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Senha"
          value={password}
          mode="outlined"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Button style={styles.button} mode="contained" onPress={handleLogin}>
          Login
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
  },
  textHeader: {
    textAlign: 'center',
  },
  voltar: {
    marginLeft: 16,
    color: 'red',
    marginTop: 100,
  },
});

export default Login;
