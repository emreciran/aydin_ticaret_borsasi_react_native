import { View } from "react-native";
import React, { useState } from "react";
import CheckBox from "react-native-check-box";
import AgendaComponent from "./components/AgendaComponent";
import EventService from "../../services/eventService";
import { useEffect } from "react";
import AllEvents from "./components/AllEvents";
import { useTranslation } from "react-i18next";

const EventCalendar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [events, setEvents] = useState();

  const { t } = useTranslation();

  const getEvents = () => {
    EventService.getEvents()
      .then((response) => {
        setEvents(response.events.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <CheckBox
        isChecked={isChecked}
        style={{ padding: 8 }}
        rightText={
          !isChecked
            ? t("event_calendar.tum_etkinlik_goruntule")
            : t("event_calendar.etkinlik_takvimi_goruntule")
        }
        onClick={() => setIsChecked(!isChecked)}
      />
      {!isChecked ? (
        <AgendaComponent events={events} />
      ) : (
        <AllEvents events={events} />
      )}
    </View>
  );
};

export default EventCalendar;
