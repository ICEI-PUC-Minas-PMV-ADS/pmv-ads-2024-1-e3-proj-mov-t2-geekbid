import React from 'react';
import { Button, Headline } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Container from '../components/Container';
import Body from '../components/Body';
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/native';

const Inicial = () => {

  const navigation = useNavigation();
  const handleRegisterPress = () => {navigation.navigate('Register')}; 
  const handleLoginPress = () => {navigation.navigate('Login')}; 

  return (
    <Container>
      <View style={styles.header}>
        <Headline style={styles.textHeader}>Bem-vindo ao</Headline>
        <Logo />
      </View>

      <Body>
        <Button
          style={styles.buttonRegistro}
          color="#ffffff"
          onPress={handleRegisterPress}>
          Registro
        </Button>
        <Button
          style={styles.button}
          color="#000000"
          mode="outlined"
          onPress={handleLoginPress}>
          Login
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 12,
    marginLeft: 17,
    marginRight: 17,
    padding: 10,
    fontWeight: 'bold',
  },
  buttonRegistro: {
    marginBottom: 12,
    marginLeft: 17,
    marginRight: 17,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#666cff',
    elevation: 5,
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 38,
    paddingTop: 50,
    paddingBottom: 80,
  },
  header: {
    alignItems: 'center',
    marginTop: 120,
    marginBottom: 12,
  },
});

export default Inicial;
