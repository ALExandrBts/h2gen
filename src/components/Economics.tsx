import { Card } from "@/components/ui/card";
import { DollarSign, TrendingDown, Calendar } from "lucide-react";

const Economics = () => {
  return (
    <section id="economics" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Savings and Payback</h2>
          <p className="text-xl text-muted-foreground">
            Significant cost reduction with rapid return on investment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-destructive" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-2">$900k</h3>
            <p className="text-muted-foreground">Base annual diesel cost<br/>(1M liters/year)</p>
          </Card>

          <Card className="p-6 text-center bg-primary/5 border-primary">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <TrendingDown className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-2 text-primary">$183k</h3>
            <p className="text-muted-foreground">Annual savings<br/>(20% consumption reduction)</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-2">1-1.5 years</h3>
            <p className="text-muted-foreground">Payback period</p>
          </Card>
        </div>

        <Card className="p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Investment Breakdown</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-lg">Solar Panels (500 × 400W)</span>
              <span className="text-lg font-semibold text-right">$60-80k</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-lg">H₂ Electrolysis System</span>
              <span className="text-lg font-semibold text-right">$40-60k</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-lg">LiFePO4 Battery (300 kWh)</span>
              <span className="text-lg font-semibold text-right">$30-40k</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-lg">Ultrasonic Cooling System</span>
              <span className="text-lg font-semibold text-right">$10-15k</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-lg">Installation & Integration</span>
              <span className="text-lg font-semibold text-right">$10-15k</span>
            </div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-xl font-bold">Total Investment</span>
              <span className="text-2xl font-bold text-primary text-right">$150-200k</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Economics;
