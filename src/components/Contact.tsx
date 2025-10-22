import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Ship } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto p-12 text-center bg-primary/5 border-primary">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
              <Ship className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Ready for a Green Fleet?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us in revolutionizing river transport with sustainable power solutions
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">+10%</p>
              <p className="text-sm text-muted-foreground">Power increase</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">-20%</p>
              <p className="text-sm text-muted-foreground">Fuel costs</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">-80%</p>
              <p className="text-sm text-muted-foreground">Carbon emissions</p>
            </div>
          </div>

          <Button size="lg" className="text-lg px-8" asChild>
            <a href="mailto:legalgreenplanet@gmail.com" className="inline-flex items-center gap-2">
              <Mail className="w-5 h-5" />
              legalgreenplanet@gmail.com
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            Contact us for pilot program details and investment opportunities
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
