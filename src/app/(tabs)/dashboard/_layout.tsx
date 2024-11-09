import { Tabs } from "expo-router";
import { Ionicons, Feather, FontAwesome6 } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "CEDDAG",
          title: "HOME",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="trend"
        options={{
          headerTitle: "CEDDAG",
          title: "Pesquisar",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="search" size={size} color={color} />;
            }
            return <Ionicons name="search-outline" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color, size }) => {
            return <Feather name="plus-circle" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          headerTitle: "CEDDAG",
          title: "Amigos",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Feather name="users" size={size} color={color} />;
            }
            return <Feather name="users" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "CEDDAG",
          title: "Perfil",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return (
                <FontAwesome6 name="user-circle" size={size} color={color} />
              );
            }
            return (
              <FontAwesome6 name="user-circle" size={size} color={color} />
            );
          },
        }}
      />
    </Tabs>
  );
}
