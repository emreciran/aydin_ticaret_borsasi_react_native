import { Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "../styles/MarketLinks";
import MarketLinksConfig from "../../../configs/MarketLinksConfig";
import { useNavigation } from "@react-navigation/native";

const MarketMainLinks = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 12 }}>
      {MarketLinksConfig.mainLinks.map((link) => (
        <TouchableOpacity
          style={styles.group}
          key={link.id}
          onPress={() =>
            navigation.navigate("MarketSubLinks", {
              id: link.id,
              title: link.title,
            })
          }
        >
          <Text style={styles.text}>{link.title}</Text>
          <FontAwesome name="angle-right" size={36} color="#3A98B9" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default MarketMainLinks;
