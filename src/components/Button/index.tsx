import { Text, TouchableOpacity, ActivityIndicator, View } from "react-native";
import { styled } from "nativewind";
import { Feather } from "@expo/vector-icons";

interface ButtonProps {
  Title: string;
  onPress: () => void;
  styleType: 1 | 2;
  isLoading?: boolean;
  hasIcon?: boolean;
  disable?: boolean;
}

function ButtonStyled({
  Title,
  onPress,
  styleType,
  isLoading,
  hasIcon = false,
  disable,
  ...rest
}: ButtonProps) {
  let buttonClasses, textClasses, icon;
  if (styleType === 1) {
    buttonClasses = "mb-4 border-dark1 border rounded-2xl w-full px-8 py-2";
    textClasses = "text-center font-bold text-lg text-complement1";
  } else if (styleType === 2) {
    buttonClasses = "mb-4 bg-dark1 rounded-2xl w-full px-8 py-2";
    textClasses = "text-center font-bold text-lg text-branco";
  }

  switch (Title) {
    case "New Campaign":
    case "Create your first Campaign":
      icon = "plus";
      break;
    default:
      icon = "check";
      break;
  }
  return (
    <View className="">
      {isLoading ? (
        <TouchableOpacity
          className={`${buttonClasses} py-3 opacity-50`}
          onPress={onPress}
          {...rest}
          disabled
        >
          <ActivityIndicator size="small" color="#f4f4f4" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className={`${buttonClasses} ${
            hasIcon ? "flex-row items-center  justify-center" : ""
          }
          ${disable ? "opacity-50" : ""}
          `}
          onPress={onPress}
          {...rest}
          
        >
          {hasIcon && (
            <View className="px-2">
              <Feather name={icon} size={24} color="white" />
            </View>
          )}
          <Text className={textClasses}>{Title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const Button = styled(ButtonStyled);
export { Button };
