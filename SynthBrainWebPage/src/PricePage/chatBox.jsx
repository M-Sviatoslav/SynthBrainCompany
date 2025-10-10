import React, { useState, useEffect, useRef } from "react";
import "./chatBox.css";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);


const categories = {
  pricing:
    "Our pricing depends on agent complexity — basic packages start at $2,000. Contact sales for a tailored quote.",
  deployment:
    "We handle deployment to cloud or on-premise. Typical rollout takes 1–3 weeks depending on integrations.",
  integration:
    "We integrate agents with CRMs, support platforms, and messaging channels. Share integration details for an estimate.",
  customization:
    "We provide persona, dialogue flow and knowledge-base customization. Tell us which features you need.",
  support:
    "We offer 90 days of support with optional SLA-backed maintenance plans.",
};

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const containerRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const prompt = `
You are a classifier for customer questions about purchasing and using AI agents and chatbots.
Determine which one of the following categories best matches the user's question: ${Object.keys(
        categories
      ).join(", ")}.
Return only the single category name (one of the listed words) or the phrase "out of scope" if the question is not relevant.
Question: "${input}"
      `;

      const result = await model.generateContent(prompt);


      let rawText = "";
      try {
        rawText = result?.response?.text?.() ?? result?.outputText ?? "";
      } catch (e) {
        try {
          rawText =
            typeof result === "string" ? result : JSON.stringify(result);
        } catch (e2) {
          rawText = "";
        }
      }

      const category = rawText.trim().toLowerCase();

      const answer =
        categories[category] ||
        (category.includes("out")
          ? "Sorry, this question is out of scope for our agents and bots."
          : "Sorry, I can't answer that question.");

      setResponse(answer);
      setInput("");
    } catch (err) {
      console.error(err);
      setResponse("Error while contacting the model.");
    }
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setResponse("");
      }
    }

    if (response) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [response]);

  return (
    <div className="chatbox-container" ref={containerRef}>
      {response && (
        <div className="chat-response" role="status" aria-live="polite">
          <p>{response}</p>
        </div>
      )}

      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Ask about our AI agents, integrations, pricing, or deployment"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
