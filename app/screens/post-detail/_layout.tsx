import { Stack, useRouter } from "expo-router";
import { Icon } from "@/ui";
import { TouchableOpacity } from "react-native";

export default function Page() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerTitle: "Post",
        headerTintColor: "white",
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <Icon source="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="index" options={{}} />
    </Stack>
  );
}
