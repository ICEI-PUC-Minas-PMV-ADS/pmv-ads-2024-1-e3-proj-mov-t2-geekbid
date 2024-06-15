import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../services/auth.services'
import { useNavigation } from '@react-navigation/native'

const Pesquisa = () => {

  const { usuario } = useAuth()

  return (
    <View>
      <Text style={styles.title}>Olá {usuario.nome} </Text>
      <Text style={styles.subtitle}>Vamos começar o leilão!</Text>
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
    marginLeft: 15
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 4,
    paddingLeft: 10,
    marginLeft: 15
  }
});

export default Pesquisa;
