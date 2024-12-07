class WebSocketService {
  constructor(url) {
    this.url = url; // The WebSocket server URL
    this.socket = null;
    this.isConnected = false;
    this.listeners = []; // Array of listeners to handle messages
    this.retryAttempts = 0; // Track retry attempts
    this.maxRetries = 5; // Maximum number of retry attempts
    this.retryDelay = 1000; // Initial retry delay in milliseconds
  }

  // Initialize WebSocket connection
  connect() {
    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      this.isConnected = true;
      this.retryAttempts = 0; // Reset retry attempts on successful connection
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
      this.isConnected = false;
      console.log("WebSocket closed.");
      this.retryConnection();
    };
  }

  // Retry connection with exponential backoff
  retryConnection() {
    if (this.retryAttempts < this.maxRetries) {
      const delay = this.retryDelay * Math.pow(2, this.retryAttempts);
      console.log(`Retrying connection in ${delay}ms...`);
      this.retryAttempts++;

      setTimeout(() => {
        console.log("Attempting to reconnect...");
        this.connect();
      }, delay);
    } else {
      console.error("Max retries reached. WebSocket connection failed.");
    }
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
