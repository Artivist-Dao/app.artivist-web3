import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "../components/Button";
import Wrapper from "../layouts/wrapper";
import LogoPrimary from "../../assets/brand/logoPrimary.png";
import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import GetAllStorageCreateNGO from "../hooks/useGetAllStorageCreateNGO";
import Subtitle from "../components/Titles/Subtitle";
import Input from "../components/Input";
import Menu from "../../assets/img/menu.png";
import WrapperNotScroll from "../layouts/wrapperNotScroll";
import ModalBottom from "../components/ModalBottom";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function HomeNGO({ navigation }) {
  const [corporatePhoto, setCorporatePhoto] = useState<string | null>(null);
  const [corporateName, setCorporateName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  const handleLogout = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao remover os itens do AsyncStorage:", error);
    }
  };
  

  const getAllStorageCreateNGO = async () => {
    try {
      const response = await GetAllStorageCreateNGO();
      setCorporatePhoto(response.picture);
      setCorporateName(response.corporateName);
      setAddress(response.address);
      setPostalCode(response.postalCode);
      setPhoneNumber(response.phoneNumber);
      setDescription(response.description);
    } catch (error) {
      console.error("Erro ao obter o dados:", error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getAllStorageCreateNGO();
    }, [navigation])
  );
  const handleSearch = (unmasked) => {
    setSearch(unmasked);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Wrapper>
        <View className="mt-8 justify-between flex-row items-center">
          <Image className="h-10 w-32" source={LogoPrimary} />
          <TouchableOpacity onPress={() => handleShow()}>
            <Image className="h-10 w-10" source={Menu} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-center mt-6">
          <View>
            <Text className="font-normal text-lg text-[#4B4B4B]">Hello,</Text>
            <Subtitle Title={corporateName + " !"} />
          </View>
          <TouchableOpacity
            className="h-16 w-16 bg-marca2 items-center rounded-full justify-center"
            onPress={() => navigation.navigate("ProfileNGO")}
          >
            <Image
              className="h-full w-full rounded-full"
              source={{ uri: corporatePhoto }}
            />
          </TouchableOpacity>
        </View>
        <View className="mt-4">
          <Input
            value={search}
            onChangeText={(masked, unmasked) => handleSearch(unmasked)}
            placeholder="Search for categories, tags..."
            maxLength={40}
          />
        </View>
      </Wrapper>
      <View className="bg-branco absolute bottom-0 justify-center right-0 left-0">
        <WrapperNotScroll>
          <Button
            hasIcon
            styleType={2}
            Title={"New Campaign"}
            isLoading={false}
            onPress={() => navigation.navigate("CreateCampaign")}
          />
        </WrapperNotScroll>
      </View>
      {show && (
        <>
         <ModalBottom show={true} onClose={() => setShow(false)}>
          <View className="justify-center items-center">
            <TouchableOpacity className="flex-row items-center justify-center py-3"  onPress={() => navigation.navigate("ProfileNGO")}>
              <Feather name="user" size={24} color="#191919" />
              <Subtitle ClassName="ml-6 w-20" Title={"Profile"} />
            </TouchableOpacity>
            <View className="h-1  bg-cinza2 w-full rounded-full"></View>
            <TouchableOpacity className="flex-row justify-center items-center py-3" onPress={() => handleLogout()}>
              <Feather name="log-out" size={24} color="#F44A4A" />
              <Subtitle ClassName="ml-6 text-error w-20" Title={"Logout"} />
            </TouchableOpacity>
          </View>
        </ModalBottom>
        </>
      )}
    </>
  );
}
