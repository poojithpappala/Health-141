
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// Card, CardContent, CardHeader, CardTitle are not directly used here now for simple feature/service cards
// They are used by SpecialistCard and potentially TestimonialCarousel internally
import { Link } from 'react-router-dom';
import { 
  HeartPulse, // Replaced Heart for consistency with logo
  ShieldCheck, // More direct for HIPAA
  Clock, 
  Users, 
  Stethoscope, 
  Brain, 
  Bone, 
  Eye,
  Star,
  // CheckCircle, // Not used directly
  ArrowRight,
  PhoneCall, // More direct for contact
  CalendarDays, // More direct for calendar
  Award,
  Sparkles,
  Video, // Keep Video for Telemedicine
  MessageCircleQuestion // More direct for Explore Services
} from 'lucide-react';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import SpecialistCard from '@/components/SpecialistCard';
import { cn } from '@/lib/utils'; // For conditional classes

const Index = () => {
  const features = [
    {
      icon: Video,
      title: 'Telemedicine',
      description: 'Connect with board-certified physicians virtually, from anywhere.'
    },
    {
      icon: Clock,
      title: 'Prompt Appointments', // Changed from Same-Day
      description: 'Access urgent care with minimal wait times and flexible scheduling.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Private', // Changed from HIPAA Compliant
      description: 'Your medical data is protected with advanced encryption & security.'
    },
    {
      icon: Award,
      title: 'Top-Rated Professionals', // Changed from Top-Rated Care
      description: 'Exceptional patient care delivered by highly-rated specialists.'
    }
  ];

  const services = [
    {
      icon: HeartPulse,
      title: 'Cardiology',
      description: 'Advanced heart & vascular care.',
      specialists: '15+ Experts', // Changed from Specialists
      color: 'bg-gradient-to-br from-red-500 to-pink-600' // Kept for visual differentiation
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological treatments.',
      specialists: '12+ Experts',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Comprehensive joint & bone care.',
      specialists: '18+ Experts',
      color: 'bg-gradient-to-br from-blue-500 to-sky-600'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Total eye care & vision services.',
      specialists: '8+ Experts',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
    }
  ];

  const stats = [
    { number: '50k+', label: 'Patients Treated', icon: Users }, // Shortened
    { number: '500+', label: 'Medical Experts', icon: Stethoscope }, // Shortened
    { number: '4.9/5', label: 'Average Rating', icon: Star }, // More specific
    { number: '24/7', label: 'Support Online', icon: PhoneCall } // Shortened
  ];

  const specialists = [
    {
      name: 'Sarah Chen', // Removed Dr. prefix, implied by context
      specialty: 'Cardiology',
      experience: '15+ years',
      bio: 'Leading cardiovascular specialist focusing on interventional cardiology and heart failure. Board-certified, extensive experience.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      rating: 4.9,
      verified: true
    },
    {
      name: 'Michael Rodriguez',
      specialty: 'Neurology',
      experience: '12+ years',
      bio: 'Renowned neurologist specializing in stroke care, epilepsy, and neurodegenerative diseases. Widely published researcher.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      rating: 4.8,
      verified: true
    },
    {
      name: 'Emily Watson',
      specialty: 'Pediatrics',
      experience: '10+ years',
      bio: 'Compassionate pediatrician dedicated to child healthcare, specializing in developmental pediatrics and adolescent medicine.',
      image: 'https://images.unsplash.com/photo-1594824475574-87b2b1b75516?w=400&h=400&fit=crop&crop=face',
      rating: 4.9,
      verified: true
    }
  ];

  return (
    <div className="min-h-screen animate-page-entry">
      {/* Hero Section */}
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
                className="px-8 py-3" // Standard Shadcn button with new premium styles
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

      {/* Features Section */}
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
      
      <hr className="premium-divider" />

      {/* Services Section */}
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
      
      <hr className="premium-divider" />

      {/* Specialists Section */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mb-16"> {/* Adjusted gap */}
            {specialists.map((specialist, index) => (
              <SpecialistCard key={index} specialist={specialist} className="animate-fade-in" style={{animationDelay: `${0.6 + index * 0.1}s`}} />
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
      
      <hr className="premium-divider" />

      {/* Testimonials Section */}
      <section className="content-section animate-section-entry bg-primary/5">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Patient Success Stories
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Discover how we've empowered individuals to achieve optimal health and improved quality of life.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section brand-gradient-bg relative overflow-hidden animate-section-entry py-20 lg:py-24">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/subtle-pattern.svg)' }}></div>
        <div className="section-container relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Ready to Transform Your Health?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
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
    </div>
  );
};

export default Index;

