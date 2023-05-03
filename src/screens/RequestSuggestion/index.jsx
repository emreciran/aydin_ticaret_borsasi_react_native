import { View } from "react-native";
import React, { useState } from "react";
import RequestSuggestionForm from "./components/RequestSuggestionForm";
import RequestSuggestionService from "../../services/requestSuggestionService";
import useToast from "../../hooks/useToast";
import moment from "moment";

const RequestSuggestion = () => {
  const createdDate = moment().format("L LT");

  const [values, setValues] = useState({
    nameSurname: "",
    phone: "",
    email: "",
    message: "",
    createdDate,
    status: false,
    replyBy: "",
    reply: "",
    replyDate: "",
  });

  const [_showToast] = useToast();

  const [loading, setLoading] = useState(false);

  const handleSubmitForm = () => {
    setLoading(true);
    RequestSuggestionService.newRequestSuggestion(values)
      .then((response) => {
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
    <View>
      <RequestSuggestionForm
        values={values}
        setValues={setValues}
        handleSubmitForm={handleSubmitForm}
        loading={loading}
      />
    </View>
  );
};

export default RequestSuggestion;
