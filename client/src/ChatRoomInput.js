import React, { Component } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  container: {},
  sendButton: {
    position: "absolute",
    right: 16,
    bottom: 30,
    alignItems: "center",
    backgroundColor: "#FDBDB9",
    borderRadius: 30,
    height: 60,
    justifyContent: "center",
    width: 60
  },
  textInput: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    height: 60,
    paddingHorizontal: 16
  }
});

class ChatRoomInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={this.setText}
          onSubmitEditing={this.submit}
          placeholder="Type message ..."
          placeholderTextColor="#DDDDDD"
          style={styles.textInput}
          value={this.state.text}
        />

        <TouchableOpacity style={styles.sendButton} onPress={this.submit}>
          <Icon name="send" color="#000000" size={26} />
        </TouchableOpacity>
      </View>
    );
  }

  setText = (text) => {
    this.setState({ text });
  }

  submit = () => {
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  }
}

export default ChatRoomInput;
