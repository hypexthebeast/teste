import { AlertTriangle, Clock, BookX, Brain, PenTool } from "lucide-react";
import estudantePreocupado from "@/assets/images/estudante-preocupado.webp";

const ProblemSection = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-red-400" />,
      question: "Não tem tempo suficiente para revisar todas as matérias?",
      description: "Com tantos conteúdos, fica impossível organizar os estudos de forma eficiente."
    },
    {
      icon: <Brain className="w-8 h-8 text-red-400" />,
      question: "Sente que está estudando, mas não está aprendendo?",
      description: "Passar horas estudando sem método pode ser mais prejudicial que útil."
    },
    {
      icon: <PenTool className="w-8 h-8 text-red-400" />,
      question: "Redação continua sendo seu maior pesadelo?",
      description: "Sem feedback personalizado, é quase impossível melhorar a escrita."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
      question: "Não sabe por onde começar ou o que priorizar?",
      description: "A falta de um plano de estudos personalizado gera ansiedade e desperdício de tempo."
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header with Image */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Estudar para o ENEM pode ser desafiador,
              <br />
              <span className="text-accent">mas com a IA 360, não precisa ser assim!</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Sabemos exatamente quais são seus maiores desafios e como a tecnologia pode transformá-los:
            </p>
            
            {/* Hero Image */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_hsl(var(--accent)/0.2)]">
                <img 
                  src={estudantePreocupado} 
                  alt="Estudante enfrentando desafios do ENEM" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-background/80 border border-red-500/20 rounded-2xl p-6 backdrop-blur-sm animate-fade-in hover:border-red-500/40 transition-colors"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {problem.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transition to Solution */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full">
              <span className="text-accent text-2xl">💡</span>
               <span className="text-foreground font-semibold">
                 E se existisse uma solução inteligente para todos esses problemas?
               </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;