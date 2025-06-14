
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CalendarDays, PhoneCall } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="content-section brand-gradient-bg relative overflow-hidden animate-section-entry py-20 lg:py-24">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/subtle-pattern.svg)' }}></div>
      <div className="section-container relative z-10 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
          Ready to Transform Your Health?
        </h2>
        <p className="text-lg text-primary-foreground mb-10 max-w-3xl mx-auto leading-relaxed"> {/* Changed text-primary-foreground/80 to text-primary-foreground */}
          Join thousands who have experienced world-class healthcare. Your journey to better health starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-primary hover:bg-slate-100 font-semibold px-8 py-3"
          >
            <Link to="/patient-intake">
              <CalendarDays className="mr-2.5 w-5 h-5" /> 
              Schedule Consultation
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-3"
          >
            <Link to="/contact">
              <PhoneCall className="mr-2.5 w-5 h-5" /> 
              Contact Our Team
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
