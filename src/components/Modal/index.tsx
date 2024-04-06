import React, { useState } from "react";
import { Button, Text, View, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import Subtitle from "../Titles/Subtitle";
import WrapperNotScroll from "../../layouts/wrapperNotScroll";
import { Feather } from "@expo/vector-icons";

interface ModalTesterProps {
  show: boolean;
  onClose: () => void;
}

export default function ModalTester({
  show,
  onClose,
}: ModalTesterProps): JSX.Element {
  const Women = require("../../../assets/img/women.png");

  return (
    <View className="flex-1 ">
      <Modal isVisible={show}>
        <View className="bg-branco w-full rounded-2xl">
          <WrapperNotScroll>
            <View className="flex-row justify-between mb-6">
              <Text className="text-maindark font-bold text-4xl">Done!</Text>
              <TouchableOpacity
                className="bg-[#F9F9F9] p-1 rounded-lg"
                onPress={onClose}
              >
                <Feather name="x" size={24} color="#464646" />
              </TouchableOpacity>
            </View>
            <View className="justify-center items-center">
              <Image className="h-80 w-80 rounded-2xl" source={Women} />
            </View>

            <Subtitle
              Title={"Now your campaign is available to Activists. "}
              ClassName="mt-6"
            />
          </WrapperNotScroll>
        </View>
      </Modal>
    </View>
  );
}
