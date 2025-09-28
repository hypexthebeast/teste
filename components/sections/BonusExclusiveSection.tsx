import { Gift, BookOpen, Users, Calendar, Brain, Sparkles } from "lucide-react";

const BonusExclusiveSection = () => {
  const bonuses = [
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      title: "Guia Completo de Redação Nota 1000",
      value: "R$ 97",
      description: "Modelo de redações perfeitas com análises detalhadas"
    },
    {
      icon: <Calendar className="w-8 h-8 text-accent" />,
      title: "Planner de Estudos Inteligente",
      value: "R$ 67",
      description: "Organizador digital com metodologia científica de aprendizado"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Comunidade Exclusiva VIP",
      value: "R$ 497",
      description: "Acesso vitalício ao grupo de elite com mentoria em grupo"
    },
    {
      icon: <Brain className="w-8 h-8 text-accent" />,
      title: "Simulados Personalizados",
      value: "R$ 297",
      description: "Sistema de simulados adaptativos com correção pela IA"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "Aulas Express de Revisão",
      value: "R$ 397",
      description: "Videoaulas condensadas dos pontos mais importantes"
    },
    {
      icon: <Gift className="w-8 h-8 text-accent" />,
      title: "Kit Motivacional Completo",
      value: "R$ 127",
      description: "Técnicas de produtividade e gestão emocional para o ENEM"
    }
  ];

  const totalValue = bonuses.reduce((acc, bonus) => {
    return acc + parseInt(bonus.value.replace('R$ ', ''));
  }, 0);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 rounded-full text-yellow-400 font-bold text-sm mb-6 animate-glow-pulse">
              <Gift className="w-5 h-5" />
              BÔNUS EXCLUSIVOS POR TEMPO LIMITADO
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              E Não Para Por Aí! Receba
              <br />
              <span className="text-accent">Bônus Exclusivos para Turbinar Sua Aprovação!</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Além do Pack completo, você leva todos estes materiais de presente, 
              por tempo limitado, ao escolher o Pacote Premium:
            </p>
          </div>

          {/* Bonus Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {bonuses.map((bonus, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-card/60 to-card/30 border border-accent/20 rounded-2xl p-6 backdrop-blur-sm hover:border-accent/30 transition-all animate-fade-in hover:shadow-[0_0_20px_hsl(var(--accent)/0.1)]"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Value Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-shrink-0">
                    {bonus.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground line-through text-sm">
                      {bonus.value}
                    </div>
                    <div className="text-green-400 font-bold">
                      GRÁTIS
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {bonus.title}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {bonus.description}
                </p>

                {/* Highlight VIP Community */}
                {bonus.title.includes('VIP') && (
                  <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-bold">
                    ⭐ MAIS VALIOSO
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Total Value Highlight */}
          <div className="bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent/30 rounded-3xl p-8 text-center shadow-[0_0_40px_hsl(var(--accent)/0.2)]">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                💰 Valor Total dos Bônus Exclusivos
              </h3>
              
              <div className="flex items-center justify-center gap-8 mb-6">
                <div>
                  <div className="text-lg text-muted-foreground">Valor Individual:</div>
                  <div className="text-3xl font-bold text-muted-foreground line-through">
                    R$ {totalValue.toLocaleString('pt-BR')}
                  </div>
                </div>
                
                <div className="text-4xl text-accent">→</div>
                
                <div>
                  <div className="text-lg text-accent">Você paga:</div>
                  <div className="text-4xl font-bold text-green-400">
                    R$ 0,00
                  </div>
                </div>
              </div>

              <button className="bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-accent-foreground font-bold py-6 px-12 rounded-xl text-xl transition-all duration-300 shadow-[0_0_30px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_40px_hsl(var(--accent)/0.6)] animate-pulse">
                🎁 GARANTA SEUS BÔNUS E SUA APROVAÇÃO AGORA!
              </button>

              <p className="text-sm text-red-400 mt-4 font-semibold">
                ⚠️ Todos os bônus são seus de presente quando você adquire o Pack ENEM 360 hoje!
                <br />
                Oferta limitada - Bônus podem ser removidos a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusExclusiveSection;