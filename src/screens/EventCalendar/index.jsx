import { View, Text } from "react-native";
import React, { useState } from "react";
import CheckBox from "react-native-check-box";
import AgendaComponent from "../../components/AgendaComponent";
import EventService from "../../services/eventService";
import { useEffect } from "react";
import AllEvents from "./components/AllEvents";

const EventCalendar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [events, setEvents] = useState();

  const getEvents = () => {
    EventService.getEvents()
      .then((response) => {
        setEvents(response.events);
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
        rightText={
          !isChecked
            ? "Tüm etkinlikleri görüntüle"
            : "Etkinlik takvimini görüntüle"
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
