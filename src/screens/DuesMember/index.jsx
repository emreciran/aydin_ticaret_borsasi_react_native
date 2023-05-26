import { Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./styles/DuesMember";
import { useNavigation } from "@react-navigation/native";

const DuesMember = () => {
    const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 12 }}>
      <TouchableOpacity
        style={styles.group}
        onPress={() =>
          navigation.navigate("MemberInquiry")
        }
      >
        <Text style={styles.text}>Üye Sorgulama</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.group}
        onPress={() =>
          navigation.navigate("DuesInquiryPayment")
        }
      >
        <Text style={styles.text}>Aidat Sorgulama ve Ödeme</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DuesMember;
