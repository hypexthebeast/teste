import { Mail, Phone, MapPin, Shield } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-card border-t border-accent/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="text-accent text-2xl">🤖</div>
                <h3 className="text-xl font-bold text-foreground">ENEM IA 360</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                A plataforma de estudos mais completa do Brasil, com IA avançada 
                e conteúdo especializado para sua aprovação no ENEM.
              </p>
              <div className="flex items-center gap-2 text-sm text-accent">
                <Shield className="w-4 h-4" />
                <span>15.000+ Aprovados</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Depoimentos</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Carreiras</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Suporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Garantia</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contato</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" />
                  <a href="mailto:suporte@enemeia360.com" className="hover:text-accent transition-colors">
                    suporte@enemeia360.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" />
                  <a href="tel:+5511999999999" className="hover:text-accent transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-accent mt-0.5" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-accent/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © 2024 ENEM IA 360. Todos os direitos reservados.
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Siga-nos:</span>
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent/20 transition-colors">
                    📘
                  </a>
                  <a href="#" className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent/20 transition-colors">
                    📷
                  </a>
                  <a href="#" className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent/20 transition-colors">
                    🐦
                  </a>
                  <a href="#" className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent/20 transition-colors">
                    💼
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="border-t border-accent/10 pt-6 mt-6">
            <div className="text-xs text-muted-foreground text-center space-y-2">
              <p>
                Este site não é afiliado ao Facebook, Google, Instagram ou qualquer rede social mencionada. 
                Após deixar o Facebook ou qualquer rede social, a responsabilidade não é mais do Facebook e sim nossa.
              </p>
              <p>
                Resultados não são garantidos e podem variar de pessoa para pessoa. 
                Os depoimentos são reais, mas não representam necessariamente os resultados que todos alcançarão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;