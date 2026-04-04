import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HandCoins, ShoppingBag, Puzzle, Truck } from "lucide-react";

const steps = [
  { icon: HandCoins, title: "Donations Come In", desc: "Students and community members contribute funds.", color: "text-tertiary", bg: "bg-tertiary/10" },
  { icon: ShoppingBag, title: "We Shop & Gather", desc: "We purchase toys, snacks, water, and stuffed animals.", color: "text-sky", bg: "bg-sky/10" },
  { icon: Puzzle, title: "Members Assemble", desc: "Club members hand-pack each bag with love.", color: "text-rose", bg: "bg-rose/10" },
  { icon: Truck, title: "Bags Are Delivered", desc: "Goodie bags go to children at TMC hospitals.", color: "text-secondary", bg: "bg-secondary/10" },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="how-it-works" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">How It Works</h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-lg mx-auto">
          Four simple steps from your generosity to a child's smile.
        </p>
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className={`w-16 h-16 mx-auto rounded-full ${step.bg} flex items-center justify-center mb-4`}>
                <step.icon className={step.color} size={28} />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className={`text-xs font-body font-bold ${step.color} ${step.bg} rounded-pill px-3 py-1`}>Step {i + 1}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block text-muted-foreground/40 text-2xl mt-4">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
