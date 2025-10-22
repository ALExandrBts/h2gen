import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TechnicalSpecs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-xl text-muted-foreground">
            Detailed breakdown of the system components
          </p>
        </div>

        <Tabs defaultValue="panels" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="panels">Solar Panels</TabsTrigger>
            <TabsTrigger value="hydrogen">H₂ Production</TabsTrigger>
            <TabsTrigger value="battery">Battery</TabsTrigger>
            <TabsTrigger value="engine">Engine Boost</TabsTrigger>
          </TabsList>

          <TabsContent value="panels">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Panel Placement</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Typical Barge Size:</span>
                  <span className="text-muted-foreground">100m × 10-15m (1000-1500 m²)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Panel Configuration:</span>
                  <span className="text-muted-foreground">500 panels × 400W (1000 m²)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Peak Power:</span>
                  <span className="text-muted-foreground">200 kW</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Average Daily Output:</span>
                  <span className="text-muted-foreground">~50 kWh (25% of peak)</span>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="hydrogen">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">From Sun to Hydrogen</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Electrolysis Rate:</span>
                  <span className="text-muted-foreground">50 kW → 0.98 kg H₂/h</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Efficiency:</span>
                  <span className="text-muted-foreground">65%</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Annual Production:</span>
                  <span className="text-muted-foreground">~7,800 kg H₂</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Diesel Replacement:</span>
                  <span className="text-muted-foreground">15% by energy</span>
                </div>
                <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm font-mono">H₂O + electricity → H₂ + ½O₂ (33.3 kWh/kg)</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="battery">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">LiFePO4 300 kWh</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Storage Capacity:</span>
                  <span className="text-muted-foreground">300 kWh</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Buffer Duration:</span>
                  <span className="text-muted-foreground">6-12 hours</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Cycle Life:</span>
                  <span className="text-muted-foreground">5000+ cycles</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Operating Range:</span>
                  <span className="text-muted-foreground">-20°C to +60°C</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Integration:</span>
                  <span className="text-muted-foreground">Panels → Battery → Electrolysis/Cooling</span>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="engine">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Engine Boost</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">H₂ Injection:</span>
                  <span className="text-muted-foreground">15% H₂ → +5-7% power</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Ultrasonic Cooling:</span>
                  <span className="text-muted-foreground">-10-20°C air → +3-5% power</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Base Power:</span>
                  <span className="text-muted-foreground">1000 hp (746 kW)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Total Power:</span>
                  <span className="text-muted-foreground font-bold text-primary">1100 hp (820 kW)</span>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
