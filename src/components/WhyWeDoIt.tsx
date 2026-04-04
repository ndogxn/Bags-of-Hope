import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyWeDoIt = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="why" className="section-padding" ref={ref}>
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">Why We Do It</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            A hospital stay can be frightening for any child. Away from friends, school, and their normal 
            routines, kids often feel isolated and anxious. A simple goodie bag won't cure an illness — 
            but it can remind a child that someone out there is thinking of them.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            Emotional comfort matters. Studies show that positive distractions like toys and creative 
            activities can reduce stress in pediatric patients. That's what drives us — small acts of 
            kindness that make a real difference.
          </p>
        </div>
        <div className="bg-gradient-to-br from-rose/10 via-tertiary/10 to-secondary/10 rounded-3xl p-10 flex items-center justify-center min-h-[220px]">
          <blockquote className="font-heading text-2xl md:text-3xl italic text-foreground text-center leading-snug">
            "No child should feel alone while they heal."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default WhyWeDoIt;
