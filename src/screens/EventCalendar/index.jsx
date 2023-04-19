import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Agenda, LocaleConfig } from "react-native-calendars";
import { Avatar, Card } from "react-native-paper";
import localeCalendarConfig from "../../configs/localeCalendarConfig";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

LocaleConfig.locales["tr"] = localeCalendarConfig.tr;
LocaleConfig.defaultLocale = "tr";

// üste selectbox koy tıklandığında tüm etlinlikler gözüksün 
// eğer tıklanmamışsa o günce ait etkinlik takvimi

const EventCalendar = () => {
  const [items, setItems] = useState({});
  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }

        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>{item.name}</Text>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2023-04-19'}
        renderItem={renderItem}
      />
    </View>
  );
};

export default EventCalendar;
