import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-paper";
import moment from "moment";
import ModalPopup from "../../../components/ModalPopup/ModalPopup";
import RenderHTML from "react-native-render-html";
import { useWindowDimensions } from "react-native";

const AllEvents = ({ events }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const { width } = useWindowDimensions();

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ padding: 12 }}
      >
        <Text style={{ fontSize: 18, fontWeight: "500" }}>
          Yaklaşan Etkinlikler
        </Text>
        {events &&
          events?.map((event) => {
            return (
              <TouchableOpacity
                style={{ marginRight: 10, marginTop: 17 }}
                onPress={() => {
                  setSelectedItem(event);
                  setModalVisible(!modalVisible);
                }}
                key={event.id}
              >
                <Card
                  style={{
                    backgroundColor:
                      event.status === true ? "#7AA874" : "#ED2B2A",
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
                        {event.status !== true ? "Etkinlik iptal edildi" : ""}
                      </Text>
                    </View>
                    <View style={{ marginTop: 4 }}>
                      <Text style={{ color: "#eee" }}>
                        {event?.startDate}
                        {" - "}
                        {event?.endDate}
                      </Text>
                    </View>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
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

export default AllEvents;
