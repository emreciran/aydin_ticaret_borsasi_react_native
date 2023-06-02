import { truncate } from "lodash";
import { useTranslation } from "react-i18next";

const MarketLinksConfig = () => {
  const { t } = useTranslation();

  const links = {
    mainLinks: [
      { title: truncate(t("market.links.pamuk.main"), { length: 25 }), id: 1 },
      {
        title: truncate(t("market.links.kuru_uzum.main"), { length: 25 }),
        id: 2,
      },
      {
        title: truncate(t("market.links.haftalik_piyasa_yorum.main"), {
          length: 25,
        }),
        id: 3,
      },
    ],
    subLinks: {
      pamuk_piyasasi: [
        {
          title: truncate(t("market.links.pamuk.anlik_salon_veri"), {
            length: 25,
          }),
          id: 1,
        },
        {
          title: truncate(t("market.links.pamuk.referans_fiyat"), {
            length: 25,
          }),
          id: 2,
        },
        {
          title: truncate(t("market.links.pamuk.dünya_pamuk_veri"), {
            length: 25,
          }),
          id: 3,
        },
      ],
      kuru_uzum_piyasasi: [
        {
          title: truncate(t("market.links.kuru_uzum.anlik_salon_veri"), {
            length: 25,
          }),
          id: 1,
        },
        {
          title: truncate(t("market.links.kuru_uzum.referans_fiyat"), {
            length: 25,
          }),
          id: 2,
        },
        {
          title: truncate(t("market.links.kuru_uzum.endeks"), { length: 20 }),
          id: 3,
        },
      ],
      haftalik_piyasa_yorumlari: [
        {
          title: truncate(
            t("market.links.haftalik_piyasa_yorum.pamuk_piyasa_yorum"),
            { length: 25 }
          ),
          id: 1,
          href: "CottonMarketComments",
        },
        {
          title: truncate(
            t("market.links.haftalik_piyasa_yorum.ceksiz_kuru_uzum_yorum"),
            { length: 25 }
          ),
          id: 2,
          href: "GrapeMarketComments",
        },
      ],
    },
  };

  return links;
};

export default MarketLinksConfig;
