import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";

import SystemMessage from "./SystemMessage";
import MessageBubble from "./MessageBubble";
import ChatRoomInput from "./ChatRoomInput";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1BA2FB",
    flex: 1
  },
  flatListContainer: {
    flex: 1,
    paddingHorizontal: 16
  }
});

const USER_ID = "andrea";

const messages = [
  {
    id: "1",
    body: "Chat has started!",
    time: "5 minutes ago",
    senderID: "system",
    type: "system"
  },
  {
    id: "2",
    body: "Hi, Andrea! How are you doing?",
    time: "5 minutes ago",
    senderID: "michael",
    type: "user"
  },
  {
    id: "3",
    body: "Doing good! Thanks!",
    time: "4 minutes ago",
    senderID: "andrea",
    type: "user"
  }
];

class ChatRoom extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.flatListContainer}>
          <FlatList
            data={messages}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
        <ChatRoomInput />
      </KeyboardAvoidingView>
    );
  }

  keyExtractor = item => item.id;

  renderItem = ({ item }) => {
    if (item.type === "system") {
      return <SystemMessage body={item.body} time={item.time} />;
    }

    return (
      <MessageBubble
        alignToRight={item.senderID === USER_ID}
        body={item.body}
        highlighted={item.senderID === USER_ID}
        time={item.time}
      />
    );
  };
}

export default ChatRoom;
