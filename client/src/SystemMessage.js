import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  systemMessage: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32
  },
  systemMessageText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700"
  },
  timeContainer: {
    flexDirection: "row"
  },
  icon: {
    marginRight: 4
  }
});

class SystemMessage extends Component {
  render() {
    return (
      <View style={styles.systemMessage}>
        <Text style={styles.systemMessageText}>
          {this.props.body.toUpperCase()}
        </Text>

        <View style={styles.timeContainer}>
          <Icon color="#FFFFFF" name="alarm" size={14} style={styles.icon} />
          <Text style={styles.systemMessageText}>{this.props.time}</Text>
        </View>
      </View>
    );
  }
}

export default SystemMessage;
