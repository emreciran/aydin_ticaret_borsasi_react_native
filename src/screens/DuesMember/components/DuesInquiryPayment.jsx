import { View, Text } from "react-native";
import styles from "../styles/MemberInquiry";
import { TextInput, Button, Checkbox } from "react-native-paper";
import React, { useState } from "react";

const DuesInquiryPayment = () => {
  const [sicilNo, setSicilNo] = useState("");
  const [sifre, setSifre] = useState("");

  return (
    <View style={{ padding: 15 }}>
      <Text style={{ textAlign: "justify", color: "#333" }}>
        Borç dökümünüzü görmek için üye sicil numaranızı ve e-posta adresinize
        gönderilen şifreyi yazıp{" "}
        <Text style={{ fontWeight: "700" }}>Borç Sorgula</Text> düğmesine
        basınız.
      </Text>
      <View style={styles.container}>
        <Text style={styles.text}>Üye Sicil No</Text>
        <TextInput
          placeholder="Üye sicil numaranızı giriniz"
          mode="outlined"
          style={{ width: "65%" }}
          activeOutlineColor="#2F58CD"
          value={sicilNo}
          onChangeText={(text) => setSicilNo(text)}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Şifre</Text>
        <TextInput
          placeholder="Şifrenizi giriniz"
          mode="outlined"
          style={{ width: "65%" }}
          activeOutlineColor="#2F58CD"
          value={sifre}
          secureTextEntry
          onChangeText={(text) => setSifre(text)}
        />
      </View>
      <View>
        <Button
          mode="contained"
          buttonColor="#2F58CD"
          style={{ marginTop: 14 }}
        >
          Borç Sorgula
        </Button>
      </View>
      <View style={{ marginTop: 20, gap: 15 }}>
        <Text style={{ textAlign: "justify", color: "#333" }}>
          Üye sicil numaranızı bilmiyorsanız bulmak için{" "}
          <Text style={{ fontWeight: "700" }}>tıklayınız.</Text>
        </Text>
        <Text style={{ textAlign: "justify", color: "#333" }}>
          Üye sicil numaranızı bilmiyorsanız bulmak için{" "}
          <Text style={{ fontWeight: "700" }}>tıklayınız.</Text>
        </Text>
        <Text style={{ textAlign: "justify", color: "#333" }}>
          Üye sicil numaranızı bilmiyorsanız bulmak için{" "}
          <Text style={{ fontWeight: "700" }}>tıklayınız.</Text>
        </Text>
      </View>
    </View>
  );
};

export default DuesInquiryPayment;
