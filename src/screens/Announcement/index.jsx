import { ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import AnnouncementList from "./components/AnnouncementList";
import Logo from "../../../assets/logo-atb.png";
import AnnouncementService from "../../services/announcementService";

const Announcement = () => {
  const [datas, setDatas] = useState();

  const getAnnouncementData = () => {

    AnnouncementService.getAnnouncements()
      .then((response) => {
        setDatas(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAnnouncementData();
  }, []);

  return (
    <ImageBackground
      source={Logo}
      resizeMode="contain"
      imageStyle={{ opacity: 0.5 }}
      style={{ flex: 1 }}
    >
      <AnnouncementList data={datas?.announcements} />
    </ImageBackground>
  );
};

export default Announcement;
