import { Check, X, Star, Crown } from "lucide-react";

interface OfferSectionProps {
  onCTAClick: () => void;
}

const OfferSection = ({ onCTAClick }: OfferSectionProps) => {
  const included = [
    "✅ 500+ Resumos Estratégicos (todas as matérias)",
    "✅ 350+ Mapas Mentais Interativos", 
    "✅ IA que Corrige Redações com feedback detalhado",
    "✅ Plano de Estudos Personalizado pela IA",
    "✅ 5000+ Questões Comentadas do ENEM",
    "✅ Cronograma Inteligente de Revisão",
    "✅ Acesso Vitalício ao Conteúdo",
    "✅ Suporte 24/7 da Equipe",
    "✅ Atualizações Gratuitas",
    "✅ Comunidade VIP de Estudantes"
  ];

  const notIncluded = [
    "❌ Métodos ultrapassados",
    "❌ Material desorganizado", 
    "❌ Estudo sem direcionamento",
    "❌ Redações sem correção",
    "❌ Falta de suporte"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              🎯 O Que Está Incluído no 
              <span className="text-accent"> ENEM IA 360</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo que você precisa para passar no ENEM em um só lugar
            </p>
          </div>

          {/* Offer Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* What's Included */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-8">
              <div className="text-center mb-6">
                <Crown className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-green-400">COM O ENEM IA 360</h3>
              </div>
              
              <div className="space-y-3">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm">{item.replace('✅ ', '')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's NOT Included */}
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-2xl p-8">
              <div className="text-center mb-6">
                <X className="w-12 h-12 text-red-400 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-red-400">SEM O ENEM IA 360</h3>
              </div>
              
              <div className="space-y-3">
                {notIncluded.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item.replace('❌ ', '')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Value Stack */}
          <div className="bg-background border border-accent/20 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-center text-foreground mb-6">
              💰 Valor Real do Pacote Completo
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-accent/10">
                <span className="text-foreground">500+ Resumos Estratégicos</span>
                <span className="text-muted-foreground line-through">R$ 97</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-accent/10">
                <span className="text-foreground">IA Corretor de Redações</span>
                <span className="text-muted-foreground line-through">R$ 197</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-accent/10">
                <span className="text-foreground">5000+ Questões Comentadas</span>
                <span className="text-muted-foreground line-through">R$ 67</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-accent/10">
                <span className="text-foreground">Plano de Estudos Personalizado</span>
                <span className="text-muted-foreground line-through">R$ 97</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-accent/10">
                <span className="text-foreground">Suporte 24/7 + Comunidade</span>
                <span className="text-muted-foreground line-through">R$ 197</span>
              </div>
            </div>

            <div className="border-t border-accent/20 pt-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-foreground">Valor Total:</span>
                <span className="text-muted-foreground line-through">R$ 655</span>
              </div>
              <div className="text-center mt-4">
                <div className="text-3xl font-bold text-accent">
                  HOJE: <span className="text-green-400">R$ 47</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Economia de R$ 608 (93% OFF)
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <button
              onClick={onCTAClick}
              className="w-full md:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-12 rounded-xl text-xl transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] animate-pulse mb-4"
            >
              🚀 QUERO GARANTIR MINHA APROVAÇÃO POR R$ 47
            </button>
            
            <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
              <span>💳 12x de R$ 4,90</span>
              <span>•</span>
              <span>🔒 Compra Segura</span>
              <span>•</span>
              <span>⚡ Acesso Imediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;