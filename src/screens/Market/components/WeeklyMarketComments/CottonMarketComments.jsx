import {
  View,
  Text,
  Button,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import WeeklyMarketCommentService from "../../../../services/weeklyMarketComments";
import RenderHtml from "react-native-render-html";
import styles from "../../styles/CottonMarketComments";

const CottonMarketComments = () => {
  const [data, setData] = useState();

  const getData = () => {
    WeeklyMarketCommentService.getWeeklyMarketComment("Pamuk")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const source = {
    html: data?.details,
  };

  const { width } = useWindowDimensions();

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20 }}
    >
      {data !== null ? (
        <View style={{ paddingBottom: 25 }}>
          <Image
            style={{ width: "100%", height: 400, resizeMode: "contain" }}
            source={{
              uri: `https://5a47-212-253-124-232.ngrok-free.app/Images/WeeklyMarket/${data?.imageName}`,
            }}
          />
          <RenderHtml source={source} contentWidth={width} />
        </View>
      ) : (
        <Text
          style={{ fontSize: 16, color: "#222", padding: 5, fontWeight: 500 }}
        >
          Kayıt bulunamadı.
        </Text>
      )}
    </ScrollView>
  );
};

export default CottonMarketComments;
