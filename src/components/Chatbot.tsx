"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Welcome to A ZONE. I am your precision assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let response = "I've received your request. For custom CNC or Laser work, would you like to speak with a technical expert?";
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes("price") || lowerInput.includes("cost")) {
        response = "Our pricing is tailored to material thickness and complexity. I recommend uploading your DXF/PDF file in the 'Contact' section for a sub-millimeter accurate quote.";
      } else if (lowerInput.includes("material")) {
        response = "We process Acrylic, MDF, Aluminium, and Leather with industrial precision. We also offer metal marking via laser.";
      } else if (lowerInput.includes("time") || lowerInput.includes("fast")) {
        response = "Standard production is 3-5 days. Express 48-hour delivery is available for urgent prototypes.";
      }

      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-poppins">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 50, scale: 0.9, rotateX: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="mb-6 w-[350px] h-[500px] glass rounded-[2.5rem] flex flex-col overflow-hidden border border-accent-cyan/30 shadow-[0_0_50px_rgba(34,211,238,0.15)] neon-glow-cyan"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border-b border-glass-border flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-accent-cyan border border-accent-cyan/50">
                    <Bot size={20} />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#020617] animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xs font-orbitron font-bold uppercase tracking-[0.2em] text-white">A ZONE AI</h3>
                  <p className="text-[10px] text-accent-cyan font-bold uppercase tracking-widest opacity-70">Online Assistant</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-slate-400">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] px-5 py-3 rounded-[1.5rem] text-sm leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-accent-cyan text-black font-bold shadow-[0_5px_15px_rgba(34,211,238,0.3)]" 
                      : "glass border border-white/10 text-slate-200"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="glass px-4 py-2 rounded-full flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-6 pt-2">
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask precision questions..."
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-6 pr-12 py-4 text-xs outline-none focus:border-accent-cyan focus:bg-white/10 transition-all group-hover:border-white/20"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-accent-cyan transition-all hover:scale-105 shadow-lg">
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-accent-cyan/50 transition-all relative group"
      >
        <div className="absolute inset-0 rounded-full border-2 border-accent-cyan opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
