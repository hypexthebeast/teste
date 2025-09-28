import { ArrowRight, Clock, Zap, Shield, Trophy } from "lucide-react";
import AnimatedButton from "../AnimatedButton";

interface FinalCTASectionProps {
  onCTAClick: () => void;
}

const FinalCTASection = ({ onCTAClick }: FinalCTASectionProps) => {
  return (
    <section className="py-24 bg-gradient-to-br from-accent/20 via-background to-primary/20 relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent))_0px,transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_0%,hsl(var(--accent)/0.1)_50%,transparent_100%)]" />
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
          <Trophy className="w-8 h-8 text-accent" />
        </div>
        <div className="absolute top-40 right-32 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>
          <Zap className="w-6 h-6 text-primary" />
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}>
          <Shield className="w-7 h-7 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Urgency Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 border border-red-500/40 rounded-full text-red-400 font-bold text-sm mb-8 animate-fade-in animate-glow-pulse">
              <Clock className="w-5 h-5" />
              ÚLTIMA CHANCE - OFERTA EXPIRA EM BREVE!
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 animate-fade-in leading-tight" style={{animationDelay: '0.1s'}}>
              NÃO DEIXE SUA APROVAÇÃO 
              <br />
              <span className="text-red-400">PARA DEPOIS!</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
              Aja agora e transforme seus estudos com o <strong className="text-accent">ENEM 360</strong>. 
              <br />
              Esta oferta especial é <strong className="text-red-400">por tempo limitado!</strong>
            </p>
          </div>

          {/* Final Offer Recap */}
          <div className="bg-gradient-to-br from-card/80 to-card/40 border-2 border-accent/40 rounded-3xl p-8 mb-12 backdrop-blur-md shadow-[0_0_50px_hsl(var(--accent)/0.3)] animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-accent/10 rounded-2xl p-6">
                <div className="text-accent text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-foreground mb-2">500+ Resumos</h3>
                <p className="text-sm text-muted-foreground">Estratégicos e organizados</p>
              </div>
              
              <div className="bg-accent/10 rounded-2xl p-6">
                <div className="text-accent text-4xl mb-3">🤖</div>
                <h3 className="font-bold text-foreground mb-2">IA Personalizada</h3>
                <p className="text-sm text-muted-foreground">Correção e orientação 24/7</p>
              </div>
              
              <div className="bg-accent/10 rounded-2xl p-6">
                <div className="text-accent text-4xl mb-3">🚀</div>
                <h3 className="font-bold text-foreground mb-2">Garantia Total</h3>
                <p className="text-sm text-muted-foreground">7 dias ou dinheiro de volta</p>
              </div>
            </div>

            {/* Price Highlight */}
            <div className="bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="text-muted-foreground line-through text-xl">De R$ 655</div>
                <div className="text-4xl md:text-5xl font-black text-accent">R$ 47</div>
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-glow-pulse">
                  93% OFF
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Em até 12x de R$ 4,90 sem juros
              </p>
            </div>

            {/* Final CTA Button */}
            <AnimatedButton
              onClick={onCTAClick}
              variant="accent"
              className="text-2xl px-16 py-8 shadow-[0_0_50px_hsl(var(--accent)/0.7)] hover:shadow-[0_0_70px_hsl(var(--accent)/0.9)] group transform hover:scale-105 transition-all duration-300 animate-glow-pulse"
            >
              🎓 QUERO SER APROVADO NO ENEM COM A IA 360!
              <ArrowRight className="w-8 h-8 ml-4 group-hover:translate-x-3 transition-transform" />
            </AnimatedButton>
          </div>

          {/* Urgency Reinforcement */}
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <Clock className="w-6 h-6 text-red-400 mx-auto mb-2" />
                <div className="text-sm font-semibold text-red-400">Oferta Limitada</div>
              </div>
              
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-4">
                <Zap className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-sm font-semibold text-accent">Acesso Imediato</div>
              </div>
              
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-4">
                <Shield className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-sm font-semibold text-accent">100% Seguro</div>
              </div>
              
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-4">
                <Trophy className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-sm font-semibold text-accent">Garantido</div>
              </div>
            </div>

            <div className="bg-card/30 border border-accent/20 rounded-2xl p-6">
              <p className="text-lg text-muted-foreground">
                ⚠️ <strong className="text-red-400">Atenção:</strong> Esta é sua <strong className="text-accent">última oportunidade</strong> 
                de garantir o ENEM 360 com este preço especial. Não deixe sua aprovação escapar por alguns reais!
              </p>
            </div>

            <div className="text-xs text-muted-foreground max-w-2xl mx-auto">
              🔒 Compra 100% segura e protegida | 💳 Parcelamento sem juros | ⚡ Ativação automática | 
              📞 Suporte especializado 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;