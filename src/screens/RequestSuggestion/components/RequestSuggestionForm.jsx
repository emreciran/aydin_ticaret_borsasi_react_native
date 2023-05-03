import { View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";

const RequestSuggestionForm = ({
  values,
  setValues,
  handleSubmitForm,
  loading,
}) => {
  return (
    <View style={{ padding: 15 }}>
      <View style={{ gap: 12 }}>
        <TextInput
          placeholder="Adınız Soyadınız"
          mode="outlined"
          activeOutlineColor="#2F58CD"
          onChangeText={(text) =>
            setValues({
              ...values,
              nameSurname: text,
            })
          }
        />
        <PhoneInput
          // ref={phoneInput}
          defaultCode="TR"
          layout="first"
          placeholder="Telefon"
          textContainerStyle={{ backgroundColor: "#fff" }}
          textInputStyle={{ backgroundColor: "#fff" }}
          containerStyle={{
            width: "100%",
            borderColor: "#000",
            borderWidth: 0.54,
            borderRadius: 5,
          }}
          onChangeFormattedText={(text) => {
            setValues({
              ...values,
              phone: text,
            });
          }}
        />
        <TextInput
          mode="outlined"
          placeholder="E-posta"
          keyboardType="email-address"
          activeOutlineColor="#2F58CD"
          onChangeText={(text) =>
            setValues({
              ...values,
              email: text,
            })
          }
        />
        <TextInput
          placeholder="Mesaj"
          multiline
          numberOfLines={4}
          maxLength={100}
          mode="outlined"
          activeOutlineColor="#2F58CD"
          onChangeText={(text) =>
            setValues({
              ...values,
              message: text,
            })
          }
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button
          mode="contained"
          icon="message"
          buttonColor="#2F58CD"
          loading={loading}
          disabled={loading ? true : false}
          onPress={() => handleSubmitForm()}
        >
          Gönder
        </Button>
      </View>
    </View>
  );
};

export default RequestSuggestionForm;
