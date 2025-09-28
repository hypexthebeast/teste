import { useState, useEffect } from "react";
import { Cookie, Shield, X } from "lucide-react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background to-background/95 backdrop-blur-lg border-t border-accent/20 animate-slide-in-up md:p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-foreground font-semibold mb-1">
                Usamos cookies para melhorar sua experiência
              </h3>
              <p className="text-sm text-muted-foreground">
                Utilizamos cookies essenciais para garantir o funcionamento adequado do site e oferecer a melhor experiência possível. 
                Ao continuar navegando, você concorda com nossa política de privacidade.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <button
              onClick={handleAccept}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-primary text-accent-foreground font-semibold rounded-lg hover:shadow-[0_0_20px_hsl(var(--accent)/0.4)] transition-all duration-300"
            >
              <Shield className="w-4 h-4" />
              Aceitar e Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;