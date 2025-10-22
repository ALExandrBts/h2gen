import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import bargeImage from "@/assets/barge-solar.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="overview" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Solar-H₂ Boost
            </h1>
            <p className="text-2xl text-muted-foreground">
              Eco-friendly upgrade for river barges
            </p>
            
            <div className="space-y-4 py-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">
                  10% increase in power + $180k/year savings without replacing the engine
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">
                  Solar panels → H₂ generation → dual-fuel boost + cooling
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">
                  Payback period: 1–1.5 years with 2000 tons CO₂ reduction annually
                </p>
              </div>
            </div>

            <Button
              size="lg"
              onClick={() => scrollToSection("#solution")}
              className="text-lg px-8"
            >
              Learn More
            </Button>
          </div>

          <div className="relative">
            <img
              src={bargeImage}
              alt="River barge with solar panels"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
