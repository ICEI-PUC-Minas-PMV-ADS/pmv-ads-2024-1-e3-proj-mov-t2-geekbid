import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Headline, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const MinhasInformacoes = () => {
  const navigation = useNavigation();
  const handleSalvarAlteracoesPress = () => {};
  const handleExcluirCadastroPress = () => {};

  return (
    <View style={styles.container}>
      <Button
        icon="keyboard-backspace"
        onPress={() => navigation.goBack()}></Button>
      <Headline style={styles.textHeader}>Minhas informações</Headline>

      <TextInput label="Nome" mode="outlined" style={styles.input} />
      <TextInput label="Sobrenome" mode="outlined" style={styles.input} />
      <TextInput label="E-mail" mode="outlined" style={styles.input} />
      <TextInput label="Senha" mode="outlined" style={styles.input} />
      <TextInput label="Confirmar Senha" mode="outlined" style={styles.input} />
      
      <Button mode="contained" onPress={handleSalvarAlteracoesPress}>
        Salvar Alterações
      </Button>
      <Button mode="outlined" onPress={handleExcluirCadastroPress}>
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
  },
  textHeader: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
});

export default MinhasInformacoes;
