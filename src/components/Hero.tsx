import { Button } from "@/components/ui/button";
import { Heart, MapPin, Users } from "lucide-react";

const Hero = () => (
  <section className="section-padding pt-32 pb-24 relative overflow-hidden">
    <div className="absolute top-20 right-10 w-72 h-72 bg-sky/10 rounded-full blur-3xl animate-blob-float" />
    <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-blob-float-delayed" />
    <div className="absolute top-40 left-1/3 w-48 h-48 bg-rose/8 rounded-full blur-3xl animate-blob-float" />

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div>
        <span className="inline-block text-sm font-body font-semibold text-sky tracking-wide mb-4">
          Bellaire High School · Houston, TX
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-foreground">
          Small gestures,{" "}
          <em className="not-italic font-heading italic text-rose">big hope</em>{" "}
          for{" "}
          <span className="text-secondary">kids.</span>
        </h1>
        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8 max-w-lg">
          We're a student-led club assembling goodie bags filled with toys, snacks, and love — 
          delivered to children at hospitals in the Texas Medical Center.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="bg-rose text-rose-foreground hover:bg-rose/90 rounded-pill shadow-md hover:shadow-lg" asChild>
            <a href="#donate">Support Our Cause</a>
          </Button>
          <Button size="lg" className="border-2 border-sky bg-transparent text-sky hover:bg-sky/5 rounded-pill" asChild>
            <a href="#what-we-do">Learn More</a>
          </Button>
        </div>
      </div>

      <div className="relative h-80 md:h-96 hidden md:block">
        <div className="absolute top-0 right-0 bg-background border border-border rounded-2xl shadow-lg p-5 w-56 animate-blob-float">
          <Heart className="text-rose mb-2" size={28} />
          <p className="font-heading text-lg font-semibold text-foreground">Our Mission</p>
          <p className="text-sm text-muted-foreground font-body">Bringing joy & comfort to hospitalized kids.</p>
        </div>
        <div className="absolute top-28 left-4 bg-background border border-border rounded-2xl shadow-lg p-5 w-52 animate-blob-float-delayed">
          <MapPin className="text-sky mb-2" size={28} />
          <p className="font-heading text-lg font-semibold text-foreground">TMC Houston</p>
          <p className="text-sm text-muted-foreground font-body">Texas Medical Center deliveries.</p>
        </div>
        <div className="absolute bottom-4 right-8 bg-secondary/10 border border-secondary/20 rounded-pill px-5 py-3 shadow-md animate-blob-float">
          <div className="flex items-center gap-2">
            <Users className="text-secondary" size={20} />
            <span className="font-body font-semibold text-sm text-foreground">Student-Led Club</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
