import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { PenLine, ShieldCheck, Heart } from "lucide-react";

const steps = [
  { icon: PenLine, title: "Write Your Letter", desc: "Fill out a short Google Form with an encouraging message for a child.", color: "text-sky", bg: "bg-sky/10" },
  { icon: ShieldCheck, title: "Officers Review", desc: "Club officers review and approve each letter before printing.", color: "text-tertiary", bg: "bg-tertiary/10" },
  { icon: Heart, title: "Placed in a Bag", desc: "Approved letters are printed and tucked into a goodie bag.", color: "text-rose", bg: "bg-rose/10" },
];

const WriteALetter = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="write-a-letter" className="section-padding bg-muted/30" ref={ref}>
      <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">Write a Letter</h2>
        <p className="text-muted-foreground font-body mb-10 max-w-xl mx-auto">
          Can't make it to a packing session? You can still brighten a child's day by writing 
          an encouraging letter that will be placed in one of our bags.
        </p>
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className={`w-14 h-14 rounded-full ${step.bg} flex items-center justify-center mb-3`}>
                <step.icon className={step.color} size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{step.desc}</p>
            </div>
          ))}
        </div>
        <Button size="lg" asChild>
          <a href="https://forms.gle/qh7VnTgiirpoJXkUA" target="_blank" rel="noopener noreferrer">
            Open the Letter Form
          </a>
        </Button>
      </div>
    </section>
  );
};

export default WriteALetter;
