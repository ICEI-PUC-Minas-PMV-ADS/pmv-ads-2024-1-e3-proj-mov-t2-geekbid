import React, { useState, useEffect } from "react";
import { View, Text, Image, Alert } from "react-native";
import { Button, Headline, IconButton } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import Footer from "./../navegations/Footer";
import MeusLeiloesDetalhesStyles from "./../css/MeusLeiloesDetalhesStyles";

const MeusLeiloesDetalhes = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  console.log("ID do produto:", id);

  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(`http://192.168.1.106:3000/produto/${id}`);
        const data = await response.json();
        setProduto(data.produto);
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error);
        Alert.alert(
          "Erro ao buscar detalhes do produto. Por favor, tente novamente mais tarde."
        );
      }
    };

    fetchProduto();
  }, [id]);

  const handleEditarLeilao = (produtoId) => {
    console.log("ID do produto selecionado:", produtoId);
    navigation.navigate('EditarLeilao', { id: produtoId });
  };

  const handleExcluirLeilao = () => {
    // Implemente a lógica para excluir o leilão
  };

  return (
    <View style={MeusLeiloesDetalhesStyles.container}>
      <View style={MeusLeiloesDetalhesStyles.head}>
        <Button icon="chevron-left" onPress={() => navigation.goBack()} />
        <Headline style={MeusLeiloesDetalhesStyles.textHeader}>
          Detalhes do Leilão
        </Headline>
        <IconButton
          icon="circle-edit-outline"
          color="#666cff"
          size={30}
          onPress={() => handleEditarLeilao(id)}
          style={MeusLeiloesDetalhesStyles.iconTrash}
        />
      </View>

      {produto && (
        <>
          <Image
            style={MeusLeiloesDetalhesStyles.image}
            source={{ uri: produto.urlImagemProduto }}
          />
          <View style={MeusLeiloesDetalhesStyles.box}>
            <Text style={MeusLeiloesDetalhesStyles.title}>Nome</Text>
            <Text style={MeusLeiloesDetalhesStyles.boxContent}>{produto.nomeProduto}</Text>
          </View>
          <View style={MeusLeiloesDetalhesStyles.box}>
            <Text style={MeusLeiloesDetalhesStyles.title}>Descrição</Text>
            <Text style={MeusLeiloesDetalhesStyles.boxContent}>{produto.descricaoProduto}</Text>
          </View>
        </>
      )}

      <Button
        icon="chevron-left"
        mode="contained"
        onPress={() => navigation.goBack()}
        color="#666cff"
        style={MeusLeiloesDetalhesStyles.backButton}
      >
        Voltar
      </Button>
      <Footer />
    </View>
  );
};

export default MeusLeiloesDetalhes;
