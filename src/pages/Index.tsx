import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import Economics from "@/components/Economics";
import Environmental from "@/components/Environmental";
import Implementation from "@/components/Implementation";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <TechnicalSpecs />
      <Economics />
      <Environmental />
      <Implementation />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
