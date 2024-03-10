import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { FAB, Avatar, TextInput, Icon, Button } from "react-native-paper";
import SwipeUpDownModal from "react-native-swipe-modal-up-down";
import { theme } from "../Providers/theme";
import { useUserContext } from "../Providers";
import { FeedPost } from "@/mocks/feedPosts";

export const AddPostButton = ({
  handlePost,
}: {
  handlePost: (data: FeedPost) => void;
}) => {
  const [show, setShow] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [text, setText] = useState("");

  const user = useUserContext();

  const handlePressButton = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setAnimateModal(false);
  };

  const onPostMessage = async () => {
    handlePost({
      id: +Math.random().toString(36).substring(7),
      user: {
        avatar: user.avatar,
        nickname: user.nickname,
        username: user.username,
      },
      data: {
        text,
        date: new Date().toISOString(),
        meta: {
          comments: 0,
          shares: 0,
          likes: 0,
        },
      },
    });
    handleClose();
  };

  return (
    <>
      <FAB
        icon="plus"
        style={{
          position: "absolute",
          margin: 16,
          right: 0,
          bottom: 12,
        }}
        onPress={handlePressButton}
        variant="primary"
      />

      <SwipeUpDownModal
        modalVisible={show}
        PressToanimate={animateModal}
        ContentModal={
          <View
            style={{
              width: "100%",
              backgroundColor: theme.colors.background,
              bottom: 0,
              position: "absolute",
              height: "101%",
              overflow: "hidden",
              paddingVertical: 24,
              paddingHorizontal: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={handleClose}>
                <Icon source="arrow-left" size={28} />
              </TouchableOpacity>
              <Button mode="contained" onPress={onPostMessage}>
                Postear
              </Button>
            </View>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Avatar.Image
                source={{ uri: user.avatar }}
                size={40}
                style={{ marginTop: 6 }}
              />
              <TextInput
                mode="outlined"
                placeholder="Qué estás pensando?"
                style={{
                  flex: 1,
                  padding: 0,
                  margin: 0,
                  fontSize: 18,
                  fontWeight: "600",
                }}
                onChangeText={setText}
                outlineStyle={{ borderWidth: 0 }}
                multiline
                autoFocus
              />
            </View>
          </View>
        }
        onClose={() => {
          handleClose();
        }}
      />
    </>
  );
};
