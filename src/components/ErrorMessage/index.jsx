import { View, Text } from "react-native";
import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <View>
      <Text style={{ fontSize: 13, color: "red" }}>{error}</Text>
    </View>
  );
};

export default ErrorMessage;
