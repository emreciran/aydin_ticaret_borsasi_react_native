import { ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import DuyuruList from "./components/DuyuruList";
import Logo from "../../../assets/logo-atb.png";
import axios from "../../axios";

const Duyurular = () => {
  const [datas, setDatas] = useState();

  const getDuyuruData = async () => {
    const res = await axios.get("/announcements");
    setDatas(res.data);
  };

  useEffect(() => {
    getDuyuruData();
  }, []);
  
console.log(datas);
  return (
    <ImageBackground
      source={Logo}
      resizeMode="contain"
      imageStyle={{ opacity: 0.5 }}
      style={{ flex: 1 }}
    >
      <DuyuruList data={datas} />
    </ImageBackground>
  );
};

export default Duyurular;
