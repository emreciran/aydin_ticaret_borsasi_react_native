import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/SocialLinks";
import * as WebBrowser from "expo-web-browser"

const SocialLinks = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={async () => WebBrowser.openBrowserAsync("https://tr-tr.facebook.com/")}>
        <Ionicons name="logo-facebook" size={30} color="#4267B2" />
      </TouchableOpacity>
      <TouchableOpacity onPress={async () => WebBrowser.openBrowserAsync("https://twitter.com/")}>
        <Ionicons name="logo-twitter" size={30} color="#1DA1F2" />
      </TouchableOpacity>
      <TouchableOpacity onPress={async () => WebBrowser.openBrowserAsync("https://www.instagram.com/")}>
        <Ionicons name="logo-instagram" size={30} color="#C13584" />
      </TouchableOpacity>
    </View>
  );
};

export default SocialLinks;
