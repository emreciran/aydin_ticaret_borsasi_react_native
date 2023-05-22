import { StatusBar } from "expo-status-bar";
import Navigations from "./src/navigations";
import React from "react";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import store from "./src/store";
import moment from "moment";
import 'moment/locale/tr'  

export default function App() {
  moment.locale("tr")
  return (
    <Provider store={store}>
      <Navigations />
      <StatusBar style="light" />
      <Toast />
    </Provider>
  );
}
