import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  bubble: {
    flexDirection: "row",
    marginBottom: 16
  },
  bubbleOnRight: {
    justifyContent: "flex-end"
  },
  bubbleMetaText: {
    color: "#A97B78",
    marginTop: 8,
    fontSize: 11
  },
  bubbleMetaTextOnRight: {
    textAlign: "right"
  },
  bubbleTextContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    padding: 24
  },
  bubbleTextContainerHighlighted: {
    backgroundColor: "#EEEEEE"
  },
  profileImage: {
    height: 45,
    width: 45
  },
  systemMessage: {
    alignItems: "center",
    paddingVertical: 32
  },
  systemMessageText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700"
  },
  container: {
    backgroundColor: "#1BA2FB",
    flex: 1,
    paddingHorizontal: 16
  }
});

class MessageBubble extends Component {
  render() {
    return (
      <View
        style={[styles.bubble, this.props.alignToRight && styles.bubbleOnRight]}
      >
        {!this.props.alignToRight && (
          <Image
            source={require("../images/profile2.jpg")}
            style={styles.profileImage}
          />
        )}
        <View
          style={[
            styles.bubbleTextContainer,
            this.props.highlighted && styles.bubbleTextContainerHighlighted
          ]}
        >
          <Text>{this.props.body}</Text>
          <Text
            style={[
              styles.bubbleMetaText,
              this.props.alignToRight && styles.bubbleMetaTextOnRight
            ]}
          >
            {this.props.time}
          </Text>
        </View>
      </View>
    );
  }
}

export default MessageBubble;
