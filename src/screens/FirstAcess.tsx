import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "../components/Button";
import Wrapper from "../layouts/wrapper";
import Hand from "../../assets/img/hand.png";
import Phone from "../../assets/img/phone.png";
import Verify from "../../assets/img/verify.png";
import LogoPimary from "../../assets/brand/logoPrimary.png";
import { SubButton } from "../components/SubButton";
import H6 from "../components/Titles/H6";
import WrapperNotScroll from "../layouts/wrapperNotScroll";

export function FirstAcess({ navigation }) {
  return (
    <>
      <Wrapper>
        <View className="flex-row justify-between items-center">
          <Image className="h-20 w-32" source={LogoPimary} />
          <View className="flex-row">
            <View className="bg-dark3 w-5 h-5 rounded-full m-1"></View>
            <View className="bg-cinza2 w-5 h-5 rounded-full m-1"></View>
          </View>
        </View>
        <H6 Title={"Artivist NGO"} />
        <Text className="w-80 mt-2">
          See how the cause you support can win on this network
        </Text>
        <View className="mt-14">
          <View className="p-3 flex-row items-center border-maindark border rounded-2xl">
            <Image className="" source={Verify} />
            <Text className="ml-2 w-64 mt-2 text-sm font-bold mb-3">
              Register the entity
            </Text>
          </View>

          <View className="p-3 mt-5 flex-row items-center border-maindark border rounded-2xl">
            <Image className="" source={Hand} />
            <Text className="ml-2 w-64 mt-2 text-sm font-bold">
              Invite an artist into partnership or approve the artwork of an
              artist who want to help
            </Text>
          </View>

          <View className="p-3 mt-5 flex-row items-center border-maindark border rounded-2xl">
            <Image className="" source={Phone} />
            <Text className="ml-2 w-64 mt-2 text-sm font-bold">
              Sell NFTs that will raise funds and propagate the cause that the
              NGO defends.
            </Text>
          </View>
        </View>
      </Wrapper>
      <View className="bg-branco absolute bottom-0 justify-center right-0 left-0">
        <WrapperNotScroll>
          <Button
            styleType={2}
            Title={"Register your NGO"}
            onPress={() => {
              navigation.navigate("CadasterFirstAcess");
            }}
          />
          <SubButton
            hasIcons={false}
            Title={"I'll do it later"}
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </WrapperNotScroll>
      </View>
    </>
  );
}
