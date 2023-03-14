import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    flexWrap: "wrap",
    borderTopColor: "#111",
    borderBottomColor: "#111",
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  circle: {
    borderRadius: 21,
    width: 45,
    height: 45,
    backgroundColor: "#2F58CD",
    alignItems: "center",
    justifyContent: "center",
  },
  group: {
    alignItems: "center",
  },
});

export default styles;
