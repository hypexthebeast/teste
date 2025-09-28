import { useRef } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ProductMockupsSection from "@/components/sections/ProductMockupsSection";
import PricingSection from "@/components/sections/PricingSection";
import BonusExclusiveSection from "@/components/sections/BonusExclusiveSection";
import ProofSection from "@/components/sections/ProofSection";
import CreatorSection from "@/components/sections/CreatorSection";
import FutureVisualizationSection from "@/components/sections/FutureVisualizationSection";
import ObjectionBreakSection from "@/components/sections/ObjectionBreakSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import FooterSection from "@/components/sections/FooterSection";
import ChatbotSection from "@/components/sections/ChatbotSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import CookieConsent from "@/components/CookieConsent";
import SalesNotifications from "@/components/SalesNotifications";

const LandingPage = () => {
  const offerRef = useRef<HTMLDivElement>(null);

  const scrollToOffer = () => {
    offerRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handlePurchase = () => {
    // Here you would integrate with your payment processor
    console.log("Redirecting to checkout...");
    // Example: window.location.href = "https://checkout.stripe.com/...";
  };

  return (
    <div className="relative">
      <ParticlesBackground />
      <CookieConsent />
      <SalesNotifications />
      
      {/* 1. Hero Section - Cabeçalho Impactante */}
      <HeroSection onCTAClick={scrollToOffer} />

      {/* 2. Problem Section - Identificação da Dor */}
      <ProblemSection />

      {/* 3. Solution Section - Apresentação da Solução */}
      <SolutionSection />

      {/* 4. Product Mockups - Visualização do Produto */}
      <ProductMockupsSection />

      {/* 5. Pricing Section - Preço Ancorado e Oferta Irresistível */}
      <div ref={offerRef}>
        <PricingSection />
      </div>

      {/* 6. Bonus Section - Bônus Exclusivos */}
      <BonusExclusiveSection />

      {/* 7. Chatbot Section - Integração Estratégica */}
      <ChatbotSection />

      {/* 8. Proof Section - Prova Social Aprofundada */}
      <ProofSection />

      {/* 9. Creator Section - Conexão com o Criador */}
      <CreatorSection />

      {/* 10. Future Vision Section - Visualização do Futuro */}
      <FutureVisualizationSection />

      {/* 11. Objection Break - Quebra de Objeções */}
      <ObjectionBreakSection />

      {/* 12. Guarantee Section - Garantia Incondicional */}
      <GuaranteeSection />

      {/* 13. FAQ Section - Perguntas Frequentes */}
      <FAQSection />

      {/* 14. Final CTA Section - Chamada Final */}
      <FinalCTASection onCTAClick={handlePurchase} />

      {/* 13. Footer */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;