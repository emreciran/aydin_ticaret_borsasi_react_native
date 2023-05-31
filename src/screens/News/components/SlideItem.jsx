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
import React from "react";
import RenderHtml from "react-native-render-html";
import { ScrollView } from "react-native";
import { REACT_APP_API_URL } from "@env";

const { width } = Dimensions.get("screen");

const SlideItem = ({ item }) => {
  const source = {
    html: item?.details,
  };

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
            source={{
              uri: `https://33b8-212-253-124-232.ngrok-free.app/Images/News/${item.imageName}`,
            }}
            resizeMode="contain"
            style={{
              width: "100%",
              height: 400,
              transform: [
                {
                  translateY: translateYImage,
                },
              ],
            }}
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
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    paddingBottom: 30,
  },
  content: {
    alignItems: "center",
    marginTop: 45,
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
