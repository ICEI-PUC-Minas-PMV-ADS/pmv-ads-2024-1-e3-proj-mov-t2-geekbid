import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Headline, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input';


const MinhasInformacoes = () => {
  const navigation = useNavigation();
  const handleSalvarAlteracoesPress = () => {};
  const handleExcluirCadastroPress = () => {};

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.head}>
      <Button
          icon="chevron-left"
          onPress={() => navigation.goBack()}></Button>
      <Headline style={styles.textHeader}>Minhas informações</Headline>
      </View>
      <View style={styles.inputs}>
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
          label="Confirme sua senha"
          value={confirmPassword}
          mode="outlined"
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        />
      </View>
      
      <Button style={styles.button} mode="contained" onPress={handleSalvarAlteracoesPress}>
        Salvar Alterações
      </Button>
      <Button style={styles.button} mode="outlined" onPress={handleExcluirCadastroPress}>
        Excluir cadastro
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
    marginTop: 10,
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 25
  },
  input: {
    marginBottom: 10,
  },
  inputs: {
    
    marginTop: 10,
  },
  head: {
    flexDirection: 'row',
    marginBottom: 30
  },
  button: {
    marginBottom: 8,
    height: 60,
    justifyContent: 'center',
    marginTop: 15
  },
});

export default MinhasInformacoes;
