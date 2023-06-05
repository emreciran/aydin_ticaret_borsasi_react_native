import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import settingsConfig from "../../../configs/settingsConfig";
import styles from "../styles/SettingsItem";
import { Switch } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setSettings } from "../../../store/slices/settingsSlice";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SettingsItem = () => {
  const dispatch = useDispatch();
  const { settings } = useSelector((state) => state.settingsSlice);
  const { t } = useTranslation();

  const settingsTitle = settingsConfig();

  // const getData = async (key) => {
  //   try {
  //     const data = await AsyncStorage.getItem(key);
  //     if (data !== null) {
  //       return data;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleChange = () => {
  //   dispatch(setSettings);
  // };

  const storeData = async (name, value) => {
    try {
      await AsyncStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View>
        {settingsTitle.pamuk && (
          <View>
            <Text style={styles.title}>{t("settings.pamuk.title")}</Text>
            <View style={styles.container}>
              <View style={styles.item}>
                {settingsTitle.pamuk.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    {item.name}
                  </Text>
                ))}
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.pamuk}
                  onValueChange={() => {
                    dispatch(
                      setSettings({ ...settings, pamuk: !settings.pamuk })
                    );
                    storeData("pamuk", !settings.pamuk);
                  }}
                  color="#0BDA51"
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <View>
        {settingsTitle.ceksiz_kuru_uzum && (
          <View>
            <Text style={styles.title}>
              {t("settings.ceksiz_kuru_uzum.title")}
            </Text>
            <View style={styles.container}>
              <View style={styles.item}>
                <View style={styles.item}>
                  {settingsTitle.ceksiz_kuru_uzum.map((item) => (
                    <Text key={item.id} style={styles.text}>
                      {item.name}
                    </Text>
                  ))}
                </View>
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.ceksiz_kuru_uzum}
                  onValueChange={async () => {
                    dispatch(
                      setSettings({
                        ...settings,
                        ceksiz_kuru_uzum: !settings.ceksiz_kuru_uzum,
                      })
                    );
                  }}
                  color="#0BDA51"
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <View>
        {settingsTitle.tescil_bulten && (
          <View>
            <Text style={styles.title}>
              {t("settings.tescil_bulten.title")}
            </Text>
            <View style={styles.container}>
              <View style={styles.item}>
                {settingsTitle.tescil_bulten.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    {item.name}
                  </Text>
                ))}
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.tescil_bulten}
                  onValueChange={() => {
                    dispatch(
                      setSettings({
                        ...settings,
                        tescil_bulten: !settings.tescil_bulten,
                      })
                    );
                  }}
                  color="#0BDA51"
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <View>
        {settingsTitle.aylik_finans_emtia && (
          <View>
            <Text style={styles.title}>
              {t("settings.aylik_finans_emtia.title")}
            </Text>
            <View style={styles.container}>
              <View style={styles.item}>
                {settingsTitle.aylik_finans_emtia.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    {item.name}
                  </Text>
                ))}
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.aylik_finans_emtia}
                  onValueChange={() => {
                    dispatch(
                      setSettings({
                        ...settings,
                        aylik_finans_emtia: !settings.aylik_finans_emtia,
                      })
                    );
                  }}
                  color="#0BDA51"
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <View>
        {settingsTitle.duyuru && (
          <View>
            <Text style={styles.title}>{t("settings.duyuru.title")}</Text>
            <View style={styles.container}>
              <View style={styles.item}>
                {settingsTitle.duyuru.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    {item.name}
                  </Text>
                ))}
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.duyuru}
                  onValueChange={() => {
                    dispatch(
                      setSettings({ ...settings, duyuru: !settings.duyuru })
                    );
                  }}
                  color="#0BDA51"
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <View>
        {settingsTitle.haber && (
          <View>
            <Text style={styles.title}>{t("settings.haber.title")}</Text>
            <View style={styles.container}>
              <View style={styles.item}>
                {settingsTitle.haber.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    {item.name}
                  </Text>
                ))}
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.haber}
                  onValueChange={() => {
                    dispatch(
                      setSettings({ ...settings, haber: !settings.haber })
                    );
                  }}
                  color="#0BDA51"
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <View>
        {settingsTitle.etkinlik_takvimi && (
          <View>
            <Text style={styles.title}>
              {t("settings.etkinlik_takvimi.title")}
            </Text>
            <View style={styles.container}>
              <View style={styles.item}>
                {settingsTitle.etkinlik_takvimi.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    {item.name}
                  </Text>
                ))}
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.etkinlik_takvimi}
                  onValueChange={() => {
                    dispatch(
                      setSettings({
                        ...settings,
                        etkinlik_takvimi: !settings.etkinlik_takvimi,
                      })
                    );
                  }}
                  color="#0BDA51"
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <View>
        {settingsTitle.dergi && (
          <View>
            <Text style={styles.title}>{t("settings.dergi.title")}</Text>
            <View style={styles.container}>
              <View style={styles.item}>
                {settingsTitle.dergi.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    {item.name}
                  </Text>
                ))}
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.dergi}
                  onValueChange={() => {
                    dispatch(
                      setSettings({ ...settings, dergi: !settings.dergi })
                    );
                  }}
                  color="#0BDA51"
                />
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default SettingsItem;
