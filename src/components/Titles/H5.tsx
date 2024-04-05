import { Text } from "react-native";
interface H5Props {
  Title: string;
}

export default function H6({ Title }: H5Props) {
  return (
<Text className="text-4xl font-semibold">{Title}</Text>  );
}