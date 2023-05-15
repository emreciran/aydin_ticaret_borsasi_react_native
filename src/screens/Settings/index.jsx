import { View, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import SettingsItem from "./components/SettingsItem";
import styles from "./styles/SettingsItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = () => {
  // const [settings, setSettings] = useState({
  //   pamuk: {
  //     status: async () => {
  //       const a = await AsyncStorage.getItem("pamuk");
  //       return a !== null ? JSON.parse(a) : false;
  //     },
  //   },
  //   ceksiz_kuru_uzum: {
  //     status: async () => {
  //       const a = await AsyncStorage.getItem("ceksiz_kuru_uzum");
  //       return a !== null ? JSON.parse(a) : false;
  //     },
  //   },
  //   tescil_bulten: {
  //     status: false,
  //   },
  //   aylik_finans_emtia: {
  //     status: false,
  //   },
  //   duyuru: {
  //     status: false,
  //   },
  //   haber: {
  //     status: false,
  //   },
  //   etkinlik_takvimi: {
  //     status: false,
  //   },
  //   dergi: false,
  // });

  const getValues = async (name) => {
    const jsonValue = await AsyncStorage.getItem(name);
    const a = jsonValue != null ? JSON.parse(jsonValue) : false;
    setSettings({ ...settings, [name]: a });
  };

  useEffect(() => {
    getValues("pamuk");
    getValues("ceksiz_kuru_uzum");
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[{ textAlign: "center" }, styles.text]}>
          Bildirilmesini istediğiniz konuları seçiniz.
        </Text>
      </View>
      <SettingsItem  />
    </ScrollView>
  );
};

export default Settings;
