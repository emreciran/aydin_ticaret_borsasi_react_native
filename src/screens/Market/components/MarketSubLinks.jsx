import { Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "../styles/MarketLinks";
import MarketLinksConfig from "../../../configs/MarketLinksConfig";
import { useNavigation } from "@react-navigation/native";

const MarketSubLinks = ({ route }) => {
  const { id, title } = route.params;
  const subLink = MarketLinksConfig.subLinks;

  const navigation = useNavigation();

  const returnLink = (link) => {
    return (
      <TouchableOpacity style={styles.group} key={link.id}>
        <Text style={styles.text}>{link.title}</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9" />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, []);

  const returnLinkFromId = (id) => {
    switch (id) {
      case 1:
        return subLink.pamuk_piyasasi.map((link) => returnLink(link));
      case 2:
        return subLink.kuru_uzum_piyasasi.map((link) => returnLink(link));
      case 3:
        return subLink.haftalik_piyasa_yorumlari.map((link) =>
          returnLink(link)
        );

      default:
        return null;
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 12 }}>
      {returnLinkFromId(id)}
    </ScrollView>
  );
};

export default MarketSubLinks;
