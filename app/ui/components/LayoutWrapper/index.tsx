import { ReactNode } from "react";
import { RefreshControl, SafeAreaView, ScrollView, View } from "react-native";
import { theme } from "../Providers/theme";
import { useHeaderHeight } from "@react-navigation/elements";

export const LayoutWrapper = ({
  children,
  onRefresh,
  refreshing
}: {
  children: ReactNode;
  refreshing?: boolean
  onRefresh?: () => void;
}) => {
  const headerHeight = useHeaderHeight();

  return (
    <ScrollView
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
      }}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.colors.primary}
            progressViewOffset={headerHeight}
          />
        ) : undefined
      }
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
