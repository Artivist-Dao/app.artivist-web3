// CreateCampaign.tsx
import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Wrapper from "../layouts/wrapper";
import GoBack from "../components/GoBack";
import H6 from "../components/Titles/H6";
import Input from "../components/Input";
import LogoPrimary from "../../assets/brand/logoPrimary.png";
import { Button } from "../components/Button";
import Categories from "../components/Categories";
import Header from "../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WrapperNotScroll from "../layouts/wrapperNotScroll";

export default function CreateCampaign({ navigation }) {
  const [companyTitle, setCompanyTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSelectItem = (title) => {
    setSelectedItem(title);
  };

  const handleCompanyTitle = (unmasked) => {
    setCompanyTitle(unmasked);
  };

  const handleDescription = (unmasked) => {
    setDescription(unmasked);
  };

  const setStorageCreateCampaign = async () => {
    await AsyncStorage.setItem("companyTitleCreateCampaign", companyTitle);
    await AsyncStorage.setItem("descriptionCreateCampaign", description);
    await AsyncStorage.setItem("categoryCreateCampaign", selectedItem);
  };
  const handleSubmit = async () => {
    if (companyTitle && description && selectedItem) {
      setLoader(true);
      setStorageCreateCampaign();
      navigation.navigate("CreateCampaignInvite");
      setLoader(false);
    } else {
      setMessage("Fill in all fields and categories to proceed!");
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
            <View className="bg-dark3 w-5 h-5 rounded-full m-1"></View>
            <View className="bg-cinza2 w-5 h-5 rounded-full m-1"></View>
            <View className="bg-cinza2 w-5 h-5 rounded-full m-1"></View>
          </View>
        </View>
        <View className="mt-6">
          <H6 Title={"Campaign"} />
        </View>
        <View className="mt-9">
          <Input
            value={companyTitle}
            onChangeText={(masked, unmasked) => handleCompanyTitle(unmasked)}
            placeholder="Company title"
          />
          <Input
            value={description}
            onChangeText={(masked, unmasked) => handleDescription(unmasked)}
            placeholder="Description"
            maxLength={150}
          />
        </View>
        <Text className="text-cinza1 font-medium text-sm mb-2 mt-3">
          Categories
        </Text>
        <View className="flex-row mb-3">
          <Categories
            Title={"Feminism"}
            onSelectItem={handleSelectItem}
            isSelected={selectedItem === "Feminism"}
          />
          <Categories
            Title={"Health"}
            onSelectItem={handleSelectItem}
            isSelected={selectedItem === "Health"}
          />
        </View>
        <View className="flex-row mb-3">
          <Categories
            Title={"Animals"}
            onSelectItem={handleSelectItem}
            isSelected={selectedItem === "Animals"}
          />
          <Categories
            Title={"Environment"}
            onSelectItem={handleSelectItem}
            isSelected={selectedItem === "Environment"}
          />
        </View>
      </Wrapper>
      <View className="bg-branco absolute bottom-0 justify-center right-0 left-0">
        <WrapperNotScroll>
          {message && (
            <Text className="text-center py-2 text-error text-sm font-light">
              {message}
            </Text>
          )}
          <Button
            isLoading={loader}
            className=""
            styleType={2}
            Title={"Next"}
            onPress={handleSubmit}
          />
        </WrapperNotScroll>
      </View>
    </>
  );
}
