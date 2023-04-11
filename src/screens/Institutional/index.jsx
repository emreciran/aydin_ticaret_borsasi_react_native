import { View, Text, ImageBackground } from "react-native";
import React from "react";
import InstitutionalLinks from "./components/InstitutionalLinks";
import Logo from "../../../assets/logo-atb.png";
import Logo2 from "../../../assets/logo.png";

const Institutional = () => {
  return (
    <ImageBackground
      source={Logo}
      imageStyle={{ opacity: 0.5 }}
      resizeMode="contain"
      style={{ flex: 1 }}
    >
      <InstitutionalLinks />
    </ImageBackground>
  );
};

export default Institutional;
