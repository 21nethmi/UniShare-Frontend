import io from "socket.io-client";

const SOCKET_URL = "http://localhost:3000"; // Update with your backend URL

class SocketService {
  socket = null;

  connect() {
    this.socket = io(SOCKET_URL);

    this.socket.on("connect", () => {
      console.log("Connected to server");
    });

    this.socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  // Add your socket event listeners and emitters here
}

export default new SocketService();
