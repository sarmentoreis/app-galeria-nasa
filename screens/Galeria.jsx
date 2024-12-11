import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Astro } from "../components/Astro";
import nasaAPI from "../api/nasaAPI";
import { ShowAstro } from "../components/ShowAstro";

export const Galeria = () => {
  const [astro, setAstro] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (astro !== "") {
      async function fetchImages(astro) {
        const resp = await nasaAPI.getImages(astro, "1");
        setData(resp);
      }
      fetchImages(astro);
    }
  }, [astro]);

  return (
    <View style={styles.container}>
      <Astro astro={astro} setAstro={setAstro} />
      <ShowAstro data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
