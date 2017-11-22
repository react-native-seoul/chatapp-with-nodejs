import React, { Component } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import NavigationBar from "./NavigationBar";
import ChatRoom from "./ChatRoom";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar />
        <ChatRoom />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
