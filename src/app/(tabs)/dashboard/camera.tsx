import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Camera() {
  return (
    <View className="flex-1 justify-center items-center p-8 bg-gray-100">
      <View className="flex-row justify-center items-center gap-2 mb-6">
        <Entypo name="camera" size={24} color="black" />
        <Text className="text-2xl font-bold">CAMERA CEDDAG</Text>
      </View>
      <View className="mb-8 shadow-lg rounded-lg overflow-hidden">
        <Image
          source={require("../../../../assets/mapa.png")}
          style={{ width: 300, height: 300 }}
          resizeMode="contain"
        />
      </View>
      {[1, 2, 3].map((_, index) => (
        <View
          key={index}
          className="flex-row items-center gap-2 p-6 bg-white rounded-lg shadow mb-4 w-10/12"
        >
          <Entypo name="location-pin" size={24} color="#E53E3E" />
          <View>
            <Text className="text-lg font-semibold text-gray-700">
              Tabebuia roseo-alba
            </Text>
            <Text className="text-sm text-gray-500">500m</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
