import { StyleSheet } from "react-native";

const MeusLeiloesDetalhesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    flexGrow: 1,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: "#fff",
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
    marginBottom: 10,
  },
  box: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    padding: 10,
  },
  boxTitle: {
    marginTop: 2,
    paddingBottom: 5,
    fontSize: 11,
    color: "#6f6f6f",
  },
  boxContent: {
    fontSize: 16,
    color: "#000000",
  },
  publicButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#666cff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 5,
  },
  inactiveButton: {
    color: "#808080",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#cccccc",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 5,
  },
  status: {
    marginBottom: 20,
    fontSize: 12,
    color: "#808080",
  },
  lanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  lanceUser: {
    fontSize: 16,
    color: "#000",
  },
  lanceValue: {
    fontSize: 16,
    color: "#000",
  },
  lancesContainer: {
    marginBottom: 30,  
  },
  linkContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  link: {
    color: "#666cff",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    marginBottom: 80, 
  },
  footerPlaceholder: {
    height: 100,
  },
  
});

export default MeusLeiloesDetalhesStyles;
