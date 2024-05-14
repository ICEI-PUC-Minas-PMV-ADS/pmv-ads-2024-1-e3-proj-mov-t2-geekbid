import React from "react";
import { View, Text, Image } from "react-native";
import { Button, Headline, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Footer from "./../navegations/Footer";
import MeusLeiloesDetalhesStyles from "./../css/MeusLeiloesDetalhesStyles";

const MeusLeiloesDetalhes = () => {
  const navigation = useNavigation();

  const handleExcluirLeilao = () => {
    // Implemente a lógica para excluir o leilão
  };

  return (
    <View style={MeusLeiloesDetalhesStyles.container}>
      <View style={MeusLeiloesDetalhesStyles.head}>
        <Button icon="chevron-left" onPress={() => navigation.goBack()} />
        <Headline style={MeusLeiloesDetalhesStyles.textHeader}>Detalhes do leilão</Headline>
        <IconButton
          icon="trash-can-outline"
          color="red"
          size={30}
          onPress={handleExcluirLeilao}
          style={MeusLeiloesDetalhesStyles.iconTrash}
        />
      </View>

      {/* Renderizar a imagem */}
      <Image
        style={MeusLeiloesDetalhesStyles.image}
        source={{ uri: "caminho/para/imagem.jpg" }} // Substitua pelo caminho da imagem
      />

      {/* Renderizar o nome */}
      <Text style={MeusLeiloesDetalhesStyles.title}>Nome do produto</Text>

      {/* Renderizar a descrição */}
      <Text style={MeusLeiloesDetalhesStyles.description}>Descrição do produto</Text>

      {/* Botão de voltar */}
      <Button
        icon="chevron-left"
        mode="contained"
        onPress={() => navigation.goBack()}
        color="#666cff"
        style={MeusLeiloesDetalhesStyles.backButton}
      >
        Voltar
      </Button>

      {/* Footer */}
      <Footer />
    </View>
  );
};

export default MeusLeiloesDetalhes;