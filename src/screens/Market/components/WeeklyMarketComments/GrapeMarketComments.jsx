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
import { SERVER_URL } from "../../../../axios";
import { useTranslation } from "react-i18next";

const GrapeMarketComments = () => {
  const [data, setData] = useState();

  const getData = () => {
    WeeklyMarketCommentService.getWeeklyMarketComment("Çekirdeksiz Kuru Üzüm")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { t } = useTranslation();

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
      {data !== undefined ? (
        <View style={{ paddingBottom: 25 }}>
          <Image
            style={{ width: "100%", height: 400, resizeMode: "contain" }}
            source={{
              uri: `${SERVER_URL}/Images/WeeklyMarket/${data?.imageName}`,
            }}
          />
          <RenderHtml source={source} contentWidth={width} />
        </View>
      ) : (
        <Text
          style={{ fontSize: 16, color: "#222", padding: 5, fontWeight: 500 }}
        >
          {t("market.kayit_bulunamadi")}
        </Text>
      )}
    </ScrollView>
  );
};

export default GrapeMarketComments;
