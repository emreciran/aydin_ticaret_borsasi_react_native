import { View, Text } from "react-native";
import styles from "../styles/MemberInquiry";
import { TextInput, Button, Checkbox } from "react-native-paper";
import React, { useState } from "react";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { truncate } from "lodash";

const DuesInquiryPayment = () => {
  const [sicilNo, setSicilNo] = useState("");
  const [sifre, setSifre] = useState("");

  const { t } = useTranslation();

  return (
    <View style={{ padding: 15 }}>
      <Text style={{ textAlign: "justify", color: "#333" }}>
        {t("dues_member.DuesInquiryPayment.info_text")}
      </Text>
      <View style={styles.container}>
        <Text style={styles.text}>
          {truncate(t("dues_member.DuesInquiryPayment.uye_sicil"), {
            length: 15,
          })}
        </Text>
        <TextInput
          placeholder={t(
            "dues_member.DuesInquiryPayment.uye_sicil_placeholder"
          )}
          mode="outlined"
          style={{ width: "65%" }}
          activeOutlineColor="#2F58CD"
          value={sicilNo}
          onChangeText={(text) => setSicilNo(text)}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          {truncate(t("dues_member.DuesInquiryPayment.sifre"), { length: 15 })}
        </Text>
        <TextInput
          placeholder={t("dues_member.DuesInquiryPayment.sifre_placeholder")}
          mode="outlined"
          style={{ width: "65%" }}
          activeOutlineColor="#2F58CD"
          value={sifre}
          secureTextEntry
          onChangeText={(text) => setSifre(text)}
        />
      </View>
      <View>
        <Button
          mode="contained"
          buttonColor="#2F58CD"
          style={{ marginTop: 14 }}
        >
          {t("dues_member.DuesInquiryPayment.button")}
        </Button>
      </View>
      <View style={{ marginTop: 20, gap: 15 }}>
        <Text style={{ textAlign: "justify", color: "#333" }}>
          {t("dues_member.DuesInquiryPayment.text")}
        </Text>
        <Text style={{ textAlign: "justify", color: "#333" }}>
          {t("dues_member.DuesInquiryPayment.text")}
        </Text>
        <Text style={{ textAlign: "justify", color: "#333" }}>
          {t("dues_member.DuesInquiryPayment.text")}
        </Text>
      </View>
    </View>
  );
};

export default DuesInquiryPayment;
