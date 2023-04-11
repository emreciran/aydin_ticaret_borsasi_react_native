import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "../styles/AnnouncementItem";
import { useNavigation } from "@react-navigation/native";

const AnnouncementItem = ({ duyuru }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.group, { marginBottom: 20 }]}
      onPress={() => {
        navigation.navigate("AnnouncementDetails", {
          duyuru,
        });
      }}
    >
      <Text style={styles.text}>
        {duyuru.title.length > 25
          ? duyuru.title.slice(0, 25) + "..."
          : duyuru.title}
      </Text>
      <View>
        <FontAwesome
          name="angle-right"
          size={36}
          color="#3A98B9"
          style={{ alignSelf: "flex-end" }}
        />
        <Text style={{ fontSize: 13 }}>{duyuru.createdDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AnnouncementItem;
