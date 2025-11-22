import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logo from "@/assets/d2-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="D2 Digital" className="h-20 w-auto" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre Nós
            </a>
            <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Serviços
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#contato">
              <Button variant="hero" size="sm">
                Fale Conosco
              </Button>
            </a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
