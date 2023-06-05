import { truncate } from "lodash";
import { useTranslation } from "react-i18next";

const settingsConfig = () => {
  const { t } = useTranslation();

  const data = {
    pamuk: [
      {
        id: 1,
        name: truncate(t("settings.pamuk.subtitle.referans_fiyat"), {
          length: 50,
        }),
      },
      {
        id: 2,
        name: truncate(t("settings.pamuk.subtitle.dünya_pamuk"), {
          length: 50,
        }),
      },
      {
        id: 3,
        name: truncate(t("settings.pamuk.subtitle.haftalik_pamuk_yorum"), {
          length: 50,
        }),
      },
      {
        id: 4,
        name: truncate(t("settings.pamuk.subtitle.gunluk_pamuk"), {
          length: 50,
        }),
      },
      {
        id: 5,
        name: truncate(t("settings.pamuk.subtitle.aylik_pamuk"), {
          length: 50,
        }),
      },
    ],
    ceksiz_kuru_uzum: [
      {
        id: 1,
        name: truncate(t("settings.ceksiz_kuru_uzum.subtitle.referans_fiyat"), {
          length: 50,
        }),
      },
      {
        id: 2,
        name: truncate(
          t("settings.ceksiz_kuru_uzum.subtitle.haftalik_kuru_uzum_yorum"),
          { length: 50 }
        ),
      },
      {
        id: 3,
        name: truncate(t("settings.ceksiz_kuru_uzum.subtitle.aylik_uzum"), {
          length: 50,
        }),
      },
    ],
    tescil_bulten: [
      {
        id: 1,
        name: truncate(t("settings.tescil_bulten.subtitle.gunluk_tescil"), {
          length: 50,
        }),
      },
      {
        id: 2,
        name: truncate(t("settings.tescil_bulten.subtitle.haftalik_tescil"), {
          length: 50,
        }),
      },
      {
        id: 3,
        name: truncate(t("settings.tescil_bulten.subtitle.aylik_tescil"), {
          length: 50,
        }),
      },
    ],
    aylik_finans_emtia: [
      {
        id: 1,
        name: truncate(t("settings.aylik_finans_emtia.subtitle.aylik_emtia"), {
          length: 50,
        }),
      },
      {
        id: 2,
        name: truncate(t("settings.aylik_finans_emtia.subtitle.aylik_finans"), {
          length: 50,
        }),
      },
      {
        id: 3,
        name: truncate(
          t("settings.aylik_finans_emtia.subtitle.aylik_dis_ticaret"),
          { length: 50 }
        ),
      },
    ],
    duyuru: [
      {
        id: 1,
        name: truncate(t("settings.duyuru.subtitle.duyurular"), { length: 50 }),
      },
    ],
    haber: [
      {
        id: 1,
        name: truncate(t("settings.haber.subtitle.haberler"), { length: 50 }),
      },
    ],
    etkinlik_takvimi: [
      {
        id: 1,
        name: truncate(t("settings.etkinlik_takvimi.subtitle.etkinlik"), {
          length: 50,
        }),
      },
    ],
    dergi: [
      {
        id: 1,
        name: truncate(t("settings.dergi.subtitle.dergiler"), { length: 50 }),
      },
    ],
  };

  return data;
};

export default settingsConfig;
