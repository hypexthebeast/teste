import { Star, Play, TrendingUp, Users } from "lucide-react";

const ProofSection = () => {
  const quickStats = [
    { number: "15.000+", label: "Alunos Aprovados", icon: "🎓" },
    { number: "97%", label: "Taxa de Aprovação", icon: "📈" },
    { number: "4.9/5", label: "Avaliação Média", icon: "⭐" },
    { number: "24h", label: "Suporte Resposta", icon: "💬" }
  ];

  const quickTestimonials = [
    {
      name: "Maria S.",
      score: "980 pontos",
      text: "A IA salvou minha redação! Subiu de 600 para 980 pontos!",
      image: "👩‍🎓"
    },
    {
      name: "João P.",
      score: "1º lugar",
      text: "Passei em 1º lugar na Engenharia usando os resumos!",
      image: "👨‍💻"
    },
    {
      name: "Ana L.",
      score: "Medicina USP",
      text: "Consegui Medicina na USP! Método realmente funciona!",
      image: "👩‍⚕️"
    }
  ];

  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              🏆 Método Comprovado por
              <span className="text-accent"> Milhares de Aprovados!</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Veja os resultados reais de quem já conquistou sua vaga
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {quickStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-background/80 border border-accent/20 rounded-xl p-4 text-center animate-fade-in hover:border-accent/40 transition-all"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-xl font-bold text-accent">{stat.number}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Video Proof Placeholder */}
          <div className="mb-12">
            <div className="bg-background border border-accent/20 rounded-2xl p-8 text-center">
              <div className="relative max-w-md mx-auto mb-6">
                <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl aspect-video flex items-center justify-center">
                  <Play className="w-16 h-16 text-accent" />
                </div>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                  AO VIVO
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                📺 "Como Passei no ENEM com IA em 3 Meses"
              </h3>
              <p className="text-sm text-muted-foreground">
                Depoimento completo de Maria Silva - Medicina USP 2024
              </p>
            </div>
          </div>

          {/* Quick Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {quickTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-background border border-accent/20 rounded-xl p-6 animate-fade-in hover:border-accent/30 transition-colors"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-sm text-foreground mb-4 font-medium">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-accent font-semibold">{testimonial.score}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full text-green-400">
              <TrendingUp className="w-4 h-4" />
              <span className="font-semibold">+2.847 alunos compraram nas últimas 48h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;