import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface CategoriesProps {
  Title: string;
  onSelectItem: (title: string) => void;
  isSelected: boolean;
}

export default function Categories({
  Title,
  onSelectItem,
  isSelected,
}: CategoriesProps) {
  const handlePress = () => {
    onSelectItem(Title);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`mr-2 border border-cinza1 py-3 px-8 rounded-2xl ${
        isSelected ? "bg-marca2 font-bold border-maindark" : ""
      }`}
      style={{ alignSelf: "flex-start" }}
    >
      <Text
        className={`text-dark1 text-base font-normal text-center ${
          isSelected ? "font-bold" : ""
        }`}
      >
        {Title}
      </Text>
    </TouchableOpacity>
  );
}
