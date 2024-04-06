import React from "react";
import { Text } from "react-native";
interface H5Props {
  Title: string;
  className: string;
}

export default function H6({ Title, className }: H5Props) {
  return <Text className={`text-4xl font-semibold ${className}`}>{Title}</Text>;
}
