import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SingUp } from "../screens/SingUp";
import { Home } from "../screens/Home";
import { ProfileNGO } from "../screens/ProfileNGO";
import Login from "../screens/Login";
import CreateCampaign from "../screens/CreateCampaign";
import { FirstAcess } from "../screens/FirstAcess";
import { CadasterFirstAcess } from "../screens/CadasterFirstAcess";
import { useEffect, useState } from "react";
import Loader from "../screens/Loader";
import { HomeNGO } from "../screens/HomeNGO";
import CreateCampaignInvite from "../screens/CreateCampaignInvite";
import { CreateCampaignNFT } from "../screens/CreateCampaignNFT";
import { CreateCampaignNFTFinish } from "../screens/CreateCampaignNFTFinish";
import React from "react";

const Stack = createStackNavigator();

export default function Routes() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="SingUp"
          component={SingUp}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="CreateCampaign"
          component={CreateCampaign}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="CreateCampaignInvite"
          component={CreateCampaignInvite}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="CreateCampaignNFT"
          component={CreateCampaignNFT}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
         <Stack.Screen
          name="CreateCampaignNFTFinish"
          component={CreateCampaignNFTFinish}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="FirstAcess"
          component={FirstAcess}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="CadasterFirstAcess"
          component={CadasterFirstAcess}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="ProfileNGO"
          component={ProfileNGO}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="HomeNGO"
          component={HomeNGO}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
