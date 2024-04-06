import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Wrapper from "../layouts/wrapper";
import GoBack from "../components/GoBack";
import H6 from "../components/Titles/H6";
import Input from "../components/Input";
import { SubButton } from "../components/SubButton";
import { Button } from "../components/Button";
import GetAllStorageCreateUser from "../hooks/useGetAllStorageCreateUser";
import GetAllStorageCreateNGO from "../hooks/useGetAllStorageCreateNGO";

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [emailGet, setEmailGet] = useState(null);
  const [passwordGet, setPasswordGet] = useState(null);
  const [password, setPassword] = useState(null);
  const [loader, setLoader] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [messageErrorEmail, setMessageErrorEmail] = useState("");
  const [messageErrorPassword, setMessageErrorPassword] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = () => {
    navigation.navigate("FirstAcess");
  };
  const handleEmail = (unmasked) => {
    setEmail(unmasked);
    if (!unmasked.includes("@")) {
      setMessageErrorEmail("Email must contain @");
      setErrorEmail(true);
    } else {
      setMessageErrorEmail("");
      setErrorEmail(false);
    }
  };
  const handlePassword = (unmasked) => {
    setPassword(unmasked);
    if (unmasked.length < 6) {
      setErrorPassword(true);
      setMessageErrorPassword("Minimum of 6 characters");
    } else {
      setErrorPassword(false);
    }
  };

  return (
    <Wrapper>
      <View className="mt-8">
        <GoBack navigation={navigation} />
        <View className="mt-5">
          <H6 Title={"Access your account"} />
        </View>
      </View>
      <View className="mt-6">
        <Input
          value={email}
          onChangeText={(masked, unmasked) => handleEmail(unmasked)}
          placeholder="Email"
          hasError={errorEmail}
          messageError={messageErrorEmail}
        />
        <Input
          value={password}
          onChangeText={(masked, unmasked) => handlePassword(unmasked)}
          maxLength={6}
          secureTextEntry={true}
          placeholder="Password"
          hasError={errorPassword}
          messageError={messageErrorPassword}
        />
      </View>
      <View className="mt-80">
        {messageError && (
          <Text className="text-center text-error text-xs font-light">
            {messageError}
          </Text>
        )}
        <Button
          isLoading={loader}
          className="mt-5"
          styleType={2}
          Title={"Login"}
          onPress={handleSubmit}
        />
        <View className="border-t border-cinza2">
          <Text className="text-center mt-4 text-cinza1 font-normal text-base">
            Doesn’t have an account yet?
          </Text>

          <SubButton
            Title={"Creat your account"}
            onPress={() => {
              navigation.navigate("SingUp");
            }}
          />
        </View>
      </View>
    </Wrapper>
  );
}
