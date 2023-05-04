import * as Yup from "yup";

const phoneRegExp =
  /^(\+90|0)?\s*(\(\d{3}\)[\s-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}|\(\d{3}\)[\s-]*\d{3}[\s-]*\d{4}|\(\d{3}\)[\s-]*\d{7}|\d{3}[\s-]*\d{3}[\s-]*\d{4}|\d{3}[\s-]*\d{3}[\s-]*\d{2}[\s-]*\d{2})$/;

export const RequestSuggestionSchema = Yup.object().shape({
  nameSurname: Yup.string()
    .required("Ad soyad alanı zorunludur!")
    .min(2, "Minimum 2 karakter olmak zorundadır!"),

  phone: Yup.string().matches(phoneRegExp, "Telefon numarası geçerli değil!"),

  email: Yup.string()
    .email("Geçerli bir email giriniz!")
    .required("Email alanı zorunludur!"),

  message: Yup.string()
    .required("Mesaj alanı zorunludur!")
    .min(5, "Mesajınız en az 5 karakter olmalıdır!")
    .max(150, "Mesajınız en fazla 150 karakter olmalıdır!"),
});
