import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button, Headline, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Footer from "./../navegations/Footer";
import MeusLeiloesStyles from "./../css/MeusLeiloesStyles";

const MeusLeiloes = () => {
  const navigation = useNavigation();

  const [idLeilao, setIdLeilao] = useState("");

  const handleExcluirLeilao = async () => {
    try {
      // Verifica se o ID do leilão está vazio
      if (!idLeilao) {
        throw new Error("ID do leilão não encontrado");
      }

      // Envia uma requisição DELETE para excluir o leilão
      const response = await fetch(`http://localhost:3000/leilao/${idLeilao}`, {
        method: "DELETE",
      });

      // Verifica se a requisição foi bem-sucedida
      if (response.ok) {
        setMensagemSalvo("Leilão excluído com sucesso!");
        setTimeout(() => {
          navigation.navigate("MeusLeiloes");
        }, 2000);
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
  {
    /* <TouchableOpacity onPress={handleExcluirLeilao}>
            <Image
              source={require("./../assets/lixeira.png")}
              style={MeusLeiloesStyles.trashIcon}
            />
          </TouchableOpacity> */
  }

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
            onPress={() => navigation.navigate('NovoLeilao')}
            style={MeusLeiloesStyles.iconTrash}
          />
          {/* <IconButton
            icon="trash-can-outline"
            color="red" 
            size={30} 
            onPress={() => navigation.goBack()}
            style={MeusLeiloesStyles.iconTrash}
          /> */}
        </View>

        <View style={MeusLeiloesStyles.row}>
          <View style={MeusLeiloesStyles.itemContainer}>
            <Image
              style={MeusLeiloesStyles.image}
              source={{ uri: "asset:/src/assets/mulherMaravilha.PNG" }}
            />
            <Text style={MeusLeiloesStyles.title}>Quadro Mulher Maravilha</Text>
            <View style={MeusLeiloesStyles.infoContainer}>
              <Text style={MeusLeiloesStyles.creator}>Criado por: Cleiton</Text>
              <Text style={MeusLeiloesStyles.price}>
                Valor do Lance: R$ 100.00
              </Text>
            </View>
          </View>
          <View style={MeusLeiloesStyles.itemContainer}>
            <Image
              style={MeusLeiloesStyles.image}
              source={{ uri: "asset:/src/assets/retroGeek.png" }}
            />
            <Text style={MeusLeiloesStyles.title}>Retro Geek Montável</Text>
            <View style={MeusLeiloesStyles.infoContainer}>
              <Text style={MeusLeiloesStyles.creator}>Criado por: Pedro</Text>
              <Text style={MeusLeiloesStyles.price}>
                Valor do Lance: R$ 200.00
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* // const handlePublicarPress = async (leilaoId) => {
  //   try {
  //     // Obter a data e hora atuais
  //     const dataInicio = new Date();

  //     // Calcular a data de fim com base na duração especificada
  //     const duracaoMillis = duracaoDias * 24 * 60 * 60 * 1000 + duracaoHoras * 60 * 60 * 1000 + duracaoMinutos * 60 * 1000;
  //     const dataFim = new Date(dataInicio.getTime() + duracaoMillis);

  //     // Obtém os detalhes do leilão existente
  //     const leilaoExistente = await fetch(`http://localhost:3000/leilao/${leilaoId}`);
  //     const leilaoExistenteJSON = await leilaoExistente.json();

  //     // Cria um novo objeto com as informações atualizadas
  //     const novoLeilao = {
  //       ...leilaoExistenteJSON,
  //       nomeProduto,
  //       descricaoProduto,
  //       categoria,
  //       precoInicial,
  //       duracao: `${duracaoDias} dias ${duracaoHoras} horas ${duracaoMinutos} minutos`,
  //       urlImagemProduto,
  //       dataInicio: dataInicio.toISOString(),
  //       dataFim: dataFim.toISOString(),
  //       precoAtual,
  //     };

  //     // Atualiza as informações no backend usando Fetch
  //     const response = await fetch(`http://localhost:3000/leilao/${leilaoId}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(novoLeilao),
  //     });

  //     if (response.ok) {
  //       // Tratar o caso de sucesso aqui
  //     } else {
  //       throw new Error("Erro ao atualizar o leilão");
  //     }
  //   } catch (error) {
  //     console.error("Erro ao publicar o leilão:", error);
  //   }
  // };

  // const handleUploadImagem = () => {
  //   ImagePicker.showImagePicker(
  //     { title: "Selecione uma imagem" },
  //     (response) => {
  //       if (response.didCancel) {
  //         console.log("Usuário cancelou o upload da imagem");
  //       } else if (response.error) {
  //         console.log("Erro ao selecionar imagem:", response.error);
  //       } else {
  //         setUrlImagemProduto(response.uri);
  //       }
  //     }
  //   );
  // }; */}

      <Footer />
    </View>
  );
};

export default MeusLeiloes;
