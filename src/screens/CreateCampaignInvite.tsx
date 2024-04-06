import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Wrapper from "../layouts/wrapper";
import GoBack from "../components/GoBack";
import H6 from "../components/Titles/H6";
import Input from "../components/Input";
import { Button } from "../components/Button";
import CardsSearchArtist from "../components/CardsSearchArtist";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WrapperNotScroll from "../layouts/wrapperNotScroll";

export default function CreateCampaignInvite({ navigation }) {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const LogoPrimary = require("../../assets/brand/logoPrimary.png");
  const [artists, setArtists] = useState([
    {
      id: 1,
      name: "John Doe",
      local: "New York",
      urlPicture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      local: "Los Angeles",
      urlPicture: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      id: 3,
      name: "Ronaldo",
      local: "Brazil",
      urlPicture: "https://randomuser.me/api/portraits/men/30.jpg",
    },
    {
      id: 4,
      name: "Maria Garcia",
      local: "Madrid, Spain",
      urlPicture: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      id: 5,
      name: "Ahmed Khan",
      local: "Dubai, UAE",
      urlPicture: "https://randomuser.me/api/portraits/men/20.jpg",
    },
    {
      id: 6,
      name: "Emily Johnson",
      local: "Toronto, Canada",
      urlPicture: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 7,
      name: "Luca Rossi",
      local: "Rome, Italy",
      urlPicture: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      id: 8,
      name: "Sophia Lee",
      local: "Seoul, South Korea",
      urlPicture: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      id: 9,
      name: "Mohammed Ali",
      local: "Cairo, Egypt",
      urlPicture: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
      id: 10,
      name: "Elena Martinez",
      local: "Mexico City, Mexico",
      urlPicture: "https://randomuser.me/api/portraits/women/35.jpg",
    },
  ]);

  useEffect(() => {
    if (selectedArtist !== null) {
      setMessage("");
    }
  }, [selectedArtist]);

  const setStorageCreateCampaign = async () => {
    const { name, local, urlPicture } = selectedArtist;
    await AsyncStorage.setItem("nameArtistsCreateCampaign", name);
    await AsyncStorage.setItem("localArtistsCreateCampaign", local);
    await AsyncStorage.setItem("pictureArtistsCreateCampaign", urlPicture);
  };
  const handleSubmit = async () => {
    if (selectedArtist) {
      setLoader(true);
      setStorageCreateCampaign();
      navigation.navigate("CreateCampaignNFT");
      setLoader(false);
    } else {
      setMessage("Select an artist to continue!");
    }
  };

  const handleDeselectArtist = () => {
    setSelectedArtist(null);
  };

  const handleSearch = (unmasked) => {
    setSearch(unmasked);
    const filtered = artists.filter((artist) =>
      artist.name.toLowerCase().includes(unmasked.toLowerCase())
    );
    setFilteredArtists(filtered);
  };

  const handleSelectArtist = (artist) => {
    setSelectedArtist((prevSelectedArtist) =>
      prevSelectedArtist === artist ? null : artist
    );
  };

  return (
    <>
      <Wrapper>
        <View className="flex-row items-center justify-between mt-5">
          <View className="flex-row">
            <GoBack navigation={navigation} />
            <Image className="ml-3 h-11 w-32" source={LogoPrimary} />
          </View>
          <View className="flex-row">
            <View className="bg-cinza2 w-5 h-5 rounded-full m-1"></View>
            <View className="bg-dark3 w-5 h-5 rounded-full m-1"></View>
            <View className="bg-cinza2 w-5 h-5 rounded-full m-1"></View>
          </View>
        </View>
        <View className="mt-6">
          <H6 Title={"Choose your artist to participate"} />
        </View>
        <View className="mt-4">
          <Input
            value={search}
            onChangeText={(masked, unmasked) => handleSearch(unmasked)}
            placeholder="Search for artists"
            maxLength={40}
          />
        </View>

        {search !== "" && (
          <>
            {filteredArtists.map((artist, index) => (
              <CardsSearchArtist
                key={index}
                name={artist.name}
                local={artist.local}
                urlPicture={artist.urlPicture}
                isSelected={selectedArtist === artist}
                onSelect={() => handleSelectArtist(artist)}
              />
            ))}
          </>
        )}
        <View className="">
          {!search && selectedArtist && (
            <TouchableOpacity
              className="mt-3 border p-3 rounded-2xl flex-row items-center justify-between border-maindark bg-tertiary"
              onPress={handleDeselectArtist}
            >
              <View className="flex-row items-center">
                <Image
                  className="h-12 w-12 rounded-full"
                  source={{ uri: selectedArtist.urlPicture }}
                />
                <View className="ml-2">
                  <Text className="font-bold text-dark1 text-lg">
                    {selectedArtist.name}
                  </Text>
                  <Text className="font-medium text-cinza1 text-sm">
                    {selectedArtist.local}
                  </Text>
                </View>
              </View>
              <Feather name="check-circle" size={24} color="#1B941F" />
            </TouchableOpacity>
          )}
        </View>
      </Wrapper>
      <View className="bg-branco absolute bottom-0 justify-center right-0 left-0">
        <WrapperNotScroll>
          {message && (
            <Text className="text-center py-2 text-error text-sm font-light">
              {message}
            </Text>
          )}
          <Button
            isLoading={loader}
            className=""
            styleType={2}
            Title={"Invite"}
            onPress={handleSubmit}
          />
        </WrapperNotScroll>
      </View>
    </>
  );
}
