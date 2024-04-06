import { View, Text, TouchableOpacity, Image } from "react-native";
import { styled } from "nativewind";
import { AntDesign } from "@expo/vector-icons";
const LogoPrimary = require("../../../assets/brand/iconPrimary.png");
import React from "react";

export default function Header() {
  return (
    <View>
      <Image
        className=""
        source={LogoPrimary}
      />
    </View>
  );
}
