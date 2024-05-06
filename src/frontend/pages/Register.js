import React, { useState } from 'react'
import { Button, Headline } from 'react-native-paper'
import { StyleSheet, View, Alert } from 'react-native'
import { api } from '../services/api'

import Container from '../components/Container'
import Body from '../components/Body'
import Input from '../components/Input'

import { useNavigation } from '@react-navigation/native'
import { register } from '../services/auth.services'
import { DEFAULT_ICON_SIZE } from '@expo/vector-icons/build/createIconSet'

export function Register() {
  const navigation = useNavigation()

  const [nome, setNome] = useState('')
  // const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmSenha, setConfirmSenha] = useState('')

  const handleLoginPress = () => {
    navigation.navigate('Login')
  }

  function handleRegister() {
    if (!nome || !email || !senha) {
      return alert('Preencha todos os campos!')
    }

    if (senha != confirmSenha) {
      return alert('Senha diferente da digitada.')
    }

    api
      .post('/usuario', { nome, email, senha })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
      })
      .catch(error => {
        alert('Não foi possivel cadastrar.')
      })
  }

  /*function handleRegister () {
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
  };*/

  return (
    <Container>
      <View style={styles.voltar}>
        <Button
          icon="chevron-left"
          onPress={() => navigation.goBack()}
        ></Button>
      </View>
      <Headline style={styles.textHeader}>Cadastre-se e comece!</Headline>
      <Body>
        <Input
          label="Nome"
          value={nome}
          mode="outlined"
          onChangeText={text => setNome(text)}
          editable={true}
        />
        {/* <Input
          label="Sobrenome"
          value={lastName}
          mode="outlined"
          onChangeText={text => setLastName(text)}
          editable={true}
        /> */}
        <Input
          label="E-mail"
          value={email}
          mode="outlined"
          onChangeText={text => setEmail(text)}
        />
        <Input
          label="Senha"
          value={senha}
          mode="outlined"
          onChangeText={text => setSenha(text)}
          secureTextEntry
        />
        <Input
          label="Confirme sua senha"
          value={confirmSenha}
          mode="outlined"
          onChangeText={text => setConfirmSenha(text)}
          secureTextEntry
        />
        <Button style={styles.button} mode="contained" onPress={handleRegister}>
          Cadastrar
        </Button>
      </Body>
    </Container>
  )
}

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
    marginBottom: 20,
    marginTop: 80,
    height: 60
  }
})

export default Register
