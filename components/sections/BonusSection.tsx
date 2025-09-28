import { Gift, Calendar, Users, BookOpen, Target, Zap } from "lucide-react";

const BonusSection = () => {
  const bonuses = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Guia Completo de Redação Nota 1000",
      description: "Passo a passo para escrever redações que conquistam a nota máxima, com modelos e correções da IA",
      value: "R$ 297",
      highlight: false
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Planner de Estudos Inteligente",
      description: "Cronograma personalizado que se adapta ao seu ritmo e metas, com lembretes automáticos",
      value: "R$ 197",
      highlight: false
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade Exclusiva VIP",
      description: "Grupo privado com outros estudantes, monitores e acesso direto aos criadores do método",
      value: "R$ 497",
      highlight: true
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Simulados Personalizados",
      description: "Provas adaptativas que focam nas suas dificuldades, com correção instantânea da IA",
      value: "R$ 397",
      highlight: false
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Aulas Express de Revisão",
      description: "50+ videoaulas de 5-10 minutos com os tópicos mais cobrados no ENEM",
      value: "R$ 597",
      highlight: false
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Kit Motivacional Completo",
      description: "Wallpapers, frases motivacionais e técnicas de produtividade para manter o foco",
      value: "R$ 97",
      highlight: false
    }
  ];

  const totalValue = bonuses.reduce((sum, bonus) => {
    return sum + parseInt(bonus.value.replace('R$ ', ''));
  }, 0);

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              <Gift className="w-4 h-4" />
              Bônus Exclusivos
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              E Não Para Por Aí!
              <br />
              <span className="text-accent">Receba Bônus Exclusivos para Turbinar Sua Aprovação!</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Além do Pack completo, você leva todos estes materiais de presente:
            </p>
          </div>

          {/* Bonus Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {bonuses.map((bonus, index) => (
              <div 
                key={index}
                className={`bg-card border rounded-2xl p-6 transition-all duration-300 animate-fade-in relative overflow-hidden ${
                  bonus.highlight 
                    ? 'border-accent/40 shadow-[0_0_20px_hsl(var(--accent)/0.2)]' 
                    : 'border-accent/20 hover:border-accent/30 hover:shadow-[0_0_15px_hsl(var(--accent)/0.1)]'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Highlight Badge */}
                {bonus.highlight && (
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                    DESTAQUE
                  </div>
                )}

                {/* Icon and Value */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${bonus.highlight ? 'bg-accent/20' : 'bg-accent/10'}`}>
                    <div className="text-accent">
                      {bonus.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">
                      {bonus.value}
                    </div>
                    <div className="text-lg font-bold text-green-400">
                      GRÁTIS
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {bonus.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {bonus.description}
                </p>

                {/* Bottom highlight for featured bonus */}
                {bonus.highlight && (
                  <div className="mt-4 p-2 bg-accent/10 rounded-lg text-center">
                    <span className="text-xs text-accent font-semibold">
                      ⭐ BÔNUS MAIS VALIOSO
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Total Value Summary */}
          <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              💰 Valor Total dos Bônus
            </h3>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Valor Individual:</div>
                <div className="text-2xl font-bold text-muted-foreground line-through">
                  R$ {totalValue.toLocaleString('pt-BR')}
                </div>
              </div>
              
              <div className="text-4xl text-accent">→</div>
              
              <div className="text-center">
                <div className="text-sm text-green-400">Você paga:</div>
                <div className="text-4xl font-bold text-green-400">
                  R$ 0,00
                </div>
              </div>
            </div>

            <p className="text-lg text-foreground mb-4">
              🎁 <strong>Todos os bônus são seus de presente</strong> quando você adquire o Pack ENEM 360 hoje!
            </p>
            
            <div className="text-sm text-muted-foreground">
              ⚡ Oferta limitada - Bônus podem ser removidos a qualquer momento
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;