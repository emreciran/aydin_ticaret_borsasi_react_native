import { View, Text } from "react-native";
import React from "react";
import styles from "../styles/Time";
import moment from "moment";
import { useTranslation } from "react-i18next";

const Time = () => {
  const today = moment().format("DD.MM.YYYY");
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={{ fontWeight: "700" }}>{today}</Text> {t("home.time")}
      </Text>
    </View>
  );
};

export default Time;
