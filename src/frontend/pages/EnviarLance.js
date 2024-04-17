import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const EnviarLance = ({ navigation }) => {
  const [tempoRestante, setTempoRestante] = useState("");
  const [ultimoLance, setUltimoLance] = useState(0);
  const [seuLance, setSeuLance] = useState(0);
  const [novoLance, setNovoLance] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  // Dados mocados enquanto aguardamos conexão com o backend
  const tituloProduto = "Título do Produto";
  const responsavel = "Fulano";
  const imagemUrl = "https://via.placeholder.com/300";

  useEffect(() => {
    const countdown = () => {
      // Lógica para calcular tempo restante
      const dataLeilao = new Date("2024-04-21T23:59:59"); // Data de encerramento do leilão
      const agora = new Date();
      const diff = dataLeilao - agora;

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTempoRestante(`${dias} dias ${horas} horas ${minutos} minutos`);
    };

    // Simulação de busca do último lance do backend
    const fetchUltimoLance = async () => {
      // Aqui seria a lógica para buscar o último lance do backend
      // Como não temos o backend, vamos simular um valor aleatório
      const valorUltimoLance = Math.floor(Math.random() * 10000) + 1000;
      setUltimoLance(valorUltimoLance);
      setNovoLance(valorUltimoLance); // Inicializa a div do meio com o valor do último lance
    };

    fetchUltimoLance();
    countdown(); // Chama a função inicialmente

    // Atualiza o tempo restante a cada minuto
    const intervalId = setInterval(countdown, 60000); // 60000 milissegundos = 1 minuto

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []);

  // Função para aumentar o lance em 50
  const aumentarLance = () => {
    setNovoLance(novoLance + 50);
  };

  // Função para diminuir o lance em 50
  const diminuirLance = () => {
    if (novoLance >= ultimoLance + 50) {
      setNovoLance(novoLance - 50);
    } else {
      Alert.alert(
        "Atenção",
        "O lance não pode ser menor que o último lance registrado."
      );
    }
  };

  // Função para enviar o lance para o backend
  const enviarLance = () => {
    // Verifica se o lance é válido
    if (novoLance >= ultimoLance + 50) {
      openModal();
      setSeuLance(novoLance); // Atualiza o campo Seu Lance com o novo valor
    } else {
      // Alerta se o lance não for válido
      Alert.alert(
        "Atenção",
        "O lance deve ser no mínimo 50 acima do último lance registrado."
      );
    }
  };

  // Função para formatar o valor para moeda brasileira
  const formatCurrency = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  // Funnção para abrir e fechar modal
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.voltarIcone}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.titulo}>{tituloProduto}</Text>
        </View>
        <Text style={styles.responsavel}>By {responsavel}</Text>
        <Image source={{ uri: imagemUrl }} style={styles.imagem} />
        <View style={styles.infoContainer}>
          <Text style={styles.subtitulo}>Tempo Restante</Text>
          <View style={styles.infoItem}>
            <View style={styles.infoBox}>
              <Text style={styles.infoValue}>
                {tempoRestante.split(" ")[0]}
              </Text>
              <Text style={styles.infoLabel}>dias</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoValue}>
                {tempoRestante.split(" ")[2]}
              </Text>
              <Text style={styles.infoLabel}>horas</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoValue}>
                {tempoRestante.split(" ")[4]}
              </Text>
              <Text style={styles.infoLabel}>minutos</Text>
            </View>
          </View>
        </View>
        <View style={styles.infoLancesContainer}>
          <View style={styles.lanceItemLeft}>
            <Text style={styles.lanceTitulo}>Seu Lance</Text>
            <Text style={styles.lanceValor}>{formatCurrency(seuLance)}</Text>
          </View>
          <View style={styles.lanceItemRight}>
            <Text style={styles.lanceTitulo}>Último Lance</Text>
            <Text style={styles.lanceValor}>{formatCurrency(ultimoLance)}</Text>
          </View>
        </View>
        <Text style={styles.subtituloMenor}>Insira o valor do seu lance</Text>
        <View style={styles.inputLanceContainer}>
          <View style={styles.bordaLance}>
            <TouchableOpacity style={styles.botaoLance} onPress={diminuirLance}>
              <Text style={styles.botaoTexto}>-</Text>
            </TouchableOpacity>
            <View style={styles.valorInput}>
              <Text style={styles.valorUltimoLance}>
                {formatCurrency(novoLance)}
              </Text>
            </View>
            <TouchableOpacity style={styles.botaoLance} onPress={aumentarLance}>
              <Text style={styles.botaoTexto}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={enviarLance}>
          <Text style={styles.buttonText}>Envie seu lance</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          closeModal();
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Confirme seu lance!</Text>
              <Text style={styles.modalOferta}>
                Sua oferta: {formatCurrency(novoLance)}
              </Text>
              <Text style={styles.modalSubTitle}>{tituloProduto}</Text>
              <Text style={styles.modalResponsavel}>By {responsavel}</Text>
              <Text>Código do Leilão</Text>
              <Text style={styles.modalTotal}>
                Total: {formatCurrency(novoLance)}
              </Text>
              <Text style={styles.modalText}>
                Ao clicar em enviar, você confirma que comprará esse item e não poderá mais cancelar.
              </Text>
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.sendButton]}
                  onPress={() => {
                    closeModal();
                    // Adicione a lógica para enviar o lance aqui
                    Alert.alert(
                      "Lance Enviado",
                      `Seu lance de ${formatCurrency(
                        novoLance
                      )} foi enviado com sucesso!`
                    );
                    setSeuLance(novoLance);
                  }}
                >
                  <Text style={styles.modalButtonText}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.buttonCancelar]}
                  onPress={closeModal}
                >
                  <Text style={styles.buttonCancelarText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  voltarIcone: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
    marginTop: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 25,
    flex: 1,
  },
  responsavel: {
    fontSize: 12,
    marginBottom: 20,
    marginLeft: 25,
    alignSelf: "flex-start",
  },
  imagem: {
    width: "80%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoContainer: {
    width: "80%",
    marginBottom: 20,
    alignItems: "center",
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  infoBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  infoLabel: {
    fontSize: 12,
    textAlign: "center",
  },
  infoLancesContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  lanceItemLeft: {
    alignItems: "flex-start",
    padding: 10,
    width: "48%",
  },
  lanceItemRight: {
    alignItems: "flex-end",
    padding: 10,
    width: "48%",
  },
  lanceTitulo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lanceValor: {
    fontSize: 14,
    marginTop: 5,
  },
  subtituloMenor: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputLanceContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  bordaLance: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  botaoLance: {
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    paddingVertical: 10,
    borderRightWidth: 1,
    borderRightColor: "#ccc",
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: "bold",
  },
  valorInput: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderLeftWidth: 1,
    borderLeftColor: "#ccc",
    borderRightWidth: 1,
    borderRightColor: "#ccc",
  },
  valorUltimoLance: {
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#666cff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
  modalSubTitle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  modalResponsavel: {
    fontSize: 12,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  modalText: {
    fontSize: 12,
    marginBottom: 5,
    backgroundColor: "#f0f1ff",
    padding: 3,
    lineHeight: 25,
  },
  modalOferta: {
    fontSize: 16,
    marginBottom: 5,
  },
  modalTotal: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: "colum",
    marginTop: 20,
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    padding: 5,
    fontWeight: "bold",
  },
  sendButton: {
    backgroundColor: "#666cff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonCancelar: {
    borderWidth: 1,
    borderColor: "black",
    padding: 12,
    borderRadius: 0,
    marginBottom: 20,
    marginTop: 5,
  },
  buttonCancelarText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
});

export default EnviarLance;
