
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HeartPulse, Brain, Bone, Eye, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  specialists: string;
  color: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <section className="content-section animate-section-entry bg-primary/5">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Premier Medical Services
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Access a comprehensive suite of specialized services led by distinguished physicians in their respective fields.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-premium p-6 group hover:scale-105 transition-all duration-300 animate-fade-in flex flex-col text-center" 
              style={{animationDelay: `${0.4 + index * 0.1}s`}}
            >
              <div className={cn(`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 soft-shadow mx-auto`, service.color)}>
                <service.icon className="w-8 h-8 text-white icon-shadow" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm mb-4 flex-grow">{service.description}</p>
              
              <div className="mt-auto">
                <Badge variant="secondary" className="bg-primary/10 text-primary text-xs px-3 py-1.5">
                  {service.specialists}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" /> 
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
