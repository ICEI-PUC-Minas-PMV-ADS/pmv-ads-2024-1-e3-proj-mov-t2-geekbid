import { StyleSheet } from "react-native";

const MeusLeiloesDetalhesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 24,
    marginLeft: 20,
  },
  iconTrash: {
    marginLeft: "auto",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    marginTop: 20,
  },
});

export default MeusLeiloesDetalhesStyles;