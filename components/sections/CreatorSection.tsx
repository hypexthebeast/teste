import { Award, Users, BookOpen, Target } from "lucide-react";

const CreatorSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/30 rounded-full text-accent font-bold text-sm mb-8 animate-fade-in">
              <Award className="w-5 h-5" />
              CONHEÇA A MENTE POR TRÁS DO ENEM 360
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 animate-fade-in leading-tight" style={{animationDelay: '0.1s'}}>
              QUEM ESTÁ POR TRÁS DA 
              <br />
              <span className="text-accent">SUA APROVAÇÃO?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
              Nossa missão é transformar a forma como você estuda para o ENEM, 
              com uma equipe apaixonada por <strong className="text-accent">educação e tecnologia</strong>.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Creator Image/Info */}
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative bg-gradient-to-br from-card/60 to-card/30 border-2 border-accent/30 rounded-3xl p-8 backdrop-blur-md">
                {/* Creator Avatar */}
                <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mb-6 mx-auto border-4 border-accent/30">
                  <div className="text-6xl">👨‍🏫</div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Equipe ENEM 360</h3>
                  <p className="text-accent font-semibold mb-4">Especialistas em Educação Digital</p>
                  
                  <div className="bg-accent/10 rounded-2xl p-6 text-left">
                    <p className="text-muted-foreground leading-relaxed">
                      "Depois de anos vendo estudantes lutando com métodos tradicionais ineficazes, 
                      decidimos unir <strong className="text-accent">pedagogia avançada</strong> com 
                      <strong className="text-accent"> inteligência artificial</strong> para criar 
                      o sistema de estudos mais eficiente do Brasil."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials & Mission */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card/40 border border-accent/20 rounded-2xl p-6 text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">15.000+</div>
                  <div className="text-sm text-muted-foreground">Estudantes Aprovados</div>
                </div>
                
                <div className="bg-card/40 border border-accent/20 rounded-2xl p-6 text-center animate-fade-in" style={{animationDelay: '0.5s'}}>
                  <BookOpen className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">8 Anos</div>
                  <div className="text-sm text-muted-foreground">Experiência no ENEM</div>
                </div>
                
                <div className="bg-card/40 border border-accent/20 rounded-2xl p-6 text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <Target className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
                </div>
                
                <div className="bg-card/40 border border-accent/20 rounded-2xl p-6 text-center animate-fade-in" style={{animationDelay: '0.7s'}}>
                  <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Resumos Criados</div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-accent/15 to-primary/10 border-2 border-accent/30 rounded-3xl p-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-accent" />
                  Nossa Missão
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Democratizar o acesso à educação de qualidade, oferecendo ferramentas inteligentes 
                  que transformam qualquer estudante em um <strong className="text-accent">candidato de alta performance</strong> no ENEM.
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <Award className="w-5 h-5" />
                  <span>Comprometidos com seu sucesso desde 2016</span>
                </div>
              </div>

              {/* Values */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card/30 border border-accent/20 rounded-xl p-4 animate-fade-in" style={{animationDelay: '0.9s'}}>
                  <h5 className="font-bold text-accent mb-2">🎯 Foco no Resultado</h5>
                  <p className="text-sm text-muted-foreground">Cada funcionalidade foi pensada para maximizar sua performance.</p>
                </div>
                
                <div className="bg-card/30 border border-accent/20 rounded-xl p-4 animate-fade-in" style={{animationDelay: '1.0s'}}>
                  <h5 className="font-bold text-accent mb-2">🚀 Inovação Constante</h5>
                  <p className="text-sm text-muted-foreground">Sempre evoluindo com as melhores tecnologias educacionais.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;