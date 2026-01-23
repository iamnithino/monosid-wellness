import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Bot, ArrowLeft, MoreVertical } from 'lucide-react';

const ChatPage = ({ navigateTo }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, I'm Dr. Sky. I'm here to listen. How are you feeling today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMsg = { 
        id: Date.now() + 1, 
        text: "Thank you for sharing that with me. Remember, this is a safe space. Can you tell me more about what's on your mind?", 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 animate-in fade-in">
      {/* Chat Header */}
      <header className="bg-white border-b px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => navigateTo('home')} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft size={20} className="text-slate-600" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Bot size={24} className="text-blue-600" />
            </div>
            <div>
              <h2 className="font-bold text-slate-800 leading-none">Dr. Sky</h2>
              <span className="text-xs text-green-500 font-medium italic">Online & Listening</span>
            </div>
          </div>
        </div>
        <button className="p-2 text-slate-400 hover:text-slate-600">
          <MoreVertical size={20} />
        </button>
      </header>

      {/* Messages Area */}
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.sender === 'user' ? 'bg-slate-200' : 'bg-blue-600'
              }`}>
                {msg.sender === 'user' ? <User size={16} className="text-slate-600" /> : <Bot size={16} className="text-white" />}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.sender === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        <div ref={scrollRef} />
      </main>

      {/* Input Area */}
      <footer className="bg-white border-t p-6">
        <form onSubmit={handleSend} className="max-w-4xl mx-auto relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="w-full pl-6 pr-14 py-4 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
          <button 
            type="submit" 
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            <Send size={18} />
          </button>
        </form>
        <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold">
          Encrypted & Anonymous Conversations
        </p>
      </footer>
    </div>
  );
};

export default ChatPage;