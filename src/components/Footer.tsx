import BagOfHopeLogo from "./BagOfHopeLogo";

const Footer = () => (
  <footer className="bg-footer text-footer-foreground py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <BagOfHopeLogo className="w-14 h-14" />
        <span className="font-heading text-lg font-bold">Bags of Hope</span>
      </div>
      <p className="font-body text-sm text-footer-foreground/70 italic">
        Delivering Joy, One Bag at a Time.
      </p>
      <p className="font-body text-xs text-footer-foreground/50">
        © {new Date().getFullYear()} Bags of Hope. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
