import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function SetAllStorageCreateNGO({
  picture,
  corporateName,
  address,
  postalCode,
  phoneNumber,
  description,
}: AllStorageProps): Promise<void> {
  try {
    await AsyncStorage.setItem("picture", picture);
    await AsyncStorage.setItem("corporateName", corporateName);
    await AsyncStorage.setItem("address", address);
    await AsyncStorage.setItem("postalCode", postalCode);
    await AsyncStorage.setItem("phoneNumber", phoneNumber);
    await AsyncStorage.setItem("description", description);
  } catch (error) {
    console.error("Erro ao definir todos os valores no storage:", error);
  }
}
