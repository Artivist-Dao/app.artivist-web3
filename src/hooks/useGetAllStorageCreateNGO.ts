import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function GetAllStorageCreateNGO(): Promise<StorageData> {
  try {
    const corporateName = await AsyncStorage.getItem("corporateName");
    const address = await AsyncStorage.getItem("address");
    const postalCode = await AsyncStorage.getItem("postalCode");
    const phoneNumber = await AsyncStorage.getItem("phoneNumber");
    const description = await AsyncStorage.getItem("description");
    const picture = await AsyncStorage.getItem("picture");

    return {
      picture: picture,
      corporateName: corporateName,
      address: address,
      postalCode: postalCode,
      phoneNumber: phoneNumber,
      description: description,
    };
  } catch (error) {
    console.error("Erro ao obter os valores do storage:", error);
    return {
      corporateName: null,
      address: null,
      postalCode: null,
      phoneNumber: null,
      description: null,
      picture: null,
    };
  }
}
