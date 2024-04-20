import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Headline, Button } from 'react-native-paper';

const NotificacaoItem = ({ titulo, subtitulo, imagem }) => {
  return (    
    <View style={styles.notificacaoContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imagem }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.subtitulo}>{subtitulo}</Text>
      </View>
    </View>
  );
};

const Notificacoes = () => {
  const notificacoes = [
    {
      id: 1,
      titulo: 'Título da Notificação 1',
      subtitulo: 'Subtítulo da Notificação 1',
      imagem: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      titulo: 'Título da Notificação 2',
      subtitulo: 'Subtítulo da Notificação 2',
      imagem: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      titulo: 'Título da Notificação 3',
      subtitulo: 'Subtítulo da Notificação 3',
      imagem: 'https://via.placeholder.com/80',
    },
    {
      id: 4,
      titulo: 'Título da Notificação 4',
      subtitulo: 'Subtítulo da Notificação 4',
      imagem: 'https://via.placeholder.com/80',
    }
  ];

  return (
    
    <View style={styles.container}>
      <View style={styles.head}>
      <Headline style={styles.textHeader}>Notificações</Headline>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hoje</Text>
        {notificacoes.slice(0, 3).map((notificacao) => (
          <NotificacaoItem
            key={notificacao.id}
            titulo={notificacao.titulo}
            subtitulo={notificacao.subtitulo}
            imagem={notificacao.imagem}
          />
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ontem</Text>
        {notificacoes.slice(3, 6).map((notificacao) => (
          <NotificacaoItem
            key={notificacao.id}
            titulo={notificacao.titulo}
            subtitulo={notificacao.subtitulo}
            imagem={notificacao.imagem}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificacaoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainer: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 14,
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 30,
    marginBottom: 30
  },
});

export default Notificacoes;
