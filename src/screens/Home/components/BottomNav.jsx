import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/BottomNav";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { truncate } from "lodash";

const BottomNav = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => navigation.navigate("Institutional")}
        >
          <MaterialIcons name="work-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>
          {truncate(t("home.bottom_nav.kurumsal"), { length: 15 })}
        </Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => navigation.navigate("Announcement")}
        >
          <Ionicons name="megaphone-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>
          {truncate(t("home.bottom_nav.duyuru"), { length: 15 })}
        </Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => navigation.navigate("News")}
        >
          <Ionicons name="earth-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>
          {truncate(t("home.bottom_nav.haber"), { length: 15 })}
        </Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => navigation.navigate("Newsletters")}
        >
          <Ionicons name="newspaper-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>
          {truncate(t("home.bottom_nav.bulten"), { length: 15 })}
        </Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => navigation.navigate("DuesMember")}
        >
          <Ionicons name="card-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>
          {truncate(t("home.bottom_nav.aidat_uye"), { length: 15 })}
        </Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => navigation.navigate("Market")}
        >
          <FontAwesome name="exchange" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>
          {truncate(t("home.bottom_nav.piyasa"), { length: 15 })}
        </Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => navigation.navigate("EventCalendar")}
        >
          <Ionicons name="calendar-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>
          {t("home.bottom_nav.etkinlik_takvim")}
        </Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => navigation.navigate("RequestSuggestion")}
        >
          <FontAwesome name="pencil-square" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>
          {truncate(t("home.bottom_nav.talep_oneri"), { length: 15 })}
        </Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => navigation.navigate("Communication")}
        >
          <Ionicons name="call-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>
          {truncate(t("home.bottom_nav.iletisim"), { length: 15 })}
        </Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => navigation.navigate("Settings")}
        >
          <Ionicons name="settings-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>
          {truncate(t("home.bottom_nav.ayarlar"), { length: 15 })}
        </Text>
      </View>
    </View>
  );
};

export default BottomNav;
