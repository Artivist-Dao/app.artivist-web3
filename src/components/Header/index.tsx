import { View, Text, TouchableOpacity, Image } from "react-native";
import { styled } from "nativewind";
import { AntDesign } from "@expo/vector-icons";
import LogoPrimary from "../../../assets/brand/iconPrimary.png";

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
