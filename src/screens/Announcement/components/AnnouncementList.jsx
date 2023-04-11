import { View, Text } from "react-native";
import React from "react";
import AnnouncementItem from "./AnnouncementItem";
import { ScrollView } from "react-native";

const AnnouncementList = ({ data }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ padding: 12 }}
    >
      {data?.map((item, index) => (
        <AnnouncementItem duyuru={item} key={index} />
      ))}
    </ScrollView>
  );
};

export default AnnouncementList;
