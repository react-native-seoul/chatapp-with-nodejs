import { Navigation } from "react-native-navigation";

import ChatRoomScreen from "./ChatRoom";

export function registerScreens() {
  Navigation.registerComponent("chat.ChatRoomScreen", () => ChatRoomScreen);
}
