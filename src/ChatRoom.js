import React, { Component } from "react";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";

import SystemMessage from "./SystemMessage";
import MessageBubble from "./MessageBubble";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1BA2FB",
    flex: 1,
    paddingHorizontal: 16
  }
});

const USER_ID = "andrea";

const messages = [
  {
    id: "1",
    body: "Hi, Andrea! How are you doing?",
    time: "5 minutes ago",
    senderID: "michael"
  },
  {
    id: "2",
    body: "Doing good! Thanks!",
    time: "4 minutes ago",
    senderID: "andrea"
  }
];

class ChatRoom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SystemMessage />

        <FlatList
          data={messages}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }

  keyExtractor = item => item.id;

  renderItem = ({ item }) => {
    return (
      <MessageBubble
        body={item.body}
        time={item.time}
        alignToRight={item.senderID === USER_ID}
      />
    );
  };
}

export default ChatRoom;
