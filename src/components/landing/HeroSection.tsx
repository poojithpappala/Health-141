
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, CalendarDays, MessageCircleQuestion, Users, Stethoscope, Star, PhoneCall } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Stat {
  icon: React.ElementType;
  number: string;
  label: string;
}

interface HeroSectionProps {
  stats: Stat[];
}

const HeroSection = ({ stats }: HeroSectionProps) => {
  return (
    <section className="hero-section relative overflow-hidden bg-gradient-to-br from-background to-primary/5">
      <div className="absolute inset-0 opacity-50 " style={{ backgroundImage: 'url(/subtle-pattern.svg)' }}></div> {/* Optional: Subtle pattern */}
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge 
            variant="outline"
            className="border-[hsl(var(--premium-accent))] text-[hsl(var(--premium-accent))] bg-[hsl(var(--premium-accent-light))] mb-8 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[hsl(var(--premium-accent))]/20 transition-colors"
          >
            <Sparkles className="w-4 h-4 mr-2 text-[hsl(var(--premium-accent))]" />
            Elevating Your Health Journey
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Premium Healthcare, 
            <span className="block text-gradient-primary mt-1">
              Personalized For You
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience world-class specialists and a cutting-edge platform, all dedicated to your comprehensive wellbeing and optimal health outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              asChild 
              size="lg" 
              className="px-8 py-3"
            >
              <Link to="/patient-intake">
                <CalendarDays className="mr-2.5 w-5 h-5" /> 
                Book Appointment
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
            >
              <Link to="/services">
                <MessageCircleQuestion className="mr-2.5 w-5 h-5" /> 
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={cn(`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center brand-gradient-bg soft-shadow group transition-all duration-300 hover:scale-105`)}>
                  <stat.icon className="w-7 h-7 text-primary-foreground icon-shadow" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-foreground/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
