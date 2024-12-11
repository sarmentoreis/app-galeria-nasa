import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Galeria } from "./screens/Galeria";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
        initialRouteName="Galeria Nasa"
      >
        <Stack.Screen name="Galeria Nasa" component={Galeria} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
