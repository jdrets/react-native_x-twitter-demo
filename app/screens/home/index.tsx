import { View } from "react-native";
import { Text, useLayoutContext } from "@/ui";
import { LayoutWrapper } from "../../ui/components/LayoutWrapper";
import { feedPosts } from "@/mocks/feedPosts";
import { Post } from "@/ui/components/Post";
import { AddPostButton } from "@/ui/components/AddPostButton";
import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const layoutProps = useLayoutContext();

  const setPosts = (data) => {
    layoutProps.setLayoutProps({
      ...layoutProps,
      loadingBar: false,
      feedPosts: data,
    });
  };

  useEffect(() => {
    setPosts(feedPosts.sort(() => Math.random() - 0.5));
  }, []);

  const handlePost = async (data) => {
    try {
      layoutProps.setLayoutProps({ ...layoutProps, loadingBar: true });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setPosts([data, ...layoutProps.feedPosts]);
    } catch (error) {
      layoutProps.setLayoutProps({ ...layoutProps, loadingBar: false });
    }
  };

  const handleRefresh = async () => {
    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setPosts(layoutProps.feedPosts.sort(() => Math.random() - 0.5));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LayoutWrapper onRefresh={handleRefresh} refreshing={loading}>
        <View style={{ gap: 0 }}>
          {layoutProps.feedPosts.map((post, index) => (
            <Post
              withoutBorder={index === 0}
              post={post}
              key={`${post.id}-${index}`}
            />
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
