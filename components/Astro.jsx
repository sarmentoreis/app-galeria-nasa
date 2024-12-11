import React from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export const Astro = ({ astro, setAstro }) => {
  return (
    <View style={styles.container}>
      <Picker style={styles.input} value={astro} onValueChange={setAstro}>
        <Picker.Item label="Selecione um astro" value={""} />
        <Picker.Item label="Mercúrio" value={"mercury"} />
        <Picker.Item label="Vênus" value={"venus"} />
        <Picker.Item label="Terra" value={"earth"} />
        <Picker.Item label="Lua" value={"moon"} />
        <Picker.Item label="Marte" value={"mars"} />
        <Picker.Item label="Júpiter" value={"jupiter"} />
        <Picker.Item label="Saturno" value={"saturn"} />
        <Picker.Item label="Urano" value={"uranus"} />
        <Picker.Item label="Netuno" value={"neptune"} />
        <Picker.Item label="Plutão" value={"pluto"} />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
  },
  input: {
    margin: 5,
    padding: 5,
  },
});
