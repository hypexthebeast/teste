import { ReactNode } from "react";

interface ChatMessageProps {
  children: ReactNode;
  isBot?: boolean;
  avatar?: ReactNode;
}

const ChatMessage = ({ children, isBot = true, avatar }: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 mb-6 ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && avatar && (
        <div className="flex-shrink-0">
          {avatar}
        </div>
      )}
      <div className={`chat-message ${isBot ? 'chat-message-bot' : 'bg-accent text-accent-foreground'}`}>
        {children}
      </div>
    </div>
  );
};

export default ChatMessage;