import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function SetAllStorageCreateNGO({
  picture,
  corporateName,
  city,
  country,
  phoneNumber,
  description,
}: AllStorageProps): Promise<void> {
  try {
    await AsyncStorage.setItem("picture", picture);
    await AsyncStorage.setItem("corporateName", corporateName);
    await AsyncStorage.setItem("city", city);
    await AsyncStorage.setItem("country", country);
    await AsyncStorage.setItem("phoneNumber", phoneNumber);
    await AsyncStorage.setItem("description", description);
  } catch (error) {
    console.error("Erro ao definir todos os valores no storage:", error);
  }
}
