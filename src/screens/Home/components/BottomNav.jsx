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
        <TouchableOpacity
          style={styles.circle}
          onPress={() => navigation.navigate("Kurumsal")}
        >
          <MaterialIcons name="work-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text>Kurumsal</Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.circle}>
          <Ionicons name="megaphone-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text>Duyuru</Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.circle}>
          <Ionicons name="earth-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text>Haber</Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.circle}>
          <Ionicons name="newspaper-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text>Bülten</Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.circle}>
          <Ionicons name="card-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text>Aidat/Üye</Text>
      </View>
      <View style={{flexDirection: "row", gap: 18}}>
        <View style={styles.group}>
          <TouchableOpacity style={styles.circle}>
            <FontAwesome name="exchange" size={28} color="#fff" />
          </TouchableOpacity>
          <Text>Piyasa</Text>
        </View>
        <View style={styles.group}>
          <TouchableOpacity style={styles.circle}>
            <Ionicons name="calendar-outline" size={28} color="#fff" />
          </TouchableOpacity>
          <Text>Etkinlik</Text>
          <Text>Takvimi</Text>
        </View>
        <View style={styles.group}>
          <TouchableOpacity style={styles.circle}>
            <FontAwesome name="pencil-square" size={26} color="#fff" />
          </TouchableOpacity>
          <Text>Talep</Text>
          <Text>Öneri</Text>
        </View>
        <View style={styles.group}>
          <TouchableOpacity style={styles.circle}>
            <Ionicons name="call-outline" size={28} color="#fff" />
          </TouchableOpacity>
          <Text>İletişim</Text>
        </View>
        <View style={styles.group}>
          <TouchableOpacity style={styles.circle}>
            <Ionicons name="settings-outline" size={28} color="#fff" />
          </TouchableOpacity>
          <Text>Ayarlar</Text>
        </View>
      </View>
    </View>
  );
};

export default BottomNav;
