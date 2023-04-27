import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Avatar, Card } from "react-native-paper";

const AllEvents = ({ events }) => {
    console.log(events);
    const [modalVisible, setModalVisible] = useState(false);

  events?.map((event) => {
    return (
      <TouchableOpacity
        style={{ marginRight: 10, marginTop: 17 }}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Card
          style={{
            backgroundColor: event.status === true ? "#7AA874" : "#ED2B2A",
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
              <Text style={{ color: "#fff" }}>{event.title}</Text>
              <Text style={{ color: "#fff" }}>
                {event.status === true
                  ? "Etkinlik durumu güncel"
                  : "Etkinlik iptal edildi"}
              </Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  });
};

export default AllEvents;
