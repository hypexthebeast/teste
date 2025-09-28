import { useState } from "react";
import { User } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

interface NameInputProps {
  onSubmit: (name: string) => void;
}

const NameInput = ({ onSubmit }: NameInputProps) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="chat-message chat-message-bot">
        <p className="text-foreground mb-4">
          Olá! Eu sou seu assistente de estudos para o ENEM. 
          Para tornar nossa conversa mais pessoal, qual é o seu nome?
        </p>
        
        <div className="space-y-3">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite seu nome aqui..."
              className="w-full pl-10 pr-4 py-3 bg-input border border-accent/30 rounded-xl 
                       text-foreground placeholder-muted-foreground 
                       focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20
                       transition-all duration-300"
              autoFocus
            />
          </div>
          
          <AnimatedButton
            onClick={handleSubmit}
            variant="accent"
            className={`w-full transition-opacity duration-300 ${
              !name.trim() ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Vamos começar! ✨
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default NameInput;