import { Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./styles/DuesMember";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

const DuesMember = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 12 }}>
      <TouchableOpacity
        style={styles.group}
        onPress={() => navigation.navigate("MemberInquiry")}
      >
        <Text style={styles.text}>{t("dues_member.links.uye_sorgu")}</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.group}
        onPress={() => navigation.navigate("DuesInquiryPayment")}
      >
        <Text style={styles.text}>
          {t("dues_member.links.aidat_sorgu_odeme")}
        </Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DuesMember;
