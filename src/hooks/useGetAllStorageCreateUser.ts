import AsyncStorage from "@react-native-async-storage/async-storage";

interface StorageDataUser {
  name: string | null;
  email: string | null;
  password: string | null;
}

export default async function GetAllStorageCreateUser(): Promise<StorageDataUser> {
  try {
    const name = await AsyncStorage.getItem("nameUser");
    const email = await AsyncStorage.getItem("emailUser");
    const password = await AsyncStorage.getItem("passwordUser");

    return {
      name: name,
      email: email,
      password: password,
    };
  } catch (error) {
    console.error("Erro ao obter os valores do storage:", error);
    return {
      name: null,
      email: null,
      password: null,
    };
  }
}
