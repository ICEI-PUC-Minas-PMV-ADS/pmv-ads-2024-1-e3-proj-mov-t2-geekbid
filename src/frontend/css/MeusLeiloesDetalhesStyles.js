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
    fontSize: 20,
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
  box: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    height: 60,
  },
  boxTitle: {
    marginTop:2,
    paddingBottom: 5,
    fontSize: 11,
    color: "#6f6f6f",
  },
  boxContent: {
    height: 30,
    marginTop: 5,
    fontSize: 16,
    color: "#000000",
  },
    backButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#666cff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 5,
  },
});

export default MeusLeiloesDetalhesStyles;
