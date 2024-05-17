import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { Button, Headline, IconButton } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import Footer from "./../navegations/Footer";
import editarLeilaoStyles from "./../css/EditarLeilaoStyles";
import ConfirmarExclusaoLeilao from './ConfirmarExclusaoLeilao'; 

const EditarLeilao = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  console.log("ID do produto:", id);

  const [nomeProduto, setNomeProduto] = useState("");
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [precoInicial, setPrecoInicial] = useState("");
  const [duracaoDias, setDuracaoDias] = useState("");
  const [duracaoHoras, setDuracaoHoras] = useState("");
  const [duracaoMinutos, setDuracaoMinutos] = useState("");
  const [urlImagemProduto, setUrlImagemProduto] = useState("");
  const [mensagemSalvo, setMensagemSalvo] = useState("");
  const [precoAtual, setPrecoAtual] = useState(0);
  const [categorias, setCategorias] = useState([]);
  const [mensagemURLInvalida, setMensagemURLInvalida] = useState("");
  const [exibindoConfirmacao, setExibindoConfirmacao] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/produto/categoria");
        console.log("Buscou categoria:", response);
        if (response.ok) {
          const data = await response.json();
          setCategorias(data.categorias);
          console.log("Categorias armazenadas:", data.categorias);
        } else {
          throw new Error("Erro ao buscar categorias");
        }
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(`http://192.168.1.106:3000/produto/${id}`);
        const data = await response.json();
        console.log("Dados do produto:", data.produto);
        setNomeProduto(data.produto.nomeProduto);
        setDescricaoProduto(data.produto.descricaoProduto);
        setCategoriaSelecionada(data.produto.categoriaProduto);
        setPrecoInicial(data.produto.precoInicial.toString());
        setPrecoAtual(data.produto.precoInicial);
        setUrlImagemProduto(data.produto.urlImagemProduto);
        
        // Observe a string de duração antes de tentar extrair suas partes
        const duracao = data.produto.duracao || "";
        console.log("String de duração:", duracao);
  
        const duracaoParts = duracao.match(/(\d+)\s*dias\s*(\d+)\s*horas\s*(\d+)\s*minutos/);
        console.log("Partes da duração:", duracaoParts);
        
        if (duracaoParts) {
          setDuracaoDias(duracaoParts[1]);
          setDuracaoHoras(duracaoParts[2]);
          setDuracaoMinutos(duracaoParts[3]);
        } else {
          setDuracaoDias("0");
          setDuracaoHoras("0");
          setDuracaoMinutos("0");
        }
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error);
        Alert.alert(
          "Erro ao buscar detalhes do produto. Por favor, tente novamente mais tarde."
        );
      }
    };
  
    fetchProduto();
  }, [id]);
      
  const handleSalvarAlteracoesPress = async () => {
    try {
      const dataInicioFim = new Date();

      const novoLeilao = {
        nomeProduto,
        descricaoProduto,
        categoriaProduto: categoriaSelecionada,
        precoInicial,
        duracao: `${duracaoDias} dias ${duracaoHoras} horas ${duracaoMinutos} minutos`,
        urlImagemProduto,
        dataInicio: dataInicioFim,
        dataFim: dataInicioFim,
        precoAtual,
        // usuarioId: usuario.id, Retornando undefined
      };
      console.log("Dados do novo leilão:", novoLeilao);

      const response = await fetch("http://localhost:3000/leilao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoLeilao),
      });
      console.log("Resposta da requisição:", response);

      if (response.ok) {
        setMensagemSalvo("Alterações salvas com sucesso!");
        setTimeout(() => {
          navigation.navigate("MeusLeiloesDetalhes");
        }, 2000);
      } else {
        throw new Error("Erro ao salvar o leilão");
      }
    } catch (error) {
      console.error("Erro ao salvar o leilão:", error);
    }
  };

  const isURLValid = (text) => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(text);
  };

  const handleURLChange = (text) => {
    setUrlImagemProduto(text);
    if (!isURLValid(text)) {
      setMensagemURLInvalida("Insira uma URL válida.");
    } else {
      setMensagemURLInvalida("");
    }
  };

  const handleExcluirLeilao = async (idLeilao) => {
    try {
      // Envia uma requisição DELETE para excluir o leilão
      const response = await fetch(
        `http://localhost:3000/leilao/${idLeilao}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        const updatedLeiloes = meusLeiloes.filter(
          (leilao) => leilao.id !== idLeilao
        );
        console.log("Leilões atualizados após exclusão:", updatedLeiloes);
        setMeusLeiloes(updatedLeiloes);
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

  const handleCancelarExclusao = () => {
    setExibindoConfirmacao(false);
  };

  return (
    <View style={editarLeilaoStyles.container}>
      <ScrollView
        style={editarLeilaoStyles.scrollContent}
        contentContainerStyle={editarLeilaoStyles.contentContainer}
      >
              {console.log("Valores dos estados:", nomeProduto, descricaoProduto, categoriaSelecionada, precoInicial, duracaoDias, duracaoHoras, duracaoMinutos, urlImagemProduto)}

        <View style={editarLeilaoStyles.head}>
          <Button
            icon="chevron-left"
            onPress={() => navigation.goBack()}
          ></Button>

          <Headline style={editarLeilaoStyles.textHeader}>
            Editar Leilão
          </Headline>

          <IconButton
            icon="trash-can-outline"
            color="red"
            size={30}
            onPress={() => setExibindoConfirmacao(true)} 
          />
        </View>

        <Pressable style={editarLeilaoStyles.uploadButton}>
          {urlImagemProduto ? (
            <Image
              source={{ uri: urlImagemProduto }}
              style={editarLeilaoStyles.imagemPreview}
            />
          ) : (
            <View style={editarLeilaoStyles.imagemContainer}>
              <Image
                source={require("./../assets/cloud-computing.png")}
                style={editarLeilaoStyles.imagemPreviewBase}
              />
              <Text style={editarLeilaoStyles.uploadButtonText}>
                Carregar Imagem
              </Text>
            </View>
          )}
        </Pressable>

        <View style={editarLeilaoStyles.inputBox}>
          <Text style={editarLeilaoStyles.inputTitle}>URL da Imagem</Text>
          <TextInput
            value={urlImagemProduto}
            onChangeText={handleURLChange}
            style={editarLeilaoStyles.inputText}
          />
        </View>
        <Text style={editarLeilaoStyles.errorMessage}>
          {mensagemURLInvalida}
        </Text>
        <View style={editarLeilaoStyles.inputBox}>
          <Text style={editarLeilaoStyles.inputTitle}>Nome</Text>
          <TextInput
            value={nomeProduto}
            onChangeText={(text) => setNomeProduto(text)}
            style={editarLeilaoStyles.inputText}
          />
        </View>
        <View style={editarLeilaoStyles.inputBox}>
          <Text style={editarLeilaoStyles.inputTitle}>Descrição</Text>
          <TextInput
            value={descricaoProduto}
            onChangeText={(text) => setDescricaoProduto(text)}
            style={editarLeilaoStyles.inputText}
          />
        </View>
        <View style={editarLeilaoStyles.inputBox}>
          <Text style={editarLeilaoStyles.inputTitle}>Categoria</Text>
          {categorias.length > 0 && (
            <Picker
              onValueChange={(itemValue, itemIndex) => {
                console.log(itemValue, itemIndex);
                setCategoriaSelecionada(itemValue);
              }}
              selectedValue={categoriaSelecionada}
              mode="dropdown"
              style={editarLeilaoStyles.categoria}
            >
              {categorias.map((cat, index) => (
                <Picker.Item
                  key={cat.id}
                  label={cat.categoriaProduto}
                  value={cat.categoriaProduto}
                />
              ))}
            </Picker>
          )}
        </View>
        <View style={editarLeilaoStyles.inputBox}>
          <Text style={editarLeilaoStyles.inputTitle}>Lance mínimo</Text>
          <TextInput
            value={precoInicial}
            onChangeText={(text) => {
              setPrecoInicial(text);
              setPrecoAtual(text);
            }}
            style={editarLeilaoStyles.inputText}
          />
        </View>
        <View style={editarLeilaoStyles.duracaoContainer}>
          <Text style={editarLeilaoStyles.duracaoLabel}>Duração</Text>
          <View style={editarLeilaoStyles.duracaoInputContainer}>
            <View style={editarLeilaoStyles.duracaoInput}>
              <TextInput
                placeholder="00"
                value={duracaoDias}
                onChangeText={(text) => setDuracaoDias(text)}
                style={editarLeilaoStyles.duracaoPlaceholder}
              />
              <Text>dias</Text>
            </View>
            <View style={editarLeilaoStyles.duracaoInput}>
              <TextInput
                placeholder="00"
                value={duracaoHoras}
                onChangeText={(text) => setDuracaoHoras(text)}
                style={editarLeilaoStyles.duracaoPlaceholder}
              />
              <Text>horas</Text>
            </View>
            <View style={editarLeilaoStyles.duracaoInput}>
              <TextInput
                placeholder="00"
                value={duracaoMinutos}
                onChangeText={(text) => setDuracaoMinutos(text)}
                style={editarLeilaoStyles.duracaoPlaceholder}
              />
              <Text>minutos</Text>
            </View>
          </View>
        </View>

        <Pressable
          style={editarLeilaoStyles.button}
          onPress={() => {
            if (isURLValid(urlImagemProduto)) {
              handleSalvarAlteracoesPress();
            } else {
              alert("Insira uma URL válida antes de salvar.");
            }
          }}
        >
          <Text style={editarLeilaoStyles.buttonText}>Salvar Alterações</Text>
        </Pressable>
        {mensagemSalvo ? <Text>{mensagemSalvo}</Text> : null}

        {exibindoConfirmacao && (
          <ConfirmarExclusaoLeilao
            nomeProduto={nomeProduto} 
            // usuario={nomeUsuario} 
            idLeilao={id}
            onConfirmarExclusao={handleExcluirLeilao} 
            onCancel={handleCancelarExclusao}
            
          />
        )}

      </ScrollView>
      <View>
        <Footer />
      </View>
    </View>
  );
};

export default EditarLeilao;