import { Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

interface SubButtonProps {
  Title: string;
  onPress: () => void;
  hasIcons?: boolean;
}

function SubButtonStyled({ Title, onPress, hasIcons = true, ...rest }: SubButtonProps) {
  return (
    <TouchableOpacity className="justify-center flex-row items-center gap-2" onPress={onPress} {...rest}>
      <Text className="font-regular text-lg text-dark1">{Title}</Text>
     {hasIcons &&
     <AntDesign name="arrowright" size={24} color="#191919" />
     } 
    </TouchableOpacity>
  );
}

const SubButton = styled(SubButtonStyled);
export { SubButton };
