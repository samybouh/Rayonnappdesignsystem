import { Sparkles } from 'lucide-react';

interface ChatBubbleProps {
  message: string;
  sender: 'user' | 'ray';
  timestamp?: string;
}

export function ChatBubble({ message, sender, timestamp }: ChatBubbleProps) {
  const isRay = sender === 'ray';

  return (
    <div className={`flex gap-3 ${isRay ? 'flex-row' : 'flex-row-reverse'}`}>
      {isRay && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-primary-start)] to-[var(--color-primary-mid)] flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      )}
      
      <div className={`flex flex-col gap-1 max-w-[80%] ${isRay ? 'items-start' : 'items-end'}`}>
        <div
          className={`px-4 py-2 rounded-2xl ${
            isRay
              ? 'bg-white text-[var(--color-text-primary)] rounded-tl-sm'
              : 'bg-gradient-to-r from-[var(--color-primary-mid)] to-[var(--color-primary-start)] text-white rounded-tr-sm'
          }`}
        >
          <p className="text-sm">{message}</p>
        </div>
        
        {timestamp && (
          <span className="text-xs text-[var(--color-text-muted)] px-2">
            {timestamp}
          </span>
        )}
      </div>
      
      {!isRay && (
        <div className="w-8 h-8 rounded-full bg-[var(--color-text-muted)] flex items-center justify-center flex-shrink-0 text-white text-sm font-medium">
          U
        </div>
      )}
    </div>
  );
}
