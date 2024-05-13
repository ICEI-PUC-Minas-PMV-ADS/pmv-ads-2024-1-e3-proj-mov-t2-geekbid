import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button, Headline, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Footer from "./../navegations/Footer";
import MeusLeiloesStyles from "./../css/MeusLeiloesStyles";

const MeusLeiloes = () => {
  const navigation = useNavigation();
  const [leiloes, setLeiloes] = useState([]);
  console.log("Estado inicial de leiloes:", leiloes);

  useEffect(() => {
    // Função para buscar os leilões no backend
    const fetchLeiloes = async () => {
      try {
        const response = await fetch("http://192.168.1.106:3000/leilao");
        if (response.ok) {
          const data = await response.json();
          console.log("Dados recebidos:", data);
          setLeiloes(data);
        } else {
          throw new Error(
            "Erro ao buscar leilões - status: " + response.status
          );
        }
      } catch (error) {
        console.error("Erro ao buscar leilões:", error.message);
        Alert.alert(
          "Erro",
          "Erro ao buscar os leilões. Por favor, tente novamente."
        );
      }
    };

    fetchLeiloes(); // Chame a função fetchLeiloes aqui para que seja executada assim que o componente for montado
  }, []); // Adicione um array vazio como segundo parâmetro para que o useEffect só seja acionado uma vez, quando o componente for montado

  // const [leiloesHome, setLeiloesHome] = useState([]);

  // const getLeiloes = () => {
  //   fetch(`http://localhost:3000/leilao/home`)
  //   .then(res => res.json())
  //   .then(data => setLeiloesHome(data.leiloesHome))
  //   .catch(error => console.error(error))
  // }

  // useEffect(() => {
  //   getLeiloes();
  // }, []);

  // console.log("Leilões: ", leiloesHome);

  const handleExcluirLeilao = async (idLeilao) => {
    try {
      // Envia uma requisição DELETE para excluir o leilão
      const response = await fetch(
        `http://192.168.1.106:3000/leilao/${idLeilao}`,
        {
          method: "DELETE",
        }
      );

      // Verifica se a requisição foi bem-sucedida
      if (response.ok) {
        // Atualiza a lista de leilões após excluir
        const updatedLeiloes = leiloes.filter(
          (leilao) => leilao.id !== idLeilao
        );
        console.log("Leilões atualizados após exclusão:", updatedLeiloes);
        setLeiloes(updatedLeiloes);
        Alert.alert("Sucesso", "Leilão excluído com sucesso!");
      } else {
        throw new Error("Erro ao excluir o leilão");
      }
    } catch (error) {
      console.error("Erro ao excluir o leilão:", error.message);
      Alert.alert(
        "Erro",
        "Erro ao excluir o leilão. Por favor, tente novamente."
      );
    }
  };

  return (
    <View style={MeusLeiloesStyles.container}>
      <ScrollView style={MeusLeiloesStyles.scrollContent}>
        <View style={MeusLeiloesStyles.head}>
          <Button
            icon="chevron-left"
            onPress={() => navigation.goBack()}
          ></Button>
          <Headline style={MeusLeiloesStyles.textHeader}>Meus Leilões</Headline>
          <IconButton
            icon="plus-circle-outline"
            color="#666cff"
            size={50}
            onPress={() => navigation.navigate("NovoLeilao")}
            style={MeusLeiloesStyles.iconTrash}
          />
        </View>

        <View style={MeusLeiloesStyles.row}>
          {leiloes && console.log("Leilões definidos")}
          {Array.isArray(leiloes) &&
            leiloes.map((leilao) => (
              <TouchableOpacity
                key={leilao.id}
                onPress={() =>
                  navigation.navigate("MeusLeiloesDetalhes", {
                    idLeilao: leilao.id,
                  })
                }
              >
                <View style={MeusLeiloesStyles.itemContainer}>
                  <Image
                    style={MeusLeiloesStyles.image}
                    source={{ uri: leilao.imagem }}
                  />
                  <Text style={MeusLeiloesStyles.title}>{leilao.nome}</Text>
                  <View style={MeusLeiloesStyles.infoContainer}>
                    <Text style={MeusLeiloesStyles.creator}>
                      Criado por: {leilao.criador}
                    </Text>
                    <Text style={MeusLeiloesStyles.price}>
                      Valor do Lance: R$ {leilao.valorLance}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleExcluirLeilao(leilao.id)}
                  >
                    <Image
                      source={require("./../assets/lixeira.png")}
                      style={MeusLeiloesStyles.trashIcon}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default MeusLeiloes;
