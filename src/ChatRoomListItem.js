import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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

class ChatRoomListItem extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.handlePress} style={styles.container}>
        <View style={styles.profile} />

        <View style={styles.description}>
          <Text>{this.props.name}</Text>
          <Text>{this.props.time}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  handlePress = () => {
    this.props.navigator.push({
      screen: "chat.ChatRoom",
      title: "ChatRoom"
    });
  };
}

export default ChatRoomListItem;
