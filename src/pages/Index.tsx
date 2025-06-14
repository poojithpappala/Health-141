
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Stethoscope, 
  Brain, 
  Bone, 
  Eye,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Award,
  Sparkles,
  Video,
  MessageSquare
} from 'lucide-react';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import SpecialistCard from '@/components/SpecialistCard';

const Index = () => {
  const features = [
    {
      icon: Video,
      title: 'Telemedicine',
      description: 'Virtual consultations with board-certified physicians from anywhere.'
    },
    {
      icon: Clock,
      title: 'Same-Day Appointments',
      description: 'Urgent care availability with minimal wait times.'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Your medical data is secure and protected with advanced encryption.'
    },
    {
      icon: Award,
      title: 'Top-Rated Care',
      description: 'Exceptional patient satisfaction backed by outstanding reviews.'
    }
  ];

  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart and cardiovascular care',
      specialists: '15+ Specialists',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological care and treatment',
      specialists: '12+ Specialists',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Advanced bone and joint treatments',
      specialists: '18+ Specialists',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care and vision services',
      specialists: '8+ Specialists',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Patients Served', icon: Users },
    { number: '500+', label: 'Medical Specialists', icon: Stethoscope },
    { number: '98%', label: 'Satisfaction Rate', icon: Star },
    { number: '24/7', label: 'Dedicated Support', icon: Phone }
  ];

  const specialists = [
    {
      name: 'Dr. Sarah Chen',
      specialty: 'Cardiology',
      experience: '15+ years',
      bio: 'Leading cardiovascular specialist with expertise in interventional cardiology and heart failure management. Board-certified with extensive experience in complex cardiac procedures.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      rating: 4.9,
      patients: '2,500+',
      verified: true
    },
    {
      name: 'Dr. Michael Rodriguez',
      specialty: 'Neurology',
      experience: '12+ years',
      bio: 'Renowned neurologist specializing in stroke care, epilepsy treatment, and neurodegenerative diseases. Published researcher with 50+ peer-reviewed publications.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      rating: 4.8,
      patients: '1,800+',
      verified: true
    },
    {
      name: 'Dr. Emily Watson',
      specialty: 'Pediatrics',
      experience: '10+ years',
      bio: 'Compassionate pediatrician dedicated to comprehensive child healthcare. Specializes in developmental pediatrics and adolescent medicine with a focus on preventive care.',
      image: 'https://images.unsplash.com/photo-1594824475574-87b2b1b75516?w=400&h=400&fit=crop&crop=face',
      rating: 4.9,
      patients: '3,200+',
      verified: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section hero-pattern relative overflow-hidden animate-section-fade">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-white/30 to-[hsl(var(--premium-accent-light))]/30" />
        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-wellness-gold/10 text-wellness-gold border-wellness-gold/30 mb-10 px-8 py-3 rounded-full text-lg font-semibold hover:bg-wellness-gold/20 transition-colors"> {/* Increased mb */}
              <Sparkles className="w-5 h-5 mr-2 text-wellness-gold" />
              Your Health, Elevated
            </Badge>
            
            <h1 className="heading-primary mb-10 leading-tight"> {/* Increased mb */}
              Exceptional Healthcare 
              <span className="block bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--premium-accent))] bg-clip-text text-transparent">
                Redefined For You
              </span>
            </h1>
            
            <p className="text-xl text-wellness-charcoal mb-14 max-w-4xl mx-auto leading-relaxed"> {/* Changed text-slate-700 to text-wellness-charcoal, increased mb */}
              Experience the pinnacle of personalized healthcare. Our world-class specialists and cutting-edge platform 
              are dedicated to your wellbeing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"> {/* Increased mb */}
              <Button 
                asChild 
                size="lg" 
                className="brand-gradient text-primary-foreground font-semibold btn-hover premium-shadow text-lg px-10 py-3.5" /* Adjusted py */
              >
                <Link to="/patient-intake">
                  <Calendar className="mr-3 w-5 h-5" /> 
                  Book Your Appointment
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="font-semibold btn-hover premium-shadow text-lg border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10 px-10 py-3.5" /* Adjusted py */
              >
                <Link to="/services">
                  <MessageSquare className="mr-3 w-5 h-5" /> 
                  Explore Services
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"> {/* Increased gap-y */}
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                  <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center brand-gradient shadow-lg group transition-all duration-300 hover:scale-110`}> {/* Increased mb */}
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-wellness-charcoal mb-2">{stat.number}</div>
                  <div className="text-slate-700 font-medium">{stat.label}</div> {/* Kept slate-700 for secondary label text for differentiation */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="content-section bg-gradient-to-b from-white to-[hsl(var(--premium-accent-light))]/40 animate-section-fade">
        <div className="section-container">
          <div className="text-center mb-24"> {/* Increased mb */}
            <h2 className="heading-secondary mb-8"> {/* Increased mb */}
              The WellnessPortal Difference
            </h2>
            <p className="text-xl text-wellness-charcoal max-w-3xl mx-auto leading-relaxed"> {/* Changed text-slate-700 to text-wellness-charcoal */}
              Pioneering healthcare through innovation, expertise, and unwavering dedication to your health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"> {/* Increased gap */}
            {features.map((feature, index) => (
              <div key={index} className="card-premium p-8 text-center group animate-fade-in" style={{animationDelay: `${0.2 + index * 0.15}s`}}>
                <div className="w-20 h-20 mx-auto mb-8 brand-gradient rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"> {/* Increased mb */}
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-wellness-charcoal mb-5 group-hover:text-[hsl(var(--primary))] transition-colors">{feature.title}</h3> {/* Increased mb */}
                <p className="text-slate-700 leading-relaxed">{feature.description}</p> {/* Kept slate-700 for card description text for differentiation */}
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="premium-divider" />
      {/* Services Section */}
      <section className="content-section animate-section-fade">
        <div className="section-container">
          <div className="text-center mb-24"> {/* Increased mb */}
            <h2 className="heading-secondary mb-8"> {/* Increased mb */}
              Our Premier Medical Specialties
            </h2>
            <p className="text-xl text-wellness-charcoal max-w-3xl mx-auto leading-relaxed"> {/* Changed text-slate-700 to text-wellness-charcoal */}
              Access a comprehensive suite of services led by distinguished specialists in their fields.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20"> {/* Increased gap and mb */}
            {services.map((service, index) => (
              <div key={index} className="card-premium p-8 group hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: `${0.4 + index * 0.15}s`}}>
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-md`}> {/* Increased mb */}
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-wellness-charcoal mb-4 group-hover:text-[hsl(var(--primary))] transition-colors">{service.title}</h3> {/* Increased mb */}
                <p className="text-slate-700 leading-relaxed mb-6">{service.description}</p> {/* Kept slate-700, Increased mb */}
                
                <div className="flex items-center justify-between">
                  <span className="text-[hsl(var(--primary))] font-semibold">{service.specialists}</span>
                  <ArrowRight className="w-5 h-5 text-[hsl(var(--primary))] group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg" 
              className="brand-gradient text-primary-foreground font-semibold btn-hover premium-shadow text-lg px-10 py-3.5" /* Adjusted py */
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" /> 
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <hr className="premium-divider" />
      {/* Specialists Section */}
      <section className="content-section bg-gradient-to-b from-[hsl(var(--premium-accent-light))]/40 to-white animate-section-fade">
        <div className="section-container">
          <div className="text-center mb-24"> {/* Increased mb */}
            <h2 className="heading-secondary mb-8"> {/* Increased mb */}
              Meet Our Expert Specialists
            </h2>
            <p className="text-xl text-wellness-charcoal max-w-3xl mx-auto leading-relaxed"> {/* Changed text-slate-700 to text-wellness-charcoal */}
              Entrust your care to board-certified physicians celebrated for their expertise and compassionate approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20"> {/* Increased gap and mb */}
            {specialists.map((specialist, index) => (
              <SpecialistCard key={index} specialist={specialist} className="animate-fade-in" style={{animationDelay: `${0.6 + index * 0.15}s`}} />
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg" 
              className="font-semibold btn-hover premium-shadow text-lg border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10 px-10 py-3.5" /* Adjusted py */
              variant="outline"
            >
              <Link to="/doctors">
                View All Specialists
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <hr className="premium-divider" />
      {/* Testimonials Section */}
      <section className="content-section animate-section-fade">
        <div className="section-container">
          <div className="text-center mb-24"> {/* Increased mb */}
            <h2 className="heading-secondary mb-8"> {/* Increased mb */}
              Patient Success Stories
            </h2>
            <p className="text-xl text-wellness-charcoal max-w-3xl mx-auto leading-relaxed"> {/* Changed text-slate-700 to text-wellness-charcoal */}
              Discover how we've empowered thousands to achieve optimal health and vitality.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section brand-gradient relative overflow-hidden animate-section-fade py-24 lg:py-32"> {/* Increased py */}
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="section-container relative z-10 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight"> {/* Increased mb */}
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-teal-50 mb-14 max-w-3xl mx-auto leading-relaxed"> {/* Increased mb */}
            Join thousands of patients who have experienced world-class healthcare. 
            Your journey to better health starts with a single click.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-[hsl(var(--primary))] hover:bg-slate-100 font-bold text-lg btn-hover premium-shadow px-10 py-3.5" /* Adjusted py */
            >
              <Link to="/patient-intake">
                <Calendar className="mr-3 w-5 h-5" /> 
                Schedule Your Consultation
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm font-bold text-lg btn-hover px-10 py-3.5" /* Adjusted py */
            >
              <Link to="/contact">
                <Phone className="mr-3 w-5 h-5" /> 
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

