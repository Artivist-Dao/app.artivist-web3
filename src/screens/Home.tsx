import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { Button } from "../components/Button";
import GetAllStorageCreateNGO from "../hooks/useGetAllStorageCreateNGO";
import WrapperNotScroll from "../layouts/wrapperNotScroll";

export default function Home({ navigation }) {
  const Brand = require("../../assets/brand/logoPrimary.png");
  const Protest = require("../../assets/img/protest.png");

  const Validation = async () => {
    const response = await GetAllStorageCreateNGO();
    if (response.corporateName != null) {
      navigation.navigate("HomeNGO");
    } else {
      navigation.navigate("Home");
    }
  };
  useEffect(() => {
    Validation();
  }, [navigation]);

  return (
    <>
      <View className="bg-branco h-full">
        <Image className="w-full" source={Protest} />

        <Image
          className="absolute w-56 h-56 ml-20 top-5 right-0 left-0"
          source={Brand}
        /> 

        <View className="absolute bg-branco rounded-t-2xl bottom-0 right-0 left-0">
          <View className="mt-3 mb-14">
            <WrapperNotScroll>
              <Button
                styleType={1}
                Title={"Login"}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              />
              <Button
                styleType={2}
                Title={"Create your account"}
                onPress={() => {
                  navigation.navigate("SingUp");
                }}
              />
            </WrapperNotScroll>
          </View>
        </View>
      </View>
    </>
  );
}
