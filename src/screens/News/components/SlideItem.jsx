import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import RenderHtml from "react-native-render-html";
import { ScrollView } from "react-native";
import { useEffect } from "react";
import axios from "axios";
import logo from "../../../../assets/logo.jpg";

const { width, height } = Dimensions.get("screen");

const SlideItem = ({ item }) => {
  const source = {
    html: item?.details,
  };
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://9520-212-253-124-232.ngrok-free.app/Images/News/${item?.imageName}`
      )
      .then((res) => {
        setImage(res.data);
      });
  }, []);

  const { width } = useWindowDimensions();
  const translateYImage = new Animated.Value(40);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.container}>
          <Animated.Image
            source={logo}
            resizeMode="contain"
            style={[
              styles.image,
              {
                transform: [
                  {
                    translateY: translateYImage,
                  },
                ],
              },
            ]}
          />
          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <RenderHtml
              source={source}
              contentWidth={width}
              baseStyle={styles.description}
            />
            <Text style={styles.date}>{item.createdDate}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff"
  },
  image: {
    flex: 0.5,
    width: "100%",
    borderRadius: 10,
    marginBottom: 45,
  },
  content: {
    flex: 0.4,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 18,
    color: "#333",
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
});
