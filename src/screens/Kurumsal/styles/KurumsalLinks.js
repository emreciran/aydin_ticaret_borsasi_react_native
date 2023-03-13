import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  group: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    marginBottom: 12,
  },
  text: {
    fontWeight: 700,
    fontSize: 16,
  }
});

export default styles;
