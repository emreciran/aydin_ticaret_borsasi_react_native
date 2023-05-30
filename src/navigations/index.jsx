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

const Stack = createNativeStackNavigator();

const Navigations = () => {
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
            headerTitle: truncate("Kurumsal", { length: 20 }),
            headerBackTitle: "Geri",
          }}
        />
        <Stack.Screen
          name="Announcement"
          component={Announcement}
          options={{
            headerTitle: truncate("Duyurular", { length: 20 }),
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
            headerTitle: truncate("Haberler", { length: 20 }),
          }}
        />
        <Stack.Screen
          name="Newsletters"
          component={Newsletters}
          options={{
            headerTitle: truncate("Bültenler", { length: 20 }),
          }}
        />
        <Stack.Screen
          name="DailyNewsletters"
          component={DailyNewsletters}
          options={{
            headerTitle: truncate("Günlük Bültenler", { length: 20 }),
          }}
        />
        <Stack.Screen
          name="WeeklyNewsletters"
          component={WeeklyNewsletters}
          options={{
            headerTitle: truncate("Haftalık Bültenler", { length: 20 }),
          }}
        />
        <Stack.Screen
          name="MonthlyNewsletters"
          component={MonthlyNewsletters}
          options={{
            headerTitle: truncate("Aylık Bültenler", { length: 20 }),
          }}
        />
        <Stack.Screen name="TescilBulletin" component={TescilBulletin} />
        <Stack.Screen
          name="EventCalendar"
          component={EventCalendar}
          options={{
            headerTitle: truncate("Etkinlik Takvimi", { length: 20 }),
          }}
        />
        <Stack.Screen
          name="RequestSuggestion"
          component={RequestSuggestion}
          options={{
            headerTitle: truncate("Talep / Öneri", { length: 20 }),
          }}
        />
        <Stack.Screen
          name="Market"
          component={Market}
          options={{
            headerTitle: truncate("Piyasalar", { length: 20 }),
          }}
        />
        <Stack.Screen name="MarketSubLinks" component={MarketSubLinks} />
        <Stack.Screen
          name="CottonMarketComments"
          component={CottonMarketComments}
          options={{
            headerTitle: truncate("Pamuk", { length: 20 }),
          }}
        />
        <Stack.Screen
          name="GrapeMarketComments"
          component={GrapeMarketComments}
          options={{
            headerTitle: truncate("Çekirdeksiz Kuru Üzüm", {
              length: 20,
            }),
          }}
        />
        <Stack.Screen
          name="Communication"
          component={Communication}
          options={{
            headerTitle: truncate("İletişim", {
              length: 20,
            }),
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitle: truncate("Ayarlar", {
              length: 20,
            }),
          }}
        />
        <Stack.Screen
          name="DuesMember"
          component={DuesMember}
          options={{
            headerTitle: truncate("Aidat/Üye", {
              length: 20,
            }),
          }}
        />
        <Stack.Screen
          name="MemberInquiry"
          component={MemberInquiry}
          options={{
            headerTitle: truncate("Üye Sorgulama", {
              length: 20,
            }),
          }}
        />
        <Stack.Screen
          name="DuesInquiryPayment"
          component={DuesInquiryPayment}
          options={{
            headerTitle: truncate("Aidat Sorgulama ve Ödeme", {
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
