import { View, Text, Button, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles/DuyuruDetay";
import * as WebBrowser from "expo-web-browser";

const DuyuruDetay = ({ route }) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title:
        route.params.duyuru.title.length > 15
          ? route.params.duyuru.title.slice(0, 15) + "..."
          : route.params.duyuru.title,
    });
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20 }}
    >
      <Text style={styles.title}>{route.params.duyuru.title}</Text>
      <Text style={styles.details}>{route.params.duyuru.details}</Text>
      <View style={{ marginVertical: 30 }}>
        <Image
          style={styles.image}
          source={{
            uri: `https://localhost:7100/Images/${route.params.duyuru.imageName}`,
          }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Detaylı bilgi için Tıklayınız"
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://www.aydinticaretborsasi.org.tr/"
            )
          }
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Saygılarımızla,</Text>
        <Text style={styles.text}>Aydın Ticaret Borsası</Text>
        <Text style={styles.text}>{route.params.duyuru.date}</Text>
      </View>
    </ScrollView>
  );
};

export default DuyuruDetay;
