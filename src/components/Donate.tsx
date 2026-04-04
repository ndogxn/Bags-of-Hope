import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Donate = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="donate" className="section-padding" ref={ref}>
      <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <Heart className="mx-auto text-rose mb-4" size={40} />
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">Support Our Mission</h2>
        <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
          Every dollar goes directly toward purchasing items for our goodie bags. 
          Your generosity brings smiles to hospitalized children.
        </p>
        <Button variant="secondary" size="lg" asChild>
          <a href="https://www.gofundme.com" target="_blank" rel="noopener noreferrer">
            Donate on GoFundMe
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Donate;
