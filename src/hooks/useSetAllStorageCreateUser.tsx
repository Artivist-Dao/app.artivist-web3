import AsyncStorage from "@react-native-async-storage/async-storage";

interface AllStorageCreateUserProps {
  name: string;
  email: string;
  password: string;
}

export default async function SetAllStorageCreateUser({
  name,
  email,
  password,
}: AllStorageCreateUserProps): Promise<void> {
  try {
    await AsyncStorage.setItem("nameUser", name);
    await AsyncStorage.setItem("emailUser", email);
    await AsyncStorage.setItem("passwordUser", password);
  } catch (error) {
    console.error("Erro ao definir todos os valores no storage:", error);
  }
}
