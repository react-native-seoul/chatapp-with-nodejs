import { Navigation } from "react-native-navigation";

import ChatRoom from "./ChatRoom";
import ChatRoomList from "./ChatRoomList";

export function registerScreens() {
  Navigation.registerComponent("chat.ChatRoom", () => ChatRoom);
  Navigation.registerComponent("chat.ChatRoomList", () => ChatRoomList);
}
