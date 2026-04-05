import React, { useState, useRef, useEffect } from "react";

import Dashboard from "../components/Dashboard.jsx";
import axiosConfig from "../util/axiosConfig";

const AIChat = () => {
  const [messages, setMessages] = useState([
    { text: "Hey 👋 Ask me anything about your finances!", sender: "ai" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  // auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);

    setLoading(true);
    

    try {
      const res = await axiosConfig.post("/ai/insights", {
  question: input
});

  console.log("AI RESPONSE:", res.data);

      const aiMessage = {
  text:
    typeof res.data === "string"
      ? res.data
      : res.data.response || res.data.message || JSON.stringify(res.data),
    sender: "ai"
};

      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { text: "⚠️ Error getting response", sender: "ai" }
      ]);
    }

    finally {
  setLoading(false); // 🔥 IMPORTANT
}
    setInput("");
  };

  return (
    <Dashboard activeMenu="AI Insights">
      <div className="my-5 mx-auto">

        <h2 className="text-xl font-semibold mb-4">🤖 AI Insights</h2>

        {/* Chat Container */}
        <div className="bg-white p-5 rounded-xl shadow h-[70vh] flex flex-col">

          {/* Messages */}
          <div className="flex-1 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-3`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-[60%] ${
                    msg.sender === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  <div
  style={{
    whiteSpace: "pre-line"
  }}
>
  {msg.text}
</div>
                </div>
              </div>
            ))}

            {loading && (
  <div className="flex justify-start mb-3">
    <div className="px-4 py-2 rounded-lg bg-gray-200 text-black">
      <span className="animate-pulse">🤖 AI is typing...</span>
    </div>
  </div>
)}

            <div ref={chatEndRef}></div>
          </div>

          {/* Input */}
          <div className="flex mt-4">
            <input
              className="flex-1 border rounded-lg px-4 py-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your finances..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="ml-2 bg-purple-700 text-white px-5 py-2 rounded-lg"
            >
              Send
            </button>
          </div>

        </div>
      </div>
    </Dashboard>
  );
};

export default AIChat;