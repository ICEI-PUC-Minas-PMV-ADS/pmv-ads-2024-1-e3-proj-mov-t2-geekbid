import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { BottomNavigation, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ImagePicker from "react-native-image-picker";

import Perfil from "./Perfil";
import Notificacao from "./Notificacao";
import Home from "./Home";

const NovoLeilao = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [lanceMinimo, setLanceMinimo] = useState("");
  const [duracao, setDuracao] = useState("");
  const [imagem, setImagem] = useState(null);
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "Home", title: "" },
    { key: "Notificacao", title: "" },
    { key: "Perfil", title: "" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "Home":
        return <Home />;
      case "Notificacao":
        return <Notificacao />;
      case "Perfil":
        return <Perfil />;
      default:
        return null;
    }
  };

  const renderIcon = (key, icon, color, size) => {
    const isSelected = index === key;
    return (
      <IconButton
        key={key}
        icon={icon}
        color={isSelected ? "#ffffff" : color}
        size={size}
        style={[
          styles.iconButton,
          {
            backgroundColor: isSelected ? "#666cff" : "transparent",
          },
        ]}
        onPress={() => setIndex(key)}
      />
    );
  };

  const handleNovoLeilaoPress = () => {
    console.log(
      "Salvando novo leilão:",
      nome,
      descricao,
      categoria,
      lanceMinimo,
      duracao,
      imagem
    );
  };

  const handleUploadImagem = () => {
    ImagePicker.showImagePicker(
      { title: "Selecione uma imagem" },
      (response) => {
        if (response.didCancel) {
          console.log("Usuário cancelou o upload da imagem");
        } else if (response.error) {
          console.log("Erro ao selecionar imagem:", response.error);
        } else {
          setImagem(response.uri);
        }
      }
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Novo Leilão</Text>
        <TouchableOpacity
          onPress={console.log("chamar a handler excluir leilão")}
        >
          <Image
            source={require("./../assets/lixeira.png")}
            style={styles.trashIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={handleUploadImagem}
      >
        {imagem ? (
          <Image source={{ uri: imagem }} style={styles.imagemPreview} />
        ) : (
          <View style={styles.imagemContainer}>
            <Image
              source={require("./../assets/cloud-computing.png")}
              style={styles.imagemPreview}
            />
            <Text style={styles.uploadButtonText}>Upload Imagem</Text>
          </View>
        )}
      </TouchableOpacity>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
        style={styles.inputDescription}
      />

      <TextInput
        placeholder="Categoria"
        value={categoria}
        onChangeText={(text) => setCategoria(text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Lance Mínimo"
        value={lanceMinimo}
        onChangeText={(text) => setLanceMinimo(text)}
        style={styles.input}
      />

      <View style={styles.duracaoContainer}>
        <Text style={styles.duracaoLabel}>Duração:</Text>
        <View style={styles.duracaoInputContainer}>
          <TextInput
            placeholder="dias"
            value={duracao}
            onChangeText={(text) => setDuracao(text)}
            style={styles.duracaoInput}
          />
          <TextInput
            placeholder="horas"
            value={duracao}
            onChangeText={(text) => setDuracao(text)}
            style={styles.duracaoInput}
          />
          <TextInput
            placeholder="minutos"
            value={duracao}
            onChangeText={(text) => setDuracao(text)}
            style={styles.duracaoInput}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNovoLeilaoPress}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonPublicar}
        onPress={handleNovoLeilaoPress}
      >
        <Text style={styles.buttonText}>Publicar</Text>
      </TouchableOpacity>

      <View style={styles.containerRodape}>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          activeColor="#666cff"
          inactiveColor="#000000"
          barStyle={{
            backgroundColor: "transparent",
            elevation: 0,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          shifting={false}
        />
        <View style={styles.buttonContainerRodape}>
          {renderIcon(0, "home-outline", "#000000", 28)}
        </View>
        <View style={styles.profileNotificationsContainer}>
          {renderIcon(1, "bell-outline", "#000000", 28)}
          {renderIcon(2, "account", "#000000", 28)}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 40,
  },
  backButton: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
  },
  trashIcon: {
    width: 24,
    height: 24,
  },
  uploadButton: {
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    width: "60%",
    alignSelf: "center",
  },
  uploadButtonText: {
    color: "#333",
    fontSize: 16,
    textAlign: "center",
  },
  imagemContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
  },
  imagemPreview: {
    width: "60%",
    height: "60%",
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 10,
    paddingBottom: 15,
    marginBottom: 20,
    marginTop: 0,
    fontSize: 10,
  },
  inputDescription: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 10,
    paddingBottom: 35,
    marginBottom: 20,
    marginTop: 0,
    fontSize: 10,
  },
  button: {
    backgroundColor: "#666cff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 5,
  },
  buttonPublicar: {
    backgroundColor: "#666cff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  duracaoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  duracaoLabel: {
    color: "gray",
    fontSize: 10,
    marginRight: 10,
  },
  duracaoInputContainer: {
    flexDirection: "row",
  },
  duracaoInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    textAlign: "center",
    paddingBottom: 0,
    paddingtop: 10,
    marginRight: 10,
    width: 50,
    fontSize: 8,
  },
  sceneContainer: {
    flex: 1,
  },
  containerRodape: {
    flex: 1,
    backgroundColor: "transparent",
    position: "relative",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonContainerRodape: {
    position: "absolute",
    left: 16,
    bottom: 16,
  },
  profileNotificationsContainer: {
    position: "absolute",
    right: 16,
    bottom: 16,
    flexDirection: "row",
  },
  iconButton: {
    marginHorizontal: 8,
  },
  sceneContainer: {
    flex: 1,
  },
});

export default NovoLeilao;
