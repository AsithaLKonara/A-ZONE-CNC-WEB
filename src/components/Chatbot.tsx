"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! I'm your A ZONE assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simple automated responses based on the project plan
    setTimeout(() => {
      let response = "I'll check that for you. Would you like to request a formal quote?";
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes("price") || lowerInput.includes("cost")) {
        response = "Pricing depends on material type and thickness. For a precise estimate, please use our 'Get Quote' form with your design file.";
      } else if (lowerInput.includes("material")) {
        response = "We work with Acrylic, MDF, Aluminium, Wood, Leather, and various Plastics. What material are you interested in?";
      } else if (lowerInput.includes("time") || lowerInput.includes("fast")) {
        response = "Standard production time is 2-5 business days. We also offer 48-hour express delivery for urgent projects.";
      }

      setMessages((prev) => [...prev, { role: "bot", text: response }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 h-96 glass rounded-3xl flex flex-col overflow-hidden neon-glow-cyan"
          >
            {/* Header */}
            <div className="p-4 bg-accent-cyan/10 border-b border-glass-border flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-orbitron font-bold uppercase tracking-widest text-accent-cyan">AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    msg.role === "user" 
                      ? "bg-accent-cyan text-black font-medium" 
                      : "bg-white/5 border border-white/10 text-slate-300"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-glass-border flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about prices, materials..."
                className="flex-1 bg-white/5 rounded-full px-4 py-2 text-xs outline-none focus:border-accent-cyan transition-colors"
              />
              <button type="submit" className="w-8 h-8 flex items-center justify-center bg-accent-cyan text-black rounded-full hover:scale-110 transition-transform">
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-accent-cyan text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:scale-110 active:scale-95 transition-all"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}
