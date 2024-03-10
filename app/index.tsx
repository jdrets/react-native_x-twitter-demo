import { View, ActivityIndicator } from "./ui";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
// import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";

// export function cacheImages(images: any) {
//   return images.map((image: any) => {
//     if (typeof image === "string") {
//       return Image.prefetch(image);
//     } else {
//       return Asset.fromModule(image).downloadAsync();
//     }
//   });
// }

export default function Page() {
  const router = useRouter();
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
  const completeLoad = appIsReady && fontsLoaded;

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // const imageAssets = cacheImages([
          //   require("./onboarding/assets/check.png"),
          //   require("./onboarding/assets/ellipse.png"),
          //   require("./onboarding/steps/one/assets/imageAsset.png"),
          //   require("./onboarding/steps/two/assets/imageAsset.png"),
          //   require("./assets/success.png"),
          //   require("./assets/qrExample.png"),
        // ]);

        // await Promise.all([...imageAssets]);
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  useEffect(() => {
    if (completeLoad) {
      router.replace("/screens/home");
    }
  }, [completeLoad]);

  return (
    <View>{!completeLoad && <ActivityIndicator animating size="large" />}</View>
  );
}
