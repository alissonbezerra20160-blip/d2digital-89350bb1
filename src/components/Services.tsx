import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, MapPin, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Gestão de Tráfego Pago",
    description: "Estratégias pagas para aumentar o tráfego de visitantes qualificados",
    features: ["Google Ads", "Facebook Ads", "Instagram Ads", "Análise de ROI"],
  },
  {
    icon: Users,
    title: "Social Media",
    description: "Desenvolvimento de materiais digitais que conectam a marca ao público de forma estratégica",
    features: ["Planejamento", "Criação de Conteúdo", "Gestão de Perfis", "Engajamento"],
  },
  {
    icon: MapPin,
    title: "Google Meu Negócio",
    description: "Otimização de perfis empresariais no Google para aumentar a visibilidade local",
    features: ["Otimização SEO", "Avaliações", "Posts Regulares", "Insights"],
  },
  {
    icon: Globe,
    title: "Sites Profissionais",
    description: "Desenvolvimento de sites sob medida que conectam propósito, design e resultado",
    features: ["Design Responsivo", "SEO On-page", "Performance", "Manutenção"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-foreground">Nossas </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">Soluções</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo que seu negócio precisa em um só lugar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-border bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary" asChild>
                  <a href="https://wa.me/5511992648219" target="_blank" rel="noopener noreferrer">
                    Contratar Agora
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Ainda não tem certeza de qual solução é ideal para você?
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://wa.me/5511992648219" target="_blank" rel="noopener noreferrer">
              Agende uma Consultoria Gratuita
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
