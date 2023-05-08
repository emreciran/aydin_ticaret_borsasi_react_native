import { View, Text } from "react-native";
import React from "react";
import communicationInfoConfig from "../../../configs/communicationInfoConfig";
import styles from "../styles/CommunicationInfo";
import { List } from "react-native-paper";

const CommunicationInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        {/* <List.Item
          title="Adres"
          description={communicationInfoConfig.address}
          left={(props) => <List.Icon {...props} icon="home" />}
        /> */}
        <Text style={styles.text}>Adres       : </Text>
        <Text style={styles.text}>{communicationInfoConfig.address}</Text>
      </View>
      <View style={styles.item}>
        {/* <List.Item
          title="Telefon"
          left={(props) => <List.Icon {...props} icon="phone" />}
        /> */}
        <Text style={styles.text}>Telefon : </Text>
        <View>
          <Text style={styles.text}>{communicationInfoConfig.phone1}</Text>
          <Text style={styles.text}>{communicationInfoConfig.phone2}</Text>
        </View>
      </View>
      <View style={styles.item}>
        {/* <List.Item
          title="Fax"
          left={(props) => <List.Icon {...props} icon="phone" />}
        /> */}
        <Text style={styles.text}>Fax : </Text>
        <Text style={styles.text}>{communicationInfoConfig.fax}</Text>
      </View>
      <View style={styles.item}>
        {/* <List.Item
          title="E-mail"
          left={(props) => <List.Icon {...props} icon="email" />}
        /> */}
        <Text style={styles.text}>E-mail : </Text>
        <Text style={styles.text}>{communicationInfoConfig.email}</Text>
      </View>
    </View>
  );
};

export default CommunicationInfo;
