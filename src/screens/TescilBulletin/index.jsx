import { View, Text } from "react-native";
import React from "react";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import moment from "moment/moment";

const TescilBulletin = ({ route }) => {
  const navigation = useNavigation();
  const { type } = route.params;

  const day = moment().format("DD.MM.YYYY");

  useEffect(() => {
    navigation.setOptions({
      title: ""
    });
  }, []);
  return (
    <View>
      <Text>TescilBulletin</Text>
    </View>
  );
};

export default TescilBulletin;
