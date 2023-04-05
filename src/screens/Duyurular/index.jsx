import { ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import DuyuruList from "./components/DuyuruList";
import Logo from "../../../assets/logo-atb.png";
import axios from "../../axios";
import AnnouncementService from "../../services/announcementService";

const Duyurular = () => {
  const [datas, setDatas] = useState();

  const getDuyuruData = async () => {
    // await axios
    //   .get("/announcements?page=1&limit=10")
    //   .then((response) => {
    //     setDatas(res.data);
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    AnnouncementService.getAnnouncements()
      .then((response) => {
        setDatas(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDuyuruData();
  }, []);

  return (
    <ImageBackground
      source={Logo}
      resizeMode="contain"
      imageStyle={{ opacity: 0.5 }}
      style={{ flex: 1 }}
    >
      <DuyuruList data={datas?.announcements} />
    </ImageBackground>
  );
};

export default Duyurular;
