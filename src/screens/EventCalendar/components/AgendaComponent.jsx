import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Agenda, LocaleConfig } from "react-native-calendars";
import moment from "moment";
import { Card } from "react-native-paper";
import localeCalendarConfig from "../../../configs/localeCalendarConfig";
import { addDays, format } from "date-fns";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import RenderHTML from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import ModalPopup from "../../../components/ModalPopup";
import { useTranslation } from "react-i18next";
import { getLocales } from "expo-localization";

const deviceLanguage = getLocales()[0].languageCode;

if (deviceLanguage === "tr") {
  LocaleConfig.locales["tr"] = localeCalendarConfig.tr;
  LocaleConfig.defaultLocale = "tr";
} else {
  LocaleConfig.locales["en"] = localeCalendarConfig.en;
  LocaleConfig.defaultLocale = "en";
}

const AgendaComponent = ({ events }) => {
  const [items, setItems] = useState({});
  const [selectedItem, setSelectedItem] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const today = moment().format("YYYY-MM-DD");
  const { t } = useTranslation();

  const { width } = useWindowDimensions();

  useEffect(() => {
    const getData = () => {
      const mappedData = events?.map((event, index) => {
        const date = event?.startDate;
        return {
          ...event,
          date: date,
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
                  {item.status !== true ? t("event_calendar.cancel") : ""}
                </Text>
              </View>
              <View style={{ marginTop: 4 }}>
                <Text style={{ color: "#eee" }}>
                  {item?.startDate}
                  {" - "}
                  {item?.endDate}
                </Text>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View>
        <Text style={{ padding: 10 }}>
          {t("event_calendar.etkinlik_bulunmuyor")}
        </Text>
      </View>
    );
  };

  return (
    <>
      <Agenda
        items={items}
        selected={today}
        renderItem={renderItem}
        renderEmptyData={renderEmptyDate}
        showOnlySelectedDayItems
      />
      <ModalPopup
        visible={modalVisible}
        setModalVisible={setModalVisible}
        title={selectedItem?.title}
      >
        <View>
          <Text>
            {selectedItem?.startDate}
            {" - "}
            {selectedItem?.endDate}
          </Text>
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
