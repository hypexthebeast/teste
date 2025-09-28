import { Clock, Flame, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

interface UrgencySectionProps {
  onCTAClick: () => void;
}

const UrgencySection = ({ onCTAClick }: UrgencySectionProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-y border-red-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Alert */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 font-semibold text-sm mb-6 animate-pulse">
            <AlertTriangle className="w-4 h-4" />
            ATENÇÃO: Oferta Especial por Tempo Limitado
          </div>

          {/* Main Urgency Message */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            🔥 <span className="text-red-400">ÚLTIMAS HORAS!</span> Preço Promocional de R$ 47 
            <br />
            <span className="text-muted-foreground text-lg">De R$ 297 por apenas R$ 47 (84% OFF)</span>
          </h2>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="bg-background border border-accent/20 rounded-lg p-4 text-center min-w-[70px]">
              <div className="text-2xl font-bold text-accent">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-xs text-muted-foreground">HORAS</div>
            </div>
            <div className="flex items-center text-accent text-2xl font-bold">:</div>
            <div className="bg-background border border-accent/20 rounded-lg p-4 text-center min-w-[70px]">
              <div className="text-2xl font-bold text-accent">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-xs text-muted-foreground">MIN</div>
            </div>
            <div className="flex items-center text-accent text-2xl font-bold">:</div>
            <div className="bg-background border border-accent/20 rounded-lg p-4 text-center min-w-[70px]">
              <div className="text-2xl font-bold text-accent">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-xs text-muted-foreground">SEG</div>
            </div>
          </div>

          {/* Scarcity Message */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Flame className="w-5 h-5 text-orange-400" />
              <span className="font-semibold text-orange-400">RESTAM APENAS 47 VAGAS!</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Para manter a qualidade do suporte, limitamos as vendas. 
              <br />
              <strong className="text-foreground">Não perca sua chance!</strong>
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={onCTAClick}
            className="w-full md:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] animate-pulse"
          >
            💰 SIM! QUERO GARANTIR MINHA VAGA POR R$ 47
          </button>

          <p className="text-xs text-muted-foreground mt-3">
            ⚡ Após o prazo, volta para R$ 297 | 🔒 Compra 100% Segura
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;