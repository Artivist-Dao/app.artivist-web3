import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Button } from "../components/Button";
import * as ImagePicker from "expo-image-picker";
import Wrapper from "../layouts/wrapper";
import LogoPimary from "../../assets/brand/logoPrimary.png";
import Input from "../components/Input";
import H6 from "../components/Titles/H6";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useCreateNGO from "../hooks/useCreateNGO";
import WrapperNotScroll from "../layouts/wrapperNotScroll";

export function CadasterFirstAcess({ navigation }) {
  const [corporatePhoto, setCorporatePhoto] = useState<string | null>(null);
  const [coporateName, setCoporateName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const {
    loader,
    setLoader,
    loaderSuccessful,
    setLoaderSuccessful,
    loaderFailed,
    setLoaderFailed,
    handleCreateNGO,
  } = useCreateNGO();

  const handleDescription = (unmasked) => {
    setDescription(unmasked);
  };
  const handleCoporateName = (unmasked) => {
    setCoporateName(unmasked);
  };
  const handleAdress = (unmasked) => {
    setAddress(unmasked);
  };
  const handlePostalCode = (unmasked) => {
    setPostalCode(unmasked);
  };
  const handlePhoneNumber = (unmasked) => {
    setPhoneNumber(unmasked);
  };
  const handleAccess = async () => {
    try {
      if (
        corporatePhoto &&
        coporateName &&
        address &&
        postalCode &&
        phoneNumber &&
        description
      ) {
        await handleCreateNGO(
          corporatePhoto,
          coporateName,
          address,
          postalCode,
          phoneNumber,
          description
        );
        navigation.navigate("ProfileNGO");
      } else {
        setMessage("Fill in all the fields to proceed!");
      }
    } catch (error) {
      console.error("Ocorreu um erro:", error);
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
        setCorporatePhoto(firstImage.uri);
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
        <View className="flex-row justify-between items-center">
          <Image className="h-20 w-32" source={LogoPimary} />
          <View className="flex-row">
            <View className="bg-cinza2 w-5 h-5 rounded-full m-1"></View>
            <View className="bg-dark3 w-5 h-5 rounded-full m-1"></View>
          </View>
        </View>
        <H6 Title={"Artivist NGO"} />
        <View className="justify-center items-center mt-6 mb-6">
          <TouchableOpacity onPress={pickImage}>
            <View
              className="h-32 w-32 bg-marca2 items-center rounded-full justify-center"
              style={
                !corporatePhoto
                  ? {
                      borderColor: "#42C647",
                      borderWidth: 2,
                      borderStyle: "dashed",
                    }
                  : {}
              }
            >
              {corporatePhoto ? (
                <Image
                  className="h-full w-full rounded-full"
                  source={{ uri: corporatePhoto }}
                />
              ) : (
                <Feather name="image" size={24} color="#191919" />
              )}
            </View>
            <View
              className="absolute bottom-1 right-0 p-1 bg-branco rounded-lg "
              style={{ shadowOpacity: 0.1, shadowRadius: 3.84, elevation: 5 }}
            >
              {!corporatePhoto ? (
              <Feather name="plus" size={24} color="#1B941F" />         
              ) : (
                <Feather name="edit-2" size={24} color="#1B941F" />
              )}
            </View>
          </TouchableOpacity>
          <Text className="text-dark1 font-medium text-xs mt-4">
            Choose your corporate photo
          </Text>
        </View>

        <Input
          value={coporateName}
          onChangeText={(masked, unmasked) => handleCoporateName(unmasked)}
          placeholder="Corporate Name"
          maxLength={50}
        />
        <Input
          value={address}
          onChangeText={(masked, unmasked) => handleAdress(unmasked)}
          placeholder="Address"
          maxLength={50}
        />
        <Input
          value={postalCode}
          onChangeText={(masked, unmasked) => handlePostalCode(unmasked)}
          placeholder="Postal Code"
          maskType="ZIPCODE"
          type="number"
        />
        <Input
          value={phoneNumber}
          onChangeText={(masked, unmasked) => handlePhoneNumber(unmasked)}
          placeholder="Phone Number"
          maskType="PHONE"
          type="number"
        />
        <Input
          value={description}
          onChangeText={(masked, unmasked) => handleDescription(unmasked)}
          placeholder="Description"
          maxLength={150}
        />
        {message && (
          <Text className="text-center py-2 text-error text-sm font-light">
            {message}
          </Text>
        )}
      </Wrapper>
      <View className="bg-branco absolute bottom-0 justify-center right-0 left-0">
        <WrapperNotScroll>
          <Button
            hasIcon
            styleType={2}
            Title={"Done"}
            isLoading={loader}
            onPress={handleAccess}
          />
        </WrapperNotScroll>
      </View>
    </>
  );
}
