import React, { useState } from 'react';
import { Button, Headline } from 'react-native-paper';
import { StyleSheet, View, Alert } from 'react-native';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';

import { useNavigation } from '@react-navigation/native';
import { register } from '../services/auth.services';

const Register = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    register({
      name: name,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    }).then((res) => {
      console.log(res);
      Alert.alert('Atenção', 'Usuário cadastrado com sucesso!', [
        {
          text: 'OK',
          onPress: handleLoginPress,
        },
      ]);
    });
  };

  return (
    <Container>
      <View style={styles.voltar}>
        <Button
          icon="keyboard-backspace"
          onPress={() => navigation.goBack()}></Button>
      </View>
      <Headline style={styles.textHeader}>Cadastre-se e comece!</Headline>
      <Body>
        <Input
          label="Nome"
          value={name}
          mode="outlined"
          onChangeText={(text) => setName(text)}
          editable={true}
        />
        <Input
          label="Sobrenome"
          value={lastName}
          mode="outlined"
          onChangeText={(text) => setLastName(text)}
          editable={true}
        />
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
        <Input
          label="Senha"
          value={confirmPassword}
          mode="outlined"
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        />
        <Button style={styles.button} mode="contained" onPress={handleRegister}>
          Cadastrar
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

export default Register;
