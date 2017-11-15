import { AppRegistry } from "react-native";
import { Navigation } from "react-native-navigation";

import App from "./src/App";
import { registerScreens } from "./src/screens";

registerScreens(); // this is where you register all of your app's screens

Navigation.startSingleScreenApp({
  screen: {
    screen: "chat.ChatRoomScreen",
    title: "Chat"
  }
});
