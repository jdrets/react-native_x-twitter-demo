import { View, Image, Platform } from "react-native";
import { useLayoutContext, useUserContext } from "../Providers";
import { Icon, Avatar } from "react-native-paper";
import { theme } from "../Providers/theme";
import { BlurView } from "expo-blur";
import { ProgressBar } from "react-native-paper";

import Logo from "@/assets/logo.png";
import { InfoButton } from "./components/InfoButton";

export const Header = () => {
  const user = useUserContext();
  const isAndroid = Platform.OS === "android";
  const WrapperComponent = isAndroid ? View : BlurView;
  const { loadingBar } = useLayoutContext();

  return (
    <WrapperComponent
      style={{
        backgroundColor: isAndroid
          ? theme.colors.background
          : "rgba(0, 0, 0, 0.5)",
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.outline,
        width: "100%",
        height: 100,
      }}
      intensity={10}
    >
      <View style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", flex: 1 }}>
        <View
          style={{
            marginHorizontal: 18,
            marginTop: 48,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Avatar.Image source={{ uri: user.avatar }} size={32} />
            <Image
              source={Logo}
              style={{
                height: 29.7,
                width: 25.6,
              }}
            />
            <InfoButton />
          </View>
        </View>
      </View>
      {loadingBar && <ProgressBar indeterminate style={{ height: 1 }} />}
    </WrapperComponent>
  );
};
