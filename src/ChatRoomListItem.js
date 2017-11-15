import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    padding: 32
  },
  description: {
    justifyContent: "space-between"
  },
  profile: {
    backgroundColor: "#CCCCCC",
    width: 50,
    height: 50,
    marginRight: 12
  }
});

const ChatRoomListItem = ({ name, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile} />

      <View style={styles.description}>
        <Text>{name}</Text>
        <Text>{time}</Text>
      </View>
    </View>
  );
};

export default ChatRoomListItem;
