import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import WhyWeDoIt from "@/components/WhyWeDoIt";
import WriteALetter from "@/components/WriteALetter";
import ImpactStats from "@/components/ImpactStats";
import Donate from "@/components/Donate";
import FollowUs from "@/components/FollowUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <WhatWeDo />
    <HowItWorks />
    <WhyWeDoIt />
    <WriteALetter />
    <ImpactStats />
    <Donate />
    <FollowUs />
    <Contact />
    <Footer />
  </div>
);

export default Index;
