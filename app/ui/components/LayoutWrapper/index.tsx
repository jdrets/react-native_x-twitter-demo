import { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { theme } from "../Providers/theme";
import { useHeaderHeight } from "@react-navigation/elements";

export const LayoutWrapper = ({ children }: PropsWithChildren) => {
  const headerHeight = useHeaderHeight();

  return (
    <ScrollView
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
      }}
    >
      <SafeAreaView
        style={{ marginHorizontal: 14, marginTop: headerHeight + 12 }}
      >
        {children}
      </SafeAreaView>
      <View style={{ height: 48 }} />
    </ScrollView>
  );
};
