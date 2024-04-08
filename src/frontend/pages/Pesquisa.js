import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Pesquisa = () => {
  return (
    <View>
      <Text style={styles.title}>Olá Fulano</Text>
      <Text style={styles.subtitle}>Vamos começar o leilão!</Text>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#666" style={styles.icon} />
          <TextInput
            placeholder="Pesquisar"
            placeholderTextColor="#666"
            style={styles.input}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 15,
    height: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 60,
    paddingLeft: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 4,
    paddingLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'grey',
    borderWidth: 1,
    width:'100%',
    paddingHorizontal: 20,
    paddingVertical: 20,

  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 12,
    backgroundColor: 'transparent',
  },
});

export default Pesquisa;
