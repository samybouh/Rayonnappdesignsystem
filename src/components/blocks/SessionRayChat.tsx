import { useState } from 'react';
import { Button } from '../ui/button';
import { ChatBubble } from './ChatBubble';
import { Send, Sparkles } from 'lucide-react';

interface Message {
  message: string;
  sender: 'ray' | 'user';
}

export function SessionRayChat() {
  const [messages, setMessages] = useState<Message[]>([
    { message: "Super ! Tu as commencé une session de travail ! 🔥", sender: "ray" },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    setMessages(prev => [...prev, { message: inputMessage, sender: "user" }]);
    setInputMessage('');
    
    setTimeout(() => {
      const responses = [
        "Continue comme ça ! 💪",
        "Je suis là si tu as besoin d'aide ! 🌟",
        "Excellente question ! 📚",
        "Tu progresses bien ! ✨"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { message: randomResponse, sender: "ray" }]);
    }, 1000);
  };

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 border border-purple-100/50 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-sm">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-purple-900 text-sm">Ray</h3>
          <p className="text-xs text-purple-500">Assistant IA</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-3 max-h-[250px] overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`
              rounded-xl p-2.5 text-xs sm:text-sm break-words transition-all
              ${msg.sender === 'ray' 
                ? 'bg-gradient-to-br from-amber-50 to-orange-50 text-amber-900 border border-amber-200/50' 
                : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white ml-6 shadow-sm'
              }
            `}
          >
            {msg.message}
          </div>
        ))}
      </div>
      
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Parle à Ray..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1 min-w-0 px-3 py-2 rounded-xl bg-gradient-to-br from-purple-50/80 to-blue-50/80 border border-purple-200 text-purple-900 text-xs sm:text-sm placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-300 transition-all"
        />
        <Button 
          size="sm" 
          onClick={handleSendMessage}
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 w-9 h-9 p-0 shadow-sm transition-all"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
