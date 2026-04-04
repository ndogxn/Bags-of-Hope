import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.28 8.28 0 0 0 3.76.9V6.69z"/>
  </svg>
);

const FollowUs = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-padding bg-muted/30" ref={ref}>
      <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">Follow Us</h2>
        <p className="text-muted-foreground font-body mb-10">Stay in the loop — our socials are launching soon!</p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
          <div className="bg-background border border-border rounded-2xl p-6 flex flex-col items-center gap-3">
            <Instagram className="text-rose" size={32} />
            <p className="font-heading font-semibold text-foreground">Instagram</p>
            <span className="text-xs font-body text-muted-foreground bg-rose/10 rounded-pill px-3 py-1">Coming Soon</span>
          </div>
          <div className="bg-background border border-border rounded-2xl p-6 flex flex-col items-center gap-3">
            <span className="text-sky"><TikTokIcon /></span>
            <p className="font-heading font-semibold text-foreground">TikTok</p>
            <span className="text-xs font-body text-muted-foreground bg-sky/10 rounded-pill px-3 py-1">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
