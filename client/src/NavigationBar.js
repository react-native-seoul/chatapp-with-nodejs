import React, { Component } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1BA2FB",
    flex: 1
  },
  navigationBar: {
    alignItems: "center",
    backgroundColor: "#000000",
    height: 44,
    justifyContent: "center"
  },
  navigationBarTitle: {
    color: "#FFFFFF",
    fontSize: 16
  },
  statusBar: {
    height: 20,
    backgroundColor: "#000000"
  }
});

class NavigationBar extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={styles.statusBar} />
        <View style={styles.navigationBar}>
          <Text style={styles.navigationBarTitle}>Michael</Text>
        </View>
      </View>
    );
  }
}

export default NavigationBar;
