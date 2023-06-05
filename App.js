import { StatusBar } from "expo-status-bar";
import Navigations from "./src/navigations";
import React, { useEffect } from "react";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import store from "./src/store";
import moment from "moment";
import "moment/locale/tr";
import "moment/locale/en-gb";
import "./src/configs/i18n";
import { getLocales } from "expo-localization";

export default function App() {
  const deviceLanguage = getLocales()[0].languageCode;

  useEffect(() => {
    deviceLanguage === "tr" ? moment.locale("tr") : moment.locale("en-gb");
  }, []);

  return (
    <Provider store={store}>
      <Navigations />
      <StatusBar style="light" />
      <Toast />
    </Provider>
  );
}
