import { Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../styles/NewsletterLinks";
import { useNavigation } from "@react-navigation/native";

const NewslettersLinks = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 12 }}>
      <TouchableOpacity
        style={styles.group}
        onPress={() => navigation.navigate("DailyNewsletters")}
      >
        <Text style={styles.text}>Günlük Bültenler</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.group}
        onPress={() => navigation.navigate("WeeklyNewsletters")}
      >
        <Text style={styles.text}>Haftalık Bültenler</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.group}
        onPress={() => navigation.navigate("MonthlyNewsletters")}
      >
        <Text style={styles.text}>Aylık Bültenler</Text>
        <FontAwesome name="angle-right" size={36} color="#3A98B9" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default NewslettersLinks;
