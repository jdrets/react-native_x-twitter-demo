import { View } from "react-native";
import { Text, useTheme, Button, useLayoutContext } from "@/ui";
import { LayoutWrapper } from "../../ui/components/LayoutWrapper";
import { feedPosts } from "@/mocks/feedPosts";
import { Post } from "@/ui/components/Post";
import { AddPostButton } from "@/ui/components/AddPostButton";
import { useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState(feedPosts.sort(() => Math.random() - 0.5));
  const layoutProps = useLayoutContext();

  const theme = useTheme();

  const handlePost = async (data) => {
    try {
      layoutProps.setLayoutProps({ ...layoutProps, loadingBar: true });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setPosts([data, ...posts]);
    } finally {
      layoutProps.setLayoutProps({ ...layoutProps, loadingBar: false });
    }
  };

  return (
    <>
      <LayoutWrapper>
        <View style={{ gap: 0 }}>
          {posts.map((post, index) => (
            <Post withoutBorder={index === 0} post={post} key={`${post.id}-${index}`} />
          ))}
        </View>

        <View style={{ paddingVertical: 48, alignItems: "center" }}>
          <Text>No hay mas post para ver </Text>
        </View>
      </LayoutWrapper>

      <AddPostButton handlePost={handlePost} />
    </>
  );
}
