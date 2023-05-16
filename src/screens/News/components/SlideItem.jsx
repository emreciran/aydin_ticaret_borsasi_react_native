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

const { width, height } = Dimensions.get("screen");

const SlideItem = ({ item }) => {
  const source = {
    html: item?.details,
  };
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://d5d3-212-253-124-232.ngrok-free.app/News/${item?.imageName}`
      )
      .then((res) => {
        console.log(res.data);
        setImage(res.data);
      });
  }, []);

  const { width } = useWindowDimensions();
  const translateYImage = new Animated.Value(40);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <Animated.Image
          source={image}
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
          <RenderHtml source={source} contentWidth={width} />
          <Text style={styles.date}>{item.createdDate}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
  },
  image: {
    flex: 0.5,
    marginBottom: 25,
    width: "100%",
  },
  content: {
    flex: 0.4,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 18,
    marginVertical: 12,
    color: "#333",
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
