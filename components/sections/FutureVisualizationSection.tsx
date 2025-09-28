import { Trophy, Star, Heart, Sparkles, Target, GraduationCap } from "lucide-react";

const FutureVisualizationSection = () => {
  const transformationSteps = [
    {
      icon: <GraduationCap className="w-10 h-10 text-accent" />,
      title: "Receber sua Aprovação",
      description: "A emoção indescritível de ver seu nome na lista de aprovados da universidade dos seus sonhos, celebrando uma conquista que é só sua."
    },
    {
      icon: <Trophy className="w-10 h-10 text-accent" />,
      title: "Conquistar sua Vaga",
      description: "Finalmente ingressar no curso que sempre desejou, com a nota que você merece, abrindo caminho para a carreira que sempre sonhou."
    },
    {
      icon: <Star className="w-10 h-10 text-accent" />,
      title: "Realizar seus Sonhos",
      description: "Construir a carreira profissional que vai transformar sua vida e a da sua família, com a segurança e o propósito que você sempre buscou."
    },
    {
      icon: <Heart className="w-10 h-10 text-accent" />,
      title: "Orgulhar sua Família",
      description: "Ver o sorriso de orgulho nos rostos de quem sempre acreditou em você, sabendo que todo o esforço valeu a pena."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 rounded-full text-accent font-bold text-sm mb-6 animate-fade-in">
              <Sparkles className="w-5 h-5" />
              SEU FUTURO COMEÇA AQUI
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
              Imagine Sua Vida
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Após a Aprovação no ENEM!
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              O ENEM IA 360 não é apenas um curso, é o seu passaporte para um futuro brilhante. 
              Visualize as portas que se abrirão para você.
            </p>
          </div>

          {/* Transformation Journey */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {transformationSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-card/60 to-card/30 border border-accent/20 rounded-2xl p-8 backdrop-blur-sm hover:border-accent/30 transition-all animate-fade-in hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)]"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-accent/10 rounded-2xl p-4">
                    {step.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Emotional Connection */}
          <div className="bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent/30 rounded-3xl p-10 text-center shadow-[0_0_50px_hsl(var(--accent)/0.3)] animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-black text-accent mb-6">
                A LIBERDADE DE ESCOLHER SEU PRÓPRIO DESTINO
              </h3>
              
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                Imagine a alegria da conquista, a sensação de dever cumprido e a confiança 
                de saber que você é capaz de alcançar qualquer objetivo que se propuser.
                <br /><br />
                <strong className="text-accent">Sua família celebrando sua vitória.</strong> 
                <br />
                <strong className="text-accent">Seus amigos te parabenizando.</strong>
                <br />
                <strong className="text-accent">E você, orgulhoso(a) de si mesmo(a), 
                caminhando em direção ao futuro que sempre sonhou.</strong>
              </p>

              {/* Achievement Highlights */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-background/50 border border-accent/20 rounded-xl p-4">
                  <Target className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-sm font-bold text-foreground">Realização Pessoal</div>
                </div>
                
                <div className="bg-background/50 border border-accent/20 rounded-xl p-4">
                  <Trophy className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-sm font-bold text-foreground">Conquista Profissional</div>
                </div>
                
                <div className="bg-background/50 border border-accent/20 rounded-xl p-4">
                  <Heart className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-sm font-bold text-foreground">Orgulho Familiar</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-6">
                <p className="text-xl font-bold text-accent mb-2">
                  Esse Futuro Está Mais Próximo Do Que Você Imagina!
                </p>
                <p className="text-muted-foreground">
                  Com o ENEM 360, sua aprovação não é apenas um sonho - 
                  é uma realidade em construção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVisualizationSection;