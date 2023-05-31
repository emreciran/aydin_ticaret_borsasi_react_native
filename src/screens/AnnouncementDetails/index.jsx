import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles/AnnouncementDetails";
import * as WebBrowser from "expo-web-browser";
import RenderHtml from "react-native-render-html";
import { REACT_APP_API_URL } from "@env";
import { truncate } from "lodash";

const AnnouncementDetails = ({ route }) => {
  const { duyuru } = route.params;

  const source = {
    html: duyuru.details,
  };

  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: truncate(duyuru.title, { length: 20 }),
    });
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20 }}
    >
      <View style={{ paddingBottom: 25 }}>
        <Image
          style={{ width: "100%", height: 400, resizeMode: "contain" }}
          source={{
            uri: `https://33b8-212-253-124-232.ngrok-free.app/Images/Announcements/${duyuru.imageName}`,
          }}
        />
        <RenderHtml source={source} contentWidth={width} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Saygılarımızla,</Text>
          <Text style={styles.text}>Aydın Ticaret Borsası</Text>
          <Text style={styles.text}>{duyuru.createdDate}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Detaylı bilgi için Tıklayınız"
            onPress={() => WebBrowser.openBrowserAsync(`${duyuru.link}`)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AnnouncementDetails;
