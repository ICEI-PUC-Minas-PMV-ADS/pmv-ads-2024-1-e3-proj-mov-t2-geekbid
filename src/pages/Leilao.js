import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Leilao = () => {

  const handleLeilaoPress = () => {
    console.log("Clicou em Fazer Leilao");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLeilaoPress}>
        <Text style={styles.buttonText}>Novo Leilao</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#666cff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Leilao;
