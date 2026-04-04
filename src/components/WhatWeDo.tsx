import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Package, Gift, DollarSign, MapPin } from "lucide-react";

const cards = [
  { num: "01", icon: Package, title: "We Assemble", desc: "Members gather to hand-pack each goodie bag with care, filling them with toys, stuffed animals, and approved snacks.", color: "text-sky", gradient: "from-sky to-secondary" },
  { num: "02", icon: Gift, title: "We Give", desc: "Finished bags are delivered directly to children staying at hospitals in Houston's Texas Medical Center.", color: "text-rose", gradient: "from-rose to-tertiary" },
  { num: "03", icon: DollarSign, title: "We Fundraise", desc: "Through student donations and community support, we fund every bag we create.", color: "text-secondary", gradient: "from-secondary to-sky" },
  { num: "04", icon: MapPin, title: "We Are Local", desc: "Everything happens right here in Bellaire and the greater Houston area — by students, for the community.", color: "text-tertiary", gradient: "from-tertiary to-primary" },
];

const WhatWeDo = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="what-we-do" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">What We Do</h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto">
          From fundraising to delivery, every step is powered by students who care.
        </p>
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {cards.map(card => (
            <div key={card.num} className="group bg-background border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`} />
              <span className="text-5xl font-heading font-bold text-foreground/20">{card.num}</span>
              <card.icon className={`${card.color} mt-3 mb-2`} size={28} />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
