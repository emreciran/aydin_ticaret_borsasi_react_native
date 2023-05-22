import { View, ScrollView, Text } from "react-native";
import React from "react";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import moment from "moment/moment";
import { List } from "react-native-paper";
import {
  AylikTescilBulten,
  GunlukTescilBulten,
  HaftalikTescilBulten,
} from "../../constans";
import TescilBulletinItemDesc from "./components/TescilBulletinItemDesc";

const TescilBulletin = ({ route }) => {
  const navigation = useNavigation();
  const { type } = route.params;

  const day = moment().format("DD.MM.YYYY");
  const month = moment().add(-1, "month").format("MMMM");
  const prevWeek = moment().add(-1, "week").format("DD.MM.YYYY");
  const currWeek = moment().add(0, "week").format("DD.MM.YYYY");

  useEffect(() => {
    navigation.setOptions({
      title: `${
        type === "Daily"
          ? `${day} Günü Tescil ...`
          : type === "Weekly"
          ? `${prevWeek + " / " + currWeek} ...`
          : `${month} Ayı Tescil Bülteni`
      }`,
    });

    getTescilData();
  }, []);

  const getTescilData = (type) => {};

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <List.AccordionGroup>
          {type === "Daily"
            ? GunlukTescilBulten.map((item) => (
                <List.Accordion title={item.name} id={item.id} key={item.id}>
                  {item.sub_data.map((sub_item) => (
                    <List.Item
                      title={sub_item.name}
                      key={sub_item.id}
                      titleStyle={{
                        backgroundColor: "#146C94",
                        color: "#fff",
                        padding: 4,
                      }}
                      description={
                        <TescilBulletinItemDesc subItem={sub_item} />
                      }
                      descriptionStyle={{ backgroundColor: "#B0DAFF" }}
                    />
                  ))}
                </List.Accordion>
              ))
            : type === "Weekly"
            ? HaftalikTescilBulten.map((item) => (
                <List.Accordion title={item.name} id={item.id} key={item.id}>
                  {item.sub_data.map((sub_item) => (
                    <List.Item
                      title={sub_item.name}
                      key={sub_item.id}
                      titleStyle={{
                        backgroundColor: "#146C94",
                        color: "#fff",
                        padding: 4,
                      }}
                      descriptionStyle={{ backgroundColor: "#B0DAFF" }}
                      description={
                        <TescilBulletinItemDesc subItem={sub_item} />
                      }
                    />
                  ))}
                </List.Accordion>
              ))
            : AylikTescilBulten.map((item) => (
                <List.Accordion title={item.name} id={item.id} key={item.id}>
                  {item.sub_data.map((sub_item) => (
                    <List.Item
                      title={sub_item.name}
                      key={sub_item.id}
                      titleStyle={{
                        backgroundColor: "#146C94",
                        color: "#fff",
                        padding: 4,
                      }}
                      description={
                        <TescilBulletinItemDesc subItem={sub_item} />
                      }
                      descriptionStyle={{ backgroundColor: "#B0DAFF" }}
                    />
                  ))}
                </List.Accordion>
              ))}
        </List.AccordionGroup>
      </ScrollView>
    </View>
  );
};

export default TescilBulletin;
