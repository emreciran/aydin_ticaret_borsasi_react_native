import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles/AnnouncementDetails";
import * as WebBrowser from "expo-web-browser";
import RenderHtml from "react-native-render-html";
import axios from "axios";

const AnnouncementDetails = ({ route }) => {
  const source = {
    html: route.params.duyuru.details,
  };

  const [image, setImage] = useState("");

  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title:
        route.params.duyuru.title.length > 15
          ? route.params.duyuru.title.slice(0, 15) + "..."
          : route.params.duyuru.title,
    });

    axios
      .get(
        `https://d5d3-212-253-124-232.ngrok-free.app/Announcements/${route.params.duyuru.imageName}`
      )
      .then((res) => {
        console.log(res.data);
        setImage(res.data);
      });
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20 }}
    >
      <RenderHtml source={source} contentWidth={width} />
      <View style={{ marginVertical: 30 }}>
        {image && (
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Saygılarımızla,</Text>
        <Text style={styles.text}>Aydın Ticaret Borsası</Text>
        <Text style={styles.text}>{route.params.duyuru.createdDate}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Detaylı bilgi için Tıklayınız"
          onPress={() =>
            WebBrowser.openBrowserAsync(`${route.params.duyuru.link}`)
          }
        />
      </View>
    </ScrollView>
  );
};

export default AnnouncementDetails;
