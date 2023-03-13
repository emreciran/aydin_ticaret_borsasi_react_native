import { View, Text, ImageBackground } from "react-native";
import React from "react";
import KurumsalLinks from "./components/KurumsalLinks";
import Logo from "../../../assets/logo-atb.png";
import Logo2 from "../../../assets/logo.png";

const Kurumsal = () => {
  return (
    <ImageBackground
      source={Logo}
      imageStyle={{ opacity: 0.5 }}
      resizeMode="contain"
      style={{ flex: 1 }}
    >
      <KurumsalLinks />
    </ImageBackground>
  );
};

export default Kurumsal;
