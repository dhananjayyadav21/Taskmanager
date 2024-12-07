// WebSocketService.js

class WebSocketService {
    constructor(url) {
      this.url = url; // The WebSocket server URL
      this.socket = null;
      this.listeners = []; // Array of listeners to handle messages
    }
  
    // Initialize WebSocket connection
    connect() {
      this.socket = new WebSocket(this.url);
  
      this.socket.onopen = () => {
        console.log("WebSocket connected.");
      };
  
      this.socket.onmessage = (event) => {
        this.listeners.forEach((listener) => {
          listener(event.data);
        });
      };
  
      this.socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
  
      this.socket.onclose = () => {
        console.log("WebSocket closed.");
      };
    }
  
    // Send a message to the WebSocket server
    sendMessage(message) {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(message);
      } else {
        console.log("WebSocket not connected.");
      }
    }
  
    // Add a listener to handle incoming messages
    addListener(listener) {
      this.listeners.push(listener);
    }
  
    // Remove a listener
    removeListener(listener) {
      this.listeners = this.listeners.filter((l) => l !== listener);
    }
  
    // Close the WebSocket connection
    disconnect() {
      if (this.socket) {
        this.socket.close();
      }
    }
  }
  
  export default new WebSocketService("ws://localhost:5000"); // Replace with your WebSocket server URL
  