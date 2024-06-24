import React, { useState, useEffect } from "react";
import { View, Text, Image, Alert, ScrollView } from "react-native";
import { Button, Headline, IconButton } from "react-native-paper";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import axios from 'axios';
import Footer from "./../navegations/Footer";
import MeusLeiloesDetalhesStyles from "./../css/MeusLeiloesDetalhesStyles";

const MeusLeiloesDetalhes = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const route = useRoute();
  const { id } = route.params;

  const [produto, setProduto] = useState(null);
  const [leilao, setLeilao] = useState(null);
  const [lances, setLances] = useState([]);
  const [showAllLances, setShowAllLances] = useState(false);

  const API = `http://localhost:3000/leilao/${id}`;

  const fetchProduto = async (url) => {
    try {
      const response = await axios.get(url);
      // const response = await fetch(`http://192.168.0.78:3000/leilao/${id}`);
      // const data = await response.json();
      // console.log("response: ", response);
      setLeilao(response.data?.leilao);
      setProduto(response.data?.leilao.produto);
      // setProduto(data.leilao.produto);
      // setLeilao(data.leilao);
      console.log("IN produto: ", produto);
      console.log("IN leilao: ", leilao);
    } catch (error) {
      console.error("Erro ao buscar detalhes do produto:", error);
      Alert.alert(
        "Erro",
        "Erro ao buscar detalhes do produto. Por favor, tente novamente mais tarde."
      );
    }
  };

  // console.log("data leilao: ", data.leilao);
  console.log("OUT leilao: ", leilao);

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

  console.log(lances);

  useEffect(() => {
    if (isFocused) {
      fetchProduto(API);
      fetchLances();
    }
  }, [id, showAllLances, isFocused]);

  const handleEditarLeilao = (produtoId) => {
    console.log("ID do produto selecionado:", produtoId);
    navigation.navigate("EditarLeilao", { id: produtoId });
  };

  const handleShowAllLances = async () => {
    setShowAllLances(true);
  };

  const handlePublicarLeilao = async () => {
    console.log("Clicou em publicar");
    setLeilao((prevLeilao) => ({
      ...prevLeilao,
      statusLeilao: "publicado",
    }));

    try {
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

  return (
    <View style={MeusLeiloesDetalhesStyles.container}>
      <ScrollView style={MeusLeiloesDetalhesStyles.scrollContent}>
        <View style={MeusLeiloesDetalhesStyles.containerBody}>
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
                      {lance.usuario?.nome || "Usuário desconhecido"}
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
              {!showAllLances && lances.length > 0 && (
                <Button
                  mode="contained"
                  onPress={handleShowAllLances}
                  style={MeusLeiloesDetalhesStyles.button}
                >
                  Ver Todos os Lances
                </Button>
              )}
            </View>
          )}
        </View>
        <View style={MeusLeiloesDetalhesStyles.itemContainer}>
          {leilao && leilao.statusLeilao === "cadastrado" && (
            <Button
              mode="contained"
              onPress={handlePublicarLeilao}
              style={MeusLeiloesDetalhesStyles.button}
            >
              Publicar Leilão
            </Button>
          )}
        </View>
      </ScrollView>
      <View style={{ paddingTop: 60 }}>
        <Footer />
      </View>
    </View>
  );
};

export default MeusLeiloesDetalhes;
