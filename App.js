import { StatusBar } from 'expo-status-bar';
import Navigations from './src/navigations';
import React from 'react';

export default function App() {
  return (
    <>
      <Navigations />
      <StatusBar style="light" />
    </>
  );
}
