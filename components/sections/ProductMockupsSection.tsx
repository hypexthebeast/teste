import { useState } from "react";
import { ChevronLeft, ChevronRight, Brain, BookOpen, PenTool, Target } from "lucide-react";

const ProductMockupsSection = () => {
  const resumos = [
    { img: eletrostatica, title: "Eletrostática" },
    { img: poluicaoAmbiental, title: "Poluição Ambiental" },
    { img: equilibrioQuimico, title: "Equilíbrio Químico" },
    { img: ondas, title: "Ondas" },
    { img: circulatorio, title: "Sistema Circulatório" },
    { img: genitalFeminino, title: "Sistema Genital Feminino" },
    { img: mendel, title: "Primeira Lei de Mendel" },
    { img: estadosUnidos, title: "Estados Unidos Séc. XIX" },
    { img: periodoRegencial, title: "Período Regencial" },
    { img: urbanizacaoBrasil, title: "Urbanização do Brasil" },
  ];

  const mapasMentais = [
    { img: cinematica, title: "Cinemática" },
    { img: ligacoesQuimicas, title: "Ligações Químicas" },
    { img: figurasLinguagem, title: "Figuras de Linguagem" },
    { img: filosofiaContemporanea, title: "Filosofia Contemporânea" },
    { img: reproducao, title: "Reprodução" },
    { img: persas, title: "Persas" },
    { img: equacaoHubble, title: "Equação de Hubble" },
  ];
  const [currentMockup, setCurrentMockup] = useState(0);
  
  const mockups = [
    {
      title: "IA Corrigindo Redação",
      description: "Feedback detalhado e instantâneo em cada parágrafo",
      icon: <PenTool className="w-6 h-6 text-accent" />,
      imagePlaceholder: "🤖✍️",
      details: "Interface da IA analisando estrutura, coesão, gramática e argumentação"
    },
    {
      title: "Mapa Mental Interativo",
      description: "Visualize e conecte conceitos de forma intuitiva",
      icon: <Brain className="w-6 h-6 text-accent" />,
      imagePlaceholder: "🧠🗺️",
      details: "Mapas mentais gerados pela IA com links para aprofundamento"
    },
    {
      title: "Plano de Estudos Personalizado",
      description: "Cronograma adaptado às suas necessidades",
      icon: <Target className="w-6 h-6 text-accent" />,
      imagePlaceholder: "📅🎯",
      details: "Sistema inteligente que prioriza suas lacunas de conhecimento"
    },
    {
      title: "Banco de Questões Comentadas",
      description: "Milhares de questões com explicações detalhadas",
      icon: <BookOpen className="w-6 h-6 text-accent" />,
      imagePlaceholder: "📚💡",
      details: "Resoluções passo a passo com dicas da IA"
    }
  ];

  const nextMockup = () => {
    setCurrentMockup((prev) => (prev + 1) % mockups.length);
  };

  const prevMockup = () => {
    setCurrentMockup((prev) => (prev - 1 + mockups.length) % mockups.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-card/20 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Veja o ENEM IA 360 em Ação:
              <br />
              <span className="text-accent">Sua Ferramenta Definitiva para a Aprovação!</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore a interface intuitiva e os recursos poderosos que transformarão seus estudos
            </p>
          </div>

          {/* Mockup Carousel */}
          <div className="bg-card/30 border border-accent/20 rounded-3xl p-8 backdrop-blur-sm shadow-[0_0_30px_hsl(var(--accent)/0.1)]">
            <div className="relative">
              {/* Current Mockup Display */}
              <div className="bg-background/80 border border-accent/10 rounded-2xl p-12 min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                  {mockups[currentMockup].icon}
                </div>
                
                {/* Mockup Image Placeholder */}
                <div className="text-8xl mb-6 animate-pulse">
                  {mockups[currentMockup].imagePlaceholder}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {mockups[currentMockup].title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-2">
                  {mockups[currentMockup].description}
                </p>
                
                <p className="text-sm text-accent">
                  {mockups[currentMockup].details}
                </p>
              </div>

              {/* Navigation Controls */}
              <button
                onClick={prevMockup}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-accent/20 hover:bg-accent/30 border border-accent/30 rounded-full p-3 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-accent" />
              </button>
              
              <button
                onClick={nextMockup}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-accent/20 hover:bg-accent/30 border border-accent/30 rounded-full p-3 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-accent" />
              </button>
            </div>

            {/* Mockup Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {mockups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMockup(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentMockup 
                      ? 'w-8 bg-accent' 
                      : 'bg-accent/30 hover:bg-accent/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Video Demo Placeholder */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="text-6xl mb-4">📹</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Vídeo Demonstrativo Completo
              </h3>
              <p className="text-muted-foreground">
                Assista 2 minutos que vão mudar sua forma de estudar para o ENEM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMockupsSection;