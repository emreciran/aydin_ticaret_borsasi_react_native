import { View, Text } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

const TescilBulletinItemDesc = ({ subItem }) => {
  const { t } = useTranslation();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        minWidth: "100%",
      }}
    >
      <View style={{ gap: 6 }}>
        <Text style={{ fontWeight: 700 }}>
          {t("bulletin.tescil.satis_sekli")}:{" "}
          <Text style={{ fontWeight: 400 }}>{subItem.satis_sekli}</Text>
        </Text>
        <Text style={{ fontWeight: 700 }}>
          {t("bulletin.tescil.islem_adedi")}:{" "}
          <Text style={{ fontWeight: 400 }}>{subItem.islem_adet}</Text>
        </Text>
      </View>
      <View style={{ gap: 6, marginLeft: 10 }}>
        <Text style={{ fontWeight: 700 }}>
          {t("bulletin.tescil.ortalama")}:{" "}
          <Text style={{ fontWeight: 400 }}>{subItem.ortalama}</Text>
        </Text>
        <Text style={{ fontWeight: 700 }}>
          {t("bulletin.tescil.miktar")}:{" "}
          <Text style={{ fontWeight: 400 }}>{subItem.miktar_kg} KG</Text>
        </Text>
      </View>
    </View>
  );
};

export default TescilBulletinItemDesc;
