import { View, Text } from "react-native";
import React from "react";
import DuyuruItem from "./DuyuruItem";
import { ScrollView } from "react-native";

const DuyuruList = ({ data }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ padding: 12 }}
    >
      {data?.map((item, index) => (
        <DuyuruItem duyuru={item} key={index} />
      ))}
    </ScrollView>
  );
};

export default DuyuruList;
