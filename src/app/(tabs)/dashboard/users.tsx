import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";

interface Friend {
  id: string;
  name: string;
  photo: any;
  isFollowing: boolean;
}

const initialFriendsData: Friend[] = [
  {
    id: "1",
    name: "Carlos Lima",
    photo: require("../../../../assets/profile1.jpg"),
    isFollowing: true,
  },
  {
    id: "2",
    name: "Ana Souza",
    photo: require("../../../../assets/profile2.jpg"),
    isFollowing: false,
  },
  {
    id: "3",
    name: "Matheus Alves",
    photo: require("../../../../assets/profile3.jpg"),
    isFollowing: true,
  },
  {
    id: "4",
    name: "Mariana Costa",
    photo: require("../../../../assets/profile4.jpg"),
    isFollowing: true,
  },
  {
    id: "5",
    name: "William Barbosa",
    photo: require("../../../../assets/profile5.jpg"),
    isFollowing: true,
  },
  {
    id: "6",
    name: "Andrea Prado",
    photo: require("../../../../assets/profile6.jpg"),
    isFollowing: true,
  },
];

export default function Users() {
  const [friendsData, setFriendsData] = useState<Friend[]>(initialFriendsData);

  const toggleFollow = (id: string) => {
    setFriendsData((prevState) =>
      prevState.map((friend) =>
        friend.id === id
          ? { ...friend, isFollowing: !friend.isFollowing }
          : friend
      )
    );
  };

  const renderFriend = ({ item }: { item: Friend }) => (
    <View className="flex-row items-center bg-white p-4 rounded-lg mb-4 shadow-md">
      <Image
        className="w-16 h-16 rounded-full mr-4"
        source={item.photo}
        resizeMode="cover"
      />
      <View className="flex-1">
        <Text className="text-xl font-bold text-gray-800">{item.name}</Text>
        <TouchableOpacity
          onPress={() => toggleFollow(item.id)}
          className={`mt-2 py-1 px-4 rounded-full ${
            item.isFollowing ? "bg-gray-300" : "bg-emerald-500"
          }`}
        >
          <Text
            className={`font-semibold ${
              item.isFollowing ? "text-gray-700" : "text-white"
            }`}
          >
            {item.isFollowing ? "Seguindo" : "Seguir"}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="p-2">
        <Ionicons name="chatbubble-outline" size={24} color="#4B5563" />
      </TouchableOpacity>
    </View>
  );

  return (
    <LinearGradient
      colors={["#03820c", "#e69800"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View className="flex-1 p-4">
        <Text className="text-3xl font-bold text-white mb-4">Amigos</Text>
        <FlatList
          data={friendsData}
          renderItem={renderFriend}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
}
