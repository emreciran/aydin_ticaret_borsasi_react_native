import { View, Text } from "react-native";
import React, { useState } from "react";
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
            headerTitle: "Kurumsal",
          }}
        />
        <Stack.Screen
          name="Announcement"
          component={Announcement}
          options={{
            headerTitle: "Duyurular",
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
            headerTitle: "Haberler",
          }}
        />
        <Stack.Screen
          name="Newsletters"
          component={Newsletters}
          options={{
            headerTitle: "Bültenler",
          }}
        />
        <Stack.Screen
          name="DailyNewsletters"
          component={DailyNewsletters}
          options={{
            headerTitle: "Günlük Bültenler",
          }}
        />
        <Stack.Screen
          name="WeeklyNewsletters"
          component={WeeklyNewsletters}
          options={{
            headerTitle: "Haftalık Bültenler",
          }}
        />
        <Stack.Screen
          name="MonthlyNewsletters"
          component={MonthlyNewsletters}
          options={{
            headerTitle: "Aylık Bültenler",
          }}
        />
        <Stack.Screen
          name="EventCalendar"
          component={EventCalendar}
          options={{
            headerTitle: "Etkinlik Takvimi",
          }}
        />
        <Stack.Screen
          name="RequestSuggestion"
          component={RequestSuggestion}
          options={{
            headerTitle: "Talep / Öneri",
          }}
        />
        <Stack.Screen
          name="Market"
          component={Market}
          options={{
            headerTitle: "Piyasalar",
          }}
        />
        <Stack.Screen name="MarketSubLinks" component={MarketSubLinks} />
        <Stack.Screen
          name="Communication"
          component={Communication}
          options={{
            headerTitle: "İletişim",
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
