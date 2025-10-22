import { Card } from "@/components/ui/card";
import { TrendingUp, Fuel, CloudOff } from "lucide-react";

const Problem = () => {
  const challenges = [
    {
      icon: Fuel,
      title: "High Diesel Consumption",
      description: "~200 g/kWh with CO₂ emissions of 2–3 tons per 100 km",
    },
    {
      icon: TrendingUp,
      title: "Limited Power Output",
      description: "Base power of 1000 hp (746 kW) constrained by fuel efficiency and heat management",
    },
    {
      icon: CloudOff,
      title: "Environmental Impact",
      description: "70% of shipping emissions are CO₂, contributing to climate change",
    },
  ];

  return (
    <section id="problem" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Challenges of River Freight Transport</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Current diesel-powered barges face significant operational and environmental challenges
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <challenge.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
              <p className="text-muted-foreground">{challenge.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
