import React, { useState, useEffect, useRef } from "react";
import "./chatBox.css";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const responseRef = useRef(null);

  const handleSend = () => {
    if (message.trim() !== "") {
      setResponse(`This is a sample response for: "${message}"`);
      setMessage("");
    }
  };


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (responseRef.current && !responseRef.current.contains(e.target)) {
        setResponse("");
      }
    };

    if (response) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [response]);

  return (
    <div className="chatbox-container">
      {response && (
        <div className="chat-response" ref={responseRef}>
          <p>{response}</p>
        </div>
      )}

      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Share your ideas or needs, and we’ll estimate cost and timeline"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
