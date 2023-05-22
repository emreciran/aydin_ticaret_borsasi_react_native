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
      <View style={{gap: 6}}>
        <Text>
          Satış Şekli: <Text>{subItem.satis_sekli}</Text>
        </Text>
        <Text>
          İşlem Adedi: <Text>{subItem.islem_adet}</Text>
        </Text>
      </View>
      <View style={{gap: 5}}>
        <Text>
          Ortalama: <Text>{subItem.ortalama}</Text>
        </Text>
        <Text>
          Miktar: <Text>{subItem.miktar_kg} KG</Text>
        </Text>
      </View>
    </View>
  );
};

export default TescilBulletinItemDesc;
