import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { Image, StyleSheet } from "react-native";
import Logo from "../../assets/logo.png";
import Institutional from "../screens/Institutional";
import Announcement from "../screens/Announcement";
import AnnouncementDetails from "../screens/AnnouncementDetails";
import News from "../screens/News";
import Newsletters from "../screens/Newsletters";
import DailyNewsletters from "../screens/Newsletters/components/DailyNewsletters";
import WeeklyNewsletters from "../screens/Newsletters/components/WeeklyNewsletters";
import MonthlyNewsletters from "../screens/Newsletters/components/MonthlyNewsletters";
import EventCalendar from "../screens/EventCalendar";
import RequestSuggestion from "../screens/RequestSuggestion";
import Market from "../screens/Market";
import MarketSubLinks from "../screens/Market/components/MarketSubLinks";
import Communication from "../screens/Communication";
import Settings from "../screens/Settings";
import TescilBulletin from "../screens/TescilBulletin";
import DuesMember from "../screens/DuesMember";
import MemberInquiry from "../screens/DuesMember/components/MemberInquiry";
import DuesInquiryPayment from "../screens/DuesMember/components/DuesInquiryPayment";
import CottonMarketComments from "../screens/Market/components/WeeklyMarketComments/CottonMarketComments";
import GrapeMarketComments from "../screens/Market/components/WeeklyMarketComments/GrapeMarketComments";
import { truncate } from "lodash";
import { useTranslation } from "react-i18next";

const Stack = createNativeStackNavigator();

const Navigations = () => {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#fff",
          headerBackTitle: "Geri",
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 18,
          },
          headerBackground: () => (
            <View style={styles.container}>
              <Image source={Logo} style={styles.logo} />
            </View>
          ),
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Aydın Ticaret Borsası",
            headerTitle: (props) => (
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={styles.title}>{props.children}</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Institutional"
          component={Institutional}
          options={{
            headerTitle: truncate(t("navigation.institutional"), { length: 20 }),
            headerBackTitle: "Geri",
          }}
        />
        <Stack.Screen
          name="Announcement"
          component={Announcement}
          options={{
            headerTitle: truncate(t("navigation.announcement"), { length: 20 }),
          }}
        />
        <Stack.Screen
          name="AnnouncementDetails"
          component={AnnouncementDetails}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{
            headerTitle: truncate(t("navigation.news"), { length: 20 }),
          }}
        />
        <Stack.Screen
          name="Newsletters"
          component={Newsletters}
          options={{
            headerTitle: truncate(t("navigation.bulletin.main"), { length: 20 }),
          }}
        />
        <Stack.Screen
          name="DailyNewsletters"
          component={DailyNewsletters}
          options={{
            headerTitle: truncate(t("navigation.bulletin.daily.bulletin"), { length: 20 }),
          }}
        />
        <Stack.Screen
          name="WeeklyNewsletters"
          component={WeeklyNewsletters}
          options={{
            headerTitle: truncate(t("navigation.bulletin.weekly.bulletin"), { length: 20 }),
          }}
        />
        <Stack.Screen
          name="MonthlyNewsletters"
          component={MonthlyNewsletters}
          options={{
            headerTitle: truncate(t("navigation.bulletin.monthly.bulletin"), { length: 20 }),
          }}
        />
        <Stack.Screen name="TescilBulletin" component={TescilBulletin} />
        <Stack.Screen
          name="EventCalendar"
          component={EventCalendar}
          options={{
            headerTitle: truncate(t("navigation.event_calendar"), { length: 20 }),
          }}
        />
        <Stack.Screen
          name="RequestSuggestion"
          component={RequestSuggestion}
          options={{
            headerTitle: truncate(t("navigation.req_sugg"), { length: 20 }),
          }}
        />
        <Stack.Screen
          name="Market"
          component={Market}
          options={{
            headerTitle: truncate(t("navigation.market.main"), { length: 20 }),
          }}
        />
        <Stack.Screen name="MarketSubLinks" component={MarketSubLinks} />
        <Stack.Screen
          name="CottonMarketComments"
          component={CottonMarketComments}
          options={{
            headerTitle: truncate(t("navigation.market.CottonMarketComments"), { length: 20 }),
          }}
        />
        <Stack.Screen
          name="GrapeMarketComments"
          component={GrapeMarketComments}
          options={{
            headerTitle: truncate(t("navigation.market.GrapeMarketComments"), {
              length: 20,
            }),
          }}
        />
        <Stack.Screen
          name="Communication"
          component={Communication}
          options={{
            headerTitle: truncate(t("navigation.communication"), {
              length: 20,
            }),
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitle: truncate(t("navigation.settings"), {
              length: 20,
            }),
          }}
        />
        <Stack.Screen
          name="DuesMember"
          component={DuesMember}
          options={{
            headerTitle: truncate(t("navigation.dues_member.main"), {
              length: 20,
            }),
          }}
        />
        <Stack.Screen
          name="MemberInquiry"
          component={MemberInquiry}
          options={{
            headerTitle: truncate(t("navigation.dues_member.MemberInquiry"), {
              length: 20,
            }),
          }}
        />
        <Stack.Screen
          name="DuesInquiryPayment"
          component={DuesInquiryPayment}
          options={{
            headerTitle: truncate(t("navigation.dues_member.DuesInquiryPayment"), {
              length: 20,
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 100,
    backgroundColor: "#2F58CD",
  },
  logo: {
    width: 60,
    height: 60,
  },
  title: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Navigations;
