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
      console.log("ID do produto selecionado X:", id);

  const [produto, setProduto] = useState(null);
  const [leilao, setLeilao] = useState(null);
  const [lances, setLances] = useState([]);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(`http://localhost:3000/leilao/${id}`);
        const data = await response.json();
        console.log("Dados do produto:", data.leilao.produto);
        console.log("Dados do leilão:", data.leilao); // Verifica se os dados do leilão estão presentes
        setProduto(data.leilao.produto);
        setLeilao(data.leilao);
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error);
        Alert.alert(
          "Erro ao buscar detalhes do produto. Por favor, tente novamente mais tarde."
        );
      }
    };

    const fetchLances = async () => {
      try {
        console.log("Fetching lances for leilaoId:", id); // Verifica o ID antes de buscar os lances
        const response = await fetch(`http://localhost:3000/lance/${id}/ultimos`);
        const data = await response.json();
        console.log("Lances recebidos:", data); // Verifica os lances recebidos
        setLances(data);
      } catch (error) {
        console.error("Erro ao buscar lances:", error);
        Alert.alert(
          "Erro ao buscar lances. Por favor, tente novamente mais tarde."
        );
      }
    };
    
    fetchProduto();
    fetchLances();
  }, [id]);

  const handleEditarLeilao = (produtoId) => {
    console.log("ID do produto selecionado:", produtoId);
    navigation.navigate("EditarLeilao", { id: produtoId });
  };

  return (
    <View style={MeusLeiloesDetalhesStyles.container}>
      <View style={MeusLeiloesDetalhesStyles.head}>
        <Button icon="chevron-left" onPress={() => navigation.goBack()} />
        <Headline style={MeusLeiloesDetalhesStyles.textHeader}>
          Detalhes do Leilão
        </Headline>
        {leilao && leilao.statusLeilao === "cadastrado" ? (
          <IconButton
            icon="circle-edit-outline"
            color="#666cff"
            size={30}
            onPress={() => handleEditarLeilao(id)}
            style={MeusLeiloesDetalhesStyles.iconTrash}
          />
        ) : (
          <IconButton
            icon="circle-edit-outline"
            color="#808080"
            size={30}
            disabled
            style={MeusLeiloesDetalhesStyles.iconTrash}
          />
        )}
      </View>
      {produto && (
        <>
          <Image
            style={MeusLeiloesDetalhesStyles.image}
            source={{ uri: produto.urlImagemProduto }}
          />
          <View>
            <Text style={MeusLeiloesDetalhesStyles.status}>Status: {leilao.statusLeilao}</Text>
          </View>
          <View style={MeusLeiloesDetalhesStyles.box}>
            <Text style={MeusLeiloesDetalhesStyles.title}>Nome</Text>
            <Text style={MeusLeiloesDetalhesStyles.boxContent}>
              {produto.nomeProduto}
            </Text>
          </View>
          <View style={MeusLeiloesDetalhesStyles.box}>
            <Text style={MeusLeiloesDetalhesStyles.title}>Descrição</Text>
            <Text style={MeusLeiloesDetalhesStyles.boxContent}>
              {produto.descricaoProduto}
            </Text>
          </View>
        </>
      )}
      <View style={MeusLeiloesDetalhesStyles.box}>
        <Text style={MeusLeiloesDetalhesStyles.title}>Últimos 5 Lances</Text>
        {lances.length > 0 ? (
          lances.map((lance, index) => (
            <Text key={index} style={MeusLeiloesDetalhesStyles.boxContent}>
              {`Usuário: ${lance.usuarioId}, Valor: ${lance.valorLance}, Data: ${new Date(lance.createdAt).toLocaleString()}`}
            </Text>
          ))
        ) : (
          <Text style={MeusLeiloesDetalhesStyles.boxContent}>
            Nenhum lance encontrado.
          </Text>
        )}
      </View>
     <Button
        icon="check"
        mode="contained"
        style={
          leilao && leilao.statusLeilao === "cadastrado"
            ? MeusLeiloesDetalhesStyles.publicButton
            : MeusLeiloesDetalhesStyles.inactiveButton
        }
        onPress={() => {
          /* Implemente a lógica para publicar o leilão */
        }}
        color="#666cff"
        disabled={!(leilao && leilao.statusLeilao === "cadastrado")}
      >
        Publicar
      </Button>
      <Footer />
    </View>
  );
};

export default MeusLeiloesDetalhes;
