import { useState } from "react";

function AIChatbot() {
  const [messages, setMessages] = useState([]);

  const handleAsk = () => {
    setMessages([
      ...messages,
      { text: "Hi! Ask me about my projects.", sender: "bot" }
    ]);
  };

  return (
    <div className="chatbot">
      <button onClick={handleAsk}>Interview My AI Clone</button>
      {messages.map((msg, i) => (
        <p key={i}>{msg.text}</p>
      ))}
    </div>
  );
}

export default AIChatbot;
