import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput, Button, Checkbox } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import styles from "../styles/MemberInquiry";
import { useTranslation } from "react-i18next";

const data = [
  { label: "ÇIRÇIRLAMA FAALİYETİ", value: "1" },
  { label: "KURUTULMUŞ MEYVELERİN TOPTAN TİCARETİ", value: "2" },
  { label: "SIVI VE KATI YAĞ İMALATI", value: "3" },
  { label: "ARACILAR", value: "4" },
  { label: "YEM VE TAHILLARIN TOPTAN TİCARETİ", value: "5" },
  { label: "YAĞLI TOHUMLARIN TOPTAN TİCARETİ", value: "6" },
  { label: "TEKSTİL ELYAFI VB. TOPTAN TİCARETİ", value: "7" },
  { label: "CANLI HAYVANLARIN TOPTAN TİCARETİ", value: "8" },
];

const MemberInquiry = () => {
  const [meslekGrup, setMeslekGrup] = useState(null);
  const [sahisFirma, setSahisFirma] = useState("");
  const [urunAdi, setUrunAdi] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [askiUye, setAskiUye] = useState(false);
  const [tasfiyeUye, setTasfiyeUye] = useState(false);

  const { t } = useTranslation();

  return (
    <View style={{ padding: 15 }}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {t("dues_member.MemberInquiry.sahis_firma")}
        </Text>
        <TextInput
          placeholder={t("dues_member.MemberInquiry.sahis_firma_placeholder")}
          mode="outlined"
          style={{ width: "60%" }}
          value={sahisFirma}
          onChangeText={(text) => setSahisFirma(text)}
          activeOutlineColor="#2F58CD"
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          {t("dues_member.MemberInquiry.urun_adi")}
        </Text>
        <TextInput
          placeholder={t("dues_member.MemberInquiry.urun_adi_placeholder")}
          mode="outlined"
          value={urunAdi}
          onChangeText={(text) => setUrunAdi(text)}
          style={{ width: "60%" }}
          activeOutlineColor="#2F58CD"
        />
      </View>
      <View style={[styles.container, { marginTop: 8 }]}>
        <Text style={styles.text}>
          {t("dues_member.MemberInquiry.meslek_grup")}
        </Text>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "#2F58CD" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={
            !isFocus
              ? `${t("dues_member.MemberInquiry.urun_adi_placeholder")}`
              : "..."
          }
          searchPlaceholder={t("dues_member.MemberInquiry.search")}
          value={meslekGrup}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setMeslekGrup(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
      >
        <Checkbox.Android
          status={askiUye ? "checked" : "unchecked"}
          onPress={() => {
            setAskiUye(!askiUye);
          }}
        />
        <Text onPress={() => setAskiUye(!askiUye)} style={styles.text}>
          {t("dues_member.MemberInquiry.aski_uye")}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Checkbox.Android
          status={tasfiyeUye ? "checked" : "unchecked"}
          onPress={() => {
            setTasfiyeUye(!tasfiyeUye);
          }}
        />
        <Text onPress={() => setTasfiyeUye(!tasfiyeUye)} style={styles.text}>
          {t("dues_member.MemberInquiry.tasfiye_uye")}
        </Text>
      </View>
      <View>
        <Button
          icon="folder"
          mode="contained"
          buttonColor="#2F58CD"
          style={{ marginTop: 14 }}
        >
          {t("dues_member.MemberInquiry.button")}
        </Button>
      </View>
    </View>
  );
};

export default MemberInquiry;
