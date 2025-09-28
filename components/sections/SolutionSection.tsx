import { Brain, Zap, Target, Calendar, BookOpen, PenTool } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Calendar className="w-10 h-10 text-accent" />,
      problem: "Perde tempo organizando estudos?",
      solution: "Cronogramas Personalizados",
      description: "Sistema monta seu plano de estudos perfeito em segundos, priorizando suas dificuldades!"
    },
    {
      icon: <Brain className="w-10 h-10 text-accent" />,
      problem: "Material desorganizado e disperso?",
      solution: "Resumos Estratégicos",
      description: "+500 resumos organizados por matéria, com mapas mentais e exercícios direcionados."
    },
    {
      icon: <PenTool className="w-10 h-10 text-accent" />,
      problem: "Redação sempre com nota baixa?",
      solution: "Sistema de Correção Avançado",
      description: "Feedback instantâneo e detalhado, com sugestões específicas para melhorar sua nota."
    },
    {
      icon: <Target className="w-10 h-10 text-accent" />,
      problem: "Não sabe o que estudar primeiro?",
      solution: "Análise Personalizada de Desempenho",
      description: "Sistema identifica suas lacunas e cria um roteiro personalizado para sua aprovação."
    },
    {
      icon: <Zap className="w-10 h-10 text-accent" />,
      problem: "Dúvidas que não consegue resolver?",
      solution: "Suporte Pedagógico Completo",
      description: "Tire dúvidas a qualquer hora, receba explicações detalhadas e exemplos práticos."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-accent" />,
      problem: "Questões sem explicação adequada?",
      solution: "Banco de Questões Comentadas",
      description: "Milhares de questões do ENEM com explicações passo a passo detalhadas."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Descubra como o ENEM 360 otimiza sua rotina e garante sua vaga!
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada desafio tem uma solução eficiente. Veja como nosso método revoluciona seus estudos e te leva à aprovação.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-background/80 border border-accent/20 rounded-2xl p-6 backdrop-blur-sm animate-fade-in hover:border-accent/40 hover:shadow-[0_0_20px_hsl(var(--accent)/0.1)] transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4">
                  {solution.icon}
                </div>

                {/* Problem */}
                <div className="mb-3">
                  <p className="text-sm text-red-400 font-medium mb-1">❌ Problema:</p>
                  <p className="text-sm text-muted-foreground">{solution.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <p className="text-sm text-green-400 font-medium mb-1">✅ Solução:</p>
                  <h3 className="text-lg font-bold text-accent mb-2">{solution.solution}</h3>
                  <p className="text-sm text-foreground">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                🎯 Resultado Garantido: <span className="text-accent">Sua Aprovação!</span>
              </h3>
              <p className="text-muted-foreground text-lg">
                Com metodologia comprovada e tecnologia de ponta, você terá tudo que precisa para conquistar sua vaga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;