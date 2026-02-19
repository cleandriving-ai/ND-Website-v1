
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { DiagnosticStatus } from '../types';

const AIDiagnosticAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [status, setStatus] = useState<DiagnosticStatus>(DiagnosticStatus.IDLE);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, status]);

  const handleAskAI = async () => {
    if (!input.trim() || status === DiagnosticStatus.THINKING) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setInput('');
    setStatus(DiagnosticStatus.THINKING);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a specialist at PipeForce, a CIPP and trenchless pipe repair company in BC. 
        A customer is describing a pipe issue: "${userMsg}". 
        Provide a brief (2-3 sentence) expert assessment. 
        Mention if CIPP lining or Trenchless Repair might be the solution. 
        Be professional, reassuring, and always suggest they call us at +1 (800) 555-PIPE for a camera inspection.`,
        config: {
          temperature: 0.7,
        }
      });

      const aiText = response.text || "I'm sorry, I'm having trouble connecting to my diagnostic system. Please call us directly for immediate help.";
      setMessages(prev => [...prev, {role: 'ai', text: aiText}]);
      setStatus(DiagnosticStatus.COMPLETED);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {role: 'ai', text: "I encountered an error. Our technical team is on standby at +1 (800) 555-PIPE."}]);
      setStatus(DiagnosticStatus.ERROR);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 rounded-2xl shadow-2xl border border-linen flex flex-col overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-navy p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center">🤖</div>
              <span className="font-bold rift-font">AI Diagnostic Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-orange transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          {/* Chat area */}
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-linen/30">
            {messages.length === 0 && (
              <div className="text-center text-sm text-gray-500 py-10">
                Describe your drain symptoms (e.g., "slow sinks, sewage smell") for a quick AI assessment.
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg text-sm ${m.role === 'user' ? 'bg-orange text-white' : 'bg-white shadow-sm border border-linen text-navy'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {status === DiagnosticStatus.THINKING && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg text-sm italic text-gray-400">Thinking...</div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-linen">
            <div className="flex space-x-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                placeholder="Type symptoms here..." 
                className="flex-grow p-2 border border-linen rounded text-sm focus:border-orange focus:outline-none"
              />
              <button 
                onClick={handleAskAI}
                disabled={status === DiagnosticStatus.THINKING}
                className="bg-navy text-white p-2 rounded hover:bg-orange transition disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-orange hover:bg-red-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 group relative"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
          <span className="absolute right-full mr-4 bg-navy text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rift-font">AI Health Check</span>
        </button>
      )}
    </div>
  );
};

export default AIDiagnosticAssistant;
