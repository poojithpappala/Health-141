
import { Video, Clock, ShieldCheck, Award } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

const FeaturesSection = ({ features }: FeaturesSectionProps) => {
  return (
    <section className="content-section bg-background animate-section-entry">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            The WellnessPortal Advantage
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Pioneering modern healthcare through innovation, expertise, and an unwavering commitment to your personal health journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-premium text-center group p-6 animate-fade-in" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
              <div className="w-16 h-16 mx-auto mb-6 brand-gradient-bg rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 soft-shadow">
                <feature.icon className="w-8 h-8 text-primary-foreground icon-shadow" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
