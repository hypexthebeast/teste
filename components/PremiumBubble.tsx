import { ReactNode } from "react";

interface PremiumBubbleProps {
  children: ReactNode;
  type: "mapa" | "resumo" | "questoes" | "surprise" | "studyplan";
  isPremium?: boolean;
}

const PremiumBubble = ({ children, type, isPremium = false }: PremiumBubbleProps) => {
  const getIcon = () => {
    switch (type) {
      case "mapa":
        return "🧠";
      case "resumo":
        return "⚡";
      case "questoes":
        return "📝";
      case "surprise":
        return "🎁";
      case "studyplan":
        return "📅";
      default:
        return "✨";
    }
  };

  const bubbleClasses = isPremium
    ? "chat-message premium-bubble"
    : "chat-message chat-message-bot";

  return (
    <div className={bubbleClasses}>
      {isPremium && (
        <div className="flex items-center gap-2 mb-3 text-accent">
          <span className="text-lg">{getIcon()}</span>
          <span className="text-xs font-semibold uppercase tracking-wider">Premium Content</span>
        </div>
      )}
      {children}
    </div>
  );
};

export default PremiumBubble;