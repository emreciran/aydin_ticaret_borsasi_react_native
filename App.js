import { StatusBar } from "expo-status-bar";
import Navigations from "./src/navigations";
import React from "react";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigations />
      <StatusBar style="light" />
      <Toast />
    </Provider>
  );
}
