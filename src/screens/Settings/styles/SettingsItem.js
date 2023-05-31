import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    padding: 14,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  dropdown: {
    height: 50,
    width: "60%",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#fff"
  },
  item: {
    gap: 8,
  },
  text: {
    color: "#fff",
    fontSize: 13,
  },
  title: {
    padding: 5,
  },
});

export default styles;
