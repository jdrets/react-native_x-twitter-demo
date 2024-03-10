import { Stack } from "expo-router";
import { Header } from "@/ui/components/Header";

export default function Page() {
  return (
    <Stack
      screenOptions={{
        header: () => <Header />,
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="index" options={{}} />
    </Stack>
  );
}
