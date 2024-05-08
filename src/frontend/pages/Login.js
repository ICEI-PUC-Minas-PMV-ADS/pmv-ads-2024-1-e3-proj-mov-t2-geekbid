import React, { useState } from 'react'
import { useAuth } from '../services/auth.services'
import { Button, Headline } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import Container from '../components/Container'
import Body from '../components/Body'
import Input from '../components/Input'
import { useNavigation } from '@react-navigation/native'

export function Login() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { signIn } = useAuth()

  function handleLogin() {
    signIn({ email, senha })
    navigation.navigate('Home')

    if (!email || !senha) {
      return alert('Preencha todos os campos!')
    }

    // const handleLoginPress = () => {
    // }

    // login({
    //   email: email,
    //   password: password
    // }).then(() => {
    //   console.log(email, password)
    //   handleLoginPress()
    // })
  }

  return (
    <Container>
      <View style={styles.voltar}>
        <Button
          icon="chevron-left"
          onPress={() => navigation.goBack()}
        ></Button>
      </View>
      <Headline style={styles.textHeader}>
        Faça o Login para continuar!
      </Headline>
      <Body>
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
        <Button style={styles.button} mode="contained" onPress={handleLogin}>
          Login
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
    marginBottom: 50,
    marginTop: 80,
    height: 60
  }
})

export default Login
