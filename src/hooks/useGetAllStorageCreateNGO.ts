import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function GetAllStorageCreateNGO(): Promise<StorageData> {
  try {
    const corporateName = await AsyncStorage.getItem("corporateName");
    const city = await AsyncStorage.getItem("city");
    const country = await AsyncStorage.getItem("country");
    const phoneNumber = await AsyncStorage.getItem("phoneNumber");
    const description = await AsyncStorage.getItem("description");
    const picture = await AsyncStorage.getItem("picture");

    return {
      picture: picture,
      corporateName: corporateName,
      city: city,
      country: country,
      phoneNumber: phoneNumber,
      description: description,
    };
  } catch (error) {
    console.error("Erro ao obter os valores do storage:", error);
    return {
      corporateName: null,
      city: null,
      country: null,
      phoneNumber: null,
      description: null,
      picture: null,
    };
  }
}
