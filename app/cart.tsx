import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function RootLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "orange",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Sign Up" }} />
      <Stack.Screen
        name="Cart"
        options={{
          title: "item List",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push("/cart")}
              style={{ marginRight: 15 }}
            >
              <Ionicons name="cart-outline" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
