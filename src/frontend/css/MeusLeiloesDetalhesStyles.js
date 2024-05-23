import { StyleSheet } from "react-native";

const MeusLeiloesDetalhesStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    backgroundColor: "#fff",
    paddingHorizontal:20,
  },
  scrollContent: {
    backgroundColor: "#fff",
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
    padding: 0,
  },
  textHeader: {
    fontSize: 22,
    textAlign: "left",
  },
  iconTrash: {
    marginLeft: 10,
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
  button: {
    backgroundColor: "#666cff",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  itemContainer: {
    widht: "80%",
    height: "auto",
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
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
    padding: 20,
  },
  footerPlaceholder: {
    height: 160,
  },

  
});

export default MeusLeiloesDetalhesStyles;
