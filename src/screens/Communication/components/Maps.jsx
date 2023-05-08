import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";

const Maps = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.840639351552554,
          longitude: 27.85437224778698,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
