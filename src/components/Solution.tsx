import { Card } from "@/components/ui/card";
import { Sun, Battery, Droplets, Wind } from "lucide-react";

const Solution = () => {
  const features = [
    {
      icon: Sun,
      title: "Solar Generation",
      description: "Up to 200 kW from 500 flexible panels (1000 m²) for continuous clean energy",
    },
    {
      icon: Droplets,
      title: "H₂ Production",
      description: "50 kW electrolysis → 0.98 kg H₂/h (7800 kg/year) replacing 15% of diesel",
    },
    {
      icon: Battery,
      title: "Energy Buffer",
      description: "LiFePO4 300 kWh battery for 6–12 hours storage, 5000+ cycles",
    },
    {
      icon: Wind,
      title: "Dual-Fuel + Cooling",
      description: "H₂ injection (+5–7% power) + ultrasonic intercooler (+3–5% power)",
    },
  ];

  return (
    <section id="solution" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Solar-H₂ Mod: Hybrid Boost</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive system that combines solar power, hydrogen generation, and advanced cooling
            to boost barge performance while reducing emissions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Process Flow */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card">
            <h3 className="text-2xl font-semibold mb-6 text-center">Solution Process</h3>
            <div className="grid md:grid-cols-5 gap-4 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Sun className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold">Solar Panels</p>
                <p className="text-sm text-muted-foreground">200 kW peak</p>
              </div>
              <div className="text-center text-2xl text-primary hidden md:block">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Battery className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold">Battery</p>
                <p className="text-sm text-muted-foreground">300 kWh buffer</p>
              </div>
              <div className="text-center text-2xl text-primary hidden md:block">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Droplets className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold">H₂ Engine</p>
                <p className="text-sm text-muted-foreground">1100 hp total</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Solution;
