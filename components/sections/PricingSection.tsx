import { Check, Crown, Star, Clock, TrendingUp } from "lucide-react";
import AnimatedButton from "../AnimatedButton";

const PricingSection = () => {
  const handlePurchase = (packageType: string) => {
    console.log(`Purchasing ${packageType} package`);
    // Implement payment logic here
  };

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Escolha o Plano Perfeito para
              <br />
              <span className="text-accent">Sua Aprovação no ENEM!</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Oferecemos duas opções para você turbinar seus estudos e garantir sua vaga, 
              com condições especiais por tempo limitado
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Essential Package */}
            <div className="bg-card/50 border border-accent/20 rounded-3xl p-8 backdrop-blur-sm relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  ENEM IA Essencial
                </h3>
                <p className="text-muted-foreground mb-4">
                  O básico para começar sua jornada
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="text-muted-foreground line-through text-lg">
                    De R$ 197
                  </div>
                  <div className="text-4xl font-bold text-accent mb-2">
                    R$ 47
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ou 12x de R$ 4,90
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">500+ Resumos Estratégicos</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">350+ Mapas Mentais Interativos</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">Banco de Questões Comentadas</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">Acesso Imediato</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">Conteúdo Atualizado</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => handlePurchase('essential')}
                className="w-full bg-accent/20 hover:bg-accent/30 border border-accent/30 text-accent font-bold py-4 px-6 rounded-xl transition-all"
              >
                QUERO O ESSENCIAL!
              </button>
            </div>

            {/* Premium Package - Highlighted */}
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent/40 rounded-3xl p-8 backdrop-blur-sm relative shadow-[0_0_40px_hsl(var(--accent)/0.2)]">
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-primary text-accent-foreground px-6 py-2 rounded-full text-sm font-bold animate-glow-pulse">
                🔥 MAIS VENDIDO
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  ENEM IA Premium 360
                </h3>
                <p className="text-muted-foreground mb-4">
                  O pacote completo para sua aprovação
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="text-muted-foreground line-through text-lg">
                    De R$ 655
                  </div>
                  <div className="text-5xl font-bold text-accent mb-2">
                    R$ 97
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ou 12x de R$ 9,90
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-xs font-bold mt-2">
                    93% OFF
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="text-accent font-bold text-sm mb-2">
                  ✨ TUDO DO ESSENCIAL MAIS:
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm font-semibold">IA que Corrige Redações</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm font-semibold">Plano de Estudos Personalizado pela IA</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm font-semibold">Cronograma Inteligente de Revisão</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm font-semibold">Acesso Vitalício</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm font-semibold">Suporte 24/7 Prioritário</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm font-semibold">Comunidade VIP de Estudantes</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm font-semibold">Atualizações Gratuitas</span>
                </div>
              </div>

              {/* CTA */}
              <AnimatedButton
                onClick={() => handlePurchase('premium')}
                variant="accent"
                className="w-full text-lg shadow-[0_0_20px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_30px_hsl(var(--accent)/0.6)]"
              >
                🚀 QUERO O PREMIUM E MINHA APROVAÇÃO!
              </AnimatedButton>
            </div>
          </div>

          {/* Urgency Notice */}
          <div className="mt-12 text-center">
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 max-w-3xl mx-auto animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-red-400 animate-pulse" />
                <h3 className="text-xl font-bold text-red-400">
                  Oferta Válida Somente Hoje!
                </h3>
                <Clock className="w-6 h-6 text-red-400 animate-pulse" />
              </div>
              <p className="text-muted-foreground">
                Últimas vagas com estes preços promocionais. Após o timer, os valores voltam ao normal.
              </p>
              
              {/* Countdown Timer Placeholder */}
              <div className="flex justify-center gap-4 mt-4">
                <div className="bg-background/50 border border-red-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-foreground">23</div>
                  <div className="text-xs text-muted-foreground">HORAS</div>
                </div>
                <div className="bg-background/50 border border-red-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-foreground">59</div>
                  <div className="text-xs text-muted-foreground">MIN</div>
                </div>
                <div className="bg-background/50 border border-red-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-foreground">47</div>
                  <div className="text-xs text-muted-foreground">SEG</div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full text-green-400">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">+2.847 alunos compraram nas últimas 48h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;