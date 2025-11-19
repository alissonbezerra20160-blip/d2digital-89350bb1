import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Rocket, Crown } from "lucide-react";

const faqs = [
  {
    icon: Star,
    number: "01",
    question: "Como ser lembrado?",
    answer: "Branding estratégico que conecta sua marca ao público certo.",
  },
  {
    icon: Rocket,
    number: "02",
    question: "Como crescer rápido?",
    answer: "Marketing orientado a dados, gerando resultados reais em tempo recorde.",
  },
  {
    icon: Crown,
    number: "03",
    question: "Como liderar o mercado?",
    answer: "Com estratégias digitais que antecipam tendências e superam concorrentes.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-foreground">O que as empresas </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">mais querem saber?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <faq.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-5xl font-bold text-muted/20">{faq.number}</span>
                </div>
                <CardTitle className="text-xl">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {faq.answer}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
