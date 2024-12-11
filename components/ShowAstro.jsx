import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const ShowAstro = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: data.links[0].href,
        }}
      />
      <Text style={styles.font}>Título: {data.data[0].title}</Text>
      <Text style={styles.font}>Descrição: {data.data[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    marginVertical: 20,
    width: "auto",
    height: 300,
  },
  font: {
    fontWeight: "bold",
  },
});
