import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const EnviarLance = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Titulo do item a leiloar</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/300' }}
        style={styles.imagem}
      />
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Tempo Restante:</Text>
          <Text style={styles.infoValue}>2 dias 5 horas</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Lance Mínimo:</Text>
          <Text style={styles.infoValue}>R$ 450.000</Text>
        </View>
      </View>
      <TextInput
        placeholder="Digite seu lance"
        style={styles.input}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Envie seu lance</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoItem: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#666cff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EnviarLance;
