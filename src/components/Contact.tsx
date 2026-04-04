import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Mail, Building2 } from "lucide-react";

const cards = [
  { icon: MapPin, title: "Bellaire High School", lines: ["5100 Maple St", "Bellaire, TX 77401"], color: "text-primary" },
  { icon: Mail, title: "Email Us", lines: ["ndogan4821@gmail.com"], color: "text-sky" },
  { icon: Building2, title: "Texas Medical Center", lines: ["Houston, TX"], color: "text-secondary" },
];

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10 text-foreground">Get In Touch</h2>
        <div className={`grid sm:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {cards.map(card => (
            <div key={card.title} className="bg-background border border-border rounded-2xl p-6 text-center">
              <card.icon className={`mx-auto ${card.color} mb-3`} size={28} />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{card.title}</h3>
              {card.lines.map(line => (
                <p key={line} className="text-sm text-muted-foreground font-body">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
