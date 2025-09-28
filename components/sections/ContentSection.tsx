import { BookOpen, Brain, PenTool, Calculator, Globe, Beaker, Users, FileText } from "lucide-react";

const ContentSection = () => {
  const subjects = [
    {
      icon: <Calculator className="w-8 h-8" />,
      name: "Matemática",
      topics: 85,
      resumos: 65,
      color: "from-blue-400/20 to-blue-600/20",
      preview: "Funções, Geometria, Estatística..."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      name: "Linguagens",
      topics: 72,
      resumos: 58,
      color: "from-green-400/20 to-green-600/20",
      preview: "Literatura, Gramática, Interpretação..."
    },
    {
      icon: <Users className="w-8 h-8" />,
      name: "Ciências Humanas",
      topics: 95,
      resumos: 78,
      color: "from-orange-400/20 to-orange-600/20",
      preview: "História, Geografia, Sociologia..."
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      name: "Ciências da Natureza",
      topics: 88,
      resumos: 72,
      color: "from-purple-400/20 to-purple-600/20",
      preview: "Física, Química, Biologia..."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      name: "Redação",
      topics: 25,
      resumos: 30,
      color: "from-red-400/20 to-red-600/20",
      preview: "Estrutura, Argumentação, Temas..."
    }
  ];

  const features = [
    "📊 Mapas Mentais Interativos: Para revisão rápida e memorização eficiente",
    "📝 Resumos Organizados: Por nível de dificuldade e temas, facilitando o estudo",
    "🎯 Exercícios Direcionados: Para suas lacunas, focando no que você realmente precisa",
    "📱 Acesso em Qualquer Dispositivo: Estude onde e quando quiser, no celular, tablet ou computador",
    "🔄 Conteúdo Atualizado Constantemente: Sempre alinhado com as últimas exigências do ENEM",
    "💡 Dicas Estratégicas para o Dia da Prova: Prepare-se com as melhores táticas para o grande dia"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Recursos Exclusivos do ENEM IA 360:
              <br />
              <span className="text-accent">Tudo para Sua Aprovação!</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conteúdo completo e organizado para garantir sua aprovação no ENEM
            </p>
          </div>

          {/* Subject Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {subjects.map((subject, index) => (
              <div 
                key={index}
                className="group bg-card border border-accent/20 rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--accent)/0.1)] animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${subject.color} rounded-xl p-4 mb-4`}>
                  <div className="flex items-center justify-between">
                    <div className="text-accent">
                      {subject.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">{subject.resumos}</div>
                      <div className="text-xs text-muted-foreground">resumos</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">{subject.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{subject.preview}</p>
                
                {/* Stats */}
                <div className="flex justify-between text-sm">
                  <span className="text-accent font-semibold">{subject.topics} tópicos</span>
                  <span className="text-muted-foreground">100% do edital</span>
                </div>

                {/* Hover Preview */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-xs text-accent font-semibold">✨ Inclui: Resumos + Mapas + Questões</div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              🎯 Recursos Exclusivos Inclusos
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-background/80 rounded-xl animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Total Summary */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-6 px-8 py-4 bg-card border border-accent/20 rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Resumos</div>
              </div>
              <div className="w-px h-8 bg-accent/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">350+</div>
                <div className="text-sm text-muted-foreground">Mapas Mentais</div>
              </div>
              <div className="w-px h-8 bg-accent/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5000+</div>
                <div className="text-sm text-muted-foreground">Questões</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;