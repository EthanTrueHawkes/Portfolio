const ChatEvent = {
  System: "system",
  Message: "message",
};

class ChatMessage {
  constructor(from, role, type, value) {
    this.from = from;
    this.role = role;
    this.type = type;
    this.value = value;
  }
}

class ChatNotifier {}

const chatNotifier = new ChatNotifier();
export { chatNotifier, ChatEvent, ChatMessage };
