import { View, Text } from "react-native";
import React from "react";

const TescilBulletinItemDesc = ({ subItem }) => {
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
          Satış Şekli:{" "}
          <Text style={{ fontWeight: 400 }}>{subItem.satis_sekli}</Text>
        </Text>
        <Text style={{ fontWeight: 700 }}>
          İşlem Adedi:{" "}
          <Text style={{ fontWeight: 400 }}>{subItem.islem_adet}</Text>
        </Text>
      </View>
      <View style={{ gap: 6, marginLeft: 10 }}>
        <Text style={{ fontWeight: 700 }}>
          Ortalama: <Text style={{ fontWeight: 400 }}>{subItem.ortalama}</Text>
        </Text>
        <Text style={{ fontWeight: 700 }}>
          Miktar:{" "}
          <Text style={{ fontWeight: 400 }}>{subItem.miktar_kg} KG</Text>
        </Text>
      </View>
    </View>
  );
};

export default TescilBulletinItemDesc;
