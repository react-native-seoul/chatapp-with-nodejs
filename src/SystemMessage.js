import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  systemMessage: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 32
  },
  systemMessageText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700"
  },
  icon: {
    marginRight: 4
  }
});

class SystemMessage extends Component {
  render() {
    return (
      <View style={styles.systemMessage}>
        <Icon color="#FFFFFF" name="alarm" size={14} style={styles.icon} />
        <Text style={styles.systemMessageText}>TODAY AT 10:45 AM</Text>
      </View>
    );
  }
}

export default SystemMessage;
