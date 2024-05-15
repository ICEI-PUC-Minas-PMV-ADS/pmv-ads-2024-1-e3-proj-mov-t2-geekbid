import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Button, Headline, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Footer from "./../navegations/Footer";
import MeusLeiloesStyles from "./../css/MeusLeiloesStyles";

const MeusLeiloes = () => {
  const navigation = useNavigation();
  const [meusLeiloes, setMeusLeiloes] = useState([]);

  useEffect(() => {
    const getLeiloes = async () => {
      try {
        const response = await fetch(`http://localhost:3000/leilao/meusleiloes`);
        const data = await response.json();
        console.log("Dados recebidos:", data);
        setMeusLeiloes(data.meusLeiloes);
      } catch (error) {
        console.error(error);
      }
    };

    getLeiloes();
  }, []);

  const handleMeusLeiloesDetalhes = (produtoId) => {
    console.log("ID do produto selecionado:", produtoId);
    navigation.navigate('MeusLeiloesDetalhes', { id: produtoId });
  };
 
  return (
    <View style={MeusLeiloesStyles.container}>
      <ScrollView style={MeusLeiloesStyles.scrollContent}>
        <View style={MeusLeiloesStyles.head}>
          <Button icon="chevron-left" onPress={() => navigation.goBack()} />
          <Headline style={MeusLeiloesStyles.textHeader}>Meus Leilões</Headline>
          <IconButton
            icon="plus-circle-outline"
            color="#666cff"
            size={45}
            onPress={() => navigation.navigate("NovoLeilao")}
            style={MeusLeiloesStyles.iconTrash}
          />
        </View>

        
        {meusLeiloes &&
          meusLeiloes.map((item, index) => (
            <View style={MeusLeiloesStyles.itemContainer} key={item.id}>
              {item.produto &&
                item.produto.urlImagemProduto && ( 
                  <Image
                    style={MeusLeiloesStyles.image}
                    source={{ uri: item.produto.urlImagemProduto }}
                  />
                )}
              <Text style={MeusLeiloesStyles.title} key={index}>
                {item.produto && item.produto.nomeProduto}
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
      </ScrollView>
      <Footer />
    </View>
  );
};

export default MeusLeiloes;
