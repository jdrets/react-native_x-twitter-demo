import { TouchableOpacity, View } from "react-native";
import { ActivityIndicator, Text, useLayoutContext, useTheme } from "@/ui";
import { LayoutWrapper, Image, Avatar } from "@/ui";
import { FeedPost, feedPosts } from "@/mocks/feedPosts";
import { useLocalSearchParams } from "expo-router";

import { useEffect, useState } from "react";
import { PostInteractiveButton } from "@/ui/components/Post";

export default function Page() {
  const params = useLocalSearchParams();
  const [fav, setFav] = useState(false);
  const [post, setPost] = useState<FeedPost>();
  const layoutProps = useLayoutContext();
  const theme = useTheme();

  useEffect(() => {
    setPost(layoutProps.feedPosts.find((post) => post.id === +params.id));
  }, []);

  if (!post?.user) {
    return null;
  }

  return (
    <LayoutWrapper>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <Avatar.Image source={{ uri: post.user.avatar }} size={32} />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>
            {post.user.nickname}
          </Text>
          <Text style={{ fontWeight: "300" }}>@{post.user.username}</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 12,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600" }}>
          {post.data.text}
        </Text>
        {post.data.image && (
          <TouchableOpacity onPress={() => true}>
            <Image
              source={{ uri: post.data.image }}
              style={{
                height: 200,
                width: "100%",
                flex: 1,
                maxWidth: "100%",
                marginTop: 12,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 32,
          marginTop: 18,
          padding: 8,
          paddingVertical: 12,
          borderTopWidth: 1,
          borderTopColor: theme.colors.outline,
        }}
      >
        <PostInteractiveButton
          onPress={() => true}
          number={post.data.meta.comments}
          icon="chat-outline"
          size={24}
        />
        <PostInteractiveButton
          onPress={() => true}
          number={post.data.meta.shares}
          icon="share-outline"
          size={24}
        />
        <PostInteractiveButton
          onPress={() => setFav(!fav)}
          number={fav ? post.data.meta.likes + 1 : post.data.meta.likes}
          icon={fav ? "heart" : "heart-outline"}
          color={fav ? "red" : undefined}
          size={24}
        />
      </View>
    </LayoutWrapper>
  );
}
