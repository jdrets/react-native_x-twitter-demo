import { useState } from "react";
import { TouchableOpacity, View, Linking } from "react-native";
import { Icon, Text, Avatar } from "react-native-paper";
import SwipeUpDownModal from "react-native-swipe-modal-up-down";
import { BlurView } from "expo-blur";

export const InfoButton = () => {
  const [show, setShow] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handlePressButton = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setAnimateModal(false);
  };

  return (
    <>
      <TouchableOpacity onPress={handlePressButton}>
        <Icon source="information-outline" size={24} />
      </TouchableOpacity>
      <SwipeUpDownModal
        modalVisible={show}
        PressToanimate={animateModal}
        ContentModal={
          <BlurView
            style={{
              width: "100%",
              bottom: 0,
              position: "absolute",
              height: "101%",
              overflow: "hidden",
              paddingVertical: 24,
              paddingHorizontal: 12,
            }}
          >
            <TouchableOpacity onPress={handleClose}>
              <Icon source="arrow-left" size={28} />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "column",
                marginTop: 8,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Avatar.Image
                source={{
                  uri: "https://media.licdn.com/dms/image/D4D03AQFJTgFvK9QpVQ/profile-displayphoto-shrink_800_800/0/1700684884290?e=1715817600&v=beta&t=HqFSgj_gXJ9I8b7fUQtEGOKZoFD4ABE9BY6W4EfeYKg",
                }}
                size={128}
                style={{ marginTop: -24 }}
              />
              <Text style={{ marginTop: 8 }}>
                App demo by{" "}
                <Text style={{ fontWeight: "600" }}>Julián Drets</Text>
              </Text>
              <View style={{ flexDirection: "row", marginTop: 12, gap: 8 }}>
                <SocialButton
                  name="linkedin"
                  url="https://www.linkedin.com/in/juliandrets/"
                />

                <SocialButton
                  name="instagram"
                  url="https://www.instagram.com/juliandrets/"
                />

                <SocialButton name="web" url="https://julabs.agency/" />
              </View>
            </View>
          </BlurView>
        }
        onClose={() => {
          handleClose();
        }}
      />
    </>
  );
};

const SocialButton = ({ name, url }: { name: string; url: string }) => (
  <TouchableOpacity onPress={() => Linking.openURL(url)}>
    <Icon source={name} size={32} />
  </TouchableOpacity>
);
