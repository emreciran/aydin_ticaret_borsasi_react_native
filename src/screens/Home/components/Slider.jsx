import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "../styles/Slider";
import AutoScroll from "@homielab/react-native-auto-scroll";
import axios from "axios";

const Slider = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res1 = await axios.get(
        `https://api.exchangerate.host/convert?from=USD&to=TRY`
      );
      const res2 = await axios.get(
        `https://api.exchangerate.host/convert?from=EUR&to=TRY`
      );
      const res3 = await axios.get(
        `https://api.exchangerate.host/convert?from=GBP&to=TRY`
      );
      const res4 = await axios.get(
        `https://api.exchangerate.host/convert?from=USD&to=EUR`
      );

      setData([
        {
          data: res1.data.query.from + "/" + res1.data.query.to,
          value: res1.data.result,
        },
        {
          data: res2.data.query.from + "/" + res2.data.query.to,
          value: res2.data.result,
        },
        {
          data: res3.data.query.from + "/" + res3.data.query.to,
          value: res3.data.result,
        },
        {
          data: res4.data.query.from + "/" + res4.data.query.to,
          value: res4.data.result,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  useState(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <AutoScroll delay={0} duration={12000}>
        <View style={styles.slider}>
          {data.map((item, i) => (
            <View style={styles.data} key={i}>
              <Text style={styles.title}>{item.data}</Text>
              <Text>{item.value}</Text>
            </View>
          ))}
        </View>
      </AutoScroll>
    </View>
  );
};

export default Slider;
