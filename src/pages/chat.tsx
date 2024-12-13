import WAChat from "~/components/WAChat/WAChat";
import { NextPageExtended } from "./_app";

const Chat: NextPageExtended = () => {
  return <WAChat />;
};

Chat.auth = {
  required: true,
};

export default Chat;
