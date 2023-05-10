import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import settingsConfig from "../../../configs/settingsConfig";
import styles from "../styles/SettingsItem";
import { Switch } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsItem = () => {
  const [value, setValue] = useState();

  const getData = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                  value={getData("pamuk")
                    .then((data) => data)
                    .then((value) => {
                      console.log(value);
                    })}
                  onValueChange={async () => {
                    storeData("pamuk", false);
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
                  value={getData("ceksiz_kuru_uzum")}
                  onValueChange={() => {
                    storeData("ceksiz_kuru_uzum", "true");
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
                  value={getData("tescil_bulten")}
                  onValueChange={() => {
                    storeData("tescil_bulten", "true");
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
                  value={getData("aylik_finans_emtia")}
                  onValueChange={() => {
                    storeData("aylik_finans_emtia", "true");
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
                  value={getData("duyuru")}
                  onValueChange={() => {
                    storeData("duyuru", "true");
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
                  value={getData("haber")}
                  onValueChange={() => {
                    storeData("haber", "true");
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
                  value={getData("etkinlik_takvimi")}
                  onValueChange={() => {
                    storeData("etkinlik_takvimi", "true");
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
                  value={getData("dergi")}
                  onValueChange={() => {
                    storeData("dergi", "true");
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
