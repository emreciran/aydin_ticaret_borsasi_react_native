import { View, Text } from "react-native";
import React, { useState } from "react";
import CheckBox from "react-native-check-box";
import AgendaComponent from "../../components/AgendaComponent";

const EventCalendar = () => {
  const [isChecked, setIsChecked] = useState(false);

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
      {!isChecked ? <AgendaComponent /> : <Text>sadsa</Text>}
    </View>
  );
};

export default EventCalendar;
