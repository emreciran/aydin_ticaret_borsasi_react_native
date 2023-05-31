import { View, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import SettingsItem from "./components/SettingsItem";
import styles from "./styles/SettingsItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dropdown } from "react-native-element-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/slices/settingsSlice";

const data = [
  { label: "Türkçe", value: "tr" },
  { label: "English", value: "en" },
];

const Settings = () => {
  const [isFocus, setIsFocus] = useState(false);

  const dispatch = useDispatch();
  const { settings } = useSelector((state) => state.settingsSlice);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[{ textAlign: "center" }, styles.text]}>Dil seçiniz.</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "#2F58CD" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          search={false}
          value={settings.language}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setIsFocus(false);
            dispatch(setLanguage({ ...settings, language: item.value }));
          }}
        />
      </View>
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
