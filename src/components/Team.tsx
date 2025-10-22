import { Card } from "@/components/ui/card";
import teamMember1 from "@/assets/team-member-1.jpeg";
import teamMember2 from "@/assets/team-member-2.png";
import { Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Project Lead",
      role: "Marine Engineering & Renewable Energy",
      image: teamMember1,
    },
    {
      name: "Technical Advisor",
      role: "H₂ Systems & Integration",
      image: teamMember2,
    },
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-xl text-muted-foreground">
            Experts in marine engineering and sustainable energy solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
