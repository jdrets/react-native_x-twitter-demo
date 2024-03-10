import { View, Image, TouchableOpacity } from "react-native";
import { Avatar, Text, Icon } from "react-native-paper";
import { theme } from "../Providers/theme";
import { useState } from "react";
import { useRouter } from "expo-router";

export const Post = ({ post, withoutBorder = false }) => {
  const [fav, setFav] = useState(false);
  const router = useRouter();

  const handleSeePost = () => {
    router.push({
      pathname: "screens/post-detail",
      params: {
        id: post.id,
      },
    });
  };

  return (
    <TouchableOpacity onPress={handleSeePost}>
      <View
        key={post.id}
        style={{
          flexDirection: "row",
          gap: 8,
          borderTopWidth: withoutBorder ? 0 : 1,
          borderTopColor: theme.colors.outline,
          paddingVertical: 8,
          width: "100%",
        }}
      >
        <Avatar.Image source={{ uri: post.user.avatar }} size={32} />
        <View
          style={{
            flex: 1,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "600" }}>{post.user.nickname}</Text>
            <Text style={{ fontWeight: "300", paddingLeft: 8 }}>
              @{post.user.username}
            </Text>
          </View>
          <Text>{post.data.text}</Text>
          {post.data.image && (
            <TouchableOpacity onPress={() => true}>
              <Image
                source={{ uri: post.data.image }}
                style={{
                  height: 160,
                  width: "100%",
                  flex: 1,
                  maxWidth: "100%",
                  marginTop: 8,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            </TouchableOpacity>
          )}
          <View style={{ flexDirection: "row", gap: 24, marginTop: 8 }}>
            <PostInteractiveButton
              onPress={() => true}
              number={post.data.meta.comments}
              icon="chat-outline"
            />
            <PostInteractiveButton
              onPress={() => true}
              number={post.data.meta.shares}
              icon="share-outline"
            />
            <PostInteractiveButton
              onPress={() => setFav(!fav)}
              number={fav ? post.data.meta.likes + 1 : post.data.meta.likes}
              icon={fav ? "heart" : "heart-outline"}
              color={fav ? "red" : undefined}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const PostInteractiveButton = ({
  onPress,
  number,
  icon,
  color = "white",
  size = 18,
}: {
  onPress: () => void;
  number: number;
  icon: string;
  color?: string;
  size?: number;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
        <Icon source={icon} size={size} color={color} />
        <Text>{number}</Text>
      </View>
    </TouchableOpacity>
  );
};
