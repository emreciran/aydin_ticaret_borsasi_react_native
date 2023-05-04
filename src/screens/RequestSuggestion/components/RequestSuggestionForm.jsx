import { View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";
import { Formik } from "formik";
import RequestSuggestionService from "../../../services/requestSuggestionService";
import useToast from "../../../hooks/useToast";
import { RequestSuggestionSchema } from "../../../validations";
import ErrorMessage from "../../../components/ErrorMessage";
import moment from "moment";

const RequestSuggestionForm = () => {
  const [loading, setLoading] = useState(false);
  const [_showToast] = useToast();

  const createdDate = moment().format("L LT");

  const initialValues = {
    nameSurname: "",
    phone: "",
    email: "",
    message: "",
  };

  const handleSubmitForm = (values) => {
    setLoading(true);
    const data = {
      ...values,
      createdDate,
      status: false,
      replyBy: "",
      reply: "",
      replyDate: "",
    };

    RequestSuggestionService.newRequestSuggestion(data)
      .then(() => {
        _showToast.showToast("Başarılı", "Talep gönderildi.", "success");
      })
      .catch((error) => {
        _showToast.showToast("Hata!", "Talep gönderilemedi.", "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
      validationSchema={RequestSuggestionSchema}
    >
      {({
        values,
        errors,
        handleSubmit,
        touched,
        handleChange,
        handleBlur,
        dirty,
        isSubmitting,
      }) => (
        <View style={{ padding: 15 }}>
          <View style={{ gap: 12 }}>
            <TextInput
              placeholder="Adınız Soyadınız"
              mode="outlined"
              value={values.nameSurname}
              activeOutlineColor="#2F58CD"
              onBlur={handleBlur("nameSurname")}
              onChangeText={handleChange("nameSurname")}
            />
            {errors.nameSurname && touched.nameSurname && (
              <ErrorMessage error={errors.nameSurname} />
            )}
            <PhoneInput
              // ref={phoneInput}
              defaultCode="TR"
              layout="first"
              placeholder="Telefon"
              value={values.phone}
              textContainerStyle={{ backgroundColor: "#fff" }}
              textInputStyle={{ backgroundColor: "#fff" }}
              containerStyle={{
                width: "100%",
                borderColor: "#000",
                borderWidth: 0.54,
                borderRadius: 5,
              }}
              onBlur={handleBlur("phone")}
              onChangeFormattedText={handleChange("phone")}
            />
            {errors.phone && touched.phone && (
              <ErrorMessage error={errors.phone} />
            )}
            <TextInput
              mode="outlined"
              placeholder="E-posta"
              value={values.email}
              keyboardType="email-address"
              activeOutlineColor="#2F58CD"
              onBlur={handleBlur("email")}
              onChangeText={handleChange("email")}
            />
            {errors.email && touched.email && (
              <ErrorMessage error={errors.email} />
            )}
            <TextInput
              placeholder="Mesaj"
              multiline
              numberOfLines={4}
              maxLength={100}
              value={values.message}
              mode="outlined"
              activeOutlineColor="#2F58CD"
              onBlur={handleBlur("message")}
              onChangeText={handleChange("message")}
            />
            {errors.message && touched.message && (
              <ErrorMessage error={errors.message} />
            )}
          </View>
          <View style={{ marginTop: 10 }}>
            <Button
              mode="contained"
              icon="message"
              buttonColor="#2F58CD"
              loading={loading}
              disabled={loading ? true : false}
              onPress={handleSubmit}
            >
              Gönder
            </Button>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default RequestSuggestionForm;
