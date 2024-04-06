import { View, Image, ActivityIndicator } from "react-native";
import React from "react";

export default function Loader() {
  const iconSecondary = require("../../assets/brand/iconSecondary.png");

  return (
    <View className="justify-center items-center h-full bg-maindark">
      <Image className="h-32 w-32" source={iconSecondary} />

      <ActivityIndicator size="large" color="#f9f9f9" className="mt-10" />
    </View>
  );
}
