import React from "react";
import { Text } from "react-native";

interface H6Props {
  Title: string;
}

export default function H6({ Title }: H6Props) {
  return <Text className="text-3xl font-semibold w-80">{Title}</Text>;
}
