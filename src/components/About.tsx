import { BarChart3, Palette, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 relative bg-gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold">
                <span className="text-foreground">Onde </span>
                <span className="bg-gradient-accent bg-clip-text text-transparent">Dados</span>
                <span className="text-foreground"> e </span>
                <span className="bg-gradient-accent bg-clip-text text-transparent">Design</span>
                <span className="text-foreground"> se Encontram</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A D2 Digital nasceu com uma missão clara: unir o poder dos dados com a criatividade do design. 
                Acreditamos que não basta ser bonito ou apenas funcional - é preciso ser estratégico.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transformamos marcas através de <span className="text-foreground font-semibold">conteúdo que cria conexão</span>, 
                não ruído. Geramos <span className="text-foreground font-semibold">tráfego com propósito</span>, não achismo. 
                Entregamos <span className="text-foreground font-semibold">crescimento com método</span>, não sorte.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  icon: BarChart3,
                  title: "Data-Driven",
                  description: "Decisões baseadas em dados reais, métricas concretas e análises profundas",
                },
                {
                  icon: Palette,
                  title: "Design Estratégico",
                  description: "Criatividade com propósito, alinhada aos objetivos de negócio",
                },
                {
                  icon: TrendingUp,
                  title: "Resultados Reais",
                  description: "Foco em crescimento mensurável e ROI positivo para sua marca",
                },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
