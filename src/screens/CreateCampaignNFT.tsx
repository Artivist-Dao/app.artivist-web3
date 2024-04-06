import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "../components/Button";
import * as ImagePicker from "expo-image-picker";
import Wrapper from "../layouts/wrapper";
import Input from "../components/Input";
import H6 from "../components/Titles/H6";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GoBack from "../components/GoBack";
import Categories from "../components/Categories";
import WrapperNotScroll from "../layouts/wrapperNotScroll";

export default function CreateCampaignNFT({ navigation }) {
  const [campaignNft, setcampaignNft] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState("");
  const [suggestValue, setSuggestValue] = useState("");
  const [limitedQuantity, setLimitedQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const LogoPrimary = require("../../assets/brand/logoPrimary.png");
  const Cubo = require("../../assets/img/cub.png");

  const handleSelectItem = (title) => {
    setSelectedItem(title);
    if (title === "Unlimited") {
      setLimitedQuantity("");
      AsyncStorage.removeItem("limitedQuantityNftCreateCampaign");
    }
  };
  const handleSuggestValue = (unmasked) => {
    setSuggestValue(unmasked);
  };
  const setStorageCreateCampaign = async () => {
    await AsyncStorage.setItem("pictureNftCreateCampaign", campaignNft);
    if (selectedItem === "Limited") {
      await AsyncStorage.setItem("typeQuatityNftCreateCampaign", selectedItem);
      await AsyncStorage.setItem(
        "limitedQuantityNftCreateCampaign",
        limitedQuantity
      );
    } else {
      await AsyncStorage.setItem("typeQuatityNftCreateCampaign", selectedItem);
    }
    await AsyncStorage.setItem("valueNftCreateCampaign", suggestValue);
  };

  const handleSubmit = async () => {
    if (campaignNft && selectedItem && suggestValue) {
      if (selectedItem === "Limited" && !limitedQuantity) {
        setMessage("Please fill in the limited quantity field.");
        return;
      }
      setLoader(true);
      await setStorageCreateCampaign();
      navigation.navigate("CreateCampaignNFTFinish");
      setLoader(false);
    } else {
      setMessage("Please fill in all required fields.");
    }
  };

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access media library is required!");
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const firstImage = result.assets[0];
      if ("uri" in firstImage && typeof firstImage.uri === "string") {
        setcampaignNft(firstImage.uri);
      } else {
        console.log("Failed to select image or image URI is invalid");
      }
    } else {
      console.log("No image selected or selection was cancelled");
    }
  };

  return (
    <>
      <Wrapper>
        <View className="flex-row items-center justify-between mt-5">
          <View className="flex-row">
            <GoBack navigation={navigation} />
            <Image className="ml-3 h-11 w-32" source={LogoPrimary} />
          </View>
          <View className="flex-row">
            <View className="bg-cinza2 w-5 h-5 rounded-full m-1"></View>
            <View className="bg-cinza2 w-5 h-5 rounded-full m-1"></View>
            <View className="bg-dark3 w-5 h-5 rounded-full m-1"></View>
          </View>
        </View>
        <View className="mt-6">
          <H6 Title={"Spread your art"} />
        </View>
        <View className="justify-center items-center mt-6 mb-6">
          <TouchableOpacity onPress={pickImage}>
            <View
              className="h-80 w-80 bg-marca2 items-center rounded-2xl justify-center"
              style={
                !campaignNft
                  ? {
                      borderColor: "#42C647",
                      borderWidth: 2,
                      borderStyle: "dashed",
                    }
                  : {}
              }
            >
              {campaignNft ? (
                <>
                  <Image
                    className="h-full w-full rounded-2xl"
                    source={{ uri: campaignNft }}
                  />
                  <View
                    className="absolute bottom-1 right-1 p-1.5 bg-branco rounded-xl"
                    style={{
                      shadowOpacity: 0.1,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}
                  >
                    <Feather name="edit-2" size={24} color="#1B941F" />
                  </View>
                </>
              ) : (
                <>
                  <Image className="h-20 w-20" source={Cubo} />
                  <Text className="mt-7 text-dark1 font-medium text-xs">
                    Mint Artist’s NFT
                  </Text>
                </>
              )}
            </View>
          </TouchableOpacity>
        </View>
        <Text className="text-cinza1 font-medium text-sm mb-2">Quantity</Text>
        <View className="flex-row mb-3">
          <Categories
            Title={"Unlimited"}
            onSelectItem={handleSelectItem}
            isSelected={selectedItem === "Unlimited"}
          />
          <Categories
            Title={"Limited"}
            onSelectItem={handleSelectItem}
            isSelected={selectedItem === "Limited"}
          />
        </View>
        {selectedItem === "Limited" && (
          <Input
            value={limitedQuantity}
            onChangeText={(masked, unmasked) => setLimitedQuantity(unmasked)}
            placeholder="Available quantities"
            type="number"
          />
        )}
        <View className="mt-2">
          <Input
            value={suggestValue}
            onChangeText={(masked, unmasked) => handleSuggestValue(unmasked)}
            placeholder="Suggest a Value"
            maxLength={4}
            type="number"
          />
          <Text className="-mt-2 text-cinza1 font-medium">
            *Suggested by the artivist: minimum value 0.1 SOL.
          </Text>
        </View>
        <View className="mt-6">
          <Text className="text-dark1 font-normal">
            • 70% of the value goes to the NGO
          </Text>
          <Text className="text-dark1 font-normal">
            • 25% of the value goes to the Artist per NFT
          </Text>
          <Text className="text-dark1 font-normal">
            • The administration fee is 5% of the value
          </Text>
        </View>
      </Wrapper>
      <View className="bg-branco absolute bottom-0 justify-center right-0 left-0">
        <WrapperNotScroll>
          {message && (
            <Text className="text-center mb-1 text-error text-sm font-light">
              {message}
            </Text>
          )}
          <Button
            hasIcon
            styleType={2}
            Title={"Done"}
            isLoading={loader}
            className=""
            onPress={handleSubmit}
          />
        </WrapperNotScroll>
      </View>
    </>
  );
}
