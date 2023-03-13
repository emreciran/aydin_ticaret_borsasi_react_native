import { View, Text } from "react-native";
import React from "react";
import styles from "../styles/Time";
import moment from "moment";

const Time = () => {
  const today = moment().format("DD.MM.YYYY");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={{ fontWeight: "700" }}>{today}</Text> Tescil Fiyatları
      </Text>
    </View>
  );
};

export default Time;
