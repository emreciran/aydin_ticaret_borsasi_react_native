import { View, ScrollView, Text } from "react-native";
import React, { useState } from "react";
import SettingsItem from "./components/SettingsItem";
import styles from "./styles/SettingsItem";
import { Dropdown } from "react-native-element-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/slices/settingsSlice";
import { useTranslation } from "react-i18next";

const data = [
  { label: "Türkçe", value: "tr" },
  { label: "English", value: "en" },
];

const Settings = () => {
  const [isFocus, setIsFocus] = useState(false);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { settings } = useSelector((state) => state.settingsSlice);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[{ textAlign: "center" }, styles.text]}>{t("settings.language")}</Text>
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
          {t("settings.title")}
        </Text>
      </View>
      <SettingsItem />
    </ScrollView>
  );
};

export default Settings;
