import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "../components/Button";
import Wrapper from "../layouts/wrapper";
import LogoPrimary from "../../assets/brand/logoPrimary.png";
import { SubButton } from "../components/SubButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import GetAllStorageCreateNGO from "../hooks/useGetAllStorageCreateNGO";
import GoBack from "../components/GoBack";
import Subtitle from "../components/Titles/Subtitle";
import { AntDesign } from "@expo/vector-icons";
import WrapperNotScroll from "../layouts/wrapperNotScroll";

export function ProfileNGO({ navigation }) {
  const [corporatePhoto, setCorporatePhoto] = useState<string | null>(null);
  const [corporateName, setCorporateName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");

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
  return (
    <>
      <Wrapper>
        <View className="mt-10 flex-row items-center">
          <TouchableOpacity
            className="rounded-lg p-2 bg-branco items-center justify-center"
            onPress={() => navigation.navigate("HomeNGO")}
          >
            <AntDesign name="left" size={24} color="#1B941F" />
          </TouchableOpacity>

          <View className="ml-4">
            <Image className="h-10 w-32" source={LogoPrimary} />
          </View>
        </View>
        <View className="mt-7 bg-dark2 justify-center items-center rounded-3xl py-6">
          <View className="h-32 w-32 bg-marca2 items-center rounded-full justify-center">
            <Image
              className="h-full w-full rounded-full"
              source={{ uri: corporatePhoto }}
            />
          </View>

          <Subtitle
            ClassName="text-center mt-2 text-branco"
            Title={corporateName}
          />
          <Text className="text-cinza3 text-lg mt-2 font-regular">
            {postalCode}
          </Text>
          <Text className="text-cinza1 text-lg mt-2 font-regular text-justify w-56">
            {description}
          </Text>
        </View>
        <View className="flex-row bg-tertiary rounded-2xl justify-around items-center py-2 mt-7">
          <View className="justify-center items-center">
            <Text className="font-regular text-lg text-[#4B4B4B]">Artists</Text>
            <Text className="font-bold text-lg text-[#4B4B4B]">0</Text>
          </View>
          <View className="justify-center items-center">
            <Text className="font-regular text-lg text-[#4B4B4B]">
              Campaigns
            </Text>
            <Text className="font-bold text-lg text-[#4B4B4B]">0</Text>
          </View>
          <View className="justify-center items-center">
            <Text className="font-regular text-lg text-[#4B4B4B]">NFTs</Text>
            <Text className="font-bold text-lg text-[#4B4B4B]">0</Text>
          </View>
        </View>
      </Wrapper>
      <View className="bg-branco absolute bottom-0 justify-center right-0 left-0">
        <WrapperNotScroll>
          <Button
            hasIcon
            styleType={2}
            Title={"Create your first Campaign"}
            isLoading={false}
            onPress={() => navigation.navigate("CreateCampaign")}
          />
        </WrapperNotScroll>
      </View>
    </>
  );
}
