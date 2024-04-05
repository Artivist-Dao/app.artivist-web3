import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

interface CardsSearchArtistProps {
  name: string;
  local: string;
  urlPicture: string;
  isSelected: boolean;
  onSelect: () => void;
}

export default function CardsSearchArtist({
  name,
  local,
  urlPicture,
  isSelected,
  onSelect,
}: CardsSearchArtistProps) {
  const handleSelect = () => {
    if (!isSelected) {
      onSelect();
    }
  };

  return (
    <TouchableOpacity
      className={`mt-3 border p-3 rounded-2xl flex-row items-center justify-between ${
        isSelected ? "border-maindark bg-tertiary" : "border-cinza2 bg-branco"
      }`}
      onPress={handleSelect}
    >
      <View className="flex-row items-center">
        <Image
          className="h-12 w-12 rounded-full"
          source={{ uri: urlPicture }}
        />
        <View className="ml-2">
          <Text className="font-bold text-dark1 text-lg">{name}</Text>
          <Text className="font-medium text-cinza1 text-sm">{local}</Text>
        </View>
      </View>
      {!isSelected && (
        <View className="border-2 border-dark3 w-5 h-5 rounded-full m-1"></View>
      )}
      {isSelected && <Feather name="check-circle" size={24} color="#1B941F" />}
    </TouchableOpacity>
  );
}
