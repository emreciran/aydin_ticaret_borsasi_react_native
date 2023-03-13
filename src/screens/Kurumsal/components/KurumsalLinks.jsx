import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "../styles/KurumsalLinks";

const KurumsalLinks = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 12 }}>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.text}>Başkanın Mesajı</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.text}>Tarihçe</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.text}>Kalite Politikası</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.text}>Dergi</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.text}>Meclis</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.text}>Yönetim Kurulu</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.text}>Disiplin Kurulu</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9"></FontAwesome>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default KurumsalLinks;
