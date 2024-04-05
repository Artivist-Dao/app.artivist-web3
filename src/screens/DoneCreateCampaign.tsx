import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import WrapperNotScroll from "../layouts/wrapperNotScroll";
import H5 from "../components/Titles/H5";

export function DoneCreateCampaign({ navigation }) {
  return (
    <>
      <WrapperNotScroll>
        <H5 Title={"Done!"} />
      </WrapperNotScroll>
    </>
  );
}
