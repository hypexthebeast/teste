import ENEMChatbot from "../ENEMChatbot";

const ChatbotSection = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              <span className="animate-pulse">🤖</span>
              Demonstração Gratuita
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experimente Agora Seu Mentor de Estudos:
              <br />
              <span className="text-accent">Teste Grátis o Sistema ENEM 360!</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Veja como nosso sistema pode otimizar seus estudos. Faça perguntas, gere resumos, 
              mapas mentais e receba orientações personalizadas - tudo em tempo real!
            </p>
          </div>

          {/* Chatbot Container */}
          <div className="bg-background/80 border border-accent/20 rounded-3xl overflow-hidden shadow-[0_0_50px_hsl(var(--accent)/0.1)] backdrop-blur-sm">
            {/* Demo Badge */}
            <div className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground py-3 px-6 text-center font-semibold">
              🎁 DEMONSTRAÇÃO GRATUITA - Teste 3 Perguntas Sem Compromisso!
            </div>
            
            {/* Chatbot */}
            <div className="h-[600px]">
              <ENEMChatbot />
            </div>
          </div>

          {/* Benefits Below Chatbot */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-background/50 border border-accent/10 rounded-2xl">
              <div className="text-accent text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-foreground mb-2">Respostas Instantâneas</h3>
              <p className="text-sm text-muted-foreground">
                Receba explicações detalhadas em segundos, 24 horas por dia.
              </p>
            </div>
            
            <div className="text-center p-6 bg-background/50 border border-accent/10 rounded-2xl">
              <div className="text-accent text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-foreground mb-2">Conteúdo Personalizado</h3>
              <p className="text-sm text-muted-foreground">
                Material adaptado ao seu nível e necessidades específicas.
              </p>
            </div>
            
            <div className="text-center p-6 bg-background/50 border border-accent/10 rounded-2xl">
              <div className="text-accent text-3xl mb-3">📚</div>
              <h3 className="font-semibold text-foreground mb-2">Acesso Completo</h3>
              <p className="text-sm text-muted-foreground">
                +500 resumos, mapas mentais e milhares de questões comentadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;