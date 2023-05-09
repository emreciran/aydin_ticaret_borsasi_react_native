import { View, ScrollView, Text } from "react-native";
import React from "react";
import SettingsItem from "./components/SettingsItem";
import styles from "./styles/SettingsItem";

const Settings = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[{ textAlign: "center" }, styles.text]}>
          Bildirilmesini istediğiniz konuları seçiniz.
        </Text>
      </View>
      <SettingsItem />
    </ScrollView>
  );
};

export default Settings;
