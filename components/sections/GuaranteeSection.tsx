import { Shield, CheckCircle, RefreshCw, Clock } from "lucide-react";

const GuaranteeSection = () => {
  const guaranteeFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "7 Dias para Testar",
      description: "Use todo o material por uma semana completa sem compromisso"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Reembolso Total",
      description: "Se não ficar satisfeito, devolvemos 100% do seu dinheiro"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Sem Burocracias",
      description: "Processo simples e rápido, sem perguntas complicadas"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-500/5 to-green-600/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 font-semibold text-sm mb-6">
              <Shield className="w-4 h-4" />
              Garantia Blindada
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sua satisfação é
              <br />
              <span className="text-green-400">100% garantida!</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos tão confiantes na qualidade do nosso material que oferecemos uma garantia incondicional
            </p>
          </div>

          {/* Main Guarantee Card */}
          <div className="bg-background border border-green-500/20 rounded-3xl p-8 mb-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,theme(colors.green.400)_0px,transparent_50%)]" />
            </div>

            <div className="relative z-10 text-center">
              {/* Shield Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                <Shield className="w-10 h-10 text-green-400" />
              </div>

              {/* Main Guarantee Text */}
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Garantia Incondicional de 7 Dias
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Compre hoje, teste por 7 dias completos. Se por qualquer motivo não ficar satisfeito, 
                nós devolvemos <strong className="text-green-400">100% do seu dinheiro</strong> na hora, 
                sem perguntas, sem burocracias.
              </p>

              {/* Guarantee Features */}
              <div className="grid md:grid-cols-3 gap-6">
                {guaranteeFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 animate-fade-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-xl mb-3">
                      <div className="text-green-400">
                        {feature.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Risk Reversal */}
          <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-6">
            <div className="text-center">
              <h4 className="text-xl font-bold text-foreground mb-3">
                🎯 Ou seja, todo o risco é nosso!
              </h4>
              
              <p className="text-muted-foreground mb-4">
                Você não perde nada testando. Ou fica satisfeito com o resultado, ou recebe seu dinheiro de volta.
              </p>

              <div className="flex justify-center items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Sem taxas ocultas</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Reembolso em 24h</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Suporte dedicado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Trust Message */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              💚 <strong className="text-foreground">Nossa missão é sua aprovação.</strong> Se não conseguirmos te ajudar, 
              você não deve pagar nada. É assim que construímos confiança com mais de 15.000 aprovados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;