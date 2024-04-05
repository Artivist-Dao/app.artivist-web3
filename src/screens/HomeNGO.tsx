import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Button } from "../components/Button";
import Wrapper from "../layouts/wrapper";
import LogoPrimary from "../../assets/brand/logoPrimary.png";
import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import GetAllStorageCreateNGO from "../hooks/useGetAllStorageCreateNGO";
import Subtitle from "../components/Titles/Subtitle";
import Input from "../components/Input";
import Umar from "../../assets/img/umar.png";
import Menu from "../../assets/img/menu.png";
import WrapperNotScroll from "../layouts/wrapperNotScroll";
import ModalBottom from "../components/ModalBottom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";

export function HomeNGO({ navigation }) {
  const [corporatePhoto, setCorporatePhoto] = useState<string | null>(null);
  const [corporateName, setCorporateName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [selectId, setSelectId] = useState(1);

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
        <View>
          <Text className="text-dark1 font-bold text-lg mb-2">Campaigns</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View>
              <View className="w-60 h-60 relative">
                <Image
                  className="h-full w-full rounded-2xl"
                  source={{
                    uri: "https://source.unsplash.com/category/art-34",
                  }}
                />
                <LinearGradient
                  colors={["rgba(0,0,0,0.9)", "rgba(0,0,0,0.0)", "transparent"]}
                  start={{ x: 0.5, y: 1 }}
                  end={{ x: 0.5, y: 0 }}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 16,
                  }}
                />
              </View>

              <View className="items-center flex-row absolute bottom-2 left-2">
                <Image
                  className="w-12 h-12 rounded-full"
                  source={{
                    uri: "https://randomuser.me/api/portraits/women/30.jpg",
                  }}
                />
                <View className="">
                  <Text className="ml-2 text-base font-bold text-branco">
                    Campaign Health
                  </Text>
                  <Text className="ml-2 text-sm font-medium text-branco">
                    Name artist for NGO
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <View className="ml-6 w-60 h-60 relative">
                <Image
                  className="h-full w-full rounded-2xl"
                  source={{
                    uri: "https://source.unsplash.com/random/109",
                  }}
                />
                <LinearGradient
                  colors={["rgba(0,0,0,0.9)", "rgba(0,0,0,0.0)", "transparent"]}
                  start={{ x: 0.5, y: 1 }}
                  end={{ x: 0.5, y: 0 }}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 16,
                  }}
                />
              </View>

              <View className="items-center flex-row absolute bottom-2 left-2 ml-6">
                <Image
                  className="w-12 h-12 rounded-full"
                  source={{
                    uri: "https://randomuser.me/api/portraits/women/22.jpg",
                  }}
                />
                <View className="">
                  <Text className="ml-2 text-base font-bold text-branco">
                    Campaign Environment
                  </Text>
                  <Text className="ml-2 text-sm font-medium text-branco">
                    Name artist for NGO
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View>
          <Text className="text-dark1 font-bold text-lg mb-2 mt-4">
            Artivists
          </Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View>
              <View className="w-60 h-60 relative">
                <Image
                  className="h-full w-full rounded-2xl"
                  source={{
                    uri: "https://source.unsplash.com/category/art-235",
                  }}
                />
                <LinearGradient
                  colors={["rgba(0,0,0,0.9)", "rgba(0,0,0,0.0)", "transparent"]}
                  start={{ x: 0.5, y: 1 }}
                  end={{ x: 0.5, y: 0 }}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 16,
                  }}
                />
              </View>

              <View className="items-center flex-row absolute bottom-2 left-2">
                <Image
                  className="w-12 h-12 rounded-full"
                  source={{
                    uri: "https://randomuser.me/api/portraits/women/60.jpg",
                  }}
                />
                <Text className="ml-2 text-base font-bold text-branco">
                  Jane Milly
                </Text>
              </View>
            </View>

            <View>
              <View className="w-60 h-60 relative ml-6">
                <Image
                  className="h-full w-full rounded-2xl"
                  source={{
                    uri: "https://source.unsplash.com/category/art-178",
                  }}
                />
                <LinearGradient
                  colors={["rgba(0,0,0,0.9)", "rgba(0,0,0,0.0)", "transparent"]}
                  start={{ x: 0.5, y: 1 }}
                  end={{ x: 0.5, y: 0 }}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 16,
                  }}
                />
              </View>

              <View className="items-center flex-row absolute bottom-2 left-2 ml-6">
                <Image
                  className="w-12 h-12 rounded-full"
                  source={{
                    uri: "https://randomuser.me/api/portraits/women/91.jpg",
                  }}
                />
                <Text className="ml-2 text-base font-bold text-branco">
                  Emma
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View>
          <Text className="text-dark1 font-bold text-lg mb-2 mt-4">NGOs</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View>
              <View className="w-60 h-60 relative">
                <Image
                  className="h-full w-full rounded-2xl"
                  source={{
                    uri: "https://source.unsplash.com/category/art-7324789545232'",
                  }}
                />
                <LinearGradient
                  colors={["rgba(0,0,0,0.9)", "rgba(0,0,0,0.0)", "transparent"]}
                  start={{ x: 0.5, y: 1 }}
                  end={{ x: 0.5, y: 0 }}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 16,
                  }}
                />
              </View>

              <View className="items-center flex-row absolute bottom-2 left-2">
                <Image className="w-12 h-12 rounded-full" source={Umar} />
                <Text className="ml-2 text-base font-bold text-branco">
                  UMAR
                </Text>
              </View>
            </View>

            <View>
              <View className="w-60 h-60 relative ml-6">
                <Image
                  className="h-full w-full rounded-2xl"
                  source={{
                    uri: "https://source.unsplash.com/category/art-114657855230987",
                  }}
                />
                <LinearGradient
                  colors={["rgba(0,0,0,0.9)", "rgba(0,0,0,0.0)", "transparent"]}
                  start={{ x: 0.5, y: 1 }}
                  end={{ x: 0.5, y: 0 }}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 16,
                  }}
                />
              </View>

              <View className="items-center flex-row absolute bottom-2 left-2 ml-6">
                <View className="w-12 h-12 items-center justify-center bg-pink-500 rounded-full">
                  <Text className="text-center text-3xl font-extrabold text-pink-300">
                   F
                  </Text>
                </View>
                <Text className="ml-2 text-base font-bold text-branco">
                  Feminism 
                </Text>
              </View>
            </View>
          </ScrollView>
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
              <TouchableOpacity
                className="flex-row items-center justify-center py-3"
                onPress={() => navigation.navigate("ProfileNGO")}
              >
                <Feather name="user" size={24} color="#191919" />
                <Subtitle ClassName="ml-6 w-20" Title={"Profile"} />
              </TouchableOpacity>
              <View className="h-1  bg-cinza2 w-full rounded-full"></View>
              <TouchableOpacity
                className="flex-row justify-center items-center py-3"
                onPress={() => handleLogout()}
              >
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
