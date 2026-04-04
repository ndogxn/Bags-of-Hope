import logoSrc from "@/assets/logo.png";

const BagOfHopeLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <img src={logoSrc} alt="Bags of Hope logo" className={className} />
);

export default BagOfHopeLogo;
