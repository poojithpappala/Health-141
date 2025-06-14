
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SpecialistCard from '@/components/SpecialistCard';

interface Specialist {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  rating: number;
  verified: boolean;
}

interface SpecialistsSectionProps {
  specialists: Specialist[];
}

const SpecialistsSection = ({ specialists }: SpecialistsSectionProps) => {
  return (
    <section className="content-section bg-background animate-section-entry">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Meet Our Expert Specialists
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Entrust your care to board-certified physicians celebrated for their deep expertise and compassionate patient approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mb-16">
          {specialists.map((specialist, index) => (
            <SpecialistCard key={specialist.id} specialist={specialist} className="animate-fade-in" style={{animationDelay: `${0.6 + index * 0.1}s`}} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
          >
            <Link to="/doctors">
              View All Specialists
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
