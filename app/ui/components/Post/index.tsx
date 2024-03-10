import { View, Image, TouchableOpacity } from "react-native";
import { Avatar, Text, Icon } from "react-native-paper";
import { theme } from "../Providers/theme";

export const Post = ({ post, withoutBorder = false }) => {
  return (
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
          <InteractiveButton
            onPress={() => true}
            number={post.data.meta.comments}
            icon="chat-outline"
          />
          <InteractiveButton
            onPress={() => true}
            number={post.data.meta.shares}
            icon="share-outline"
          />
          <InteractiveButton
            onPress={() => true}
            number={post.data.meta.likes}
            icon="heart-outline"
          />
        </View>
      </View>
    </View>
  );
};

const InteractiveButton = ({
  onPress,
  number,
  icon,
}: {
  onPress: () => void;
  number: number;
  icon: string;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
        <Icon source={icon} size={18} />
        <Text>{number}</Text>
      </View>
    </TouchableOpacity>
  );
};
