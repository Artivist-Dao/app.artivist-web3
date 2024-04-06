import React, { useState } from "react";
import { View, Text } from "react-native";
import Wrapper from "../layouts/wrapper";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { SubButton } from "../components/SubButton";
import GoBack from "../components/GoBack";
import H6 from "../components/Titles/H6";
import useCreateUser from "../hooks/useCreateUser";

export default function SingUp({ navigation }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [messageError, setMessageError] = useState("");
  const [messageErrorEmail, setMessageErrorEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const {
    loader,
    setLoader,
    loaderSuccessful,
    setLoaderSuccessful,
    loaderFailed,
    setLoaderFailed,
    handleCreateUser,
  } = useCreateUser();

  const handleName = (unmasked) => {
    setName(unmasked);
  };
  const handleEmail = (unmasked) => {
    setEmail(unmasked);
    if (!unmasked.includes("@")) {
      setMessageErrorEmail("Email must contain @");
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };
  const handlePassword = (unmasked) => {
    setPassword(unmasked);
    if (unmasked.length < 6) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  };
  const handleSubmit = () => {
    navigation.navigate("FirstAcess");
  };
  return (
    <View className="mt-10">
      <Wrapper>
        <GoBack navigation={navigation} />
        <View className="mt-8">
          <H6 Title={"Be part"} />
          <View className="mt-6">
            <Input
              value={name}
              onChangeText={(masked, unmasked) => handleName(unmasked)}
              maxLength={50}
              placeholder="Full Name"
            />
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
            />
            <Text
              className={`font-medium text-sm opacity-40 ${
                errorPassword ? "text-cinza1" + " text-red-400" : "text-cinza1"
              }`}
            >
              * Minimum of 6 characters
            </Text>
          </View>
        </View>
        <Text className="ml-2 font-normal mt-40 text-cinza1 text-center text-base">
          Creating an account means you’re okay with our
          <Text className="font-bold"> Terms of Service</Text> and our
          <Text className="font-bold"> Privacy Policy</Text>
        </Text>
        {messageError && (
          <Text className="text-center mt-3 text-error text-xs font-light">
            {messageError}
          </Text>
        )}
        <Button
          isLoading={loader}
          className="mt-2"
          styleType={2}
          Title={"Creat your account"}
          onPress={() => {
            handleSubmit();
          }}
        />
        <View className="border-t border-cinza2">
          <Text className="text-center mt-4 text-cinza1 font-normal text-base">
            Already have an account?
          </Text>

          <SubButton
            Title={"Sign In"}
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
      </Wrapper>
    </View>
  );
}
