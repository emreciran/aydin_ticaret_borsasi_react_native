import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import styles from "../styles/NewsletterLinks";
import { FontAwesome } from "@expo/vector-icons";
import Logo from "../../../../assets/logo-atb.png";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

const WeeklyNewsletters = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <ImageBackground
      source={Logo}
      imageStyle={{ opacity: 0.5 }}
      resizeMode="contain"
      style={{ flex: 1 }}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 12 }}>
        <TouchableOpacity
          style={styles.group}
          onPress={() =>
            navigation.navigate("TescilBulletin", {
              type: "Weekly",
            })
          }
        >
          <Text style={styles.text}>{t("bulletin.sub_links.tescil")}</Text>
          <FontAwesome name="angle-right" size={36} color="#3A98B9" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.group}>
          <Text style={styles.text}>{t("bulletin.sub_links.pamuk")}</Text>
          <FontAwesome name="angle-right" size={36} color="#3A98B9" />
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default WeeklyNewsletters;
