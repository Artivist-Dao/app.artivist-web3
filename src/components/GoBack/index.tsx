import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function GoBack({ navigation }) {
  return (
    <TouchableOpacity
    style={{alignSelf: "flex-start"}}
    className="rounded-xl p-2 bg-branco items-center justify-center"
    onPress={navigation.goBack}
  >
    <AntDesign name="left" size={24} color="#1B941F" />
  </TouchableOpacity>
  );
}