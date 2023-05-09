import { View, Text } from "react-native";
import React, { useState } from "react";
import settingsConfig from "../../../configs/settingsConfig";
import styles from "../styles/SettingsItem";
import { Switch } from "react-native-paper";

const SettingsItem = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
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
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
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
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
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
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
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
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
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
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
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
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
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
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
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
