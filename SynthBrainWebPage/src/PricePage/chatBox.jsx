import React, { useState, useEffect, useRef } from "react";
import "./chatBox.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setResponse("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const prompt = `
You are an assistant for a company that develops and sells AI agents and chatbots.
You help answer questions related to:
- Pricing, development time, and categories of AI agents/bots
- General ideas or questions about AI, automation, and chatbot technologies
- Support, deployment, and customization

You must use the following reference information for estimates:

Pricing (approximate):
Neural networks / ML components:
• Simple neural networks — 100–300 € (simple functions)
• Constructions of medium complexity — 450–900 € (more features, external services)
• Large-scale systems — 1000–4000 € (for large-scale tasks)

Bots:
• Simple bots — 100–200 €
• Multifunctional bots — 250–700 €
• Functional bot systems — 1000–2500 €

Implementation time:
• From 1 week (for simple systems) up to 1 month (for complex integrations)

Company key points (use them only if relevant to the question):
• Strong expertise in AI and automation
• Fast implementation
• Flexible pricing
• Individual, attentive approach
• “Get in touch with us — let’s launch a pilot project for your company within days!”

Support (only mention when asked about help or onboarding):
• We help you start using the technology and provide early-stage support.

If the question is unrelated to AI, bots, automation, or our company’s services, politely ask to only ask topic-related questions.

If the question is about AI or bots in general (not directly about our products), you may answer briefly, but always end with something like:
"Try contacting us about this idea — we’d love to discuss it!"

Always answer in the same language the user used.

Do NOT use asterisks or special formatting like **bold** or *italic*. Write clearly and naturally.

Now respond to this question:
"${input}"
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

      const answer = rawText.trim()
        ? rawText.trim()
        : "Sorry, I couldn't get a proper response from the assistant. Please try again or contact sales for exact details.";

      
      setTimeout(() => {
        setResponse(answer);
        setIsLoading(false);
      }, 600);
    } catch (err) {
      console.error(err);
      setResponse("Error while contacting the model.");
      setIsLoading(false);
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
      {isLoading && (
        <div className="chat-response loading" role="status" aria-live="polite">
          <p className="loader-text">Generating response…</p>
          <div className="loader"></div>
        </div>
      )}

      {response && !isLoading && (
        <div className="chat-response fade-in" role="status" aria-live="polite">
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
        <button onClick={handleSend} disabled={isLoading}>
          {isLoading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
