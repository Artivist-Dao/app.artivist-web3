import { View, Image, ActivityIndicator } from "react-native";
import iconSecondary from "../../assets/brand/iconSecondary.png";

export default function Loader() {
  return (
    <View className="justify-center items-center h-full bg-maindark">
      <Image className="h-32 w-32" source={iconSecondary} />

      <ActivityIndicator size="large" color="#f9f9f9" className="mt-10" />
    </View>
  );
}
