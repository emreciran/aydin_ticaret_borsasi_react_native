import React, { useEffect, useRef } from "react";
import {
  View,
  Modal,
  Animated,
  TouchableOpacity,
  Text,
} from "react-native";
import styles from "./styles/ModalPopup";

const ModalPopup = ({ visible, children, setModalVisible, title }) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          <View
            style={{
              height: 40,
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexDirection: "row-reverse",
            }}
          >
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>X</Text>
            </TouchableOpacity>
            <View>
              <Text style={{ fontSize: 20 }}>{title}</Text>
            </View>
          </View>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ModalPopup;
