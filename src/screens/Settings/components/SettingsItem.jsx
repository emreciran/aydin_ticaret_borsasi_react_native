import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import settingsConfig from "../../../configs/settingsConfig";
import styles from "../styles/SettingsItem";
import { Switch } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsItem = ({ settings, setSettings }) => {
  const [pamuk, setPamuk] = useState(false);
  const [ceksiz_kuru_uzum, setCeksiz_kuru_uzum] = useState(false);
  const [tescil_bulten, setTescil_bulten] = useState(false);
  const [aylik_finans_emtia, setAylik_finans_emtia] = useState(false);
  const [duyuru, setDuyuru] = useState(false);
  const [haber, setHaber] = useState(false);
  const [etkinlik_takvimi, setEtkinlik_takvimi] = useState(false);
  const [dergi, setDergi] = useState(false);
console.log(settings);
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
        {settingsConfig.pamuk && (
          <View>
            <Text style={styles.title}>PAMUK PİYASASI VERİLERİ</Text>
            <View style={styles.container}>
              <View style={styles.item}>
                {settingsConfig.pamuk.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    {item.name}
                  </Text>
                ))}
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.pamuk.status}
                  onValueChange={async () => {
                    setSettings({
                      ...settings,
                      pamuk: { status: !settings.pamuk.status },
                    });
                    storeData("pamuk", settings.pamuk);
                  }}
                  color="#0BDA51"
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <View>
        {settingsConfig.ceksiz_kuru_uzum && (
          <View>
            <Text style={styles.title}>ÇEK.SİZ KURU ÜZÜM VERİLERİ</Text>
            <View style={styles.container}>
              <View style={styles.item}>
                <View style={styles.item}>
                  {settingsConfig.ceksiz_kuru_uzum.map((item) => (
                    <Text key={item.id} style={styles.text}>
                      {item.name}
                    </Text>
                  ))}
                </View>
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.ceksiz_kuru_uzum.status}
                  onValueChange={async () => {
                    setSettings({
                      ...settings,
                      ceksiz_kuru_uzum: {
                        status: !settings.ceksiz_kuru_uzum.status,
                      },
                    });
                    storeData("ceksiz_kuru_uzum", settings.ceksiz_kuru_uzum);
                  }}
                  color="#0BDA51"
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <View>
        {settingsConfig.tescil_bulten && (
          <View>
            <Text style={styles.title}>TESCİL BÜLTENLERİ</Text>
            <View style={styles.container}>
              <View style={styles.item}>
                {settingsConfig.tescil_bulten.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    {item.name}
                  </Text>
                ))}
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.tescil_bulten.status}
                  onValueChange={() => {
                    setSettings({
                      ...settings,
                      tescil_bulten: { status: !settings.tescil_bulten.status },
                    });
                    storeData("tescil_bulten", settings.tescil_bulten);
                  }}
                  color="#0BDA51"
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <View>
        {settingsConfig.aylik_finans_emtia && (
          <View>
            <Text style={styles.title}>AYLIK FİNANS VE EMTİA BÜLTENLERİ</Text>
            <View style={styles.container}>
              <View style={styles.item}>
                {settingsConfig.aylik_finans_emtia.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    {item.name}
                  </Text>
                ))}
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.aylik_finans_emtia.status}
                  onValueChange={() => {
                    setSettings({
                      ...settings,
                      aylik_finans_emtia: {
                        status: !settings.aylik_finans_emtia.status,
                      },
                    });
                    storeData(
                      "aylik_finans_emtia",
                      settings.aylik_finans_emtia
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
        {settingsConfig.duyuru && (
          <View>
            <Text style={styles.title}>DUYURU</Text>
            <View style={styles.container}>
              <View style={styles.item}>
                {settingsConfig.duyuru.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    {item.name}
                  </Text>
                ))}
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.duyuru.status}
                  onValueChange={() => {
                    setSettings({
                      ...settings,
                      duyuru: { status: !settings.duyuru.status },
                    });
                    storeData("duyuru", settings.duyuru);
                  }}
                  color="#0BDA51"
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <View>
        {settingsConfig.haber && (
          <View>
            <Text style={styles.title}>HABER</Text>
            <View style={styles.container}>
              <View style={styles.item}>
                {settingsConfig.haber.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    {item.name}
                  </Text>
                ))}
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.haber.status}
                  onValueChange={() => {
                    setSettings({
                      ...settings,
                      haber: { status: !settings.haber.status },
                    });
                    storeData("haber", settings.haber);
                  }}
                  color="#0BDA51"
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <View>
        {settingsConfig.etkinlik_takvimi && (
          <View>
            <Text style={styles.title}>ETKİNLİK TAKVİMİ</Text>
            <View style={styles.container}>
              <View style={styles.item}>
                {settingsConfig.etkinlik_takvimi.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    {item.name}
                  </Text>
                ))}
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.etkinlik_takvimi.status}
                  onValueChange={() => {
                    setSettings({
                      ...settings,
                      etkinlik_takvimi: {
                        status: !settings.etkinlik_takvimi.status,
                      },
                    });
                    storeData("etkinlik_takvimi", settings.etkinlik_takvimi);
                  }}
                  color="#0BDA51"
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <View>
        {settingsConfig.dergi && (
          <View>
            <Text style={styles.title}>DERGİ</Text>
            <View style={styles.container}>
              <View style={styles.item}>
                {settingsConfig.dergi.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    {item.name}
                  </Text>
                ))}
              </View>
              <View style={{ alignSelf: "center" }}>
                <Switch
                  value={settings.dergi.status}
                  onValueChange={() => {
                    setSettings({
                      ...settings,
                      dergi: { status: !settings.dergi.status },
                    });
                    storeData("dergi", settings.dergi);
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
