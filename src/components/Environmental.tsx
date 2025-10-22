import { Card } from "@/components/ui/card";
import { Leaf, Wind, Shield } from "lucide-react";

const Environmental = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Green Effect</h2>
          <p className="text-xl text-muted-foreground">
            Significant environmental impact reduction
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-2 text-primary">-2000 tons</h3>
            <p className="text-muted-foreground">CO₂ reduction per year</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Wind className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-2 text-primary">-15-20%</h3>
            <p className="text-muted-foreground">NOx/SOx emissions from H₂</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-2 text-primary">IMO Tier III</h3>
            <p className="text-muted-foreground">Certification compliant</p>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Emissions Comparison</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Before (100% Diesel)</span>
                  <span className="text-muted-foreground">2500 tons CO₂/year</span>
                </div>
                <div className="h-8 bg-destructive/20 rounded-full overflow-hidden">
                  <div className="h-full bg-destructive w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">After (Solar-H₂ Mod)</span>
                  <span className="text-primary font-semibold">500 tons CO₂/year</span>
                </div>
                <div className="h-8 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/5"></div>
                </div>
              </div>
            </div>
            <p className="text-center mt-6 text-lg font-semibold text-primary">
              80% reduction in greenhouse gas emissions
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Environmental;
