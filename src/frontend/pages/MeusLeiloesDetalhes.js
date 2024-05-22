import React, { useState, useEffect } from "react";
import { View, Text, Image, Alert, ScrollView } from "react-native";
import { Button, Headline, IconButton } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import Footer from "./../navegations/Footer";
import MeusLeiloesDetalhesStyles from "./../css/MeusLeiloesDetalhesStyles";

const MeusLeiloesDetalhes = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const [produto, setProduto] = useState(null);
  const [leilao, setLeilao] = useState(null);
  const [lances, setLances] = useState([]);
  const [showAllLances, setShowAllLances] = useState(false);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(`http://localhost:3000/leilao/${id}`);
        const data = await response.json();
        setProduto(data.leilao.produto);
        setLeilao(data.leilao);
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error);
        Alert.alert(
          "Erro",
          "Erro ao buscar detalhes do produto. Por favor, tente novamente mais tarde."
        );
      }
    };

    const fetchLances = async () => {
      try {
        let url = `http://localhost:3000/lances/${id}/ultimos`;
        if (showAllLances) {
          url = `http://localhost:3000/lances/${id}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setLances(data);
      } catch (error) {
        console.error("Erro ao buscar lances:", error);
        Alert.alert(
          "Erro",
          "Erro ao buscar lances. Por favor, tente novamente mais tarde."
        );
      }
    };

    fetchProduto();
    fetchLances();
  }, [id, showAllLances]);

  const handleEditarLeilao = (produtoId) => {
    console.log("ID do produto selecionado:", produtoId);
    navigation.navigate("EditarLeilao", { id: produtoId });
  };

  const handleShowAllLances = async () => {
    setShowAllLances(true);
  };

  const handlePublicarLeilao = async () => {
    console.log("Clicou em publicar");
    // Mudar o status do leilão para "publicado"
    setLeilao((prevLeilao) => ({
      ...prevLeilao,
      statusLeilao: "publicado",
    }));

    try {
      // Atualizar o status do leilão no servidor
      await fetch(`http://localhost:3000/leilao/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ statusLeilao: "publicado" }),
      });
      Alert.alert("Sucesso", "Leilão publicado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar o status do leilão:", error);
      Alert.alert(
        "Erro",
        "Erro ao publicar o leilão. Por favor, tente novamente mais tarde."
      );
    }
  };

  const handleAtualizarDataFim = () => {
    // Calcular a nova data fim
    const { DuracaoDias, DuracaoHoras, DuracaoMinutos } = leilao;
    const newDataFim = new Date();
    newDataFim.setDate(newDataFim.getDate() + DuracaoDias);
    newDataFim.setHours(newDataFim.getHours() + DuracaoHoras);
    newDataFim.setMinutes(newDataFim.getMinutes() + DuracaoMinutos);

    // Atualizar a data fim no estado do leilão
    setLeilao((prevLeilao) => ({
      ...prevLeilao,
      dataFim: newDataFim,
    }));
  };

  return (
    <ScrollView style={MeusLeiloesDetalhesStyles.scrollContent}>

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
            <Text style={MeusLeiloesDetalhesStyles.status}>
              Status: {leilao.statusLeilao}
            </Text>
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

      {leilao && leilao.statusLeilao !== "cadastrado" && (
        <View
          style={[
            MeusLeiloesDetalhesStyles.box,
            MeusLeiloesDetalhesStyles.lancesContainer,
          ]}
        >
          <Text style={MeusLeiloesDetalhesStyles.title}>
            {showAllLances ? "Todos os Lances" : "Últimos 5 Lances"}
          </Text>
          {lances.length > 0 ? (
            lances.map((lance, index) => (
              <View key={index} style={MeusLeiloesDetalhesStyles.lanceRow}>
                <Text style={MeusLeiloesDetalhesStyles.lanceUser}>
                  {lance.usuarioNome || "Usuário desconhecido"}
                </Text>
                <Text style={MeusLeiloesDetalhesStyles.lanceValue}>
                  {`R$ ${lance.valorLance}`}
                </Text>
              </View>
            ))
          ) : (
            <Text style={MeusLeiloesDetalhesStyles.boxContent}>
              Nenhum lance encontrado.
            </Text>
          )}
          {!showAllLances && (
            <View style={MeusLeiloesDetalhesStyles.linkContainer}>
              <Text
                style={[
                  MeusLeiloesDetalhesStyles.link,
                  { color: "blue", textDecorationLine: "underline" },
                ]}
                onPress={handleShowAllLances}
              >
                Exibir todos os lances
              </Text>
            </View>
          )}
        </View>
      )}

      <View style={MeusLeiloesDetalhesStyles.buttonContainer}>
        <Button
          icon="check"
          mode="contained"
          style={
            leilao && leilao.statusLeilao === "cadastrado"
              ? MeusLeiloesDetalhesStyles.publicButton
              : MeusLeiloesDetalhesStyles.inactiveButton
          }
          onPress={async () => {
            await handlePublicarLeilao();
            handleAtualizarDataFim();
          }}
          color="#666cff"
          disabled={!(leilao && leilao.statusLeilao === "cadastrado")}
        >
          Publicar
        </Button>
      </View>
    </View>
    <View style={MeusLeiloesDetalhesStyles.footerPlaceholder}/>
    <Footer/>
   </ScrollView>
   
  );
};

export default MeusLeiloesDetalhes;
