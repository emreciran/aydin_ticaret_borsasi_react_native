import { ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import DuyuruList from "./components/DuyuruList";
import Logo from "../../../assets/logo-atb.png";
import axios from "../../axios";

const Duyurular = () => {
  const [datas, setDatas] = useState();

  const getDuyuruData = async () => {
    const res = await axios.get("/announcements?page=1&limit=10");
    setDatas(res.data);
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
