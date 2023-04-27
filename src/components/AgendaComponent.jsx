import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Agenda, LocaleConfig } from "react-native-calendars";
import moment from "moment";
import { Avatar, Card } from "react-native-paper";
import localeCalendarConfig from "../configs/localeCalendarConfig";
import { addDays, format } from "date-fns";
import EventService from "../services/eventService";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import RenderHTML from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import ModalPopup from "./ModalPopup";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

LocaleConfig.locales["tr"] = localeCalendarConfig.tr;
LocaleConfig.defaultLocale = "tr";

const AgendaComponent = ({ events }) => {
  const [items, setItems] = useState({});
  const [selectedItem, setSelectedItem] = useState();
console.log(selectedItem);
  const [modalVisible, setModalVisible] = useState(false);
  const today = moment().format("YYYY-MM-DD");

  const { width } = useWindowDimensions();

  useEffect(() => {
    const getData = () => {
      const mappedData = events?.map((event, index) => {
        const date = addDays(new Date(), index);
console.log(date);
        return {
          ...event,
          date: format(date, "yyyy-MM-dd"),
        };
      });

      const reduced = mappedData?.reduce((acc, currentItem) => {
        const { date, ...coolItem } = currentItem;
        acc[date] = [coolItem];
        return acc;
      }, {});

      setItems(reduced);
    };

    getData();
  }, []);

  const renderItem = (item) => {
    return (
      <>
        <TouchableOpacity
          style={{ marginRight: 10, marginTop: 17 }}
          onPress={() => {
            setSelectedItem(item);
            setModalVisible(!modalVisible);
          }}
        >
          <Card
            style={{
              backgroundColor: item.status === true ? "#7AA874" : "#ED2B2A",
            }}
          >
            <Card.Content>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#fff" }}>{item.title}</Text>
                <Text style={{ color: "#fff" }}>
                  {item.status === true
                    ? "Etkinlik durumu güncel"
                    : "Etkinlik iptal edildi"}
                </Text>
              </View>
              <View style={{ marginTop: 4 }}>
                <Text style={{ color: "#eee" }}>
                  {item?.startDate - item?.endDate}
                </Text>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <>
      <Agenda
        items={items !== undefined && items}
        selected={today}
        renderItem={renderItem}
      />
      <ModalPopup visible={modalVisible} setModalVisible={setModalVisible}>
        <View>

            <View>
              <Text style={{ fontSize: 20 }}>{selectedItem?.title}</Text>
            </View>
          </View>
          <View>
            <Text>{moment(selectedItem?.startDate).format("DD/MM/YYYY")} - {moment(selectedItem?.endDate).format("DD/MM/YYYY")}</Text>
            <RenderHTML
              source={{ html: selectedItem?.details }}
              contentWidth={width}
            />
          </View>
      </ModalPopup>
    </>
  );
};

export default AgendaComponent;
