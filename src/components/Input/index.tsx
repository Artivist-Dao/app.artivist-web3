import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import InputMask from "react-native-mask-input";
import Mask, { Mask as MaskType } from "../../utils/custom/input-mask";
import { Feather } from "@expo/vector-icons";

interface InputProps {
  type?: "text" | "number";
  placeholder?: string;
  textColor?: string;
  border?: string;
  hoverBgColor?: string;
  required?: boolean;
  value?: string;
  width?: string;
  height?: string;
  padding?: string;
  maxLength?: number;
  minLength?: number;
  readonly?: boolean;
  hasError?: boolean;
  onChangeText?: (masked: string, unmasked: string) => void;
  secureTextEntry?: boolean;
  messageError?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "",
  textColor = "text-dark3",
  border = "border border-neutral-300 focus:border-maindark",
  value,
  width = "w-full",
  height = "",
  padding = "px-7 py-3",
  maxLength,
  readonly = false,
  hasError = false,
  onChangeText,
  secureTextEntry,
  messageError,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [select, setSelect] = useState(false);

  const handleFocus = () => {
    setSelect(true);
  };

  const handleBlur = () => {
    setSelect(false);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  let inputElement;

  if (placeholder === "Description") {
    inputElement = (
      <View className="mb-4">
        <InputMask
          readOnly={readonly}
          maxLength={maxLength}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!showPassword && secureTextEntry}
          placeholder={placeholder}
          numberOfLines={4}
          multiline={true}
          keyboardType={type === "number" ? "numeric" : "default"}
          className={`${width} ${padding} ${textColor}  font-normal h-24 transition duration-300 ease-in-out rounded-3xl placeholder-dark3 ${
            hasError ? border + "border-red-300" : border
          }`}
        />
        {hasError && messageError && (
          <Text className="ml-3 mt-1 text-error text-xs font-light">
            {messageError}
          </Text>
        )}
        {secureTextEntry && (
          <TouchableOpacity
            className="absolute top-1/3 right-7 opacity-20"
            onPress={toggleShowPassword}
          >
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={22}
              color="#191919"
            />
          </TouchableOpacity>
        )}
      </View>
    );
  } else if (
    placeholder === "Search for categories, tags..." ||
    placeholder === "Search for artists"
  ) {
    inputElement = (
      <View className="mb-4 justify-center">
        <InputMask
          onFocus={handleFocus}
          onBlur={handleBlur}
          readOnly={readonly}
          maxLength={maxLength}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!showPassword && secureTextEntry}
          placeholder={placeholder}
          keyboardType={type === "number" ? "numeric" : "default"}
          className={`${width} ${height} ${padding} ${textColor} px-10 items-center flex  font-normal transition duration-300 ease-in-out rounded-full placeholder-dark3 ${
            hasError ? border + "border-red-300" : border
          }`}
        />
        <View className="absolute ml-2">
          <Feather
            name="search"
            size={24}
            color={select ? "#1B941F" : "#191919"}
          />
        </View>
        {hasError && messageError && (
          <Text className="ml-3 mt-1 text-error text-xs font-light">
            {messageError}
          </Text>
        )}
        {secureTextEntry && (
          <TouchableOpacity
            className="absolute top-1/3 right-7 opacity-20"
            onPress={toggleShowPassword}
          >
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={22}
              color="#191919"
            />
          </TouchableOpacity>
        )}
      </View>
    );
  } else {
    inputElement = (
      <View className="mb-4">
        <InputMask
          readOnly={readonly}
          maxLength={maxLength}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!showPassword && secureTextEntry}
          placeholder={placeholder}
          keyboardType={type === "number" ? "numeric" : "default"}
          className={`${width} ${height} ${padding} ${textColor} items-center flex  font-normal transition duration-300 ease-in-out rounded-full placeholder-dark3 ${
            hasError ? border + "border-red-300" : border
          }`}
        />
        {hasError && messageError && (
          <Text className="ml-3 mt-1 text-error text-xs font-light">
            {messageError}
          </Text>
        )}
        {secureTextEntry && (
          <TouchableOpacity
            className="absolute top-1/4 right-7 opacity-20"
            onPress={toggleShowPassword}
          >
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={22}
              color="#191919"
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return inputElement;
};

export default Input;
