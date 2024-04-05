import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "../components/Button";
import Wrapper from "../layouts/wrapper";
import LogoPrimary from "../../assets/brand/logoPrimary.png";
import H6 from "../components/Titles/H6";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GoBack from "../components/GoBack";
import WrapperNotScroll from "../layouts/wrapperNotScroll";
import GetAllStorageCreateNGO from "../hooks/useGetAllStorageCreateNGO";
import Subtitle from "../components/Titles/Subtitle";
import ModalTester from "../components/Modal";

export function CreateCampaignNFTFinish({ navigation }) {
  const [campaignNft, setcampaignNft] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [valueNFT, setValueNFT] = useState("");
  const [loader, setLoader] = useState(false);
  const [categorie, setCategorie] = useState("");
  const [pictureNGO, setPictureNGO] = useState("");
  const [nameNGO, setNameNGO] = useState("");
  const [nameNFT, setNameNFT] = useState("");
  const [local, setLocal] = useState("");
  const [nameArtist, setNameArtist] = useState("");
  const [localArtist, setLocalArtist] = useState("");
  const [pictureArtist, setPictureArtist] = useState("");
  const [typeNft, setTypeNft] = useState("");
  const [quantityNft, setQuantityNft] = useState("");
  const [showModal, setShowModal] = useState(false);

  const cancelCreateNFT = async () => {
    await AsyncStorage.removeItem("categoryCreateCampaign");
    await AsyncStorage.removeItem("pictureNftCreateCampaign");
    await AsyncStorage.removeItem("valueNftCreateCampaign");
    await AsyncStorage.removeItem("descriptionCreateCampaign");
    await AsyncStorage.removeItem("nameArtistsCreateCampaign");
    await AsyncStorage.removeItem("localArtistsCreateCampaign");
    await AsyncStorage.removeItem("pictureArtistsCreateCampaign");
    await AsyncStorage.removeItem("typeQuatityNftCreateCampaign");
    await AsyncStorage.removeItem("limitedQuantityNftCreateCampaign");
    navigation.navigate("HomeNGO");
  };
  const format = (value) => {
    const strValue = String(value);

    if (strValue.length >= 2) {
      return strValue.slice(0, -1) + "." + strValue.slice(-1);
    } else {
      return strValue;
    }
  };

  useEffect(() => {
    getStorageCreateCampaign();
  }, []);

  const getStorageCreateCampaign = async () => {
    setNameNFT(await AsyncStorage.getItem("companyTitleCreateCampaign"));
    setCategorie(await AsyncStorage.getItem("categoryCreateCampaign"));
    setcampaignNft(await AsyncStorage.getItem("pictureNftCreateCampaign"));
    setValueNFT(await AsyncStorage.getItem("valueNftCreateCampaign"));

    setDescription(await AsyncStorage.getItem("descriptionCreateCampaign"));
    setNameArtist(await AsyncStorage.getItem("nameArtistsCreateCampaign"));
    setLocalArtist(await AsyncStorage.getItem("localArtistsCreateCampaign"));
    setPictureArtist(
      await AsyncStorage.getItem("pictureArtistsCreateCampaign")
    );
    setTypeNft(await AsyncStorage.getItem("typeQuatityNftCreateCampaign"));
    setQuantityNft(
      await AsyncStorage.getItem("limitedQuantityNftCreateCampaign")
    );
    const response = await GetAllStorageCreateNGO();
    setPictureNGO(response.picture);
    setNameNGO(response.corporateName);
    setLocal(response.city);
  };
  const handleShow = () => {
    setShowModal(false);
    navigation.navigate("HomeNGO");
  };
  const handleSubmit = () => {
    setLoader(true);
    setShowModal(true);
    setLoader(false);
  };
  const calcValueNFT = (valueNFT: number) => {
    const valueInSolana = valueNFT * 929.03;
    return valueInSolana;
  };

  return (
    <>
      <Wrapper>
        <View className="flex-row items-center justify-between mt-5">
          <View className="flex-row">
            <GoBack navigation={navigation} />
            <Image className="ml-3 h-11 w-32" source={LogoPrimary} />
          </View>
        </View>

        <View className="mt-6">
          <Text className="font-medium text-sm text-[#4B4B4B]">
            Check how your campaign it will be seen
          </Text>
          <H6 Title={nameNFT} />
        </View>
        <View className="justify-center items-center mt-6 mb-6">
          <View className="h-80 w-80 bg-marca2 items-center rounded-2xl justify-center">
            <Image
              className="h-full w-full rounded-2xl"
              source={{ uri: campaignNft }}
            />
          </View>
        </View>
        <View className="flex-row items-center justify-between">
          <View
            className="mr-2 border border-cinza1 py-3 px-4 rounded-2xl"
            style={{ alignSelf: "flex-start" }}
          >
            <Text className="text-dark1 text-base font-normal text-center">
              {categorie}
            </Text>
          </View>
          <View className="">
            <Text>
              
            </Text>
            <Subtitle
              ClassName="w-56 text-right"
              Title={`${format(valueNFT)} SOL / ${calcValueNFT(
                parseFloat(valueNFT)
              )} $`}
            />
            {typeNft === "Unlimited" ? (
              <Text className="text-right text-normal text-cinza1 text-base mt-1">
                {typeNft}
              </Text>
            ) : (
              <Text className="text-right text-normal text-cinza1 text-base mt-1">
                {"1 of " + quantityNft + " avaliable"}
              </Text>
            )}
          </View>
        </View>
        <View className="mt-3">
          <Text className="font-normal text-sm text-cinza1 mb-1">
            Description
          </Text>
          <Text className="font-normal text-sm text-dark3 text-justify">
            {description}
          </Text>
        </View>
        <View className="mt-3">
          <Text className="font-normal text-sm text-cinza1 mb-1">
            Create by
          </Text>
          <View className="flex-row p-4 rounded-2xl items-center border border-cinza2 bg-branco">
            <Image
              className="h-12 w-12 rounded-full"
              source={{ uri: pictureNGO }}
            />
            <View className="ml-2">
              <Text className="font-bold text-lg">{nameNGO}</Text>
              <Text className="text-cinza1 text-medium">{local}</Text>
            </View>
          </View>
          <View className="flex-row p-4 rounded-2xl items-center border border-cinza2 bg-branco mt-1">
            <Image
              className="h-12 w-12 rounded-full"
              source={{ uri: pictureArtist }}
            />
            <View className="ml-2">
              <Text className="font-bold text-lg">{nameArtist}</Text>
              <Text className="text-cinza1 text-medium">{localArtist}</Text>
            </View>
          </View>
        </View>
        <View className="justify-center mt-5">
          <View className="justify-between flex-row">
            <Text className="font-semibold text-base text-dark1">For NGO</Text>
            <Text className="font-normal text-base text-dark1">70%</Text>
          </View>
          <View className="justify-between flex-row">
            <Text className="font-semibold text-base text-dark1">
              For Artist
            </Text>
            <Text className="font-normal text-base text-dark1">25%</Text>
          </View>
          <View className="justify-between flex-row">
            <Text className="font-semibold text-base text-dark1">
              Fee Artivist
            </Text>
            <Text className="font-normal text-base text-dark1">5%</Text>
          </View>
        </View>
      </Wrapper>
      <TouchableOpacity
        className="bg-branco absolute bottom-0 justify-center right-0 left-0"
        onPress={() => cancelCreateNFT()}
      >
        <WrapperNotScroll>
          <Button
            hasIcon
            styleType={2}
            Title={"Confirm"}
            isLoading={loader}
            onPress={handleSubmit}
          />

          <View className="mb-2 flex-row items-center justify-center">
            <Feather name="x" size={24} color="#F44A4A" />
            <Text className="ml-2 font-normal text-lg text-error">Cancel</Text>
          </View>
        </WrapperNotScroll>
      </TouchableOpacity>

      <ModalTester show={showModal} onClose={handleShow} />
    </>
  );
}
