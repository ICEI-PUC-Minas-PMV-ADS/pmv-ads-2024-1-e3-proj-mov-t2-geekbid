import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import {  Button, Headline } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ImagePicker from "react-native-image-picker";

import Footer from "./../navegations/Footer";
import novoLeilaoStyles from './../css/NovoLeilaoStyles';

const NovoLeilao = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [lanceMinimo, setLanceMinimo] = useState("");
  const [duracao, setDuracao] = useState("");
  const [imagem, setImagem] = useState(null);

  const handleNovoLeilaoPress = () => {
    console.log(
      "Salvando novo leilão:",
      nome,
      descricao,
      categoria,
      lanceMinimo,
      duracao,
      imagem
    );
  };

  const handleUploadImagem = () => {
    ImagePicker.showImagePicker(
      { title: "Selecione uma imagem" },
      (response) => {
        if (response.didCancel) {
          console.log("Usuário cancelou o upload da imagem");
        } else if (response.error) {
          console.log("Erro ao selecionar imagem:", response.error);
        } else {
          setImagem(response.uri);
        }
      }
    );
  };

  return (
    <ScrollView
      style={novoLeilaoStyles.container}
      contentContainerStyle={novoLeilaoStyles.scrollContent}
    >
      <View style={novoLeilaoStyles.head}>
        <Button
          icon="chevron-left"
          onPress={() => navigation.goBack()}
        ></Button>
        <Headline style={novoLeilaoStyles.textHeader}>Novo Leilão</Headline>
        <TouchableOpacity
          onPress={() => console.log("chamar a handler excluir leilão")}
        >
          <Image
            source={require("./../assets/lixeira.png")}
            style={novoLeilaoStyles.trashIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={novoLeilaoStyles.uploadButton}
        onPress={handleUploadImagem}
      >
        {imagem ? (
          <Image source={{ uri: imagem }} style={novoLeilaoStyles.imagemPreview} />
        ) : (
          <View style={novoLeilaoStyles.imagemContainer}>
            <Image
              source={require("./../assets/cloud-computing.png")}
              style={novoLeilaoStyles.imagemPreview}
            />
            <Text style={novoLeilaoStyles.uploadButtonText}>Upload Imagem</Text>
          </View>
        )}
      </TouchableOpacity>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
        style={novoLeilaoStyles.input}
      />

      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
        style={novoLeilaoStyles.inputDescription}
      />

      <TextInput
        placeholder="Categoria"
        value={categoria}
        onChangeText={(text) => setCategoria(text)}
        style={novoLeilaoStyles.input}
      />

      <TextInput
        placeholder="Lance Mínimo"
        value={lanceMinimo}
        onChangeText={(text) => setLanceMinimo(text)}
        style={novoLeilaoStyles.input}
      />

      <View style={novoLeilaoStyles.duracaoContainer}>
        <Text style={novoLeilaoStyles.duracaoLabel}>Duração:</Text>
        <View style={novoLeilaoStyles.duracaoInputContainer}>
          <TextInput
            placeholder="dias"
            value={duracao}
            onChangeText={(text) => setDuracao(text)}
            style={novoLeilaoStyles.duracaoInput}
          />
          <TextInput
            placeholder="horas"
            value={duracao}
            onChangeText={(text) => setDuracao(text)}
            style={novoLeilaoStyles.duracaoInput}
          />
          <TextInput
            placeholder="minutos"
            value={duracao}
            onChangeText={(text) => setDuracao(text)}
            style={novoLeilaoStyles.duracaoInput}
          />
        </View>
      </View>

      <TouchableOpacity style={novoLeilaoStyles.button} onPress={handleNovoLeilaoPress}>
        <Text style={novoLeilaoStyles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={novoLeilaoStyles.buttonPublicar}
        onPress={handleNovoLeilaoPress}
      >
        <Text style={novoLeilaoStyles.buttonText}>Publicar</Text>
      </TouchableOpacity>

      <View style={novoLeilaoStyles.container}>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default NovoLeilao;
