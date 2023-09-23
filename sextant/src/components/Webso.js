import React, { useEffect } from "react";
import WebSocket from "websocket";

const Webso = () => {
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:55455"); // Replace with your WebSocket server URL

    // WebSocket event handlers
    ws.onopen = () => {
      console.log("WebSocket connection established.");
    };

    ws.onmessage = (event) => {
      console.log("WebSocket message received:", event.data);
      // Handle incoming data from the WebSocket server
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    // Cleanup function to close the WebSocket when the component unmounts
    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <h1>WebSockets</h1>
    </>
  );
};

export default Webso;
