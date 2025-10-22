import { Card } from "@/components/ui/card";
import { Calendar, Gauge, Ship, AlertTriangle } from "lucide-react";

const Implementation = () => {
  const timeline = [
    { year: "2025", phase: "Design & Engineering", description: "System design, component selection, safety certifications" },
    { year: "2026 Q1-Q2", phase: "Pilot Installation", description: "Install on first barge, integration testing" },
    { year: "2026 Q3-Q4", phase: "Testing & Validation", description: "Power testing, consumption monitoring, H₂ output analysis" },
    { year: "2027+", phase: "Fleet Scaling", description: "Roll out to 10+ barges" },
  ];

  const risks = [
    {
      risk: "Low solar output",
      solution: "300 kWh battery buffer + hybrid diesel backup",
      probability: "Medium",
    },
    {
      risk: "H₂ storage safety",
      solution: "Low-pressure cylinders + advanced sensors",
      probability: "Low",
    },
    {
      risk: "Initial capital cost",
      solution: "EU Green Deal grants + 1.5 year payback",
      probability: "Low",
    },
  ];

  return (
    <section id="implementation" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Implementation & Testing</h2>
          <p className="text-xl text-muted-foreground">
            Structured rollout plan with pilot testing and risk mitigation
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Project Timeline</h3>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold">{item.phase}</h4>
                      <span className="text-sm font-medium text-primary">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Test Plan */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Pilot Test Plan</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Gauge className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Power Testing</h4>
                <p className="text-sm text-muted-foreground">Dynamometer analysis of power output improvements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Ship className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Consumption Logs</h4>
                <p className="text-sm text-muted-foreground">GPS tracking and fuel consumption monitoring</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">H₂ Output</h4>
                <p className="text-sm text-muted-foreground">Hydrogen production efficiency analysis</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Risks */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Risk Management</h3>
          <div className="space-y-4">
            {risks.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="grid md:grid-cols-3 gap-4 items-center">
                  <div>
                    <span className="text-sm text-muted-foreground">Risk</span>
                    <p className="font-semibold">{item.risk}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Solution</span>
                    <p className="font-medium">{item.solution}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      item.probability === "Low" ? "bg-primary/10 text-primary" : "bg-yellow-500/10 text-yellow-600"
                    }`}>
                      {item.probability} Risk
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
