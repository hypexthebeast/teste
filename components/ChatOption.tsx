import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface ChatOptionProps {
  icon: ReactNode;
  text: string;
  onClick: () => void;
}

const ChatOption = ({ icon, text, onClick }: ChatOptionProps) => {
  return (
    <button 
      onClick={onClick}
      className="chat-option-button"
    >
      <div className="text-accent">
        {icon}
      </div>
      <span className="flex-1 font-medium">{text}</span>
      <ChevronRight className="w-5 h-5 text-muted-foreground" />
    </button>
  );
};

export default ChatOption;