import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import ChatRoomListItem from "./ChatRoomListItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1BA2FC",
    paddingHorizontal: 32,
    paddingTop: 64
  }
});

class ChatRoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatRooms: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/chat-rooms")
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({ chatRooms: response.body });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.chatRooms} renderItem={this.renderItem} />
      </View>
    );
  }

  renderItem = ({ item }) => {
    return (
      <ChatRoomListItem
        name={item.name}
        navigator={this.props.navigator}
        time={item.time}
      />
    );
  };
}

export default ChatRoomList;
