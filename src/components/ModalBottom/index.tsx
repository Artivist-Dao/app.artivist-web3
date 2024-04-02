import React, { useState, ReactNode, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import Wrapper from "../../layouts/wrapper";
import colors from "tailwindcss/colors";
import WrapperNotScroll from "../../layouts/wrapperNotScroll";

interface ModalBottomProps {
  children: ReactNode;
  show: boolean;
  onClose: () => void;
}

export default function ModalBottom({
  children,
  show,
  onClose,
}: ModalBottomProps): JSX.Element {
  return (
    <>
      <Modal
        isVisible={show}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        className="justify-end p-0 m-0"
        onSwipeComplete={onClose} 
        swipeDirection="down"
      >
        <View className="bg-branco rounded-t-2xl">
            <View className="px-40 mt-2">
              <View className="bg-cinza2 p-1 rounded-full"></View>
            </View>
          <WrapperNotScroll>
            {children}
          </WrapperNotScroll>
        </View>
      </Modal>
    </>
  );
}
