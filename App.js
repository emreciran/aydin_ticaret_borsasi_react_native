import { StatusBar } from 'expo-status-bar';
import Navigations from './src/navigations';
import React from 'react';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
      <Navigations />
      <StatusBar style="light" />
      <Toast />
    </>
  );
}
