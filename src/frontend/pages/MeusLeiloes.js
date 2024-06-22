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
import { useNavigation, useIsFocused } from "@react-navigation/native";
import Footer from "./../navegations/Footer";
import MeusLeiloesStyles from "./../css/MeusLeiloesStyles";
import { useAuth } from "../services/auth.services";

const MeusLeiloes = () => {
  const navigation = useNavigation();
  const [meusLeiloes, setMeusLeiloes] = useState([]);
  const { usuario } = useAuth();
  const usuarioId = usuario.id;
  const isFocused = useIsFocused();

  useEffect(() => {
    const getLeiloes = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/leilao/meusleiloes?usuarioId=${usuarioId}`
        );
        const data = await response.json();
        console.log("Dados recebidos:", data);
        setMeusLeiloes(data.meusLeiloes);
      } catch (error) {
        console.error(error);
      }
    };

    if (isFocused) {
      getLeiloes();
    }
  }, [isFocused]);

  const handleMeusLeiloesDetalhes = (produtoId) => {
    console.log("ID do produto selecionado:", produtoId);
    navigation.navigate("MeusLeiloesDetalhes", { id: produtoId });
  };

  return (
    <View style={MeusLeiloesStyles.container}>
      <ScrollView>
        <View style={MeusLeiloesStyles.head}>
         
          <Headline style={MeusLeiloesStyles.textHeader}>Meus Leilões</Headline>
          <IconButton
            icon="plus-circle-outline"
            color="#666cff"
            size={45}
            onPress={() => navigation.navigate("NovoLeilao")}
          />
        </View>

        {meusLeiloes &&
          meusLeiloes.map((item, index) => (
            <View
              style={[
                MeusLeiloesStyles.itemContainer,
                index === meusLeiloes.length - 1 && MeusLeiloesStyles.lastItem,
              ]}
              key={item.id}
            >
              {item.produto && item.produto.urlImagemProduto && (
                <Image
                  style={MeusLeiloesStyles.image}
                  source={{ uri: item.produto.urlImagemProduto }}
                />
              )}
              <Text style={MeusLeiloesStyles.title} key={index}>
                {item.produto && item.produto.nomeProduto} - Cód.:{" "}
                {item.produto && item.produto.id}
              </Text>
              <View style={MeusLeiloesStyles.infoContainer}>
                <Text style={MeusLeiloesStyles.creator}>
                  {item.usuario && `Criado por: ${item.usuario.nome}`}
                </Text>
                <Text style={MeusLeiloesStyles.price}>
                  Lance inicial R$: {item.produto.precoInicial}
                </Text>
                <Text style={MeusLeiloesStyles.price}>
                  Status: {item.statusLeilao}
                </Text>
              </View>
              <TouchableOpacity
                style={MeusLeiloesStyles.button}
                onPress={() => handleMeusLeiloesDetalhes(item.id)}
              >
                <Text style={MeusLeiloesStyles.buttonText}>Ver detalhes</Text>
              </TouchableOpacity>
            </View>
          ))}
        <View style={MeusLeiloesStyles.footerPlaceholder} />
      </ScrollView>
      <View>
        <Footer />
      </View>
    </View>
  );
};

export default MeusLeiloes;
