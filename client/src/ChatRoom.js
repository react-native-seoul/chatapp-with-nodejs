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
  ws;
  isSocketOpen = false;

  constructor(props) {
    super(props);

    this.state = {
      messages
    };
  }

  componentDidMount() {
    this.ws = new WebSocket("ws://localhost:8000");

    this.ws.onopen = () => {
      this.isSocketOpen = true;
    };

    this.ws.onmessage = event => {
      const data = JSON.parse(event.data);
      const message = {
        id: Math.random().toString(),
        body: data.body,
        senderID: "michael",
        time: "5 minutes ago",
        type: "user"
      }

      this.addNewMessage(message);
    };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.flatListContainer}>
          <FlatList
            data={this.state.messages}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>

        <ChatRoomInput onSubmit={this.submit} />
      </KeyboardAvoidingView>
    );
  }

  submit = (text) => {
    const message = {
      id: Math.random().toString(),
      body: text,
      senderID: "andrea",
      time: "5 minutes ago",
      type: "user"
    }

    this.addNewMessage(message);

    if (this.isSocketOpen) {
      this.ws.send(text);
    }
  }

  addNewMessage = (message) => {
    this.setState((prevState) => {
      const newMessages = [...prevState.messages, message];

      return { messages: newMessages };
    });
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
