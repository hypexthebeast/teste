import { ArrowRight, CheckCircle, Rocket, Users, Trophy } from "lucide-react";
import AnimatedButton from "../AnimatedButton";

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/5 flex items-center overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent))_0px,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary))_0px,transparent_50%)]" />
      </div>

      {/* Neural Network Lines */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q300,100 600,200 T1200,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M0,400 Q300,300 600,400 T1200,400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M0,600 Q300,500 600,600 T1200,600" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Authority Badge */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-full text-accent font-bold text-sm animate-fade-in shadow-[0_0_20px_hsl(var(--accent)/0.2)]">
              <Trophy className="w-4 h-4" />
              15.000+ APROVADOS NO ENEM
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-7xl font-black text-foreground animate-fade-in leading-tight" style={{animationDelay: '0.1s'}}>
              ENEM 360: SUA APROVAÇÃO
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-glow-pulse">
                GARANTIDA COM A IA!
              </span>
            </h1>
          </div>

          {/* Enhanced Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
            Domine o ENEM com <strong className="text-accent">Resumos Estratégicos</strong>, 
            <strong className="text-accent"> Mapas Mentais Interativos</strong> e um 
            <strong className="text-accent"> Tutor de IA 24/7</strong> para Correção de Redações e 
            Planos de Estudo Personalizados.
          </p>

          {/* Enhanced Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center justify-center gap-2 bg-card/30 border border-accent/20 rounded-xl px-4 py-3 backdrop-blur-sm">
              <Rocket className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-foreground">Acesso Imediato</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-card/30 border border-accent/20 rounded-xl px-4 py-3 backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold text-foreground">Garantia 7 Dias</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-card/30 border border-accent/20 rounded-xl px-4 py-3 backdrop-blur-sm">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-foreground">Suporte 24/7</span>
            </div>
          </div>

          {/* Main CTA Enhanced */}
          <div className="animate-fade-in space-y-4" style={{animationDelay: '0.4s'}}>
            <AnimatedButton
              onClick={onCTAClick}
              variant="accent"
              className="text-xl px-12 py-6 shadow-[0_0_40px_hsl(var(--accent)/0.6)] hover:shadow-[0_0_60px_hsl(var(--accent)/0.8)] group transform hover:scale-105 transition-all duration-300"
            >
              🚀 QUERO MINHA APROVAÇÃO AGORA!
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </AnimatedButton>
            
            <p className="text-sm text-muted-foreground">
              💳 <strong>R$ 47</strong> parcelado em até 12x de R$ 4,90 | ⚡ Acesso Imediato | 🔒 Compra 100% Segura
            </p>
          </div>

          {/* Enhanced Visual Element */}
          <div className="mt-16 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="relative bg-gradient-to-br from-card/60 to-card/30 border-2 border-accent/30 rounded-3xl p-8 backdrop-blur-md shadow-[0_0_50px_hsl(var(--accent)/0.2)]">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-accent to-primary text-accent-foreground px-4 py-2 rounded-full text-sm font-bold animate-glow-pulse">
                🎁 TESTE GRÁTIS
              </div>
              <div className="text-accent text-7xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Experimente Agora: Seu Tutor de IA Personalizado
              </h3>
              <p className="text-muted-foreground text-lg">
                Faça perguntas, gere resumos e receba orientações personalizadas - sem compromisso!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;