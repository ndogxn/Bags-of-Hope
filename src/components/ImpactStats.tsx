import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 500, suffix: "+", label: "Bags Delivered", bg: "bg-primary" },
  { value: 40, suffix: "+", label: "Club Members", bg: "bg-sky" },
  { value: 3000, suffix: "+", prefix: "$", label: "Dollars Raised", bg: "bg-secondary" },
  { value: 4, suffix: "", label: "Hospital Partners", bg: "bg-rose" },
];

const StatItem = ({ value, suffix, prefix, label, start }: { value: number; suffix: string; prefix?: string; label: string; start: boolean }) => {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-heading font-bold text-background mb-1">
        {prefix}{count.toLocaleString()}{suffix}
      </p>
      <p className="text-sm font-body text-background/80">{label}</p>
    </div>
  );
};

const ImpactStats = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-rose to-sky" />
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
        {stats.map(stat => (
          <StatItem key={stat.label} {...stat} start={isVisible} />
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
