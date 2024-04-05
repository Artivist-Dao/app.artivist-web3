import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import Wrapper from "../layouts/wrapper";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { SubButton } from "../components/SubButton";
import GoBack from "../components/GoBack";
import H6 from "../components/Titles/H6";
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

export function SingUp({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageError, setMessageError] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);


  const discovery = {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint: 'https://github.com/settings/connections/applications/ad074300ed8c662e5dbd',
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: 'ad074300ed8c662e5dbd',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'exp://pbymzfs-artivist.dapp-8081.exp.direct'
      }),
    },
    discovery
  );    
  const handleName = (unmasked) => {
    setName(unmasked);
  };
  const handleEmail = (unmasked) => {
    setEmail(unmasked);
    if (!unmasked.includes("@")) {
      setMessageError("Email must contain @");
      setErrorEmail(true);
    } else {
      setMessageError("");
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
  const handleLoader = () => {
    setLoader(true);
  };

 

  React.useEffect(() => {

    if (response?.type === 'success') {
      console.log(response.type)
      const { code } = response.params;
    }
  }, [response]);
  
  
  return (
    <View className="mt-10">
      <Wrapper>
        <GoBack navigation={navigation} />
        <Button
          isLoading={loader}
          className="mt-5"
          styleType={2}
          Title={"GitHub Acess"}
          onPress={() => {
        promptAsync();
      }}
        />
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
              messageError={messageError}
            />
            <Input
              value={password}
              onChangeText={(masked, unmasked) => handlePassword(unmasked)}
              maxLength={30}
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
        
        <Button
          isLoading={loader}
          className="mt-5"
          styleType={2}
          Title={"Creat your account"}
          onPress={handleLoader}
        />
        <View className="border-t border-cinza2">
          <Text className="text-center mt-4 text-cinza1 font-normal text-base">
            Already have an account?
          </Text>

          <SubButton
            Title={"Sign In"}
            onPress={() => {
              navigation.navigate("FirstAcess");
            }}
          />
        </View>
      </Wrapper>
    </View>
  );
}
