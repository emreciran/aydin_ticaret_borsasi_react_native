import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/SocialLinks";

const SocialLinks = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="logo-facebook" size={30} color="#4267B2" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="logo-twitter" size={30} color="#1DA1F2" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="logo-instagram" size={30} color="#C13584" />
      </TouchableOpacity>
    </View>
  );
};

export default SocialLinks;
