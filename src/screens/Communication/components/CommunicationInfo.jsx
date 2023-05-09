import { View, Text, FlatList } from "react-native";
import React from "react";
import communicationInfoConfig from "../../../configs/communicationInfoConfig";
import styles from "../styles/CommunicationInfo";

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.name}: </Text>
    <Text style={styles.text}>{item.value}</Text>
  </View>
);

const CommunicationInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <FlatList
          data={communicationInfoConfig}
          renderItem={({ item }) => <Item item={item} />}
        />
      </View>
    </View>
  );
};

export default CommunicationInfo;
