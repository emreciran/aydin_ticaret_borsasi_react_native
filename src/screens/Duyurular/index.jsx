import { ImageBackground } from "react-native";
import React from "react";
import DuyuruList from "./components/DuyuruList";
import Logo from "../../../assets/logo-atb.png";
import Logo2 from "../../../assets/logo.png";

const Duyurular = () => {
  const data = [
    {
      id: 1,
      title: "denemedenemedenemeddadsadas",
      date: "14.03.2023",
      details: "deneme",
      image: require('../../../assets/logo.png')
    },
    {
      id: 2,
      title: "deneme2",
      date: "14.03.2023",
      details: "deneme2",
      image: require('../../../assets/logo-atb.png')
    },
    {
      id: 3,
      title: "deneme3",
      date: "14.03.2023",
      details: "deneme3",
      image: require('../../../assets/logo.png')
    },
    {
      id: 1,
      title: "deneme",
      date: "14.03.2023",
      details: "deneme",
      image: require('../../../assets/logo.png')
    },
    {
      id: 2,
      title: "deneme2",
      date: "14.03.2023",
      details: "deneme2",
      image: require('../../../assets/logo.png')
    },
    {
      id: 3,
      title: "deneme3",
      date: "14.03.2023",
      details: "deneme3",
      image: require('../../../assets/logo.png')
    },
    {
      id: 1,
      title: "deneme",
      date: "14.03.2023",
      details: "deneme",
      image: require('../../../assets/logo.png')
    },
    {
      id: 2,
      title: "deneme2",
      date: "14.03.2023",
      details: "deneme2",
      image: require('../../../assets/logo.png')
    },
    {
      id: 3,
      title: "deneme3",
      date: "14.03.2023",
      details: "deneme3",
      image: require('../../../assets/logo.png')
    },
    {
      id: 1,
      title: "deneme",
      date: "14.03.2023",
      details: "deneme",
      image: require('../../../assets/logo.png')
    },
    {
      id: 2,
      title: "deneme2",
      date: "14.03.2023",
      details: "deneme2",
      image: require('../../../assets/logo.png')
    },
    {
      id: 3,
      title: "deneme3",
      date: "14.03.2023",
      details: "deneme3",
      image: require('../../../assets/logo.png')
    },
    {
      id: 1,
      title: "deneme",
      date: "14.03.2023",
      details: "deneme",
      image: require('../../../assets/logo.png')
    },
    {
      id: 2,
      title: "deneme2",
      date: "14.03.2023",
      details: "deneme2",
      image: require('../../../assets/logo.png')
    },
    {
      id: 3,
      title: "deneme3",
      date: "14.03.2023",
      details: "deneme3",
      image: require('../../../assets/logo.png')
    },
  ];

  return (
    <ImageBackground
      source={Logo}
      resizeMode="contain"
      imageStyle={{ opacity: 0.5 }}
      style={{ flex: 1 }}
    >
      <DuyuruList data={data} />
    </ImageBackground>
  );
};

export default Duyurular;
