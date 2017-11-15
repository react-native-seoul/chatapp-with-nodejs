import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import ChatRoomListItem from "./ChatRoomListItem";

const data = [
  {
    key: "1",
    name: "Ana Jacobson",
    time: "5 minutes"
  },
  {
    key: "2",
    name: "Michel Shelton",
    time: "3 minutes"
  },
  {
    key: "3",
    name: "Todd Fisher",
    time: "5 minutes"
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1BA2FC",
    paddingHorizontal: 32,
    paddingTop: 64
  }
});

class ChatRoomList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={data} renderItem={this.renderItem} />
      </View>
    );
  }

  renderItem = ({ item }) => {
    return <ChatRoomListItem name={item.name} time={item.time} />;
  };
}

export default ChatRoomList;
