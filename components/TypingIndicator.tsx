import { useEffect, useState } from "react";

interface TypingIndicatorProps {
  show: boolean;
  avatar?: React.ReactNode;
}

const TypingIndicator = ({ show, avatar }: TypingIndicatorProps) => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    if (!show) return;

    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === "...") return ".";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, [show]);

  if (!show) return null;

  return (
    <div className="flex gap-3 mb-6 justify-start animate-fade-in">
      {avatar && (
        <div className="flex-shrink-0">
          {avatar}
        </div>
      )}
      <div className="chat-message chat-message-bot min-h-[60px] flex items-center">
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground">Digitando</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;