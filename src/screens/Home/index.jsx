import React from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import Logo from "../../../assets/logo-atb.png";
import Logo2 from "../../../assets/logo.png";
import Time from "./components/Time";
import Slider from "./components/Slider";
import SocialLinks from "./components/SocialLinks";
import BottomNav from "./components/BottomNav";

const Home = () => {
  return (
    <ImageBackground
      source={Logo}
      resizeMode="contain"
      imageStyle={{ opacity: 0.5 }}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Time />
        <Slider />
      </ScrollView>
      <View>
        <BottomNav />
        <SocialLinks />
      </View>
    </ImageBackground>
  );
};

export default Home;
