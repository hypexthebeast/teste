import { HelpCircle, CheckCircle, Clock, DollarSign, Brain } from "lucide-react";

const ObjectionBreakSection = () => {
  const objections = [
    {
      icon: <Brain className="w-8 h-8 text-accent" />,
      question: "Será que a IA realmente funciona para o ENEM?",
      answer: "Nossa IA foi treinada com milhares de questões do ENEM dos últimos 10 anos, analisando padrões de correção e critérios de avaliação. Além disso, temos uma equipe pedagógica especializada que valida e aprimora constantemente o sistema. Com mais de 15.000 aprovados, os resultados falam por si mesmos."
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      question: "Não tenho tempo para mais um curso...",
      answer: "Justamente por isso criamos o ENEM IA 360! Nossa IA otimiza seu tempo de estudo, criando planos personalizados que focam apenas no que você precisa. Com resumos estratégicos e mapas mentais, você estuda em 2 horas o que levaria 8 horas no método tradicional. É economia de tempo, não gasto!"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-accent" />,
      question: "É muito caro para o meu orçamento?",
      answer: "Pense assim: R$ 97 dividido em 12x dá menos de R$ 10 por mês - menos que uma assinatura de streaming! É um investimento único que pode mudar completamente seu futuro. Quanto vale para você conquistar a vaga dos seus sonhos? Além disso, com nossa garantia de 7 dias, você pode testar sem riscos."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      question: "E se eu não me adaptar à metodologia?",
      answer: "Nossa metodologia é flexível e se adapta a você, não o contrário! A IA personaliza tudo baseado no seu ritmo e estilo de aprendizado. Além disso, oferecemos garantia incondicional de 7 dias e suporte 24/7 para te ajudar em qualquer dificuldade. Você não está sozinho nessa jornada!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-card/20 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ainda com Dúvidas?
              <br />
              <span className="text-accent">Vamos Quebrar Todas as Objeções!</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Entendemos que você possa ter algumas preocupações. 
              Veja como o ENEM IA 360 resolve cada uma delas:
            </p>
          </div>

          {/* Objections Cards */}
          <div className="space-y-6">
            {objections.map((objection, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-card/60 to-card/30 border border-accent/20 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-accent/30 transition-all animate-fade-in hover:shadow-[0_0_30px_hsl(var(--accent)/0.1)]"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Question Side */}
                  <div className="md:w-1/3 bg-accent/10 p-6 flex items-center gap-4">
                    <div className="flex-shrink-0">
                      {objection.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {objection.question}
                    </h3>
                  </div>

                  {/* Answer Side */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground leading-relaxed">
                        {objection.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Reinforcement */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
              <HelpCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                Ainda Não Está Convencido?
              </h3>
              <p className="text-muted-foreground mb-4">
                Lembre-se: você tem 7 dias de garantia incondicional para testar TODO o material. 
                Se não gostar, devolvemos 100% do seu dinheiro, sem perguntas!
              </p>
              <p className="text-green-400 font-bold">
                Todo o risco é nosso. Sua única chance de perder é não tentar!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionBreakSection;