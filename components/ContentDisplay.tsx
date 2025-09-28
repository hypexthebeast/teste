// Mapa mental de Redação
import mapaRedacao from "@/assets/mapas/redacao-1.png";

// Resumos organizados por matéria  
import resumoFisica1 from "@/assets/resumos/fisica-1.jpg";
import resumoFisica2 from "@/assets/resumos/fisica-2.jpg";
import resumoBiologia1 from "@/assets/resumos/biologia-1.jpg";
import resumoBiologia2 from "@/assets/resumos/biologia-2.jpg";
import resumoBiologia3 from "@/assets/resumos/biologia-3.jpg";
import resumoQuimica from "@/assets/resumos/quimica-1.jpg";
import resumoMatematica from "@/assets/resumos/matematica-1.jpg";
import resumoHistoria1 from "@/assets/resumos/historia-1.jpg";
import resumoHistoria2 from "@/assets/resumos/historia-2.jpg";
import resumoGeografia from "@/assets/resumos/geografia-1.jpg";

interface ContentDisplayProps {
  type: "mapa" | "resumo" | "questoes" | "surprise" | "studyplan";
  subject: string;
}

const ContentDisplay = ({ type, subject }: ContentDisplayProps) => {
  const getContentTitle = () => {
    switch (type) {
      case "mapa":
        return `Mapa Mental de ${subject}`;
      case "resumo":
        return `Resumo em PDF de ${subject}`;
      case "questoes":
        return `Simulado de ${subject}`;
      case "surprise":
        const surpriseTypes = ["Mapa Mental", "Resumo", "Questões"];
        const randomType = surpriseTypes[Math.floor(Math.random() * surpriseTypes.length)];
        return `Surpresa! ${randomType} de ${subject}`;
      case "studyplan":
        return "Seu Plano de Estudos Personalizado";
      default:
        return "";
    }
  };

  const renderContent = () => {
    if (type === "mapa") {
      // Apenas Redação tem mapa mental disponível
      if (subject === "Redação") {
        return (
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl overflow-hidden border-2 border-accent/30 shadow-[0_0_15px_hsl(var(--accent)/0.2)]">
              <img 
                src={mapaRedacao} 
                alt="Mapa Mental de Redação - Estrutura Dissertativa"
                className="w-full h-auto"
              />
            </div>
          </div>
        );
      } else {
        // Para outras matérias, indica que mapas mentais estão em desenvolvimento
        return (
          <div className="mt-4 p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/30 text-center">
            <p className="text-foreground font-medium mb-2">🧠 Mapa mental de {subject} em produção!</p>
            <p className="text-sm text-muted-foreground mb-4">
              Nossos especialistas estão criando mapas mentais incríveis para todas as matérias.
            </p>
            <button className="accent-button">
              🔔 Me avise quando estiver pronto!
            </button>
          </div>
        );
      }
    }

    if (type === "resumo") {
      // Mapeamento de resumos por matéria
      const resumos: Record<string, { src: string; alt: string }[]> = {
        "Física": [
          { src: resumoFisica1, alt: "Resumo de Física - Mecânica e Cinemática" },
          { src: resumoFisica2, alt: "Resumo de Física - Termodinâmica e Ondas" }
        ],
        "Biologia": [
          { src: resumoBiologia1, alt: "Resumo de Biologia - Citologia e Metabolismo" },
          { src: resumoBiologia2, alt: "Resumo de Biologia - Genética e Evolução" },
          { src: resumoBiologia3, alt: "Resumo de Biologia - Ecologia e Meio Ambiente" }
        ],
        "Química": [
          { src: resumoQuimica, alt: "Resumo de Química - Tabela Periódica e Ligações" }
        ],
        "Matemática": [
          { src: resumoMatematica, alt: "Resumo de Matemática - Funções e Geometria" }
        ],
        "História": [
          { src: resumoHistoria1, alt: "Resumo de História - Brasil Colonial e Império" },
          { src: resumoHistoria2, alt: "Resumo de História - República e Era Vargas" }
        ],
        "Geografia": [
          { src: resumoGeografia, alt: "Resumo de Geografia - Globalização e Geopolítica" }
        ]
      };

      const resumosDaMateria = resumos[subject];
      
      if (resumosDaMateria && resumosDaMateria.length > 0) {
        // Escolhe um resumo aleatório se houver múltiplos
        const resumoSelecionado = resumosDaMateria[Math.floor(Math.random() * resumosDaMateria.length)];
        
        return (
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl overflow-hidden border-2 border-accent/30 shadow-[0_0_15px_hsl(var(--accent)/0.2)]">
              <img 
                src={resumoSelecionado.src} 
                alt={resumoSelecionado.alt}
                className="w-full h-auto"
              />
            </div>
            {resumosDaMateria.length > 1 && (
              <p className="text-center text-sm text-muted-foreground">
                📚 Temos {resumosDaMateria.length} resumos de {subject}! Acesse todos no plano completo.
              </p>
            )}
            <button className="accent-button w-full">
              ⚡ Baixar PDF do Resumo Completo
            </button>
          </div>
        );
      } else {
        // Para Redação que não tem resumo em imagem
        return (
          <div className="mt-4 p-4 bg-card/80 rounded-2xl border border-accent/30 backdrop-blur-sm shadow-[0_0_15px_hsl(var(--accent)/0.1)]">
            <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-xl border border-accent/20">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center border border-accent/30 shadow-[0_0_10px_hsl(var(--accent)/0.2)]">
                <span className="text-accent font-bold">PDF</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Resumo_{subject}_ENEM.pdf</p>
                <p className="text-sm text-muted-foreground">25 páginas • 2.3 MB</p>
              </div>
            </div>
            <button className="accent-button w-full mt-3">
              ⚡ Baixar Resumo
            </button>
          </div>
        );
      }
    }

    if (type === "questoes") {
      return (
        <div className="mt-4 p-4 bg-card/80 rounded-2xl border border-accent/30 backdrop-blur-sm shadow-[0_0_15px_hsl(var(--accent)/0.1)]">
          <div className="space-y-3">
            <div className="p-4 bg-accent/10 rounded-xl border border-accent/20">
              <p className="font-semibold text-foreground mb-2">📝 Questão 1 - {subject}</p>
              <p className="text-sm text-muted-foreground">Uma função exponencial é caracterizada por...</p>
            </div>
            <div className="p-4 bg-accent/10 rounded-xl border border-accent/20">
              <p className="font-semibold text-foreground mb-2">📝 Questão 2 - {subject}</p>
              <p className="text-sm text-muted-foreground">Considerando o gráfico da função...</p>
            </div>
          </div>
          <button className="accent-button w-full mt-3">
            Ver todas as 10 questões
          </button>
          <p className="text-xs text-muted-foreground text-center mt-2">
            💡 Quer o gabarito comentado? Libera com o plano completo!
          </p>
        </div>
      );
    }

    if (type === "surprise") {
      const surpriseMessages = [
        "🎯 Dica ninja: Revisar mapas mentais 15 min antes de dormir aumenta a retenção em 40%!",
        "💪 Você sabia? 73% dos aprovados no ENEM estudavam com resumos visuais!",
        "🚀 Fato: Resolver questões antigas do ENEM aumenta suas chances em 60%!"
      ];
      const randomMessage = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
      
      return (
        <div className="mt-4 p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl border border-accent/30 backdrop-blur-sm shadow-[0_0_25px_hsl(var(--accent)/0.3)]">
          <p className="text-center text-foreground font-medium mb-3">{randomMessage}</p>
          <button className="accent-button w-full">
            🎁 Desbloquear TODAS as surpresas
          </button>
        </div>
      );
    }

    return (
      <div className="mt-4 p-4 bg-card/80 rounded-2xl border border-accent/20 text-center backdrop-blur-sm">
        <p className="text-muted-foreground">Conteúdo em breve para {subject}!</p>
      </div>
    );
  };

  return (
    <div>
      <p className="font-medium text-foreground">{getContentTitle()}</p>
      {renderContent()}
    </div>
  );
};

export default ContentDisplay;