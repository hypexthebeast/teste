import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Como funciona a IA do ENEM 360?",
      answer: "Nossa IA é treinada especificamente para o ENEM. Ela analisa seu desempenho, identifica suas dificuldades e cria um plano de estudos personalizado. Além disso, corrige redações, tira dúvidas e adapta o conteúdo ao seu ritmo de aprendizagem."
    },
    {
      question: "Posso acessar o material em qualquer dispositivo?",
      answer: "Sim! O Pack ENEM 360 funciona em computadores, tablets e celulares. Você pode estudar onde e quando quiser, com sincronização automática do seu progresso entre todos os dispositivos."
    },
    {
      question: "Os resumos cobrem todo o edital do ENEM?",
      answer: "Absolutamente! Nossos 500+ resumos cobrem 100% do edital do ENEM, organizados por matéria e nível de dificuldade. Cada resumo é atualizado constantemente para refletir as tendências mais recentes da prova."
    },
    {
      question: "Como funciona a correção de redação da IA?",
      answer: "A IA analisa sua redação seguindo os critérios oficiais do ENEM: adequação ao tema, tipo textual, coerência, coesão e proposta de intervenção. Ela fornece feedback detalhado, nota estimada e sugestões específicas para melhorar cada competência."
    },
    {
      question: "Preciso de internet para usar o material?",
      answer: "Para a IA e recursos interativos, sim. Mas você pode baixar os resumos, mapas mentais e questões para estudar offline. A sincronização acontece automaticamente quando você se conecta novamente."
    },
    {
      question: "Por quanto tempo tenho acesso ao conteúdo?",
      answer: "Seu acesso é vitalício! Uma vez adquirido, você pode usar o material para sempre, incluindo todas as atualizações e novos conteúdos que adicionarmos à plataforma."
    },
    {
      question: "E se eu não ficar satisfeito?",
      answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu dinheiro sem perguntas, sem burocracias. Todo o risco é nosso!"
    },
    {
      question: "Como recebo os bônus?",
      answer: "Todos os bônus são liberados automaticamente na sua área de membro assim que o pagamento é confirmado. Você recebe acesso imediato a todo o conteúdo prometido."
    },
    {
      question: "Vocês oferecem suporte?",
      answer: "Sim! Temos suporte dedicado 24/7 através da comunidade VIP, chat da plataforma e email. Nossa equipe está sempre pronta para ajudar você a tirar o máximo proveito do material."
    },
    {
      question: "Posso parcelar o pagamento?",
      answer: "Sim! Oferecemos parcelamento em até 12x sem juros no cartão de crédito. Você pode começar a estudar hoje mesmo e pagar de forma que caiba no seu orçamento."
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              <MessageCircle className="w-4 h-4" />
              Tire suas Dúvidas
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Perguntas Frequentes
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Encontre respostas para as dúvidas mais comuns sobre o Pack ENEM 360
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-background border border-accent/20 rounded-2xl overflow-hidden animate-fade-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/5 transition-colors"
                >
                  <h3 className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-accent transition-transform duration-200 flex-shrink-0 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <div className="border-t border-accent/10 pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8 text-center mt-12">
            <h3 className="text-xl font-bold text-foreground mb-3">
              💬 Ainda tem dúvidas?
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Nossa equipe está sempre disponível para ajudar você. Entre em contato e tire todas as suas dúvidas!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors">
                💬 Chat ao Vivo
              </button>
              <button className="px-6 py-3 border border-accent/20 text-accent rounded-xl font-semibold hover:bg-accent/5 transition-colors">
                📧 Enviar Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;