import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';

const NovoLeilao = () => {
  const [descricao, setDescricao] = useState('');
  const [duracao, setDuracao] = useState('');
  const [imagem, setImagem] = useState(null);

  const handleNovoLeilaoPress = () => {
    console.log('Salvando novo leilão:', descricao, duracao, imagem);
  };

  const handleUploadImagem = () => {
    ImagePicker.showImagePicker({ title: 'Selecione uma imagem' }, response => {
      if (response.didCancel) {
        console.log('Usuário cancelou o upload da imagem');
      } else if (response.error) {
        console.log('Erro ao selecionar imagem:', response.error);
      } else {
        setImagem(response.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Novo Leilão</Text>
      </View>

      <TouchableOpacity style={styles.uploadButton} onPress={handleUploadImagem}>
        {imagem ? (
          <Image source={{ uri: imagem }} style={styles.imagemPreview} />
        ) : (
          <Text style={styles.uploadButtonText}>Upload Imagem</Text>
        )}
      </TouchableOpacity>

      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={text => setDescricao(text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Duração"
        value={duracao}
        onChangeText={text => setDuracao(text)}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleNovoLeilaoPress}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleNovoLeilaoPress}>
        <Text style={styles.buttonText}>Publicar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  uploadButton: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  uploadButtonText: {
    color: '#333',
    fontSize: 16,
  },
  imagemPreview: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
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
    marginBottom: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NovoLeilao;
