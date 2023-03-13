import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/BottomNav";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const BottomNav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate("Kurumsal")}>
          <MaterialIcons name="work-outline" size={28} color="#f0f0f0" />
        </TouchableOpacity>
        <Text>Kurumsal</Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.circle}>
          <Ionicons name="megaphone-outline" size={28} color="#f0f0f0" />
        </TouchableOpacity>
        <Text>Duyuru</Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.circle}>
          <Ionicons name="earth-outline" size={28} color="#f0f0f0" />
        </TouchableOpacity>
        <Text>Haber</Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.circle}>
          <Ionicons name="newspaper-outline" size={28} color="#f0f0f0" />
        </TouchableOpacity>
        <Text>Bülten</Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.circle}>
          <Ionicons name="card-outline" size={28} color="#f0f0f0" />
        </TouchableOpacity>
        <Text>Aidat/Üye</Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.circle}>
          <FontAwesome name="exchange" size={28} color="#f0f0f0" />
        </TouchableOpacity>
        <Text>Piyasa</Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.circle}>
          <Ionicons name="calendar-outline" size={28} color="#f0f0f0" />
        </TouchableOpacity>
        <Text>Etkinlik</Text>
        <Text>Takvimi</Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.circle}>
          <FontAwesome name="pencil-square" size={26} color="#f0f0f0" />
        </TouchableOpacity>
        <Text>Talep Öneri</Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.circle}>
          <Ionicons name="call-outline" size={28} color="#f0f0f0" />
        </TouchableOpacity>
        <Text>İletişim</Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.circle}>
          <Ionicons name="settings-outline" size={28} color="#f0f0f0" />
        </TouchableOpacity>
        <Text>Ayarlar</Text>
      </View>
    </View>
  );
};

export default BottomNav;
