import React from "react";
import { ReactNode } from "react";
import { View, ScrollView, KeyboardAvoidingView } from "react-native";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <View className="m-6">
        <KeyboardAvoidingView><ScrollView showsVerticalScrollIndicator={false}><View className="mb-32">{children}</View></ScrollView></KeyboardAvoidingView>
    </View>
  );
}