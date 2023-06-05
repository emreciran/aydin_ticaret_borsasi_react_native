import { View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { Formik } from "formik";
import RequestSuggestionService from "../../../services/requestSuggestionService";
import useToast from "../../../hooks/useToast";
import { RequestSuggestionSchema } from "../../../validations";
import ErrorMessage from "../../../components/ErrorMessage";
import moment from "moment";
import MaskInput from "react-native-mask-input";
import { useTranslation } from "react-i18next";

const RequestSuggestionForm = () => {
  const [loading, setLoading] = useState(false);
  const [_showToast] = useToast();
  const { t } = useTranslation();

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
        _showToast.showToast("Başarılı", t("req_sugg.basarili"), "success");
      })
      .catch(() => {
        _showToast.showToast("Hata!", t("req_sugg.hata"), "error");
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
              placeholder={t("req_sugg.ad_soyad")}
              mode="outlined"
              value={values.nameSurname}
              activeOutlineColor="#2F58CD"
              onBlur={handleBlur("nameSurname")}
              onChangeText={handleChange("nameSurname")}
            />
            {errors.nameSurname && touched.nameSurname && (
              <ErrorMessage error={errors.nameSurname} />
            )}
            <TextInput
              mode="outlined"
              activeOutlineColor="#2F58CD"
              keyboardType="number-pad"
              value={values.phone}
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              placeholder={t("req_sugg.telefon")}
              render={(props) => (
                <MaskInput
                  {...props}
                  mask={[
                    "(",
                    /\d/,
                    /\d/,
                    /\d/,
                    ")",
                    " ",
                    /\d/,
                    /\d/,
                    /\d/,
                    " ",
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                  ]}
                  value={values.phone}
                  onChangeText={handleChange("phone")}
                />
              )}
            />

            {errors.phone && touched.phone && (
              <ErrorMessage error={errors.phone} />
            )}
            <TextInput
              mode="outlined"
              placeholder={t("req_sugg.email")}
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
              placeholder={t("req_sugg.mesaj")}
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
              {t("req_sugg.gonder")}
            </Button>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default RequestSuggestionForm;
