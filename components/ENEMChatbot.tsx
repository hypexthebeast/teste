import { useState, useEffect } from "react";
import { Brain, BookOpen, Zap, Calendar, Sparkles } from "lucide-react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatOption from "./ChatOption";
import SubjectButtons from "./SubjectButtons";
import ContentDisplay from "./ContentDisplay";
import TypingIndicator from "./TypingIndicator";
import ParticlesBackground from "./ParticlesBackground";
import PremiumBubble from "./PremiumBubble";
import AnimatedButton from "./AnimatedButton";
import NameInput from "./NameInput";
import robozinhoImage from "@/assets/robozinho-enem.png";

type ChatState = "asking-name" | "welcome" | "selecting-subject" | "showing-content" | "study-plan" | "feedback";
type ContentType = "mapa" | "resumo" | "questoes" | "surprise" | "studyplan";

const ENEMChatbot = () => {
  const [chatState, setChatState] = useState<ChatState>("asking-name");
  const [currentContentType, setCurrentContentType] = useState<ContentType>("mapa");
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [isTyping, setIsTyping] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [userName, setUserName] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState(false);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setIsTyping(true);
    
    setTimeout(() => {
      setChatState("welcome");
      setIsTyping(false);
    }, 1500);
  };

  const handleOptionSelect = (type: ContentType) => {
    setIsTyping(true);
    setInteractionCount(prev => prev + 1);
    
    if (type === "surprise") {
      // Randomly select content type and subject
      const contentTypes: ContentType[] = ["mapa", "resumo", "questoes"];
      const subjects = ["Matemática", "História", "Biologia", "Redação", "Física", "Química"];
      const randomContentType = contentTypes[Math.floor(Math.random() * contentTypes.length)];
      const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
      
      setTimeout(() => {
        setCurrentContentType(randomContentType);
        setSelectedSubject(randomSubject);
        setChatState("showing-content");
        setIsTyping(false);
      }, 2000);
      return;
    }

    if (type === "studyplan") {
      setTimeout(() => {
        setCurrentContentType(type);
        setChatState("study-plan");
        setIsTyping(false);
      }, 1500);
      return;
    }
    
    setTimeout(() => {
      setCurrentContentType(type);
      setChatState("selecting-subject");
      setIsTyping(false);
    }, 1500);
  };

  const handleSubjectSelect = (subject: string) => {
    setIsTyping(true);
    setInteractionCount(prev => prev + 1);
    
    setTimeout(() => {
      setSelectedSubject(subject);
      setChatState("showing-content");
      setShowFeedback(true);
      setIsTyping(false);
    }, 2000);
  };

  const handleBackToOptions = () => {
    setIsTyping(true);
    setShowFeedback(false);
    
    setTimeout(() => {
      setChatState("welcome");
      setIsTyping(false);
    }, 1000);
  };

  const handleFeedback = (isPositive: boolean) => {
    setShowFeedback(false);
    // Here you could send feedback to analytics
    console.log(`Feedback: ${isPositive ? 'Positive' : 'Negative'} for ${currentContentType} - ${selectedSubject}`);
  };

  const getContentTypeMessage = () => {
    const greeting = userName ? userName : "você";
    
    switch (currentContentType) {
      case "mapa":
        return `Ótima escolha${userName ? `, ${userName}` : ''}! Mapas mentais são excelentes para revisão. De qual matéria você quer o mapa mental?`;
      case "resumo":
        return `Perfeito${userName ? `, ${userName}` : ''}! Nossos resumos são super completos. Escolha a matéria:`;
      case "questoes":
        return `Excelente${userName ? `, ${userName}` : ''}! Vamos treinar com questões reais do ENEM. Qual matéria você quer praticar?`;
      default:
        return "";
    }
  };

  const getSuccessMessage = () => {
    switch (currentContentType) {
      case "mapa":
        return `Aqui está o seu mapa mental de ${selectedSubject} sobre Funções. Bons estudos${userName ? `, ${userName}` : ''}!`;
      case "resumo":
        return `Aqui está o resumo completo de ${selectedSubject}. Baixe e estude quando quiser${userName ? `, ${userName}` : ''}!`;
      case "questoes":
        return `10 questões selecionadas de ${selectedSubject} do ENEM! Teste seus conhecimentos${userName ? `, ${userName}` : ''}!`;
      default:
        return "";
    }
  };

  const getStudyPlanContent = () => {
    const tasks = [
      "📖 Revise o mapa mental de Funções em Matemática (15 min)",
      "🎧 Ouça a áudio-aula sobre Segunda Guerra Mundial (20 min)",
      "📝 Faça exercícios de Citologia em Biologia (25 min)",
      "✍️ Pratique uma redação sobre Meio Ambiente (30 min)"
    ];

    return (
      <div className="space-y-3">
        <p className="font-semibold text-accent mb-4">Seu plano de estudos para hoje:</p>
        {tasks.map((task, index) => (
          <div key={index} className="flex items-start gap-3 p-3 bg-accent/5 rounded-xl border border-accent/20">
            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent mt-0.5">
              {index + 1}
            </div>
            <p className="text-sm text-foreground flex-1">{task}</p>
          </div>
        ))}
        <div className="mt-4 p-3 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl border border-accent/30">
          <p className="text-xs text-accent font-semibold">💡 Dica: Faça intervalos de 5 minutos entre cada atividade!</p>
        </div>
      </div>
    );
  };

  const robotAvatar = (
    <div className="w-12 h-12 neon-avatar overflow-hidden flex-shrink-0 flex items-center justify-center">
      <img 
        src={robozinhoImage} 
        alt="Robozinho do ENEM" 
        className="w-10 h-10 object-cover rounded-full"
      />
    </div>
  );

  const isPremiumMode = interactionCount >= 2;

  return (
    <div className="min-h-screen bg-[hsl(var(--chat-bg))] flex flex-col relative">
      <ParticlesBackground />
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto relative z-10">
        <div className="p-4 space-y-6">
          {/* Name Input */}
          {chatState === "asking-name" && !isTyping && (
            <NameInput onSubmit={handleNameSubmit} />
          )}

          {/* Welcome Message */}
          {chatState === "welcome" && (
            <ChatMessage isBot avatar={robotAvatar}>
              <p className="text-foreground">
                {userName 
                  ? `Olá, ${userName}! Eu sou seu mentor de estudos para o ENEM. Para começar, escolha uma das opções abaixo. O que você gostaria de ver primeiro?`
                  : "Olá! Eu sou seu mentor de estudos para o ENEM. Para começar, escolha uma das opções abaixo. O que você gostaria de ver primeiro?"
                }
              </p>
            </ChatMessage>
          )}

          {/* Typing Indicator */}
          <TypingIndicator show={isTyping} avatar={robotAvatar} />

          {/* Welcome Options */}
          {chatState === "welcome" && !isTyping && (
            <div className="grid grid-cols-2 gap-3">
              <AnimatedButton
                icon={
                  <div className="relative">
                    <Brain className="w-6 h-6" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
                  </div>
                }
                onClick={() => handleOptionSelect("mapa")}
                variant={isPremiumMode ? "premium" : "default"}
                className="animate-fade-in h-auto py-4 flex-col gap-2"
                style={{ animationDelay: '0.1s' }}
              >
                <span className="text-sm">Gerar mapa mental de...</span>
              </AnimatedButton>
              <AnimatedButton
                icon={<Zap className="w-6 h-6 text-yellow-400" />}
                onClick={() => handleOptionSelect("resumo")}
                variant={isPremiumMode ? "premium" : "default"}
                className="animate-fade-in h-auto py-4 flex-col gap-2"
                style={{ animationDelay: '0.2s' }}
              >
                <span className="text-sm">Gerar resumo de...</span>
              </AnimatedButton>
              <AnimatedButton
                icon={<BookOpen className="w-6 h-6 text-blue-400" />}
                onClick={() => handleOptionSelect("questoes")}
                variant={isPremiumMode ? "premium" : "default"}
                className="animate-fade-in h-auto py-4 flex-col gap-2"
                style={{ animationDelay: '0.3s' }}
              >
                <span className="text-sm">Resolver questões de...</span>
              </AnimatedButton>
              <AnimatedButton
                icon={<Calendar className="w-6 h-6 animate-pulse" />}
                onClick={() => handleOptionSelect("studyplan")}
                variant={isPremiumMode ? "premium" : "default"}
                className="animate-fade-in h-auto py-4 flex-col gap-2"
                style={{ animationDelay: '0.4s' }}
              >
                <span className="text-sm">Plano de estudos do dia</span>
              </AnimatedButton>
              <AnimatedButton
                icon={<Sparkles className="w-6 h-6 animate-glow-pulse" />}
                onClick={() => handleOptionSelect("surprise")}
                variant="accent"
                className="animate-fade-in col-span-2 border-2 border-accent/40 shadow-[0_0_20px_hsl(var(--accent)/0.3)]"
                style={{ animationDelay: '0.5s' }}
              >
                🎁 Surpreenda-me!
              </AnimatedButton>
            </div>
          )}

          {/* Subject Selection */}
          {chatState === "selecting-subject" && !isTyping && (
            <div className="animate-fade-in">
              <ChatMessage isBot avatar={robotAvatar}>
                <p className="text-foreground">{getContentTypeMessage()}</p>
              </ChatMessage>
              <SubjectButtons onSubjectSelect={handleSubjectSelect} isPremium={isPremiumMode} />
            </div>
          )}

          {/* Study Plan */}
          {chatState === "study-plan" && !isTyping && (
            <div className="animate-fade-in">
              <ChatMessage isBot avatar={robotAvatar}>
                <div>
                  <p className="text-foreground mb-4">
                    {userName ? `Perfeito, ${userName}!` : 'Perfeito!'} Aqui está seu plano personalizado de estudos para hoje:
                  </p>
                  {getStudyPlanContent()}
                </div>
              </ChatMessage>
              
              <ChatMessage isBot avatar={robotAvatar}>
                <div>
                  <p className="text-foreground mb-4">O que você gostaria de fazer agora?</p>
                  <p className="text-sm text-accent font-medium mb-3">
                    💡 Quer que eu monte questões baseadas nesse plano? 
                    <span className="text-xs text-muted-foreground block">
                      (Disponível no plano completo)
                    </span>
                  </p>
                  <AnimatedButton 
                    onClick={handleBackToOptions}
                    variant="accent"
                    className="w-full"
                  >
                    ✨ Ver mais opções
                  </AnimatedButton>
                </div>
              </ChatMessage>
            </div>
          )}

          {/* Content Display */}
          {chatState === "showing-content" && !isTyping && (
            <div className="animate-fade-in">
              <div className="flex gap-3 mb-6 justify-start">
                {robotAvatar && (
                  <div className="flex-shrink-0">
                    {robotAvatar}
                  </div>
                )}
                <PremiumBubble type={currentContentType} isPremium={isPremiumMode}>
                  <div>
                    <p className="text-foreground mb-2">{getSuccessMessage()}</p>
                    <ContentDisplay type={currentContentType} subject={selectedSubject} />
                    
                    {/* Feedback Section */}
                    {showFeedback && (
                      <div className="mt-4 p-3 bg-accent/5 rounded-xl border border-accent/20 animate-fade-in">
                        <p className="text-sm text-foreground mb-3">Este material foi útil?</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleFeedback(true)}
                            className="flex-1 py-2 px-4 bg-green-500/20 border border-green-500/30 rounded-lg
                                     text-green-400 font-medium transition-all duration-300
                                     hover:bg-green-500/30 hover:scale-105"
                          >
                            👍 Útil
                          </button>
                          <button
                            onClick={() => handleFeedback(false)}
                            className="flex-1 py-2 px-4 bg-red-500/20 border border-red-500/30 rounded-lg
                                     text-red-400 font-medium transition-all duration-300
                                     hover:bg-red-500/30 hover:scale-105"
                          >
                            👎 Não útil
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </PremiumBubble>
              </div>
              
              <ChatMessage isBot avatar={robotAvatar}>
                <div>
                  <p className="text-foreground mb-4">O que você gostaria de fazer agora?</p>
                  {currentContentType === "resumo" && (
                    <p className="text-sm text-accent font-medium mb-3">
                      📚 Quer que eu monte questões baseadas nesse resumo? 
                      <span className="text-xs text-muted-foreground block">
                        (Plano completo)
                      </span>
                    </p>
                  )}
                  {currentContentType === "mapa" && (
                    <p className="text-sm text-accent font-medium mb-3">
                      🎯 Quer o resumo completo desse tópico? 
                      <span className="text-xs text-muted-foreground block">
                        (Plano completo)
                      </span>
                    </p>
                  )}
                  {currentContentType === "questoes" && (
                    <p className="text-sm text-accent font-medium mb-3">
                      ✅ Quer o gabarito comentado e mais 50 questões? 
                      <span className="text-xs text-muted-foreground block">
                        (Plano completo)
                      </span>
                    </p>
                  )}
                  <AnimatedButton 
                    onClick={handleBackToOptions}
                    variant="accent"
                    className="w-full"
                  >
                    ✨ Ver mais opções
                  </AnimatedButton>
                </div>
              </ChatMessage>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="p-4 bg-card/50 border-t border-accent/20 backdrop-blur-sm">
        <div className="text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            Está gostando? Temos muito mais conteúdo!
          </p>
          
          {/* Gamified Progress */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex gap-1">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    index < interactionCount 
                      ? 'bg-accent shadow-[0_0_10px_hsl(var(--accent)/0.6)]' 
                      : 'bg-accent/20 border border-accent/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-accent font-semibold">
              {3 - interactionCount} restantes
            </span>
          </div>

          {interactionCount < 3 ? (
            <button className="accent-button w-full group">
              <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-2px]">
                🚀
              </span>{" "}
              {3 - interactionCount} perguntas grátis restantes
            </button>
          ) : (
            <button className="w-full py-3 px-6 bg-gradient-to-r from-accent to-accent/80 
                           text-accent-foreground rounded-2xl font-semibold
                           shadow-[0_0_25px_hsl(var(--accent)/0.5)]
                           hover:shadow-[0_0_35px_hsl(var(--accent)/0.7)]
                           hover:scale-105 transition-all duration-300
                           animate-glow-pulse">
              🔓 Desbloquear Acesso Ilimitado!
            </button>
          )}
          
          <button className="w-full py-2 text-accent font-medium text-sm hover:underline transition-colors">
            Quero o plano completo!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ENEMChatbot;