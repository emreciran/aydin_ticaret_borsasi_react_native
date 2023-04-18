import { ImageBackground } from "react-native";
import React from "react";
import Logo from "../../../assets/logo-atb.png";
import NewslettersLinks from "./components/NewslettersLinks";

const Newsletters = () => {
  return (
    <ImageBackground
      source={Logo}
      imageStyle={{ opacity: 0.5 }}
      resizeMode="contain"
      style={{ flex: 1 }}
    >
      <NewslettersLinks />
    </ImageBackground>
  );
};

export default Newsletters;
