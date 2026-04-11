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

class ChatNotifier {
  events = [];
  handlers = [];

  constructor() {
    const port = window.location.port;
    const protocol = window.location.protocol === "http:" ? "ws" : "wss";

    // Use /ws only if your backend websocket server is set up for that path
    this.socket = new WebSocket(
      `${protocol}://${window.location.hostname}:${port}/ws`,
    );

    this.socket.onopen = () => {
      this.receiveEvent(
        new ChatMessage("system", "system", ChatEvent.System, {
          msg: "connected",
        }),
      );
    };

    this.socket.onclose = () => {
      this.receiveEvent(
        new ChatMessage("system", "system", ChatEvent.System, {
          msg: "disconnected",
        }),
      );
    };

    this.socket.onmessage = (msg) => {
      try {
        const event = JSON.parse(msg.data);
        this.receiveEvent(event);
      } catch (err) {
        console.error("Failed to parse websocket message", err);
      }
    };
  }

  broadcastEvent(from, role, value) {
    const event = new ChatMessage(from, role, ChatEvent.Message, value);
    this.socket.send(JSON.stringify(event));
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);
    this.handlers.forEach((handler) => handler(event));
  }
}

const chatNotifier = new ChatNotifier();
export { chatNotifier, ChatEvent, ChatMessage };
