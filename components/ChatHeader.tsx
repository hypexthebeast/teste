import { User, MessageCircle } from "lucide-react";

const ChatHeader = () => {
  return (
    <header className="bg-card/80 border-b border-accent/20 p-4 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center border border-accent/20">
          <User className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
      
      <div className="text-center">
        <h1 className="text-lg font-semibold text-foreground">Assistente ENEM</h1>
        <p className="text-xs text-accent">Online agora</p>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center border border-accent/30 shadow-[0_0_10px_hsl(var(--accent)/0.2)]">
          <MessageCircle className="w-5 h-5 text-accent" />
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;