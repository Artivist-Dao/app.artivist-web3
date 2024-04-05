import React from "react";
import { Text } from "react-native";

interface SubtitleProps {
  Title: string;
  ClassName?: string;
}

export default function Subtitle({ Title, ClassName }: SubtitleProps) {
  return (
    <Text className={`text-2xl font-semibold w-72 ${ClassName}`}>
      {Title}
    </Text>
  );
}
