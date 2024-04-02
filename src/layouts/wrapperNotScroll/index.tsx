import React from "react";
import { ReactNode } from "react";
import { View, KeyboardAvoidingView } from "react-native";

export default function WrapperNotScroll({ children }: { children: ReactNode }) {
  return (
    <View className="m-6">
        <KeyboardAvoidingView>{children}</KeyboardAvoidingView>
    </View>
  );
}