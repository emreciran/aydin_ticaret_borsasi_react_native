import { View, Text } from "react-native";
import React from "react";
import Maps from "./components/Maps";
import CommunicationInfo from "./components/CommunicationInfo";

const Communication = () => {
  return (
    <View>
      <CommunicationInfo />
      <Maps />
    </View>
  );
};

export default Communication;
