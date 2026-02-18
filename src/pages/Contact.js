import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi 👋 I'm Delna's AI assistant." },
    { sender: "ai", text: "What would you like to discuss?" }
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
  if (!input.trim()) return;

  const userMessage = input.toLowerCase();
  let aiResponse = "";

  if (/\b(job|role|hiring)\b/.test(userMessage)) {
    aiResponse =
      "That sounds exciting! 🚀 I'd love to discuss opportunities. You can email me at delnashaiju2003@gmail.com.";
  }

  else if (/\b(project|projects)\b/.test(userMessage)) {
    aiResponse =
      "I'd be happy to talk about my projects! 😊 You can explore them in the Projects section above, or email me for detailed discussion.";
  }

  else if (/\b(collab|collaboration|build)\b/.test(userMessage)) {
    aiResponse =
      "Collaboration? I’m in! 🤝 Let’s build something impactful. Reach me at delnashaiju2003@gmail.com.";
  }

  else if (/\b(algorithm|smartprenatal|model|ml)\b/.test(userMessage)) {
    aiResponse =
      "Great question! 🧠 SmartPrenatal uses machine learning techniques for abnormal pregnancy detection from scan reports. I’d be happy to explain the model and approach in detail via email.";
  }

  else if (/^(hi|hello|hey)\b/.test(userMessage)) {
    aiResponse =
      "Hello there 👋 Thanks for reaching out! What would you like to talk about?";
  }

  else {
    aiResponse =
      "That’s interesting! 👀 You can reach me directly at delnashaiju2003@gmail.com and we’ll take it forward.";
  }

  const newMessages = [
    ...messages,
    { sender: "user", text: input },
    { sender: "ai", text: aiResponse }
  ];

  setMessages(newMessages);
  setInput("");
};


  return (
    <section className="contact">
      <div className="chat-container">

        <h1>Talk to My AI Assistant</h1>
        <p className="chat-sub">
          Let’s make connecting more interesting.
        </p>

        <div className="chat-box">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.sender}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSend}>Send</button>
        </div>

        <div className="contact-links">
          <a href="mailto:delnashaiju2003@gmail.com?subject=Hello&body=I%20want%20to%20connect">Email Me</a>


            
          <a
            href="https://www.linkedin.com/in/delna-shaiju-074806314"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
