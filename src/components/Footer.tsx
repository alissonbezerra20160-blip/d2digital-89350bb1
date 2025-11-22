import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/d2-logo.png";

const Footer = () => {
  return (
    <footer id="contato" className="relative border-t border-border bg-gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="D2 Digital" className="h-28 w-auto" />
            <p className="text-muted-foreground">
              Transformando marcas através da união perfeita entre dados e design.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.instagram.com/d2digital.agencia/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/company/d2-digital-agência/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.facebook.com/profile.php?id=61582414019433" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Tráfego Pago</a></li>
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Social Media</a></li>
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Google Meu Negócio</a></li>
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Sites Profissionais</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Empresa</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#sobre" className="hover:text-foreground transition-colors">Sobre Nós</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#contato" className="hover:text-foreground transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">d2.contactdigital@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+55 11 99264-8219</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-xl font-semibold">Receba conteúdo exclusivo</h3>
            <p className="text-muted-foreground">
              Inscreva-se na nossa newsletter e receba insights sobre marketing digital
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-background/50"
              />
              <Button variant="hero">
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 D2 Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
