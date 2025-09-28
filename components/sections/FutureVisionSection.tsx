import { GraduationCap, Star, Trophy, Heart, Sparkles, ArrowRight } from "lucide-react";

const FutureVisionSection = () => {
  const visionElements = [
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      title: "Receber sua Aprovação",
      description: "A emoção de ver seu nome na lista de aprovados da universidade dos seus sonhos"
    },
    {
      icon: <Trophy className="w-8 h-8 text-accent" />,
      title: "Conquistar sua Vaga",
      description: "Finalmente ingressar no curso que sempre desejou, com a nota que você merece"
    },
    {
      icon: <Star className="w-8 h-8 text-accent" />,
      title: "Realizar seus Sonhos",
      description: "Construir a carreira profissional que vai transformar sua vida e da sua família"
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Orgulhar sua Família",
      description: "Ver o sorriso de orgulho nos rostos de quem sempre acreditou em você"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
      {/* Inspiring Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent))_0px,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary))_0px,transparent_60%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-accent animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute top-40 right-20 text-primary animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>
          <Star className="w-8 h-8" />
        </div>
        <div className="absolute bottom-32 left-20 text-accent animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}>
          <Trophy className="w-7 h-7" />
        </div>
        <div className="absolute bottom-20 right-10 text-primary animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}>
          <GraduationCap className="w-6 h-6" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 rounded-full text-accent font-bold text-sm mb-8 animate-fade-in">
              <Sparkles className="w-5 h-5" />
              VISUALIZE SEU FUTURO DE SUCESSO
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 animate-fade-in leading-tight" style={{animationDelay: '0.1s'}}>
              IMAGINE SUA VIDA APÓS A
              <br />
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                APROVAÇÃO NO ENEM!
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
              O ENEM 360 não é apenas um curso, é o seu <strong className="text-accent">passaporte para um futuro brilhante</strong>.
              <br />
              Visualize as portas que se abrirão para você:
            </p>
          </div>

          {/* Vision Journey */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-primary to-accent opacity-30 hidden lg:block" />

            <div className="space-y-16">
              {visionElements.map((element, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} animate-fade-in`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {/* Content */}
                  <div className="flex-1 max-lg:text-center">
                    <div className={`relative bg-gradient-to-br from-card/60 to-card/30 border-2 border-accent/30 rounded-3xl p-8 backdrop-blur-md shadow-[0_0_30px_hsl(var(--accent)/0.1)] hover:shadow-[0_0_50px_hsl(var(--accent)/0.2)] transition-all duration-500 group`}>
                      {/* Step Number */}
                      <div className="absolute -top-4 -left-4 bg-gradient-to-r from-accent to-primary text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg animate-glow-pulse">
                        {index + 1}
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                          {element.icon}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                            {element.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {element.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full border-4 border-background shadow-[0_0_20px_hsl(var(--accent)/0.4)] z-10">
                    <ArrowRight className="w-8 h-8 text-accent-foreground" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>

          {/* Emotional Impact Section */}
          <div className="text-center mt-20">
            <div className="relative bg-gradient-to-br from-accent/15 to-primary/10 border-2 border-accent/30 rounded-3xl p-12 backdrop-blur-md shadow-[0_0_50px_hsl(var(--accent)/0.2)] animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent to-primary text-accent-foreground px-6 py-3 rounded-full text-sm font-bold animate-glow-pulse">
                ✨ SEU MOMENTO CHEGOU
              </div>
              
              <div className="text-6xl mb-6">🎓</div>
              <h3 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                A LIBERDADE DE ESCOLHER SEU 
                <br />
                <span className="text-accent">PRÓPRIO DESTINO</span>
              </h3>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Imagine a <strong className="text-accent">alegria da conquista</strong>, a sensação de 
                  <strong className="text-accent"> dever cumprido</strong> e a <strong className="text-accent">confiança</strong> 
                  de saber que você é capaz de alcançar qualquer objetivo que se propuser.
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Sua família celebrando sua vitória. Seus amigos te parabenizando. E você, 
                  <strong className="text-accent"> orgulhoso(a) de si mesmo(a)</strong>, caminhando em direção ao 
                  <strong className="text-accent"> futuro que sempre sonhou</strong>.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-accent font-semibold">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  <span>Realização Pessoal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span>Conquista Profissional</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>Orgulho Familiar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-card/30 border border-accent/20 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-foreground mb-4">
                🚀 Esse Futuro Está Mais Próximo Do Que Você Imagina!
              </h4>
              <p className="text-muted-foreground text-lg">
                Com o ENEM 360, sua aprovação não é apenas um sonho - é uma <strong className="text-accent">realidade em construção</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVisionSection;