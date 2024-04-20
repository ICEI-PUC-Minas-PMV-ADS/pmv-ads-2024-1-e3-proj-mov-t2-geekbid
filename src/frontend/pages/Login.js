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
          icon="chevron-left"
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
    height: 60,
    justifyContent: 'center',
    marginTop: 15
  },
  textHeader: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 25
  },
  voltar: {
    marginRight: 350,
    marginLeft: 10,
    marginBottom: 50,
    marginTop: 80,
    height: 60,
  },
});

export default Login;
