import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  ScrollView,
  Modal,
  Alert
} from 'react-native'
import { Button, Headline, IconButton } from 'react-native-paper'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker'
import Footer from './../navegations/Footer'
import editarLeilaoStyles from './../css/EditarLeilaoStyles'
import ConfirmarExclusaoLeilao from './ConfirmarExclusaoLeilao'

const EditarLeilao = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params
  console.log('ID do leilão:', id)

  const [nomeProduto, setNomeProduto] = useState('')
  const [descricaoProduto, setDescricaoProduto] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
  const [precoInicial, setPrecoInicial] = useState('')
  const [duracaoDias, setDuracaoDias] = useState('')
  const [duracaoHoras, setDuracaoHoras] = useState('')
  const [duracaoMinutos, setDuracaoMinutos] = useState('')
  const [urlImagemProduto, setUrlImagemProduto] = useState('')
  const [mensagemSalvo, setMensagemSalvo] = useState('')
  const [precoAtual, setPrecoAtual] = useState(0)
  const [categorias, setCategorias] = useState([])
  const [mensagemURLInvalida, setMensagemURLInvalida] = useState('')
  const [exibindoConfirmacao, setExibindoConfirmacao] = useState(false)
  const [dataInicio, setDataInicio] = useState('')
  const [dataFim, setDataFim] = useState('')
  const [statusLeilao, setStatusLeilao] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/produto/categoria')
        console.log('Buscou categoria:', response)
        if (response.ok) {
          const data = await response.json()
          setCategorias(data.categorias)
          console.log('Categorias armazenadas:', data.categorias)
        } else {
          throw new Error('Erro ao buscar categorias')
        }
      } catch (error) {
        console.error('Erro ao buscar categorias:', error)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchLeilao = async () => {
      try {
        const response = await fetch(`http://localhost:3000/leilao/${id}`)
        const data = await response.json()
        console.log('Dados do leilão:', data.leilao)

        setNomeProduto(data.leilao.produto.nomeProduto)
        setDescricaoProduto(data.leilao.produto.descricaoProduto)
        setCategoriaSelecionada(data.leilao.produto.categoriaProduto)
        setPrecoInicial(data.leilao.produto.precoInicial.toString())
        setPrecoAtual(data.leilao.precoAtual)
        setUrlImagemProduto(data.leilao.produto.urlImagemProduto)

        setDuracaoDias(data.leilao.duracaoDias.toString())
        setDuracaoHoras(data.leilao.duracaoHoras.toString())
        setDuracaoMinutos(data.leilao.duracaoMinutos.toString())

        setDataInicio(data.leilao.dataInicio)
        setDataFim(data.leilao.dataFim)
        setStatusLeilao(data.leilao.statusLeilao)
      } catch (error) {
        console.error('Erro ao buscar detalhes do leilão:', error)
        Alert.alert(
          'Erro ao buscar detalhes do leilão. Por favor, tente novamente mais tarde.'
        )
      }
    }

    fetchLeilao()
  }, [id])

  const handleSalvarAlteracoesPress = async () => {
    try {
      const leilaoAtualizado = {
        nomeProduto,
        descricaoProduto,
        categoriaProduto: categoriaSelecionada,
        precoInicial: parseFloat(precoInicial),
        duracaoDias: parseInt(duracaoDias),
        duracaoHoras: parseInt(duracaoHoras),
        duracaoMinutos: parseInt(duracaoMinutos),
        urlImagemProduto,
        dataInicio,
        dataFim,
        precoAtual,
        statusLeilao
      }

      console.log('Dados do leilão atualizado:', leilaoAtualizado)

      const response = await fetch(`http://localhost:3000/leilao/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leilaoAtualizado)
      })

      console.log('Resposta da requisição:', response)

      if (response.ok) {
        setMensagemSalvo('Alterações salvas com sucesso!')
        setTimeout(() => {
          navigation.goBack()
        }, 2000)
      } else {
        throw new Error('Erro ao salvar o leilão')
      }
    } catch (error) {
      console.error('Erro ao salvar o leilão:', error)
    }
  }

  const isURLValid = text => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/
    return urlRegex.test(text)
  }

  const handleURLChange = text => {
    setUrlImagemProduto(text)
    if (!isURLValid(text)) {
      setMensagemURLInvalida('Insira uma URL válida.')
    } else {
      setMensagemURLInvalida('')
    }
  }

  // EXCLUIR VERIFICANDO LANCE VINCULADO
  // const handleExcluirLeilao = async (idLeilao) => {
  //   try {
  //     const leilaoResponse = await fetch(
  //       `http://localhost:3000/leilao/${idLeilao}`
  //     );
  //     const leilaoData = await leilaoResponse.json();
  //     const produtoId = leilaoData.leilao.produto.id;

  //     const lancesResponse = await fetch(
  //       `http://localhost:3000/lance/${idLeilao}`
  //     );
  //     const lancesData = await lancesResponse.json();

  //     if (lancesData.length > 0) {
  //       Alert.alert(
  //         "Erro",
  //         "Não é possível excluir o leilão. Existem lances vinculados a este leilão."
  //       );
  //       return;
  //     }

  //     const leilaoDeleteResponse = await fetch(
  //       `http://localhost:3000/leilao/${idLeilao}`,
  //       {
  //         method: "DELETE",
  //       }
  //     );

  //     if (leilaoDeleteResponse.ok) {
  //       const produtoDeleteResponse = await fetch(
  //         `http://localhost:3000/produto/${produtoId}`,
  //         {
  //           method: "DELETE",
  //         }
  //       );

  //       if (produtoDeleteResponse.ok) {
  //         console.log("Produto excluído com sucesso!");
  //         Alert.alert("Sucesso", "Leilão e produto excluídos com sucesso!");
  //         setModalVisible(false);
  //         navigation.navigate("MeusLeiloes");
  //       } else {
  //         throw new Error("Erro ao excluir o produto");
  //       }
  //     } else {
  //       throw new Error("Erro ao excluir o leilão");
  //     }
  //   } catch (error) {
  //     console.error("Erro ao excluir o leilão e produto:", error.message);
  //     Alert.alert(
  //       "Erro",
  //       "Erro ao excluir o leilão e produto. Por favor, tente novamente."
  //     );
  //   }
  // };

  const handleExcluirLeilao = async idLeilao => {
    try {
      // Obter os dados do leilão
      const leilaoResponse = await fetch(
        `http://localhost:3000/leilao/${idLeilao}`
      )
      const leilaoData = await leilaoResponse.json()
      const produtoId = leilaoData.leilao.produto.id

      // Excluir o leilão
      const leilaoDeleteResponse = await fetch(
        `http://localhost:3000/leilao/${idLeilao}`,
        {
          method: 'DELETE'
        }
      )

      if (leilaoDeleteResponse.ok) {
        // Excluir o produto associado ao leilão
        const produtoDeleteResponse = await fetch(
          `http://localhost:3000/produto/${produtoId}`,
          {
            method: 'DELETE'
          }
        )

        if (produtoDeleteResponse.ok) {
          console.log('Produto excluído com sucesso!')
          Alert.alert('Sucesso', 'Leilão e produto excluídos com sucesso!')
          setModalVisible(false)
          navigation.navigate('MeusLeiloes')
        } else {
          throw new Error('Erro ao excluir o produto')
        }
      } else {
        throw new Error('Erro ao excluir o leilão')
      }
    } catch (error) {
      console.error('Erro ao excluir o leilão e produto:', error.message)
      Alert.alert(
        'Erro',
        'Erro ao excluir o leilão e produto. Por favor, tente novamente.'
      )
    }
  }

  const openModal = () => {
    setModalVisible(true)
  }

  return (
    <View style={editarLeilaoStyles.container}>
      <ScrollView
        style={editarLeilaoStyles.scrollContent}
        contentContainerStyle={editarLeilaoStyles.contentContainer}
      >
        {console.log(
          'Valores dos estados:',
          nomeProduto,
          descricaoProduto,
          categoriaSelecionada,
          precoInicial,
          duracaoDias,
          duracaoHoras,
          duracaoMinutos,
          urlImagemProduto
        )}

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
            onPress={openModal}
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
                source={require('./../assets/cloud-computing.png')}
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
            onChangeText={text => setNomeProduto(text)}
            style={editarLeilaoStyles.inputText}
          />
        </View>
        <View style={editarLeilaoStyles.inputBox}>
          <Text style={editarLeilaoStyles.inputTitle}>Descrição</Text>
          <TextInput
            value={descricaoProduto}
            onChangeText={text => setDescricaoProduto(text)}
            style={editarLeilaoStyles.inputText}
          />
        </View>
        <View style={editarLeilaoStyles.inputBox}>
          <Text style={editarLeilaoStyles.inputTitle}>Categoria</Text>
          {categorias.length > 0 && (
            <Picker
              onValueChange={(itemValue, itemIndex) => {
                console.log(itemValue, itemIndex)
                setCategoriaSelecionada(itemValue)
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
            onChangeText={text => {
              setPrecoInicial(text)
              setPrecoAtual(text)
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
                onChangeText={text => setDuracaoDias(text)}
                style={editarLeilaoStyles.duracaoPlaceholder}
              />
              <Text>dias</Text>
            </View>
            <View style={editarLeilaoStyles.duracaoInput}>
              <TextInput
                placeholder="00"
                value={duracaoHoras}
                onChangeText={text => setDuracaoHoras(text)}
                style={editarLeilaoStyles.duracaoPlaceholder}
              />
              <Text>horas</Text>
            </View>
            <View style={editarLeilaoStyles.duracaoInput}>
              <TextInput
                placeholder="00"
                value={duracaoMinutos}
                onChangeText={text => setDuracaoMinutos(text)}
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
              handleSalvarAlteracoesPress()
            } else {
              alert('Insira uma URL válida antes de salvar.')
            }
          }}
        >
          <Text style={editarLeilaoStyles.buttonText}>Salvar Alterações</Text>
        </Pressable>
        {mensagemSalvo ? <Text>{mensagemSalvo}</Text> : null}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
            setModalVisible(!modalVisible)
          }}
        >
          <View style={editarLeilaoStyles.modalView}>
            <Text style={editarLeilaoStyles.confirmationText}>
              Tem certeza que deseja excluir o leilão do produto {nomeProduto}?
            </Text>
            <View style={editarLeilaoStyles.confirmationButtons}>
              <Pressable
                style={[
                  editarLeilaoStyles.buttonModal,
                  editarLeilaoStyles.buttonCancelModal
                ]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={editarLeilaoStyles.buttonTextModal}>Cancelar</Text>
              </Pressable>

              <Pressable
                style={[
                  editarLeilaoStyles.buttonModal,
                  editarLeilaoStyles.buttonDeleteModal
                ]}
                onPress={() => handleExcluirLeilao(id)}
              >
                <Text style={editarLeilaoStyles.buttonTextModal}>Excluir</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <View>
        <Footer />
      </View>
    </View>
  )
}

export default EditarLeilao
