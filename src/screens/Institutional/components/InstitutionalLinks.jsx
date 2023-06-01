import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "../styles/InstitutionalLinks";
import { useTranslation } from "react-i18next";

const InstitutionalLinks = () => {
  const { t } = useTranslation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 12 }}>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.text}>{t("institutional.Başkanın Mesajı")}</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.text}>{t("institutional.Tarihçe")}</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.text}>{t("institutional.Kalite Politikası")}</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.text}>{t("institutional.Dergi")}</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.text}>{t("institutional.Meclis")}</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.text}>{t("institutional.Yönetim Kurulu")}</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.text}>{t("institutional.Disiplin Kurulu")}</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9"></FontAwesome>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default InstitutionalLinks;
