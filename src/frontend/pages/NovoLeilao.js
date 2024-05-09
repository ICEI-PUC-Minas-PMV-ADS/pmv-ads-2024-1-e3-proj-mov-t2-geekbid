import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { Button, Headline } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import MeusLeiloes from "./MeusLeiloes";
import Footer from "./../navegations/Footer";
import novoLeilaoStyles from "./../css/NovoLeilaoStyles";

const NovoLeilao = () => {
  const navigation = useNavigation();

  const [nomeProduto, setNomeProduto] = useState("");
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [categoriaProduto, setCategoriaProduto] = useState("");
  const [precoInicial, setPrecoInicial] = useState("");
  const [duracaoDias, setDuracaoDias] = useState("");
  const [duracaoHoras, setDuracaoHoras] = useState("");
  const [duracaoMinutos, setDuracaoMinutos] = useState("");
  const [urlImagemProduto, setUrlImagemProduto] = useState(null);
  const [mensagemSalvo, setMensagemSalvo] = useState("");

  // Estado para armazenar o preço atual do leilão
  const [precoAtual, setPrecoAtual] = useState(precoInicial || 0);

  const handleSalvarAlteracoesPress = async () => {
    try {
      // Obter a data e hora atuais
      const dataInicioFim = new Date();

      const novoLeilao = {
        nomeProduto,
        descricaoProduto,
        categoriaProduto,
        precoInicial,
        duracao: `${duracaoDias} dias ${duracaoHoras} horas ${duracaoMinutos} minutos`,
        urlImagemProduto,
        dataInicio: dataInicioFim,
        dataFim: dataInicioFim,
        precoAtual, 
      };
      console.log("Dados do novo leilão:", novoLeilao);

      // Enviar os dados para o backend usando Fetch
      const response = await fetch("http://localhost:3000/leilao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoLeilao),
      });
      console.log("Resposta da requisição:", response);

      if (response.ok) {
        setMensagemSalvo("Leilão salvo com sucesso!");
        setTimeout(() => {
          navigation.navigate('MeusLeiloes');
        }, 2000); // 2 segundos
      
      } else {
        throw new Error("Erro ao salvar o leilão");
      }
    } catch (error) {
      console.error("Erro ao salvar o leilão:", error);
    }
  };

  // const handlePublicarPress = async (leilaoId) => {
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
  // };

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

      {/* <TouchableOpacity
        style={novoLeilaoStyles.uploadButton}
        onPress={handleUploadImagem}
      >
        {urlImagemProduto ? (
          <Image
            source={{ uri: urlImagemProduto }}
            style={novoLeilaoStyles.imagemPreview}
          />
        ) : (
          <View style={novoLeilaoStyles.imagemContainer}>
            <Image
              source={require("./../assets/cloud-computing.png")}
              style={novoLeilaoStyles.imagemPreview}
            />
            <Text style={novoLeilaoStyles.uploadButtonText}>Upload Imagem</Text>
          </View>
        )}
      </TouchableOpacity> */}

            {/* Renderização da imagem */}
            <TouchableOpacity style={novoLeilaoStyles.uploadButton}>
        {urlImagemProduto ? (
          <Image
            source={{ uri: urlImagemProduto }}
            style={novoLeilaoStyles.imagemPreview}
          />
        ) : (
          <View style={novoLeilaoStyles.imagemContainer}>
            <Image
              source={require("./../assets/cloud-computing.png")}
              style={novoLeilaoStyles.imagemPreview}
            />
            <Text style={novoLeilaoStyles.uploadButtonText}>Carregar Imagem</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Campo de entrada para a URL da imagem */}
      <TextInput
        placeholder="URL da Imagem"
        value={urlImagemProduto}
        onChangeText={(text) => setUrlImagemProduto(text)}
        style={novoLeilaoStyles.input}
      />

      <TextInput
        placeholder="Nome do Produto"
        value={nomeProduto}
        onChangeText={(text) => setNomeProduto(text)}
        style={novoLeilaoStyles.input}
      />

      <TextInput
        placeholder="Descrição do Produto"
        value={descricaoProduto}
        onChangeText={(text) => setDescricaoProduto(text)}
        style={novoLeilaoStyles.inputDescription}
      />

      <TextInput
        placeholder="Categoria"
        value={categoria}
        onChangeText={(text) => setCategoria(text)}
        style={novoLeilaoStyles.input}
      />

      <TextInput
        placeholder="Preço Inicial"
        value={precoInicial}
        onChangeText={(text) => {
          setPrecoInicial(text);
          setPrecoAtual(text); // Atualizando o preço atual quando o preço inicial muda
        }}
        style={novoLeilaoStyles.input}
      />

      <View style={novoLeilaoStyles.duracaoContainer}>
        <Text style={novoLeilaoStyles.duracaoLabel}>Duração:</Text>
        <View style={novoLeilaoStyles.duracaoInputContainer}>
          <TextInput
            placeholder="dias"
            value={duracaoDias}
            onChangeText={(text) => setDuracaoDias(text)}
            style={novoLeilaoStyles.duracaoInput}
          />
          <TextInput
            placeholder="horas"
            value={duracaoHoras}
            onChangeText={(text) => setDuracaoHoras(text)}
            style={novoLeilaoStyles.duracaoInput}
          />
          <TextInput
            placeholder="minutos"
            value={duracaoMinutos}
            onChangeText={(text) => setDuracaoMinutos(text)}
            style={novoLeilaoStyles.duracaoInput}
          />
        </View>
      </View>

      <TouchableOpacity
        style={novoLeilaoStyles.button}
        onPress={handleSalvarAlteracoesPress}
      >
        <Text style={novoLeilaoStyles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>

      {mensagemSalvo ? <Text>{mensagemSalvo}</Text> : null}
      {/* <TouchableOpacity
        style={novoLeilaoStyles.buttonPublicar}
        onPress={() => handlePublicarPress(leilaoId)}
      >
        <Text style={novoLeilaoStyles.buttonText}>Publicar</Text>
      </TouchableOpacity> */}

      <View style={novoLeilaoStyles.container}>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default NovoLeilao;
