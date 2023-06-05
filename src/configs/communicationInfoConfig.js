import { useTranslation } from "react-i18next";

const communicationInfoConfig = () => {
  const { t } = useTranslation();

  const data = [
    {
      name: t("communication.adres"),
      value: "Ata Mah. 738 Sk. No:2 Efeler / AYDIN",
    },
    { name: t("communication.telefon"), value: "+90 (256) 211 50 00" },
    { name: t("communication.fax"), value: "0 (256) 211 63 15" },
    {
      name: t("communication.email"),
      value: "info@aydinticaretborsasi.org.tr",
    },
  ];

  return data;
};

export default communicationInfoConfig;
